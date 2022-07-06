const cambiarNumero = (num1, num2) => {
        console.log(`${num1} Esta variable es num1`);
        console.log(`${num2} Esta variable es num2`);
        let aux;
        aux = num1;
        num1 = num2;
        num2 = aux;
        console.log(`Ahora num1 = ${num1} y num2 = ${num2}`);
    }
    // cambiarNumero(12, 43);

/* 
    
1. Leer una cadena de texto pasada por parámetros a una función
- generar un array con la función split().
- mostrar la siguiente información: 
- Número de palabras 
- primera palabra 
- última palabra 
- las palabras colocadas en orden inverso 
- las palabras ordenadas de la “a” a la “z” 
- las palabras ordenadas de la “z” a la “a”. 
Sacar toda esta información en consola.

*/

const ejercicio = (palabras) => {
    let palabraMinuscula = palabras.toLowerCase();
    let arrayPalabras = palabraMinuscula.split(" ");
    let primeraPalabra = arrayPalabras[0];
    let ultimaPalabra = arrayPalabras[arrayPalabras.length - 1];
    let numeroPalabras = arrayPalabras.length;
    let ordenInverso = arrayPalabras.reverse().join();
    let ordenAlfabetico = arrayPalabras.sort().join();
    let ordenAlfabeticoInverso = arrayPalabras.sort().reverse().join();
    console.log(`Número de Palabras: ${numeroPalabras}`);
    console.log(`Primera Palabra: ${primeraPalabra}`);
    console.log(`Última Palabra: ${ultimaPalabra}`);
    console.log(`Orden Inverso: ${ordenInverso}`);
    console.log(`De la A a la Z: ${ordenAlfabetico}`);
    console.log(`De la Z a la A: ${ordenAlfabeticoInverso}`);
}

ejercicio("Mi nombre es Harley Stiven Tovar Jimenez");