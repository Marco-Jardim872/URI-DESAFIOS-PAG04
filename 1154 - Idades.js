var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var dados =(input.split('\n')).map((value)=>parseInt(value));

let idades = [];
let media=0;
for(let ele of dados){
    if(ele >= 0){
        idades.push(ele);
    }else if(ele<0)break;
}
media= (idades.reduce((total,value)=>total+value))/idades.length;

console.log(media.toFixed(2));