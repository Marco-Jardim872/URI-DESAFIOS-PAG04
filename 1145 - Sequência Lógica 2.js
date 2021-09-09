var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var dados =input.split(',');

let num = dados.shift().split(' ');
let elementos=[];
let exb;

for (let i = 1; i <= num[1] ; i++) {
    elementos.push(i);
}

while(elementos.length > 0){
    exb = elementos.splice(0,num[0]).join(" ");
    console.log(exb);
}