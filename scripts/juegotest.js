

 let entrada = ""
 let textoo = []
 while (entrada != "ESC") {
     entrada = prompt("Ingrese las palabras que desee, cuando termine presione 'ESC'");
         textoo.push (" " + entrada)

 }
 alert ("Tu poema es:" + textoo)

 var seguir = ""
 var nuevotexto = []
 seguir =  prompt("desea seguir jugando?")
 if (seguir = "si") {

     var masjuego = prompt ("Ahora agregue conectores a su poema y otorguele vida, recuerde que la lista de palabras es" + textoo + "." + "Algunos ejemplos de conectores son: Sobre, en, desde, arriba de, abajo de, quien, entonces, la, el, etc.Pero agregar algunas palabras entre el medio puede ayudar mucho.Libera tu creatividad!")
    nuevotexto.push (" " + masjuego)
    }

 alert(nuevotexto)