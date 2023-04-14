//Aqui tambien llamo mi txt del formarto jason para poder insertar las preguntas con la lista de ocion multiple
const txt = '{"FIPREGUNTA":1,"FCPREGUNTA":"¿En dónde se originaron los juegos olímpicos? ","FCA":"Grecia- Atenas ","FCB":"Italia- Roma ","FCC":"Grecia-Esparta ","FCD":"Grecia-Roma ","FCE":"Grecia-Olimpia  ","FCRESPUESTA":"E"}'
const obj = JSON.parse(txt);

document.getElementById("encabezadoPregunta").innerHTML = "Pregunta # " + obj.FIPREGUNTA;
document.getElementById("pregunta").innerHTML = obj.FCPREGUNTA;
document.getElementById("respuestaA").innerHTML = obj.FCA;
document.getElementById("respuestaB").innerHTML = obj.FCB;
document.getElementById("respuestaC").innerHTML = obj.FCC;
document.getElementById("respuestaD").innerHTML = obj.FCD;
document.getElementById("respuestaE").innerHTML = obj.FCE;

//Es lo que se veia anteriormente en el html, la validacion de si la respuesta es correcta o incorrecta
function validaRespuesta(sender) {

    var respuestaClick = sender.getAttribute('data-respuesta');
    var respuestaCorrecta = obj.FCRESPUESTA;

    if (respuestaCorrecta == respuestaClick) {
        alert("Respuesta correcta!!");
    }
    else {
        alert("BUUU Respuesta incorrecta :(");
    }


} 