var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var dados = input.split('\n');

let num = parseInt(dados.shift());
let count = 0;
let int=[];
let soma=0;
let somaTotal=0;

while(count<num){
    int = dados.shift().split(' ');
    for(let i=0; i< int[1]*2; i++){
        if(i%2!==0){
            soma += i;
        }
    }
    if(int[0]%2===0){
        somaTotal = soma + (int[0]*int[1]);

    }else{
        somaTotal = soma + (int[1]*(int[0]-1));
    }
    console.log(somaTotal);
       
    soma=0;
    count++;
}