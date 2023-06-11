class Jugador {
    constructor(nombre, clase) {
        this.nombre = nombre
        this.clase = clase
    } 
}
var jugador1 = new Jugador ("mario", "jugador1")
var jugador2 = new Jugador ("luigi", "jugador2")


class Entrada {
    constructor(jugador, palabra) {
        this.jugador = jugador
        this.palabra = palabra
    }
}
 var entrada = new Entrada (jugador1, "pompon")
 

 var entradas = []
/*entradas.push(entrada)
 entradas.push(new Entrada(jugador1,"ciclopeo"))
 entradas.push(new Entrada(jugador1, prompt("ingrese palabra")))*/

 let i = 0
 var texto = "" 
 /*let palabra = ""
 while (palabra != "ESC") {
    palabra = prompt("Ingrese una palabra o frase");
   if(palabra != "ESC"){
        entradas.push (new Entrada(jugador1, palabra))
   }
}*/

//loop de escritura del texto
 function escrituraDeTexto (){
 while (i<entradas.length){
  var poema =  document.getElementById("poema")
    poema.innerHTML += "<p class="+ entradas[i].jugador.clase +">" + entradas[i].palabra + "</p>"
    i++
 }

}
var boton = document.getElementById("frmEnviar")
boton.addEventListener("submit", agregapalabra)
var jugadorActual = jugador1
function agregapalabra () {
   var txtpalabra = document.getElementById("txtpalabra")
   
    //new Entrada(jugador1, txtpalabra)
    console.log(txtpalabra.value)
    entradas.push(new Entrada (jugadorActual, txtpalabra.value))
    txtpalabra.value="";
    if(jugadorActual == jugador1)
    {
        jugadorActual = jugador2
    }
    else
    {
        jugadorActual = jugador1
    }
    event.preventDefault();
    return false;
}
    
var botonmostrar = document.getElementById("botonmostrar")
botonmostrar.addEventListener("click", escrituraDeTexto)


 

