// Crear una función que muestre "¡Hola, mundo!" en la consola.

/* function verificarIntento(){
    // let mostrarTexto = '¡Hola, Mundo!'
    console.log('¡Hola Mundo!');
} */

// document.getElementById('intento').addEventListener('click',mostrarTexto);

/*Crear una función que reciba un nombre como parámetro y muestre "¡Hola, [nombre]!"
 en la consola.*/
/* function verificarIntento(){
    let nombre=prompt('Ingrese su nombre');
    // alert(`¡Hola, ${nombre} !`);
    console.log(`¡Hola, ${nombre}`);
 } */

/*Crear una función que reciba un número como parámetro y devuelva el doble 
de ese número.*/
/* function verificarIntento(){
    let numero=+prompt('Por favor, ingrese un número')
    resultado=numero*2;
    alert(`El doble de ${numero}, es ${resultado}`);
}*/

/*Crear una función que reciba tres números como parámetros y devuelva su promedio.*/
/*function verificarIntento(){
    let num1=+prompt('Ingrese el primer número');
    let num2=+prompt('Ingrese el segundo número');
    let num3=+prompt('Ingrese el tercer número');
    resultado=Math.floor((num1+num2+num3)/3);
    alert(`El promedio de ${num1}, ${num2} y ${num3} es ${resultado}`);
}*/

/*Crear una función que reciba dos números como parámetros y devuelva el mayor 
de ellos.*/
function verificarIntento(){
    let num1=+prompt('Ingrese el primer número');
    let num2=+prompt('Ingrese el segundo número');

    if (num1>num2){
        resultado=num1;
        return alert(`El número mayor es ${resultado}`);
    } else{
        resultado2=num2;
        return alert(`El número mayor es ${resultado2}`);
    }
} 

/*Crear una función que reciba un número como parámetro y devuelva el resultado 
de multiplicar ese número por sí mismo.*/

/* function verificarIntento(){
    let numero=+prompt('Por favor, ingrese un número')
    resultado=numero*numero;
    alert(`El doble de ${numero}, es ${resultado}`);
} */