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
var paisesIniciales = ["hourLondres", "hourLosAngeles", "hourNY", "hourSidney"];
var horasDiferenciaPaisesIniciales = [-1, -9, -6, 8]

var arrayPaises = ['Roma', 'Bruselas', 'Brasilia', 'Bogotá', 'Pekin', 'Helsinki', 'Atenas', 'Tokio']
var arrayHorasDiferenciaPaises = [0, 0, -5, -7, 6, 1, 1, 7];
//array con los paises que podremos añadir y sus respectivas horas con las mismas posiciones

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

    //bucle que recorre el array de los paises iniciales y tambien su respectiva hora
    for (var i = 0; i < paisesIniciales.length; i++) {
        let hoursCity = parseInt(hours) + horasDiferenciaPaisesIniciales[i];
        hoursCity = ponerCeros(hoursCity);
        document.getElementById(paisesIniciales[i]).innerHTML = (hoursCity + ':' + minutes)
            //los muestra por pantalla 
    }
    /*let hoursLondres = parseInt(hours) - 1;
    hoursLondres = ponerCeros(hoursLondres);
    document.getElementById("hourLondres").innerHTML = (hoursLondres + ':' + minutes)
    let hourLosAngeles = parseInt(hours) - 9;
    hourLosAngeles = ponerCeros(hourLosAngeles);
    document.getElementById("hourLosAngeles").innerHTML = (hourLosAngeles + ':' + minutes)
    let hourNY = parseInt(hours) - 6;
    hourNY = ponerCeros(hourNY);
    document.getElementById("hourNY").innerHTML = (hourNY + ':' + minutes)
    let hourSidney = parseInt(hours) + 6;
    hourSidney = ponerCeros(hourSidney);
    document.getElementById("hourSidney").innerHTML = (hourSidney + ':' + minutes)
*/
    setTimeout('devuelveHora()', 1000) //cada sec se actualiza
}

function ponerCeros(i) {
    if (i < 10) {
        i = '0' + i;
    }
    return i;
}

//funcion que se ejecuta al pulsar el boton de añadir
function addTime() {
    console.log('Click boton');
    var addCiudad = prompt('¿Que ciudad deseas agregar? Solo puede seleccionar una de la siguiente lista', arrayPaises);
    console.log(addCiudad);
    let noValido = /\s/;
    //solo puedes elegir una ciudad.. detecta que no hay espacios
    if (noValido.test(addCiudad)) {
        alert('Debe seleccionar solo una ciudad');
    } else {
        console.log(addCiudad);
        //si el pais seleccionado esta en el array..
        if (arrayPaises.includes(addCiudad)) {
            var opcionConfirmar = confirm('¿Desea agregar ' + addCiudad + '?');
            if (opcionConfirmar == true) {
                console.log('Se va a añadir ' + addCiudad);
                let positionCity = arrayPaises.indexOf(addCiudad); //posicion de la ciudad seleccionada en el array
                console.log(addCiudad + ' ocupa la posicion ' + positionCity + ' en el array');
                let horaCorrespondiente = arrayHorasDiferenciaPaises[positionCity]; //posicion de la hora correspondiente a la ciudad dentro del array de horas
                console.log('La posicion de la hora es: ' + horaCorrespondiente);
                mostrarCiudad(positionCity); //funcion con el parametro de la posicion de la ciudad en el array
                //eliminamos del array tanto la ciudad como su respectiva hora ya seleccionadas, para que el usuario no pueda volver a elegir dicha ciudad
                arrayPaises.splice(positionCity, 1);
                arrayHorasDiferenciaPaises.splice(positionCity, 1);
            } else {
                console.log('NOOO se va a añadir ' + addCiudad);
            }
        } else {
            alert('Selecciona una ciudad correcta'); //si el usuario no escribe la ciudad correctamente
        }
    }
}

function mostrarCiudad(i) {
    //aqui mostraremos cada ciudad con su respectiva hora
    let hour = arrayHorasDiferenciaPaises[i];
    console.log('Hora de diferencia con nuestra hora actual: ' + hour);
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
    var nodeTextForh3Hour = document.createTextNode(devuelveHoraNuevaCiudad(hour)); //llamamos a la funcion con el parametro de la hora
    nodeh3Hour.appendChild(nodeTextForh3Hour);

    var hr = document.createElement("hr");
    //añadimos todos al document
    document.getElementById("sectionHours").appendChild(nodeh4);
    document.getElementById("sectionHours").appendChild(nodeh3);
    document.getElementById("sectionHours").appendChild(nodeh3Hour);
    document.getElementById("sectionHours").appendChild(hr);
}

function devuelveHoraNuevaCiudad(hour) {
    //creamos la hora para las nuevas ciudades
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();

    hours = hours + hour; //le sumamos la hora del pais a la hora actual (la nuestra)

    hours = ponerCeros(hours);
    minutes = ponerCeros(minutes);
    return (hours + ':' + minutes);
}

devuelveHora();