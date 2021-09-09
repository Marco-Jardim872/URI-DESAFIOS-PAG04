var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var dados =input.split('\n');

let num;
let result;
let elementos=[];
let arr=[];

while(num!==0){
    num = parseInt(dados.shift());
    elementos.push(num);
}
elementos.pop();

while(elementos.length > 0) {
   
    for (let i = 1; i <= elementos[0]; i++) {
        arr.push(i);
    }
    result = (arr.splice(0,elementos[0]).join(" "));
    console.log(result.trim());
    elementos.shift();
}