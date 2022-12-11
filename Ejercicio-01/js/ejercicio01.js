
// EJERCICIO #01
//  * Escribir una función que tome un arreglo de números y
// *devuelva el número mayor de la lista. Ejemplo del arreglo : [3, 5, 7, 1, 6]


//FOR EACH


let numeros = [3, 5, 7, 1, 6];

let numeroMayor = null;

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


console.log(`El numero mayor es:`)
console.log(numeroMayor)







