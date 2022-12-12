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
            console.log(`Se reasignó la variable numeroMayor a ${numeroMayor}`);
        }else if(numeroActual > numeroMayor){
            numeroMayor = numeroActual;
            console.log(`La variable numeroMayor ahora vale ${numeroMayor}`);
        }else if (numeroActual < numeroMayor){
            console.log(`${numeroActual} es menor que ${numeroMayor}`);
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

let btnEjercicio03 = document.getElementById("btnEjercicio03");
let ejercicio03Resultado = document.getElementById("ejercicio03Resultado");

btnEjercicio03.addEventListener("click", function(event){

let numeroAleatorio = parseInt(Math.random() * 100);
let inputUsuario;

do {
    inputUsuario = parseInt(prompt("Ingresa tu número de la suerte"));

    if(inputUsuario > numeroAleatorio){
        alert("El número es menor")
    }else if(inputUsuario < numeroAleatorio){
        alert("El número es mayor")
    }else if(inputUsuario == numeroAleatorio){
        alert(`Felicidades, adivinaste! El número era ${numeroAleatorio}`)
        ejercicio03Resultado.innerHTML = `Felicidades, adivinaste! <strong>El número era ${numeroAleatorio}</strong>`
    }
} while (inputUsuario !== numeroAleatorio);

});



//EJERCICIO 04 - PARTE 2
let btnEjercicio04 = document.getElementById("btnEjercicio04");

btnEjercicio04.addEventListener("click", function(event){

let num1 = parseInt(document.getElementById("ejercicio04Num1").value);
let ejercicio04Resultado = document.getElementById("ejercicio04Resultado");

if((num1 >= 100) && (num1 <= 200)){
    if((num1%3) == 0){
        console.log(`${num1} es múltiplo de 3`);
        ejercicio04Resultado.innerHTML = `<strong>${num1} es múltiplo de 3</strong>`
    }else if((num1%3) != 0){
        console.log(`${num1} no es múltiplo de 3`);
        ejercicio04Resultado.innerHTML = `<strong>${num1} no es múltiplo de 3</strong>`
    }
}else{
    console.log("El número está fuera de rango")
    ejercicio04Resultado.innerHTML = `<strong>ATENCIÓN: El número está fuera de rango`
}

});


//EJERCICIO 05 - PARTE 2

let btnEjercicio05 = document.getElementById("btnEjercicio05");

btnEjercicio05.addEventListener("click", function(event){

    let num1 = parseInt(document.getElementById("ejercicio05Num1").value);
    let num2 = parseInt(document.getElementById("ejercicio05Num2").value);
    let num3 = parseInt(document.getElementById("ejercicio05Num3").value);

    let ejercicio05Resultado = document.getElementById("ejercicio05Resultado");

    let numeros = [num1, num2, num3];
    let numeroElegido = null;
    
    numeros.forEach((numero) => {

    if((num2 + num3) !== num1){
        console.log(`La suma de ${num2} y ${num3} NO dan como resultado ${num1}`)
    }else if((num2 + num3) == num1){
        console.log(`La suma de ${num2} y ${num3} SI da como resultado ${num1}`)
        numeroElegido = num1;
    }else if((num3 + num1) !== num2){
        console.log(`La suma de ${num3} y ${num1} NO dan como resultado ${num2}`)
    }else if((num3 + num1) == num2){
        console.log(`La suma de ${num3} y ${num1} SI da como resultado ${num2}`)
        numeroElegido = num2;
    }else if((num2 + num1) !== num3){
        console.log(`La suma de ${num2} y ${num1} NO dan como resultado ${num3}`)
    }else if((num2 + num1) == num3){
        console.log(`La suma de ${num2} y ${num1} SI da como resultado ${num3}`)
        numeroElegido = num3;
    }

    });

    ejercicio05Resultado.innerHTML = `${numeroElegido} es la suma suma de los otros dos números`; 

});




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




















