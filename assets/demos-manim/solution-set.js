(function () {
  "use strict";
  const G=window.BookGeometry,C=G.colors,$=id=>document.getElementById(id);
  const camera={yaw:-35,pitch:30},bounds=[[-13,8],[-4,3],[-3,3]];
  let s=0,mode="none",guideStep=-1;
  const scene=new G.Scene($("solution-scene"),G.projector(camera,[-2.5,-.5,0],20,[280,207]));
  const captions=[
    "1. Two equations: moving s traces their common line. Both equation checks stay true.",
    "2. Add x₃ = 0: only s = 0 survives. The wine point is the only common solution.",
    "3. Add x₂ − x₃ = −1: every s survives, so the entire line remains wine.",
    "4. Add x₂ − x₃ = 0: no s survives. The dashed line solves only the original two equations."
  ];
  function draw() {
    scene.clear();
    const planes=[{n:[1,-2,-7],c:-1,color:C.olive},{n:[-1,3,6],c:0,color:C.mustard}];
    if(mode!=="none") planes.push({n:mode==="unique"?[0,0,1]:[0,1,-1],c:G.thirdTarget(mode),color:C.gray});
    const polygons=planes.map(p=>({...p,points:G.planeBox(p.n,p.c,bounds)}));
    polygons.sort((a,b)=>{
      const depth=p=>p.points.reduce((sum,v)=>sum+scene.project(v)[2],0)/p.points.length;
      return depth(a)-depth(b);
    }).forEach(p=>scene.polygon(p.points,p.color,.17));
    scene.axes(bounds,["x₁","x₂","x₃"]);
    [-10,-5,5].forEach(x=>scene.text([x,0,0],G.fmt(x),C.gray,[-7,20],{"font-size":14}));
    const whole=mode==="none"||mode==="infinite";
    const a=G.solutionPoint(-10/9),b=G.solutionPoint(11/9);
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
    $("check-second").textContent=`P₂ check: −(${G.fmt(point[0])}) + 3(${G.fmt(point[1])}) + 6(${G.fmt(point[2])}) = ${G.fmt(values[1])} ✓`;
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
    player.reset();mode="none";s=0;guideStep=-1;camera.yaw=-35;camera.pitch=30;updateCamera();
    $("guide-caption").textContent="Move s to explore the line, then add a third equation.";
  });
  draw();document.querySelector(".live-explorer").hidden=false;document.documentElement.classList.add("js-ready");
}());
