(function () {
  "use strict";
  const G=window.BookGeometry,C=G.colors,$=id=>document.getElementById(id);
  const camera={yaw:-35,pitch:28},input=[1,-1,2];
  const domain=new G.Scene($("domain-scene"),G.projector(camera,[0,0,0],58,[240,204]));
  const output=new G.Scene($("codomain-scene"),p=>[240+24*p[0],180-24*p[1]]);
  const basis=[[1,0,0],[0,1,0],[0,0,1]],colors=[C.olive,C.mustard,C.gray];
  const cube=Array.from({length:8},(_,i)=>[i&1?1:0,i&2?1:0,i&4?1:0]);
  let stage="basis",highlight=-1;
  const captions={basis:"The basis arrows match the columns: T(e₁) = (1, 2), T(e₂) = (2, 1), T(e₃) = (0, 0).",
    vector:"The sample vector is a combination of the basis arrows. Apply the same coefficients to their images.",
    fibers:"Different z-values on the same vertical input line have one image. This transformation loses the z-coordinate."};
  function caption(text) {if($("guide-caption").textContent!==text)$("guide-caption").textContent=text;}
  function draw() {
    domain.clear();output.clear();
    const faces=[[0,1,3,2],[0,1,5,4],[0,2,6,4],[4,5,7,6],[2,3,7,6],[1,3,7,5]];
    faces.sort((a,b)=>a.reduce((s,i)=>s+domain.project(cube[i])[2],0)-b.reduce((s,i)=>s+domain.project(cube[i])[2],0));
    faces.forEach(face=>domain.polygon(face.map(i=>cube[i]),C.olive,.055,{"stroke-opacity":.35}));
    // The top and bottom cube faces have the same image: the z-direction collapses.
    output.polygon([[0,0],[1,2],[3,3],[2,1]],C.olive,.16);
    for(let n=-6;n<=6;n++) if(n) {
      output.line([n,-6.5],[n,6.5],C.grid,.7);
      output.line([-6.5,n],[6.5,n],C.grid,.7);
    }
    domain.axes([[-2.5,2.5],[-2.5,2.5],[-2.5,2.5]],["x","y","z"]);
    output.axes([[-6.5,6.5],[-6.5,6.5]],["u","v"]);
    [-4,-2,2,4,6].forEach(n=>{
      output.text([n,0],G.fmt(n),C.gray,[-5,19],{"font-size":13});
      output.text([0,n],G.fmt(n),C.gray,[-25,4],{"font-size":13});
    });
    basis.forEach((b,i)=>{
      const color=colors[i],label=["e₁","e₂","e₃"][i],image=G.transform(b);
      const opacity=highlight<0||highlight===i?1:.42;
      domain.arrow([0,0,0],b,color,3.5,{opacity});
      domain.text(b,label,color,i===1?[5,18]:[5,-9],{opacity});
      if(i<2) {
        output.arrow([0,0],image,color,3.5,{opacity});
        output.text(image,"T("+label+")",color,i===0?[-60,-10]:[8,6],{opacity});
      } else {
        output.point([0,0],color,5,{opacity});
        output.text([0,0],"T(e₃) = (0, 0)",color,[8,28],{opacity});
      }
    });
    const image=G.transform(input);
    if(stage!=="basis") {
      domain.arrow([0,0,0],input,C.wine,3.5);
      domain.point(input,C.wine,5);
      domain.text(input,"a = "+G.tuple(input),C.wine,[-65,-17]);
      output.arrow([0,0],image,C.wine,3.5);
      output.point(image,C.wine,6);
      const offset=image[0]>3?[-140,-13]:[10,-13];
      output.text(image,"T(a) = "+G.tuple(image),C.wine,offset);
    }
    if(stage==="fibers") {
      domain.line([input[0],input[1],-2.3],[input[0],input[1],2.3],C.wine,2,{"stroke-dasharray":"6 5"});
      [-2,0,2].forEach((z,i)=>{
        const p=[input[0],input[1],z];domain.point(p,C.wine,5);
        domain.text(p,["a₋","a₀","a₊"][i],C.wine,[8,5]);
      });
      $("same-image").textContent=`T${G.tuple([input[0],input[1],-2])} = T${G.tuple([input[0],input[1],0])} = T${G.tuple([input[0],input[1],2])} = ${G.tuple(image)}.`;
    }
    $("same-image").hidden=stage!=="fibers";
    ["x","y","z"].forEach((name,i)=>{$("input-"+name).value=input[i];$("value-"+name).value=G.fmt(input[i]);});
    $("image-equation").textContent=`T${G.tuple(input)} = (${G.fmt(input[0])} + 2(${G.fmt(input[1])}), 2(${G.fmt(input[0])}) + ${G.fmt(input[1])}) = ${G.tuple(image)}`;
    $("combination").textContent=`Image = ${G.fmt(input[0])}(1, 2) + ${G.fmt(input[1])}(2, 1) + ${G.fmt(input[2])}(0, 0).`;
    ["basis","vector","fibers"].forEach(key=>$("stage-"+key).setAttribute("aria-pressed",stage===key?"true":"false"));
  }
  function choose(next) {stage=next;highlight=-1;draw();caption(captions[stage]);}
  const player=G.player($("play"),15000,p=>{
    if(p<.4) {
      stage="basis";highlight=Math.min(2,Math.floor(p/.4*3));
      const labels=["First column: e₁ maps to (1, 2).","Second column: e₂ maps to (2, 1).","Third column: e₃ maps to (0, 0); the z-direction collapses."];
      caption(labels[highlight]);
    } else if(p<.65) {stage="vector";highlight=-1;input.splice(0,3,1,-1,2);caption("Sample: T(1, −1, 2) = (−1, 1). The matrix combines the colored columns with coefficients 1, −1, 2.");}
    else {stage="fibers";highlight=-1;input.splice(0,3,1,-1,Math.round((-2+4*(p-.65)/.35)*4)/4);caption(captions.fibers);}
    draw();
  },[0,.15,.29,.4,.65,1]);
  ["basis","vector","fibers"].forEach(key=>$("stage-"+key).addEventListener("click",()=>{player.stop();choose(key);}));
  ["x","y","z"].forEach((key,i)=>{
    $("input-"+key).addEventListener("input",()=>{player.stop();input[i]=+$("input-"+key).value;if(stage==="basis")stage="vector";highlight=-1;draw();});
    $("input-"+key).addEventListener("change",()=>{$("guide-caption").textContent=`Input ${G.tuple(input)} has image ${G.tuple(G.transform(input))}. `+captions[stage];});
  });
  const updateCamera=G.cameraControls($("domain-scene"),camera,draw);
  $("reset").addEventListener("click",()=>{player.reset();input.splice(0,3,1,-1,2);camera.yaw=-35;camera.pitch=28;choose("basis");updateCamera();});
  draw();document.querySelector(".live-explorer").hidden=false;document.documentElement.classList.add("js-ready");
}());
