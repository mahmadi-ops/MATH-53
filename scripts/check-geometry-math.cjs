/* Run with node scripts/check-geometry-math.cjs. No test dependencies. */
"use strict";
const assert=require("node:assert/strict");
const G=require("../assets/demos-manim/geometry-core.js");
const near=(a,b)=>assert.ok(Math.abs(a-b)<1e-9,`${a} != ${b}`);
const equal=(a,b)=>a.forEach((x,i)=>near(x,b[i]));
const multiply=(A,x)=>A.map(row=>row.reduce((s,a,i)=>s+a*x[i],0));
function rank(rows) {
  const a=rows.map(r=>r.slice());let row=0;
  for(let col=0;col<a[0].length&&row<a.length;col++) {
    const pivot=a.findIndex((r,i)=>i>=row&&Math.abs(r[col])>1e-9);
    if(pivot<0)continue;
    [a[row],a[pivot]]=[a[pivot],a[row]];
    const value=a[row][col];a[row]=a[row].map(x=>x/value);
    a.forEach((r,i)=>{if(i!==row){const v=r[col];a[i]=r.map((x,j)=>x-v*a[row][j]);}});
    row++;
  }
  return row;
}
const original=[[1,-2,-7],[-1,3,6]],system=[[1,-2,-7],[1,-9,0]];
for(const s of [-20,-1,-.75,0,.25,1,15]) {
  const p=G.solutionPoint(s);
  equal(multiply(original,p),[-1,0]);
  equal(multiply(system,p),[-1,6]);equal(G.systemValues(p),[-1,6]);
  near(p[2],s);near(G.thirdValue("infinite",p),-1);near(G.thirdValue("empty",p),-1);
}
equal(G.solutionPoint(0),[-3,-1,0]);equal(G.solutionPoint(1),[6,0,1]);
for(const [mode,row,target,expectedRank,augRank] of [
  ["unique",[0,0,1],0,3,3],["infinite",[0,1,-1],-1,2,2],["empty",[0,1,-1],0,2,3]
]) {
  const A=[...system,row];const b=[-1,6,target];
  assert.equal(rank(A),expectedRank);assert.equal(rank(A.map((r,i)=>[...r,b[i]])),augRank);
  assert.equal(G.thirdTarget(mode),target);
}
// The replacement is -6 times the first old row minus 7 times the second.
equal(original[0].map((x,i)=>-6*x-7*original[1][i]),system[1]);
near(-6*(-1)-7*0,6);
const cosine=Math.abs(G.dot(system[0],system[1]))/(Math.hypot(...system[0])*Math.hypot(...system[1]));
assert.ok(cosine<.3,'The displayed planes should meet at a wide angle.');
const A=[[1,2,0],[2,1,0]];
[[1,0,0],[0,1,0],[0,0,1],[1,-1,2],[-2,1,-.5],[2,2,2]].forEach(x=>equal(G.transform(x),multiply(A,x)));
equal(G.transform([1,-1,2]),[-1,1]);
for(const z of [-100,-2,0,2,100])equal(G.transform([1,-1,z]),[-1,1]);
assert.equal(rank(A),2);equal(G.transform([0,0,1]),[0,0]);
for(let i=0;i<=100;i++) {
  const t=i/100,[b1,b2]=G.basisAt(t),c=G.basisCoordinates(t);
  assert.ok(b1[0]*b2[1]-b1[1]*b2[0]>0);
  equal([c[0]*b1[0]+c[1]*b2[0],c[0]*b1[1]+c[1]*b2[1]],[1,2]);
}
equal(G.basisCoordinates(0),[1,2]);equal(G.basisCoordinates(1),[1.5,2]);
equal(G.basisAt(1)[0],[2,0]);equal(G.basisAt(1)[1],[-1,1]);
const bounds=[[-13,8],[-4,3],[-3,3]];
for(const [normal,value] of [[[1,-2,-7],-1],[[-1,3,6],0],[[0,0,1],0],[[0,1,-1],-1],[[0,1,-1],0]]) {
  const polygon=G.planeBox(normal,value,bounds);assert.ok(polygon.length>=3);
  polygon.forEach(p=>{near(multiply([normal],p)[0],value);p.forEach((x,i)=>assert.ok(x>=bounds[i][0]-1e-9&&x<=bounds[i][1]+1e-9));});
}
const points=[];
for(const [normal,value] of [[[1,-2,-7],-1],[[1,-9,0],6],[[0,0,1],0],[[0,1,-1],-1],[[0,1,-1],0]]) {
  const patch=G.planePatch(normal,value,[-3,-1,0],[9,1,1],11,4.2);
  patch.forEach(p=>near(multiply([normal],p)[0],value));
  const a=patch[1].map((x,k)=>x-patch[0][k]),b=patch[2].map((x,k)=>x-patch[1][k]);
  near(G.dot(a,b),0);near(Math.hypot(...a),22);near(Math.hypot(...b),8.4);
  points.push(...patch);
}
for(let yaw=-180;yaw<=180;yaw+=30)for(const pitch of [10,30,75]) {
  const project=G.fittedProjector({yaw,pitch},points,[560,420]);
  points.forEach(p=>{const q=project(p);assert.ok(q[0]>=44-1e-8&&q[0]<=516+1e-8&&q[1]>=44-1e-8&&q[1]<=376+1e-8);});
}

// The two-line explorer of Section 1.1: x + y = 1, a x + y = b on the slider grid.
const L=require("../assets/demos-manim/line-family.js");
for(let A=-6;A<=6;A++)for(let B=-6;B<=8;B++) {
  const a=A/2,b=B/2,result=L.classify(L.frac(A,2),L.frac(B,2));
  if(A===2) {assert.equal(result.kind,B===2?"line":"empty");continue;}
  assert.equal(result.kind,"point");
  const x=L.num(result.x),y=L.num(result.y);
  near(x+y,1);near(a*x+y,b);near(x,(b-1)/(a-1));near(y,(a-b)/(a-1));
}
assert.equal(L.secondEquation(L.frac(2),L.frac(3)),"2x + y = 3");
assert.equal(L.secondEquation(L.frac(-3,2),L.frac(1,2)),"−(3/2)x + y = 1/2");

// The translated-solutions explorer of Section 2.3: every s v_1 solves the homogeneous
// system, and adding either particular solution gives a solution of its partner.
const T=require("../assets/demos-manim/translated-solutions.js");
equal(T.leftSides(T.V1),[0,0,0]);
T.PARTICULAR.forEach(p=>equal(T.leftSides(p),T.RHS));
for(let k=-8;k<=8;k++) {
  const s=k/4,sv=T.scaled(s);
  equal(T.leftSides(sv),[0,0,0]);
  T.PARTICULAR.forEach(p=>{
    const w=T.translate(p,s);
    equal(w,p.map((x,i)=>x+sv[i]));equal(T.leftSides(w),T.RHS);
    // Both lines lie in the plane x + y = 0, the patch drawn in the figure.
    near(sv[0]+sv[1],0);near(w[0]+w[1],0);
  });
}
// Two particular solutions differ by a homogeneous solution, so they give the same line.
equal(T.PARTICULAR[1].map((x,i)=>x-T.PARTICULAR[0][i]),T.scaled(-1));
assert.equal(T.substituted([1,1,-1],[-1.5,1.5,-1]),"−1.5 + 1.5 − (−1)");
assert.equal(T.substituted([1,1,1],[-1.5,1.5,-1]),"−1.5 + 1.5 + (−1)");
assert.equal(T.substituted([1,1,0],[2,-2,0]),"2 + (−2)");

// The three-shear explorer of Section 4.5: H_a V_b H_a is the rotation through θ
// for every slider angle, each partial product has determinant 1, and the picture
// stays inside the plotting window.
const S=require("../assets/demos-manim/shear-rotation.js");
const same=(P,Q)=>P.forEach((row,i)=>equal(row,Q[i]));
for(let theta=-90;theta<=90;theta+=5) {
  const {a,b}=S.coefficients(theta),R=S.rotation(theta);
  near(a,-Math.tan(theta*Math.PI/360));near(b,Math.sin(theta*Math.PI/180));
  same(S.matrixAt(theta,0),[[1,0],[0,1]]);
  same(S.matrixAt(theta,1),S.H(a));
  same(S.matrixAt(theta,2),S.multiply(S.V(b),S.H(a)));
  same(S.matrixAt(theta,3),S.multiply(S.H(a),S.multiply(S.V(b),S.H(a))));
  S.matrixAt(theta,3).forEach((row,i)=>row.forEach((x,j)=>near(x,R[i][j])));
  // Row reduction of the rotation matrix by the same three shears, as in the example.
  const t=-a,reduced=S.multiply(S.H(t),S.multiply(S.V(-b),S.multiply(S.H(t),R)));
  reduced.forEach((row,i)=>row.forEach((x,j)=>near(x,i===j?1:0)));
  for(let k=0;k<=60;k++) {
    const M2=S.matrixAt(theta,k/20);
    near(S.det(M2),1);
    S.SQUARE.forEach(p=>{const q=S.apply(M2,p);assert.ok(Math.abs(q[0])<=2.3-0.25&&Math.abs(q[1])<=3.2-0.15);});
  }
}
assert.deepEqual([0,0.4,1,1.2,2,2.7,3].map(S.stageOf),[0,1,1,2,2,3,3]);
same(S.multiply(S.H(-1),S.multiply(S.V(1),S.H(-1))),[[0,-1],[1,0]]);

// The two-bases explorer of Section 5.2: on the whole slider grid the weights in each
// basis rebuild the vector (x, y, 0), and the second basis uses (x − y, y).
const B=require("../assets/demos-manim/two-bases.js");
for(let i=-4;i<=4;i++)for(let j=-4;j<=4;j++) {
  const x=i/2,y=j/2,w=B.weights(x,y);
  equal(w.standard,[x,y]);equal(w.second,[x-y,y]);
  equal(B.combine(B.BASES.standard,w.standard),[x,y,0]);
  equal(B.combine(B.BASES.second,w.second),[x,y,0]);
  // every arrow of the picture stays inside the window |x| ≤ 4.4, |y| ≤ 2.6
  assert.ok(Math.abs(x-y)<=4.4-0.3&&Math.abs(y)<=2.6-0.3);
  // the two bases give the same weights exactly when y = 0
  assert.equal(w.standard[0]===w.second[0],y===0);
}
assert.equal(B.combination(B.BASES.standard,[2,1]),"2e₁ + 1e₂");
assert.equal(B.combination(B.BASES.second,[-3.5,2]),"(−3.5)e₁ + 2(e₁ + e₂)");
assert.equal(B.snap(1.74,-2,2),1.5);assert.equal(B.snap(9,-2,2),2);

// Math formatting shared by the explorers: italic letters, real subscripts, upright operator names.
const M=require("../assets/demos-manim/book-math.js");
const shape=text=>M.runs(text).map(r=>(r.italic?"i":"r")+(r.level<0?"_":r.level>0?"^":"")+":"+r.text).join("|");
assert.equal(shape("x₁ - 2x₂ = −1"),"i:x|r_:1|r: − 2|i:x|r_:2|r: = −1");
assert.equal(shape("det[b₁(t)] > 0"),"r:det[|i:b|r_:1|r:(|i:t|r:)] > 0");
assert.equal(shape("T: ℝ³ → ℝ²"),"i:T|r:: ℝ|r^:3|r: → ℝ|r^:2");
assert.equal(shape("aᵢ"),"i:a|i_:i");
assert.equal(shape("A = HₐV_bHₐ"),"i:A|r: = |i:H|i_:a|i:V|i_:b|i:H|i_:a");
assert.deepEqual(M.unbreakable("(a − 1)x = b − 1"),["(a − 1)x","= b − 1"]);
assert.deepEqual(M.unbreakable("x₁ = 2/3 − (7/3)s; x₂ = s"),["x₁","= 2/3 − (7/3)s;","x₂","= s"]);
assert.deepEqual(M.unbreakable("T(1, −1, 2) = (−1, 1)"),["T(1, −1, 2)","= (−1, 1)"]);
assert.deepEqual(M.pieces("Since $a ≠ 1$, done").map(p=>p.math),[false,true,false]);
assert.equal(M.plain("At $s = 0$, $p = (1, 2)$."),"At s = 0, p = (1, 2).");
console.log("PASS: equivalent plane systems and ranks; rectangular plane geometry and camera fitting; basis images and lost z; 101 independent bases and fixed-vector sums; the two-line family on all 195 slider positions; homogeneous and translated solutions on all 17 slider positions for both particular solutions; three shears equal to the rotation on all 37 slider angles; one vector in two bases on all 81 slider positions; math formatting.");
