const modoOscuroToggle = document.getElementById('modoOscuro');
const body = document.body;
const conatiner = document.querySelector('.container')
const container = document.querySelector('.contenedor')
var elementosPink = document.getElementsByClassName('pink')
var elementosGreen = document.getElementsByClassName('number')
const redButton = document.querySelector('.red')
const equalButton = document.querySelector('.equal')
const contNumber = document.querySelector('.num')
const botonChange = document.querySelector('.boton-change');

//AL DARLE CLICK CAMBIARA TODAS LAS CLASES AÑADIENDO LAS QUE CONTIENEN LOS PARENTESIS
function modoBlack(){
    botonChange.classList.toggle('dark-buton-color');
    body.classList.toggle('dark-mode');
    conatiner.classList.toggle('dark-conatiner')
    contNumber.classList.toggle('dark-contener-number')
    container.classList.toggle('dark-container');
    container.classList.toggle('dark-container-calcu');
    redButton.classList.toggle('red-dark')
    equalButton.classList.toggle('equal-dark')
    for (let i = 0; i < elementosPink.length; i++) {
        elementosPink[i].classList.toggle('pink-dark')
    }
    for(let i = 0; i<elementosGreen.length; i++){
        elementosGreen[i].classList.toggle('green-dark')
    }
}
//GUARDAR CONFIGURACIONES DE MODO OSCURO

// Verificar si hay una preferencia almacenada en localStorage
if (localStorage.getItem("oscuro") === "activado") {
    modoBlack()
  }
if (modoBlack()==true) {
    localStorage.setItem("oscuro","activado")
}else{
    localStorage.setItem("oscuro","desactivado")
}



var pantalla = document.getElementById('screen')
//OPERACIONES
var botonDivicion = document.getElementById('division')
    botonDivicion.addEventListener('click',function(){
    var valorActual = pantalla.value
    valorActual ? pantalla.value = valorActual+'/': console.log("escribe")
    console.log(pantalla.value)
});

var botonmultiplicacion = document.getElementById('Multiplicacion') 
    botonmultiplicacion.addEventListener('click',function(){
    var valorActual = pantalla.value
    valorActual ? pantalla.value = valorActual+'*': console.log("escribe")
    console.log(pantalla.value)
});
var botonDelete = document.getElementById('delete');
botonDelete.addEventListener('click', function() {
    var valorActual = pantalla.value;
    if (valorActual.length > 0) {
        // Eliminar el último carácter usando el método slice()
        valorActual = valorActual.slice(0, -1);
        pantalla.value = valorActual;
        console.log(pantalla.value);
    } else {
        console.log("ESCRIBE ALGO PARA BORRAR");
    }
});


var botonResta = document.getElementById('resta')
    botonResta.addEventListener('click',function(){
    var valorActual = pantalla.value
    valorActual ? pantalla.value = valorActual+'-': console.log("escribe")
    console.log(pantalla.value)
});
var botonSuma = document.getElementById('suma')
    botonSuma.addEventListener('click',function(){
    var valorActual = pantalla.value
    valorActual ? pantalla.value = valorActual+'+': console.log("escribe")
    console.log(pantalla.value)
});




var clear = document.getElementById('clear')
clear.addEventListener('click',function(){
   pantalla.value = ""
    });

//NUMEROS 

var uno = document.getElementById('one')
uno.addEventListener('click',function (){
    valorActual = pantalla.value
    valorActual += "1"
    pantalla.value = valorActual
    })

var dos = document.getElementById('two')
dos.addEventListener('click',function(){
    valorActual = pantalla.value
    valorActual +="2"
    pantalla.value = valorActual
})
var tres = document.getElementById('three')
tres.addEventListener('click',function(){
    valorActual = pantalla.value
    valorActual +="3"
    pantalla.value = valorActual
})
var cuatro = document.getElementById('four')
cuatro.addEventListener('click',function(){
    valorActual=pantalla.value
    valorActual+="4"
    pantalla.value = valorActual
})
var cinco = document.getElementById('five')
cinco.addEventListener('click',function(){
    valorActual=pantalla.value
    valorActual+="5"
    pantalla.value = valorActual
})
var seis = document.getElementById('six')
seis.addEventListener('click',function(){
    valorActual = pantalla.value
    valorActual+="6"
    pantalla.value = valorActual
})
var siete = document.getElementById('seven')
siete.addEventListener('click',function(){
    valorActual = pantalla.value
    valorActual += "7"
    pantalla.value = valorActual
})
var ocho = document.getElementById('eight')
ocho.addEventListener('click',function(){
    valorActual = pantalla.value
    valorActual+="8"
    pantalla.value = valorActual
})
var nueve = document.getElementById('nine')
nueve.addEventListener('click', function () {
    valorActual =pantalla.value
    valorActual+="9";
    pantalla.value=valorActual
    });
var cero = document.getElementById('cero')
cero.addEventListener('click', function () {
    valorActual =pantalla.value
    valorActual+= "0";
    pantalla.value=valorActual
    });
var doblecero = document.getElementById('doublecero')
doblecero.addEventListener("click",function() {
    valorActual = pantalla.value
    valorActual += "00"
    pantalla.value = valorActual
    });
var punto = document.getElementById('point')
punto.addEventListener('click',function(){
    valorActual = pantalla.value
    valorActual += "."
    pantalla.value = valorActual
})

//OPERACION FINAL
var igual = document.getElementById('equal')
igual.addEventListener ('click' , function (){
    operacion = pantalla.value
    console.log(operacion)
    operacion = eval(operacion)
    console.log(operacion)
    pantalla.value=operacion
});
