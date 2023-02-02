// dado un array, utiliza reduce para crear un array con el doble de sus valores

const numeros = [71, 41, 19, 88, 3, 65];

/*  */
const dobleNumeros = numeros.reduce((arrAcumulador, numero) => {
    arrAcumulador.push(numero * 2); //añade los items al array
    console.log(arrAcumulador);
    return arrAcumulador; //devuelve el array 
}, []);



// con spread operator
/* 
const dobleNumeros = numeros.reduce((arrAcumulador, numero) => {
    console.log([...arrAcumulador, numero *2])
    return [...arrAcumulador, numero *2];
}, []); */

console.log(dobleNumeros);

