/*  ********************************
 * @title Ejercicio examen js
 * @version 0.0.1
 * @author Tomeu Barceló
 ******************************** */

/*
Crear un App Web: Reloj Mundial
(Adjunto un Mockup)
En el mockup, tenéis lo mínimo que quiero que haga esta app, que es mantener la hora de cinco países.
También se lleva una cuenta de la diferencia horaria, teniendo de base la primera que es (Madrid).

Lo más importante es que salga bien la lógica. Que funcione.
Os sugiero enfocaros, desde lo principal hacia los detalles.

El Mockup, como podéis ver lo enfoca a un entorno móvil.
Si os da tiempo, perfeccionar esa idea, pero lo principal es el código de Javascript y que un usuario, pueda ver como funciona.

Al final, hay un botón (cruz a la derecha).
Donde podéis integrar más países que esos cinco.
*/


function devuelveHora() {
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    document.getElementById("hourSpain").innerHTML = (hours + ':' + minutes + ':' + seconds)
    setTimeout('devuelveHora()', 1000)
}

devuelveHora();