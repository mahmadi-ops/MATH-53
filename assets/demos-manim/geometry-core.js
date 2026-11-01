/* Small, dependency-free geometry helpers, also loaded by the Node math checks. */
(function (root) {
  "use strict";
  const colors = { olive: "#4A5D23", wine: "#5E011C", mustard: "#876801", gray: "#606060", grid: "#DDE2CF" };
  const add = (a, b) => a.map((x, i) => x + b[i]);
  const scale = (a, s) => a.map(x => x * s);
  const dot = (a, b) => a.reduce((s, x, i) => s + x * b[i], 0);
  const cross = (a, b) => [a[1]*b[2]-a[2]*b[1], a[2]*b[0]-a[0]*b[2], a[0]*b[1]-a[1]*b[0]];
  const fmt = x => (Math.abs(x) < .0005 ? "0" : Number(x.toFixed(3)).toString()).replace(/-/g, "−");
  const tuple = p => "(" + p.map(fmt).join(", ") + ")";
  const solutionPoint = s => [-3 + 9*s, -1 + s, s];
  const systemValues = p => [dot([1,-2,-7], p), dot([-1,3,6], p)];
  const thirdValue = (mode, p) => mode === "unique" ? p[2] : p[1] - p[2];
  const thirdTarget = mode => mode === "infinite" ? -1 : 0;
  const transform = p => [p[0] + 2*p[1], 2*p[0] + p[1]];
  const basisAt = t => [[1+t, 0], [-t, 1]];
  const basisCoordinates = t => [(1+2*t)/(1+t), 2];

  // Intersect a plane with a rectangular plotting box; no geometric distortion.
  function planeBox(normal, constant, bounds) {
    const vertices = Array.from({length: 8}, (_, i) => bounds.map((b, k) => b[(i >> k) & 1]));
    const points = [];
    function keep(p) {
      if (!points.some(q => Math.hypot(...p.map((x, k) => x-q[k])) < 1e-7)) points.push(p);
    }
    vertices.forEach((p, i) => {
      for (let k=0; k<3; k++) if (!(i & (1 << k))) {
        const q=vertices[i | (1 << k)], a=dot(normal,p)-constant, b=dot(normal,q)-constant;
        if (Math.abs(a)<1e-9) keep(p);
        if (Math.abs(b)<1e-9) keep(q);
        if (a*b<0) keep(add(p,scale(q.map((x,j)=>x-p[j]),a/(a-b))));
      }
    });
    if (points.length < 3) return points;
    const center=scale(points.reduce(add,[0,0,0]),1/points.length);
    const n=scale(normal,1/Math.hypot(...normal));
    let u=cross(n,Math.abs(n[0])<.9 ? [1,0,0] : [0,1,0]);
    u=scale(u,1/Math.hypot(...u));
    const v=cross(n,u);
    return points.sort((p,q)=>Math.atan2(dot(p.map((x,k)=>x-center[k]),v),dot(p.map((x,k)=>x-center[k]),u))-
      Math.atan2(dot(q.map((x,k)=>x-center[k]),v),dot(q.map((x,k)=>x-center[k]),u)));
  }

  function node(tag, attrs={}, text="") {
    const el=document.createElementNS("http://www.w3.org/2000/svg",tag);
    Object.entries(attrs).forEach(([k,v])=>el.setAttribute(k,v));
    if (text) el.textContent=text;
    return el;
  }
  class Scene {
    constructor(svg, project) { this.svg=svg; this.project=project; this.layer=node("g", {"data-drawing":""}); svg.append(this.layer); }
    clear() { this.layer.replaceChildren(); }
    line(a,b,color=colors.gray,width=1.5,attrs={}) {
      const p=this.project(a),q=this.project(b);
      const el=node("line",{x1:p[0],y1:p[1],x2:q[0],y2:q[1],stroke:color,"stroke-width":width,...attrs});
      this.layer.append(el);return el;
    }
    arrow(a,b,color,width=3,attrs={}) {
      this.line(a,b,color,width,attrs);
      const p=this.project(a),q=this.project(b),dx=q[0]-p[0],dy=q[1]-p[1],len=Math.hypot(dx,dy);
      if (len<1) return;
      const ux=dx/len,uy=dy/len,size=Math.min(10,len*.3);
      this.layer.append(node("path",{d:`M${q[0]},${q[1]} L${q[0]-size*ux+size*.4*uy},${q[1]-size*uy-size*.4*ux} L${q[0]-size*ux-size*.4*uy},${q[1]-size*uy+size*.4*ux} Z`,fill:color,...attrs}));
    }
    polygon(points,color,opacity=.15,attrs={}) {
      if (points.length<3) return;
      this.layer.append(node("polygon",{points:points.map(p=>this.project(p).slice(0,2).join(",")).join(" "),fill:color,"fill-opacity":opacity,stroke:color,"stroke-width":1.3,...attrs}));
    }
    point(p,color,radius=5,attrs={}) {
      const q=this.project(p);this.layer.append(node("circle",{cx:q[0],cy:q[1],r:radius,fill:color,stroke:"white","stroke-width":2,...attrs}));
    }
    text(p,text,color="#222",offset=[8,-10],attrs={}) {
      const q=this.project(p);this.layer.append(node("text",{x:q[0]+offset[0],y:q[1]+offset[1],style:`fill:${color}`,...attrs},text));
    }
    axes(bounds,labels) {
      bounds.forEach((b,k)=>{
        const a=bounds.map(()=>0),c=a.slice();a[k]=b[0];c[k]=b[1];
        this.arrow(a,c,"#606060",1.1);
        this.text(c,labels[k],"#404040",[k===1 ? -24:5,k===2 ? -8:18]);
      });
      this.text(bounds.map(()=>0),"0","#606060",[-16,18]);
    }
  }
  function projector(camera, center, unit, origin=[280,215]) {
    return p=>{
      const q=p.map((x,k)=>x-center[k]),a=camera.yaw*Math.PI/180,b=camera.pitch*Math.PI/180;
      const x=q[0]*Math.cos(a)-q[1]*Math.sin(a),y=q[0]*Math.sin(a)+q[1]*Math.cos(a);
      return [origin[0]+x*unit,origin[1]-(-y*Math.sin(b)+q[2]*Math.cos(b))*unit,y*Math.cos(b)+q[2]*Math.sin(b)];
    };
  }
  function cameraControls(svg, camera, render, prefix="") {
    const yaw=document.getElementById(prefix+"yaw"),pitch=document.getElementById(prefix+"pitch");
    function update() {
      yaw.value=camera.yaw;pitch.value=camera.pitch;
      document.getElementById(prefix+"yaw-value").value=Math.round(camera.yaw)+"°";
      document.getElementById(prefix+"pitch-value").value=Math.round(camera.pitch)+"°";
      render();
    }
    function move(dx,dy) {
      camera.yaw=((camera.yaw+dx+540)%360)-180;
      camera.pitch=Math.max(10,Math.min(75,camera.pitch+dy));update();
    }
    yaw.addEventListener("input",()=>{camera.yaw=+yaw.value;update();});
    pitch.addEventListener("input",()=>{camera.pitch=+pitch.value;update();});
    let last=null;
    svg.addEventListener("pointerdown",e=>{last=[e.clientX,e.clientY];svg.setPointerCapture(e.pointerId);});
    svg.addEventListener("pointermove",e=>{if(last){move((e.clientX-last[0])*.4,(e.clientY-last[1])*.3);last=[e.clientX,e.clientY];}});
    svg.addEventListener("pointerup",()=>{last=null;});
    svg.addEventListener("pointercancel",()=>{last=null;});
    svg.addEventListener("keydown",e=>{
      const keys={ArrowLeft:[-5,0],ArrowRight:[5,0],ArrowUp:[0,-5],ArrowDown:[0,5]};
      if(keys[e.key]) {e.preventDefault();move(...keys[e.key]);}
    });
    return update;
  }
  // One-shot playback; reduced motion advances through discrete, captioned steps.
  function player(button, duration, draw, stops=[0,1]) {
    const motion=matchMedia("(prefers-reduced-motion: reduce)");
    let progress=0,frame=null,started=0;
    function stop() {
      if(frame!==null) cancelAnimationFrame(frame);
      frame=null;button.textContent=motion.matches ? "Next guided step" : progress===1 ? "Replay guide" : "Play guide";
      button.setAttribute("aria-pressed","false");
    }
    function set(p) {progress=Math.max(0,Math.min(1,p));draw(progress);if(frame===null)stop();}
    function tick(now) {set((now-started)/duration);if(progress<1) frame=requestAnimationFrame(tick);else stop();}
    button.addEventListener("click",()=>{
      if(motion.matches) {stop();set(stops.find(p=>p>progress+.001)??stops[0]);return;}
      if(frame!==null) {stop();return;}
      if(progress===1) progress=0;
      started=performance.now()-progress*duration;button.textContent="Pause guide";button.setAttribute("aria-pressed","true");
      frame=requestAnimationFrame(tick);
    });
    motion.addEventListener("change",stop);
    document.addEventListener("visibilitychange",()=>{if(document.hidden)stop();});
    stop();return {stop,set,reset(){stop();set(0);}};
  }
  const api={colors,add,scale,dot,cross,fmt,tuple,solutionPoint,systemValues,thirdValue,thirdTarget,transform,basisAt,basisCoordinates,planeBox,node,Scene,projector,cameraControls,player};
  if(typeof module!=="undefined" && module.exports) module.exports=api;
  else root.BookGeometry=api;
}(typeof window!=="undefined" ? window : globalThis));
