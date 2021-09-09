var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var dados =input.split('\n');

let  num = parseInt(dados.shift());
let arr=[0,1];
let soma=0;

if((num>0) && (num<46)){
    
       for(let j=0; j<num-2; j++){
           soma += (arr[j]+arr[j+1]);
           arr.push(soma);
           soma =0;
       }
}
console.log(arr.join(' ').trim());