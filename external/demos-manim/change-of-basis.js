(function () {
  "use strict";
  const G=window.BookGeometry,C=G.colors,$=id=>document.getElementById(id);
  const scene=new G.Scene($("basis-scene"),p=>[235+58*p[0],286-58*p[1]]);
  const svg=$("basis-scene"),defs=G.node("defs"),clip=G.node("clipPath",{id:"grid-window"});
  clip.append(G.node("rect",{x:16,y:16,width:568,height:378}));defs.append(clip);svg.prepend(defs);
  function draw(t) {
    scene.clear();
    const [b1,b2]=G.basisAt(t),[c1,c2]=G.basisCoordinates(t);
    const map=(u,v)=>G.add(G.scale(b1,u),G.scale(b2,v));
    for(let i=-9;i<=9;i++) {
      scene.line(map(i,-6),map(i,6),C.grid,1.1,{"clip-path":"url(#grid-window)"});
      scene.line(map(-9,i),map(9,i),C.grid,1.1,{"clip-path":"url(#grid-window)"});
    }
    scene.axes([[-3.5,5.5],[-1.5,4.2]],["x₁","x₂"]);
    const joint=G.scale(b1,c1),tip=[1,2];
    scene.line([0,0],G.scale(b2,c2),C.gray,1.2,{"stroke-dasharray":"4 4"});
    scene.line(G.scale(b2,c2),tip,C.gray,1.2,{"stroke-dasharray":"4 4"});
    scene.arrow([0,0],b1,C.olive,2,{"stroke-dasharray":"4 3"});
    scene.arrow([0,0],b2,C.mustard,2,{"stroke-dasharray":"4 3"});
    scene.text(b1,t===0?"e₁":"b₁(t)",C.olive,[-10,33]);
    scene.text(b2,t===0?"e₂":"b₂(t)",C.mustard,[-62,5]);
    scene.arrow([0,0],joint,C.olive,4,{"data-contribution":"first"});
    scene.arrow(joint,tip,C.mustard,4,{"data-contribution":"second"});
    scene.point(joint,C.olive,4);
    scene.arrow([0,0],tip,C.wine,4,{"data-fixed-vector":""});
    scene.point(tip,C.wine,6,{"data-fixed-tip":""});
    scene.text(tip,"x = (1, 2), fixed",C.wine,[-38,-17]);
    const coefficient=t===1?"3/2":G.fmt(c1);
    scene.text(G.scale(joint,.55),coefficient+" × "+(t===0?"e₁":"b₁(t)"),C.olive,[-25,-14]);
    scene.text(G.scale(G.add(joint,tip),.5),"2 × "+(t===0?"e₂":"b₂(t)"),C.mustard,[12,0]);
    $("basis-progress").value=t*100;$("basis-progress-value").value=Math.round(t*100)+"%";
    $("basis-progress").setAttribute("aria-valuetext",`${Math.round(t*100)} percent; coordinates (${coefficient}, 2)`);
    $("coordinate-pair").value="("+coefficient+", 2)";
    $("basis-vectors").textContent=`Displayed basis: b₁(t) = ${G.tuple(b1)}, b₂(t) = ${G.tuple(b2)}.`;
    $("basis-combination").textContent=`x = ${coefficient}b₁(t) + 2b₂(t) = ${G.tuple(joint)} + ${G.tuple(G.scale(b2,2))} = (1, 2).`;
    $("independence").textContent=`t = ${G.fmt(t)}; det[b₁(t) b₂(t)] = 1 + t = ${G.fmt(1+t)} > 0. The basis stays independent.`;
    const message=t===0?"Start: x = e₁ + 2e₂. Watch the arrow stay fixed as its grid changes.":t===1?"New basis: x = (3/2)b₁ + 2b₂. Its coordinates changed from (1, 2) to (3/2, 2); x did not move.":"The grid and coordinate values change. The wine arrow stays fixed, and the head-to-tail sum still reaches it.";
    if($("guide-caption").textContent!==message)$("guide-caption").textContent=message;
  }
  const player=G.player($("play"),8000,draw,[0,.25,.5,.75,1]);
  $("basis-progress").addEventListener("input",()=>{player.stop();player.set(+$("basis-progress").value/100);});
  $("standard").addEventListener("click",()=>{player.stop();player.set(0);});
  $("new-basis").addEventListener("click",()=>{player.stop();player.set(1);});
  $("reset").addEventListener("click",()=>player.reset());
  draw(0);document.querySelector(".live-explorer").hidden=false;document.documentElement.classList.add("js-ready");
}());
