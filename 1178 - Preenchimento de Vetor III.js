var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var dados = input.split('\n');

let valor= Number(dados.shift());

for(let i = 0; i < 100; i++){
    console.log("N[" + i +"] = "+ (valor.toLocaleString('en-US',{minimumFractionDigits:4})).replace(/,/g,""));
    valor -= valor/2;
}
 