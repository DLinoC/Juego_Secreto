let numeroSecreto=0;
let intentos=0;
let linstaNumerosSorteados=[];
let numeroMaximo=10;

console.log(numeroSecreto)

function asignarTextoElemento(elemento, texto){
    let elementoHTML= document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;

}
function verificarIntento(){
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    /* console.log(typeof(numeroDeUsuario));
    console.log(numeroSecreto);
    console.log(typeof(numeroSecreto));
    console.log(numeroDeUsuario); 
    console.log(numeroDeUsuario === numeroSecreto); */
    // console.log(intentos);

    if(numeroDeUsuario === numeroSecreto) {
        asignarTextoElemento('p',`Acertaste el número en ${intentos} ${(intentos ===1) ? 'vez' : 'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else{
        //El usuario no acertó.
        if(numeroDeUsuario>numeroSecreto){
            asignarTextoElemento('p','El número secreto es menor');
        } else {
            asignarTextoElemento('p','El número secreto es mayor');
        }
        intentos++;
        limpiarCaja();
    }
    // alert('Click desde el botón');
    return;
}

function limpiarCaja(){
    // let valorCaja = document.querySelector('#valorUsuario');
    document.querySelector('#valorUsuario').value = '';
    // valorCaja.value='';
}

function generarNumeroSecreto() {
    // return Math.floor(Math.random()*10)+1;
    let numeroGenerado=Math.floor(Math.random()*numeroMaximo)+1;

    console.log(numeroGenerado);
    console.log(linstaNumerosSorteados);
    //Si ya sorteamos todos los números
    if(linstaNumerosSorteados.length == numeroMaximo){
        asignarTextoElemento('p','Ya se sortearon todos los números posibles');
    } else {
        //Sí el número generado esta incluido en la lista
        if (linstaNumerosSorteados.includes(numeroGenerado)){
            return generarNumeroSecreto();
        } else {
            linstaNumerosSorteados.push(numeroGenerado)
            return numeroGenerado;
        }  
    }
}

function condicionesIniciales(){
    asignarTextoElemento('h1','Juego del Número Secreto');
    asignarTextoElemento('p',`Indica un número del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos=1;
}

function reiniciarJuego(){
    //Limpiar la caja
    limpiarCaja();
    //Indicar el mensaje de intervalo de números
    //Generar el número aleatorio
    //Inicializar el número de intentos
    condicionesIniciales();
    //Deshabilitar el botón de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled','true');
}

condicionesIniciales();


