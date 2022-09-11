const { template } = require('@babel/core')

function minMedMax(n1, n2, n3) {
let array0 ;
let array = [n1,n2,n3]
for (let i = 0; i < array.length; i++) {
  for (let x = i + 1; x < array.length; x++) {
    if(array[i] > array[x]) {
    
    array0 = array[i];
    array[i] = array[x];
    array[x]= array0;
  }
 }
}
return {min:array[0], mid: array[1], max: array[2]}
}



module.exports = minMedMax
