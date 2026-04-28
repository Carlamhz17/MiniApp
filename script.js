let preguntas = [
    "¿Vamos a beber hoy?",
    "¿Deberías bañarte?",
    "¿Eres asi o andas disfrazado?",
    "¿no te escriben por feo?",
    "¿Eres secretamente mariguanero?",
    "¿Deberías estudiar hoy?",
    "¿Te gusta la profe?",
    "¿Te caerá dinero del cielo?",
    "¿Hoy habra tiroteo? ",
    "¿Te estas viendo con el director?"
];

let respuestas = [
    "Sí ",
    "No ",
    "Tal vez... o tal vez no",
    "Definitivamente",
    "Ni loco",
    "Obvio sí",
    "Pregunta otra vez",
    "No tengo idea",
    "NO quiero contestar sapo",
    "El universo dice: ño",
    "100% real no fake",
    "Corre",
    "Que te importa"
];

function general() {
    let preguntaRandom = preguntas[Math.floor(Math.random() * preguntas.length)];
    let respuestaRandom = respuestas[Math.floor(Math.random() * respuestas.length)];

    document.getElementById("pregunta").innerText = preguntaRandom;

    let resultado = document.getElementById("resultado");
    resultado.innerText = respuestaRandom;

    // color aleatorio
    resultado.style.color = "#" + Math.floor(Math.random()*16777215).toString(16);

    // animación simple
    resultado.style.transform = "scale(1.2)";
    setTimeout(() => {
        resultado.style.transform = "scale(1)";
    }, 200);
}