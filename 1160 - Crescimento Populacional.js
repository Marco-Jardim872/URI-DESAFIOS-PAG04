var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var dados = input.split('\n');

let num = parseInt(dados.shift());
let count = 0;
let elementos = [];
let crescA=0;
let crescB=0;
let PA=0;
let PB=0;
let G1;
let G2;

while(count<num){
  elementos.push(...(dados.shift()).split(" "));
  PA=parseInt(elementos[0]);
  PB=parseInt(elementos[1]);
  G1=(parseFloat((elementos[2]))/100).toFixed(3);
  G2=(parseFloat((elementos[3]))/100).toFixed(3);
  crescA = PA*G1;
  crescB = PB*G2;
    
  let anos=0;
    
  while(PA<=PB){
    PB= parseInt(PB + crescB);
    crescB = PB*G2;
    PA= parseInt(PA + crescA);
    crescA = PA*G1;
   
    anos++;
    if(anos>100)break;
  }
  if(anos>100){
    console.log("Mais de 1 seculo.");
         
  }else  console.log(anos +" anos.");
    
  elementos=[];
  count++;
}