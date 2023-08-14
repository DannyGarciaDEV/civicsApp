let hyperLink = [
    ["¿Quién es uno de los senadores de su estado en este momento?", 'verifique a su senador: <a href="https://www.senate.gov/senators/" target="_blank">Senadores de EE. UU.</a>'],
    ["Nombre de su Representante de EE. UU.", 'encuentre a su representante: <a href="https://www.house.gov/representatives/find-your-representative" target="_blank">Encuentre a su Representante</a>'],
    ["¿Cuál es el nombre del Presidente de los Estados Unidos en este momento?", 'haga clic aquí: <a href="https://en.wikipedia.org/wiki/President_of_the_United_States" target="_blank">Presidente de los Estados Unidos</a>'],
    ["¿Cuál es el nombre del Vicepresidente de los Estados Unidos en este momento?", 'haga clic aquí para ver al Vicepresidente: <a href="https://en.wikipedia.org/wiki/Vice_President_of_the_United_States" target="_blank">Vicepresidente de los Estados Unidos</a>'],
    ["¿Quién es el Jefe de Justicia de los Estados Unidos en este momento?", 'Actualización sobre John Roberts: <a href="https://www.google.com/search?q=Who+is+the+Chief+Justice+of+the+United+States+now%3F&oq=Who+is+the+Chief+Justice+of+the+United+States+now%3F&gs_lcrp=EgZjaHJvbWUyBggAEEUYOTIHCAEQABiABDIHCAIQABiABDIHCAMQABiABDIHCAQQABiABDIICAUQABgWGB4yCAgGEAAYFhgeMggIBxAAGBYYHjIICAgQABgWGB4yCAgJEAAYFhge0gEHODQ3ajBqOagCALACAA&sourceid=chrome&ie=UTF-8" target="_blank">Jefe de Justicia de los Estados Unidos</a>'],
    ["¿Cuál es el partido político del Presidente en este momento?", '<a href="https://www.google.com/search?q=What+is+the+political+party+of+the+President+now%3F&oq=What+is+the+political+party+of+the+President+now%3F&gs_lcrp=EgZjaHJvbWUyBggAEEUYOTIHCAEQABiABDIHCAIQABiABDIICAMQABgWGB4yCAgEEAAYFhgeMggIBRAAGBYYHjIICAYQABgWGB4yCAgHEAAYFhgeMggICBAAGBYYHjIICAkQABgWGB7SAQgxMDE2ajBqNKgCALACAA&sourceid=chrome&ie=UTF-8" target="_blank">Encuentre el Partido Político del Presidente</a>'],
    ["¿Cuál es el nombre del Presidente de la Cámara de Representantes en este momento?", '<a href="https://www.google.com/search?q=What+is+the+name+of+the+Speaker+of+the+House+of+Representatives+now%3F&oq=What+is+the+name+of+the+Speaker+of+the+House+of+Representatives+now%3F&gs_lcrp=EgZjaHJvbWUyBggAEEUYOdIBBzg1MmowajmoAgCwAgA&sourceid=chrome&ie=UTF-8" target="_blank">Encuentre al Presidente de la Cámara</a>'],
];

const questionContainer = document.getElementById("question-container");
const answerContainer = document.getElementById("answer-container");
const showAnswerButton = document.getElementById("show-answer");
const nextButton = document.getElementById("next");

let currentIndex = 0; // Keep track of the current question index

function showQuestion(index) {
    const [question, answer] = hyperLink[index];

    questionContainer.textContent = question; // Updated to set text content
    answerContainer.innerHTML = answer; // Treat the answer as HTML content
    answerContainer.style.display = "none"; // Hide answer by default
}

showAnswerButton.addEventListener("click", () => {
    if (answerContainer.style.display === "none") {
        // Show the answer container
        answerContainer.style.display = "block";
        showAnswerButton.textContent = "Hide Answer";
    } else {
        // Hide the answer container
        answerContainer.style.display = "none";
        showAnswerButton.textContent = "Show Answer";
    }
});

nextButton.addEventListener("click", () => {
    // Move to the next question (looping back to the start)
    currentIndex = (currentIndex + 1) % hyperLink.length;

    // Show the next question
    showQuestion(currentIndex);

    // Hide the answer container
    answerContainer.style.display = "none";
});

// Initial setup
showQuestion(currentIndex);