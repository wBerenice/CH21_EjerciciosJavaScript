//EJERCICIO 01 - PARTE 2


let btnEjercicio01 = document.getElementById("btnEjercicio01");

btnEjercicio01.addEventListener("click", function(event){

    let num1Num = parseInt(document.getElementById("ejercicio01Num1").value);
    let num2Num = parseInt(document.getElementById("ejercicio01Num2").value);
    let num3Num = parseInt(document.getElementById("ejercicio01Num3").value);

    let ejercicio01Resultado = document.getElementById("ejercicio01Resultado");

    let numeroMayor = null;
    let numeros = [num1Num, num2Num, num3Num];
    
    numeros.forEach((numero) => {
    
        let numeroActual = numero; 
    
        if(numeroMayor == null){
            numeroMayor = numeroActual;
            console.log(`Se reasignó la variable numeroMayor a ${numeroMayor}`)
        }else if(numeroActual > numeroMayor){
            numeroMayor = numeroActual;
            console.log(`La variable numeroMayor ahora vale ${numeroMayor}`)
        }else if (numeroActual < numeroMayor){
            console.log(`${numeroActual} es menor que ${numeroMayor}`)
        }else{
            console.log(`NO ES UN NÚMERO`)
        } 
    }
    );

    ejercicio01Resultado.innerHTML = `${numeroMayor} es el número mayor`; 

});


//EJERCICIO 02 - PARTE 2

let btnEjercicio02 = document.getElementById("btnEjercicio02");

btnEjercicio02.addEventListener("click", function(event){

    let num1Num = parseInt(document.getElementById("ejercicio02Num1").value);
    let num2Num = parseInt(document.getElementById("ejercicio02Num2").value);
    let num3Num = parseInt(document.getElementById("ejercicio02Num3").value);

    let ejercicio02Resultado = document.getElementById("ejercicio02Resultado");

    let numeroMenor = null;
    let numeros = [num1Num, num2Num, num3Num];
    
    numeros.forEach((numero) => {
    
        let numeroActual = numero; 
    
        if(numeroMenor == null){
            numeroMenor = numeroActual;
            console.log(`Se reasignó la variable numeroMayor a ${numeroMenor}`)
        }else if(numeroActual < numeroMenor){
            numeroMenor = numeroActual;
            console.log(`La variable numeroMenor ahora vale = ${numeroMenor}`)
        }else if (numeroActual > numeroMenor){
            console.log(`${numeroActual} es mayor que ${numeroMenor}`)
        }else{
            console.log(`NO ES UN NÚMERO`)
        } 
    }
    );

    ejercicio02Resultado.innerHTML = `${numeroMenor} es el número menor`; 

});


//EJERCICIO 03 - PARTE 2


//EJERCICIO 04 - PARTE 2


//EJERCICIO 05 - PARTE 2


//EJERCICIO 06 - PARTE 2

let btnParImpar = document.getElementById("btnEjercicio06");

btnParImpar.addEventListener("click", function(event){

let num1 = parseInt(document.getElementById("ejercicio06Num1").value);
let ejercicio06Resultado = document.getElementById("ejercicio06Resultado");

if((num1%2) == 0){
    console.log(`${num1} es par`);
    ejercicio06Resultado.innerHTML = `<strong>${num1} es par</strong>`
}else if((num1%2) != 0){
    console.log(`${num1} es impar`);
    ejercicio06Resultado.innerHTML = `<strong>${num1} es impar</strong>`
}else{
    console.log(`NO ES UN NÚMERO`);
}

});




















