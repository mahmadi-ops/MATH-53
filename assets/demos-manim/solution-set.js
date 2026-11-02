(function () {
  "use strict";
  const G=window.BookGeometry,C=G.colors,$=id=>document.getElementById(id);
  const camera={yaw:55,pitch:25},bounds=[[-15,9],[-5,3],[-5,5]];
  const size=[560,420],center=G.solutionPoint(0),direction=[9,1,1];
  const planes=[
    {n:[1,-2,-7],c:-1,color:C.olive},
    {n:[1,-9,0],c:6,color:C.mustard},
    {n:[0,0,1],c:0,color:C.gray,mode:"unique"},
    {n:[0,1,-1],c:-1,color:C.gray,mode:"infinite"},
    {n:[0,1,-1],c:0,color:C.gray,mode:"empty"}
  ].map(p=>({...p,points:G.planePatch(p.n,p.c,center,direction,11,4.2)}));
  const fitPoints=planes.flatMap(p=>p.points);
  bounds.forEach((b,k)=>b.forEach(value=>{const p=[0,0,0];p[k]=value;fitPoints.push(p);}));
  let s=0,mode="none",guideStep=-1;
  const scene=new G.Scene($("solution-scene"),G.fittedProjector(camera,fitPoints,size));
  const captions=[
    "1. Two equations: moving s traces their common line. Both equation checks stay true.",
    "2. Add x₃ = 0: only s = 0 survives. The wine point is the only common solution.",
    "3. Add x₂ − x₃ = −1: every s survives, so the entire line remains wine.",
    "4. Add x₂ − x₃ = 0: no s survives. The dashed line solves only the first two equations."
  ];
  function draw() {
    scene.clear();
    scene.project=G.fittedProjector(camera,fitPoints,size);
    const polygons=planes.filter(p=>!p.mode||p.mode===mode);
    polygons.sort((a,b)=>{
      const depth=p=>p.points.reduce((sum,v)=>sum+scene.project(v)[2],0)/p.points.length;
      return depth(a)-depth(b);
    }).forEach(p=>scene.polygon(p.points,p.color,.17));
    scene.axes(bounds,["x₁","x₂","x₃"]);
    [-10,-5,5].forEach(x=>scene.text([x,0,0],G.fmt(x),C.gray,[-7,20],{"font-size":14}));
    const whole=mode==="none"||mode==="infinite";
    const a=G.solutionPoint(-1.2),b=G.solutionPoint(1.2);
    scene.line(a,b,whole?C.wine:C.gray,whole?5:2.5,whole?{}:{"stroke-dasharray":"7 6"});
    if(whole) {
      scene.arrow(G.solutionPoint(.82),b,C.wine,4);
      scene.text(G.solutionPoint(.9),"p(s)",C.wine,[9,-12]);
    }
    if(mode==="unique") {
      scene.point(G.solutionPoint(0),C.wine,7,{"data-common-solution":"point"});
      scene.text(G.solutionPoint(0),"Only (−3, −1, 0)",C.wine,[-48,28]);
    }
    const point=G.solutionPoint(s),active=whole||(mode==="unique"&&Math.abs(s)<1e-9);
    scene.point(point,active?C.wine:"white",6,{stroke:active?"white":C.gray,"data-candidate":""});
    scene.text(point,"p = "+G.tuple(point),active?C.wine:C.gray,[-45,-17]);
    $("parameter").value=s;$("parameter-value").value=G.fmt(s);
    $("parameter").setAttribute("aria-valuetext",`s = ${G.fmt(s)}; point ${G.tuple(point)}`);
    $("point-coordinates").value=G.tuple(point);
    const values=G.systemValues(point);
    $("check-first").textContent=`P₁ check: ${G.fmt(point[0])} − 2(${G.fmt(point[1])}) − 7(${G.fmt(point[2])}) = ${G.fmt(values[0])} ✓`;
    $("check-second").textContent=`P₂ check: ${G.fmt(point[0])} − 9(${G.fmt(point[1])}) = ${G.fmt(values[1])} ✓`;
    $("third-plane").value=mode;$("check-third").hidden=mode==="none";
    if(mode!=="none") {
      const value=G.thirdValue(mode,point),target=G.thirdTarget(mode);
      const left=mode==="unique"?"x₃":"x₂ − x₃";
      $("check-third").textContent=`P₃ check: ${left} = ${G.fmt(value)} ${active?"=":"≠"} ${target} — candidate ${active?"satisfies":"does not satisfy"} the third equation.`;
      $("check-third").className=active?"olive":"gray";
    }
    $("common-set").textContent=whole?"Common solution set: the entire wine line, for all real s."
      :mode==="unique"?"Common solution set: {(−3, −1, 0)}. The moving candidate is a solution of all three equations only at s = 0."
      :"Common solution set: ∅ (no solution). The gray dashed line is only a reference for the first two equations.";
    // Keep labels inside the same frame even at extreme rotations or s values.
    scene.layer.querySelectorAll("text").forEach(label=>{
      const box=label.getBBox();
      const dx=Math.max(12-box.x,Math.min(0,size[0]-12-box.x-box.width));
      const dy=Math.max(12-box.y,Math.min(0,size[1]-12-box.y-box.height));
      if(dx)label.setAttribute("x",+label.getAttribute("x")+dx);
      if(dy)label.setAttribute("y",+label.getAttribute("y")+dy);
    });
  }
  const player=G.player($("play"),14000,p=>{
    const step=Math.min(3,Math.floor(p*4)),u=Math.min(1,p*4-step);
    mode=["none","unique","infinite","empty"][step];
    // In the unique case the guide stops at the sole surviving point.
    s=step===1?0:Math.round((-1+2*u)*100)/100;
    if(step!==guideStep){guideStep=step;$("guide-caption").textContent=captions[step];}
    draw();
  },[0,.25,.5,.75,1]);
  $("parameter").addEventListener("input",()=>{player.stop();s=+$("parameter").value;draw();});
  $("parameter").addEventListener("change",()=>{$("guide-caption").textContent=`At s = ${G.fmt(s)}, p = ${G.tuple(G.solutionPoint(s))}. `+$("common-set").textContent;});
  $("third-plane").addEventListener("change",()=>{
    player.stop();mode=$("third-plane").value;guideStep=-1;draw();
    $("guide-caption").textContent=captions[["none","unique","infinite","empty"].indexOf(mode)];
  });
  const updateCamera=G.cameraControls($("solution-scene"),camera,draw);
  $("reset").addEventListener("click",()=>{
    player.reset();mode="none";s=0;guideStep=-1;camera.yaw=55;camera.pitch=25;updateCamera();
    $("guide-caption").textContent="Move s to explore the line, then add a third equation.";
  });
  document.querySelector(".live-explorer").hidden=false;draw();
  document.fonts.ready.then(draw);document.documentElement.classList.add("js-ready");
}());
