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

var arrayPaises = ['Roma', 'Bruselas', 'Brasilia', 'Bogotá', 'Pekin', 'Helsinki', 'Atenas', 'Tokio']
var arrayHorasDiferenciaPaises = [0, 0, -5, -7, 6, 1, 1, 7];

function devuelveHora() {
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    //let seconds = date.getSeconds();
    //nos encargamos de poner los ceros si es menor de 10
    hours = ponerCeros(hours);
    minutes = ponerCeros(minutes);
    //seconds = ponerCeros(seconds);
    //document.getElementById("hourSpain").innerHTML = (hours + ':' + minutes + ':' + seconds)
    document.getElementById("hourSpain").innerHTML = (hours + ':' + minutes)

    let hoursLondres = parseInt(hours) - 1;
    hoursLondres = ponerCeros(hoursLondres);
    document.getElementById("hourLondres").innerHTML = (hoursLondres + ':' + minutes)
    let hourLosAngeles = parseInt(hours) - 9;
    hourLosAngeles = ponerCeros(hourLosAngeles);
    document.getElementById("hourLosAngeles").innerHTML = (hourLosAngeles + ':' + minutes)
    let hourNY = parseInt(hours) - 6;
    hourNY = ponerCeros(hourNY);
    document.getElementById("hourNY").innerHTML = (hourNY + ':' + minutes)
    let hourSidney = parseInt(hours) - 6;
    hourSidney = ponerCeros(hourSidney);
    document.getElementById("hourSidney").innerHTML = (hourSidney + ':' + minutes)

    setTimeout('devuelveHora()', 1000)
}

function ponerCeros(i) {
    if (i < 10) {
        i = '0' + i;
    }
    return i;
}

devuelveHora();

function addTime() {
    console.log('Click boton');
    var addCiudad = prompt('¿Que ciudad deseas agregar?. Selecciona una de la siguiente lista', arrayPaises);
    console.log(addCiudad);
    let noValido = /\s/;
    if (noValido.test(addCiudad)) {
        alert('Debe seleccionar solo una ciudad')
    } else {
        console.log(addCiudad);
        if (arrayPaises.includes(addCiudad)) {
            confirm('¿Desea agregar ' + addCiudad + '?');
            let positionCity = arrayPaises.indexOf(addCiudad);
            console.log(addCiudad + ' ocupa la posicion ' + positionCity + ' en el array')
            let horaCorrespondiente = arrayHorasDiferenciaPaises[positionCity]
            console.log('La posicion de la hora es: ' + horaCorrespondiente);

            mostrarCiudad(positionCity);
        } else {
            alert('Selecciona una ciudad correcta')
        }
    }
}

function mostrarCiudad(i) {
    //aqui mostraremos cada ciudad con su respectiva hora
    let hour = arrayHorasDiferenciaPaises[i];
    console.log('Hora de diferencia: ' + hour);
    //cremaos el h4 y le asignamos la clase
    var nodeh4 = document.createElement("h4");
    nodeh4.className = "titleGray";
    var textnodeForH4;
    //si es mayor que 0 le añadiremos el simbolo '+'
    if (hour >= 0) {
        textnodeForH4 = document.createTextNode('Hoy, +' + arrayHorasDiferenciaPaises[i] + 'H');
    } else {
        textnodeForH4 = document.createTextNode('Hoy, ' + arrayHorasDiferenciaPaises[i] + 'H');
    }
    nodeh4.appendChild(textnodeForH4);

    //añadiremos el h3 donde se ve el nombre de la ciudad
    var nodeh3 = document.createElement("h3");
    nodeh3.className = "titleWhite";
    var textnodeForH3 = document.createTextNode(arrayPaises[i]);
    nodeh3.appendChild(textnodeForH3);

    //creamos el h3 donde se vera la hora
    var nodeh3Hour = document.createElement("h3");
    nodeh3Hour.className = "titleWhite boxTime";
    var nodeTextForh3Hour = document.createTextNode('test');
    nodeh3Hour.appendChild(nodeTextForh3Hour);

    var hr = document.createElement("hr");
    //creamos el h3 y los añadimos todos al document
    document.getElementById("sectionHours").appendChild(nodeh4);
    document.getElementById("sectionHours").appendChild(nodeh3);
    document.getElementById("sectionHours").appendChild(nodeh3Hour);
    document.getElementById("sectionHours").appendChild(hr);
}