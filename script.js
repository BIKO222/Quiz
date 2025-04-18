// Переключение темы
const themeToggle = document.getElementById("theme-toggle");
themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("light-theme");
});

// Викторина
const quizQuestions = [
    { question: "Что означает AI?", options: ["Автоматический интерфейс", "Искусственный интеллект"], answer: "Искусственный интеллект" },
    { question: "Какая структура данных использует FIFO?", options: ["Стек", "Очередь"], answer: "Очередь" }
];

let currentQuestionIndex = 0;
let score = 0;

function displayQuestion() {
    const questionContainer = document.getElementById("question-container");
    if (currentQuestionIndex < quizQuestions.length) {
        const q = quizQuestions[currentQuestionIndex];
        questionContainer.innerHTML = `
            <p>${q.question}</p>
            ${q.options.map(option => `<label><input type="radio" name="question" value="${option}"> ${option}</label>`).join('')}
        `;
    } else {
        showResult();
    }
}

function showResult() {
    document.getElementById("question-container").innerHTML = "";
    document.getElementById("submit-answer").style.display = "none";
    document.getElementById("result").innerHTML = `<p>Викторина завершена! Ваш результат: ${score} из ${quizQuestions.length}</p>`;
}

document.getElementById("submit-answer").addEventListener("click", function() {
    const selectedOption = document.querySelector('input[name="question"]:checked');
    if (selectedOption) {
        if (selectedOption.value === quizQuestions[currentQuestionIndex].answer) {
            score++;
        }
        currentQuestionIndex++;
        displayQuestion();
    } else {
        alert("Выберите вариант ответа.");
    }
});

displayQuestion();
// Смена темы

themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("light-theme");
});
