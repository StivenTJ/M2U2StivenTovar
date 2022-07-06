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

//ejercicio("Mi nombre es Harley Stiven Tovar Jimenez");

const ejercicio_2 = (parametro) => {
    console.log(`Institución: ${parametro.name}`);
    console.log(`Nombre: ${parametro.sites.site1.course1.aula2.student2.name}`);
    console.log(`Apellido: ${parametro.sites.site1.course1.aula2.student2.lastName}`);
    console.log(`Edad: ${parametro.sites.site1.course1.aula2.student2.age}`);
}

const institutions = {
    name: "Universidad de la vida",
    location: "Auto educación",
    sites: {
        site1: {
            course1: {
                aula1: {
                    student1: {
                        name: "Fredy",
                        lastName: "Caseres",
                        age: 21,
                    },
                    student2: {
                        name: "Hector",
                        lastName: "Ramirez",
                        age: 28,
                    },
                    student3: {
                        name: "Marcos",
                        lastName: "Pedroza",
                        age: 18,
                    },
                },
                aula2: {
                    student1: {
                        name: "Carlos",
                        lastName: "Mejia",
                        age: 30,
                    },
                    student2: {
                        name: "Pedro",
                        lastName: "Rios",
                        age: 35,
                    },
                    student3: {
                        name: "Oscar",
                        lastName: "Arcos",
                        age: 18,
                    },
                },
            }
        }
    }
}
let { name, lastName, age } = institutions.sites.site1.course1.aula1.student1;
console.log(`El nombre del estudiante es ${name} ${lastName} edad ${age}`);
//ejercicio_2(institutions);