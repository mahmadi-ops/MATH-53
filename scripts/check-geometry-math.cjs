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
const system=[[1,-2,-7],[-1,3,6]];
for(const s of [-20,-1,-.75,0,.25,1,15]) {
  const p=G.solutionPoint(s);
  equal(multiply(system,p),[-1,0]);equal(G.systemValues(p),[-1,0]);
  near(p[2],s);near(G.thirdValue("infinite",p),-1);near(G.thirdValue("empty",p),-1);
}
equal(G.solutionPoint(0),[-3,-1,0]);equal(G.solutionPoint(1),[6,0,1]);
for(const [mode,row,target,expectedRank,augRank] of [
  ["unique",[0,0,1],0,3,3],["infinite",[0,1,-1],-1,2,2],["empty",[0,1,-1],0,2,3]
]) {
  const A=[...system,row];const b=[-1,0,target];
  assert.equal(rank(A),expectedRank);assert.equal(rank(A.map((r,i)=>[...r,b[i]])),augRank);
  assert.equal(G.thirdTarget(mode),target);
}
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
console.log("PASS: solution sets and augmented ranks; basis images and lost z; 101 independent bases and fixed-vector sums; true plane/box intersections.");
