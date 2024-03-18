/* Crea una función que calcule el índice de masa corporal (IMC) de una persona a partir de su altura 
en metros y peso en kilogramos, que se recibirán como parámetros. */
/* function verificarIntento (){
    let peso = +prompt('Ingrese su peso en kilogamos')
    let altura = +prompt('Ingrese su altura en metros')

    IMC= Math.floor(peso/Math.pow(altura, 2))

    alert(`Su IMC es ${IMC}`)
} */

/* Crea una función que calcule el valor del factorial de un número pasado como parámetro.*/

/* function verificarIntento() {
    let numero = +prompt('Ingrese un número para calcular su factorial:');
    function calcularFactorial(numero) {
        let factorial = 1;
        for (let i = 1; i <= numero; i++) {
            // factorial *= i;
            factorial = factorial*i;
        }
        return factorial;
    }
    let resultado = calcularFactorial(numero);

    alert(`El factorial de ${numero} es ${resultado}`);
}
verificarIntento(); */

/* Crea una función que convierta un valor en dólares, pasado como parámetro, y devuelva el valor 
equivalente en reales(moneda brasileña,si deseas puedes hacerlo con el valor del dólar en tu país). 
Para esto, considera la cotización del dólar igual a R$4,80. */
/* function verificarIntento(){
    let dinero = +prompt('Ingrese la cantidad de dolares a cambiar');
    cambio=parseFloat((dinero*4.99).toFixed(2));

    alert(`El cambio de dolares a reales es ${cambio}`)

} 
verificarIntento() */

/* Crea una función que muestre en pantalla el área y el perímetro de una sala rectangular, 
utilizando la altura y la anchura que se proporcionarán como parámetros. */
/* function verificarIntento(){
    let altura = +prompt('Ingrese la altura del rectangulo')
    let base = +prompt('Ingrese la base del rectangulo')

    area = Math.floor(base*altura);
    perimetro = Math.floor(2*base + 2*altura);

    alert(`El area del rectangulo es ${area} y el perimetro es ${perimetro}`)

}
verificarIntento(); */

/* Crea una función que muestre en pantalla el área y el perímetro de una sala circular, 
utilizando su radio que se proporcionará como parámetro. Considera Pi = 3,14. */
/* function verificarIntento(){
    let radio = +prompt('Ingrese la radio de la circunferencia');
    let pi = 3.14;

    area = pi*Math.pow(radio,2).toFixed(2);
    perimetro=2*pi*radio;

    alert(`El area del circulo es ${area} y el perimetro es ${perimetro}`)
}
verificarIntento(); */

/* Crea una función que muestre en pantalla la tabla de multiplicar de un número dado como parámetro. */

function verificarIntento(numero) {
    for (let i = 1; i <= 12; i++) {
        console.log(`${numero} x ${i} = ${numero * i}`);
    }
}
let numeroUsuario = +prompt('Ingrese un número');
verificarIntento(numeroUsuario);