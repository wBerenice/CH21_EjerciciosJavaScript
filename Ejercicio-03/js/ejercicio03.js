

let arreglo01 = [1, 22, 5, 17, 10, 5, 40, 5,]; //El número 5 se encuentra más de una vez
let arreglo02 = [7, 41, 5, 7, 10, 13, 2]; //El número 7 se encuentra más de una vez
let arreglo03 = [1, 22, 5, 14, 24, 31, 27, 15, 105]; //No hay números repetidos



function calcularRepetido(arreglo) {
    let numeroRepetido = 0;

    for (let index = 0; index < arreglo.length; index++) {
        for (let j = 1; j < arreglo.length; j++) {
            if (arreglo[index] == arreglo[j]) {
                numeroRepetido = arreglo[index];
            };
        }
    }
    if (numeroRepetido != 0) {
        return `El número ${numeroRepetido} se encuentra más de una vez`;
    } else {
        return `El arreglo ${arreglo} no tiene números repetidos`;
    }
}

console.log(calcularRepetido(arreglo01));
console.log(calcularRepetido(arreglo02));
console.log(calcularRepetido(arreglo03));






