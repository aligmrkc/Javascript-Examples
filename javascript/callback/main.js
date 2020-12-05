const a=[1,2,3,4,5,6,7,8];
;
console.log(a.filter(x=> x%2 ===1))
console.log(a.filter(x=> x%2 ===0))

console.log(a.map(x=>x*2));

a.forEach(x=>console.log(x*5))