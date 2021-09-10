var input = require('fs').readFileSync('/dev/stdin', 'utf8');
let soma=0;
let num=3;
let den=2;
while(num<39){
   soma += num/den;
    den *= 2;
    num += 2;
}

console.log((soma+1).toFixed(2));