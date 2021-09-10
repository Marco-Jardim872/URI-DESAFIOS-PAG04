var input = require('fs').readFileSync('/dev/stdin', 'utf8');
let soma=0;
for(let i=2; i<=100; i++){
    soma += (1/i);
}
console.log((soma+1).toFixed(2));