function addUpto(n){
    return (n*(n+1))/2
}

const t1 = performance.now();
console.log(addUpto(1000));
const t2 = performance.now();
console.log(`Time Elapsed ${(t2-t1)/1000} seconds`) 