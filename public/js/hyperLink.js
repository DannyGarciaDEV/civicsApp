
let hyperLink = [
    ["Who is one of your state’s U.S. Senators now?", 'check your Senator: <a href="https://www.senate.gov/senators/" target="_blank">U.S. Senators</a>'],
    ["Name your U.S. Representative", 'find your Representative: <a href="https://www.house.gov/representatives/find-your-representative" target="_blank">Find Your Representative</a>'],
    ["What is the name of the President of the United States now?", 'click here: <a href="https://en.wikipedia.org/wiki/President_of_the_United_States" target="_blank">President of the United States</a>'],
    ["What is the name of the Vice President of the United States now", 'click here to see the Vice President: <a href="https://en.wikipedia.org/wiki/Vice_President_of_the_United_States" target="_blank">Vice President of the United States</a>'],
    ["Who is the Chief Justice of the United States now?", 'John Roberts update: <a href="https://www.google.com/search?q=Who+is+the+Chief+Justice+of+the+United+States+now%3F&oq=Who+is+the+Chief+Justice+of+the+United+States+now%3F&gs_lcrp=EgZjaHJvbWUyBggAEEUYOTIHCAEQABiABDIHCAIQABiABDIHCAMQABiABDIHCAQQABiABDIICAUQABgWGB4yCAgGEAAYFhgeMggIBxAAGBYYHjIICAgQABgWGB4yCAgJEAAYFhge0gEHODQ3ajBqOagCALACAA&sourceid=chrome&ie=UTF-8" target="_blank">Chief Justice of the United States</a>'],
    ["What is the political party of the President now?", '<a href="https://www.google.com/search?q=What+is+the+political+party+of+the+President+now%3F&oq=What+is+the+political+party+of+the+President+now%3F&gs_lcrp=EgZjaHJvbWUyBggAEEUYOTIHCAEQABiABDIHCAIQABiABDIICAMQABgWGB4yCAgEEAAYFhgeMggIBRAAGBYYHjIICAYQABgWGB4yCAgHEAAYFhgeMggICBAAGBYYHjIICAkQABgWGB7SAQgxMDE2ajBqNKgCALACAA&sourceid=chrome&ie=UTF-8" target="_blank">Find the Presidents Political Party</a>'],
    ["What is the name of the Speaker of the House of Representatives now?", '<a href="https://www.google.com/search?q=What+is+the+name+of+the+Speaker+of+the+House+of+Representatives+now%3F&oq=What+is+the+name+of+the+Speaker+of+the+House+of+Representatives+now%3F&gs_lcrp=EgZjaHJvbWUyBggAEEUYOdIBBzg1MmowajmoAgCwAgA&sourceid=chrome&ie=UTF-8" target="_blank">Find the Speaker of the House</a>'],
]

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