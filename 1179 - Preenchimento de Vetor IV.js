var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var dados = input.split('\n');


let par=[];
let impar=[];
let count = 0;
let countpar=0;
let countimpar=0;

while(count<15){
    let valor= parseInt(dados.shift());
    if(valor%2 === 0){
        par.push(valor);
        countpar++;
    }
    if(valor%2 !==0){
        impar.push(valor);
        countimpar++;
    } 
    if(countpar>4){
        for(let i=0;i<par.length;i++){
            console.log("par["+ i + "] = " + par[i]);
        }
        par=[];
        countpar=0;
    }
    if(countimpar>4){
        for(let i=0;i<impar.length;i++){
            console.log("impar["+ i + "] = " + impar[i]);
        }
        impar=[];
        countimpar=0;
    }
    count++;
    
}

if(countimpar>0){
    for(let i=0;i<impar.length;i++){
        console.log("impar["+ i + "] = " + impar[i]);
    }
}
if(countpar>0){
    for(let i=0;i<par.length;i++){
        console.log("par["+ i + "] = " + par[i]);
    }
}