// Crea una lista vacía llamada "listaGenerica".
/* let listaVacia= [];
console.log(listaVacia) */

/* Crea una lista de lenguajes de programación llamada "lenguagesDeProgramacion 
con los siguientes elementos: 'JavaScript', 'C', 'C++', 'Kotlin' y 'Python'. */

/* let listaLenguajes = [];

function verificarIntento(){
    listaLenguajes.push('JavaScript');
    listaLenguajes.push('C');
    listaLenguajes.push('C++');
    listaLenguajes.push('Kotlin');
    listaLenguajes.push('Python');

    console.log(listaLenguajes);   
} */

/* Agrega a la lista "lenguagesDeProgramacion los siguientes elementos: 'Java', 'Ruby' y 'GoLang'. */
/* let listaLenguajes = [];

function verificarIntento(){
    listaLenguajes.push('JavaScript');
    listaLenguajes.push('C');
    listaLenguajes.push('C++');
    listaLenguajes.push('Kotlin');
    listaLenguajes.push('Python');
    listaLenguajes.push('Java');
    listaLenguajes.push('Ruby');
    listaLenguajes.push('GoLang');

    console.log(listaLenguajes); 
} */

/* Crea una función que muestre en la consola todos los elementos de la lista "lenguagesDeProgramacion. */
/* let listaLenguajes = [];

function verificarIntento(){
    listaLenguajes.push('JavaScript');
    listaLenguajes.push('C');
    listaLenguajes.push('C++');
    listaLenguajes.push('Kotlin');
    listaLenguajes.push('Python');
    listaLenguajes.push('Java');
    listaLenguajes.push('Ruby');
    listaLenguajes.push('GoLang');

    console.log(listaLenguajes);
    console.log(listaLenguajes.length); 
} */

/* Crea una función que muestre en la consola todos los elementos de la lista "lenguagesDeProgramacion 
en orden inverso. */
/* let listaLenguajes = [];

function verificarIntento(){
    listaLenguajes.push('JavaScript');
    listaLenguajes.push('C');
    listaLenguajes.push('C++');
    listaLenguajes.push('Kotlin');
    listaLenguajes.push('Python');
    listaLenguajes.push('Java');
    listaLenguajes.push('Ruby');
    listaLenguajes.push('GoLang');

    listaLenguajes.reverse();

    console.log(listaLenguajes);
    console.log(listaLenguajes.length); 
} */

/* Crea una función que calcule el promedio de los elementos en una lista de números. */
/* let listElementos=[]
let numero=+prompt('Ingrese la cantidad de numeros')

function verificarIntento(){
    let suma =0;

    for (let i = 0; i < numero; i++) {
        listElementos.push(Math.floor(Math.random()*10)+1);
        // let elemento= +prompt(`Ingrese el número ${i+1}`);
        // listElementos.push(elemento);
        // suma += elemento;
        suma = suma + listElementos[i];
    }

    promedio=(suma/numero).toFixed(2);

    console.log(listElementos)
    console.log(`El promedio de los elementos es ${promedio}`)
}
verificarIntento(); */

/* Crea una función que muestre en la consola el número más grande y el número más pequeño en una lista. */
/* function verificarIntento() {
    
    let listaNumeros = [];
    let cantidadNumeros = 10; // Cantidad de números aleatorios a generar

    // Generar números aleatorios y agregarlos al array
    for (let i = 0; i < cantidadNumeros; i++) {
        let numeroAleatorio = Math.floor(Math.random() * 100); // Genera un número aleatorio entre 0 y 100
        listaNumeros.push(numeroAleatorio);
    }

    // Encontrar el número más pequeño y el número más grande
    let numeroMasPequeno = listaNumeros[0];
    let numeroMasGrande = listaNumeros[0];

    for (let i = 1; i < listaNumeros.length; i++) {
        if (listaNumeros[i] < numeroMasPequeno) {
            numeroMasPequeno = listaNumeros[i];
        }
        if (listaNumeros[i] > numeroMasGrande) {
            numeroMasGrande = listaNumeros[i];
        }
    }

    // Mostrar resultados en consola
    console.log(`Lista de números generados: ${listaNumeros}`);
    console.log(`El número más pequeño es: ${numeroMasPequeno}`);
    console.log(`El número más grande es: ${numeroMasGrande}`);
}

verificarIntento(); */

/* Crea una función que devuelva la suma de todos los elementos en una lista. */
/* let listElementos=[]
let numero=+prompt('Ingrese la cantidad de numeros')

function verificarIntento(){
    let suma=0;

    for (let i = 0; i < numero; i++) {
        listElementos.push(Math.floor(Math.random()*10)+1);
        // let elemento= +prompt(`Ingrese el número ${i+1}`);
        // listElementos.push(elemento);
        // suma += elemento;
        suma = suma + listElementos[i];
    }
    console.log(listElementos)
    console.log(`La suma de todos los elementos es ${suma}`)
}
verificarIntento(); */

/* Crea una función que devuelva la posición en la lista donde se encuentra un elemento pasado como 
parámetro, o -1 si no existe en la lista. */

/* function verificarIntento   (elemento) {
    let lista = [];
    let cantidadElementos = 10; // Cantidad de elementos en el array aleatorio

    // Generar array aleatorio
    for (let i = 0; i < cantidadElementos; i++) {
        lista.push(Math.floor(Math.random() * 10)); // Números aleatorios entre 0 y 100
    }
    console.log(lista)

    // Buscar posición del elemento en el array
    for (let i = 0; i < lista.length; i++) {
        if (lista[i] === elemento) {
            return i; // Devuelve la posición si encuentra el elemento
        }
    }
    return -1; // Devuelve -1 si no encuentra el elemento
}

// Elemento a buscar
let elemento = 8;

// Ejemplo de uso
let posicion = verificarIntento(elemento);

if (posicion !== -1) {
    console.log(`El elemento ${elemento} se encuentra en la posición ${posicion}`);
} else {
    console.log(`El elemento ${elemento} no se encuentra en el array`);
} */

/* Crea una función que reciba dos listas de números del mismo tamaño y devuelva una nueva lista 
con la suma de los elementos uno a uno. */

/* function verificarIntento(lista1, lista2) {
    if (lista1.length !== lista2.length) {
        throw new Error("Las listas deben tener la misma longitud");
    }

    let sumaLista = [];
    for (let i = 0; i < lista1.length; i++) {
        sumaLista.push(lista1[i] + lista2[i]);
    }

    return sumaLista;
}

// Ejemplo de uso
let lista1 = [1, 2, 3, 4, 5,8];
let lista2 = [6, 7, 8, 9, 10,9];

let sumaLista = verificarIntento(lista1, lista2);
console.log(sumaLista); // Output: [7, 9, 11, 13, 15] */

/* Crea una función que reciba una lista de números y devuelva una nueva lista con el cuadrado de cada número. */
function verificarIntento(lista) {
    let listaCuadrados = [];
    for (let i = 0; i < lista.length; i++) {
        listaCuadrados.push(Math.pow(lista[i], 2)); // Agrega el cuadrado del número a la listaCuadrados
    }
    return listaCuadrados;
}

// Ejemplo de uso
let lista = [1, 2, 3, 4, 5];
let listaCuadrados = verificarIntento(lista);
console.log(listaCuadrados); // Output: [1, 4, 9, 16, 25]