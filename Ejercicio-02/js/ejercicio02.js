

let numeros = [-1, 3, 4, 2, 6];

let numeroMenor = null;

numeros.forEach((numero) => {

    let numeroActual = numero;

    if(numeroMenor == null){
        numeroMenor = numeroActual;
        console.log(`Se reasignó la variable numeroMenor a ${numeroMenor}`)
    }else if(numeroActual < numeroMenor){
        numeroMenor = numeroActual;
        console.log(`El valor de numeroMenor ahora es ${numeroMenor}`)
    }else if(numeroActual > numeroMenor){
        console.log(`${numeroActual} es mayor que ${numeroMenor}`)
    }else{
        console.log(`NO ES UN NÚMERO`);
    }
}
);

console.log(`En toda la lista, el número menor es:`)
console.log(numeroMenor)





