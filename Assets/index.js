var quiz = document.getElementById("quiz");
var state ={
    correct: 0,
    incorrect: 0
}
var currentQuestion = 0;
var questions = [
    {
    title: "Which is best?",
    answers: [
            { answer: 1, correct: false },
            { answer: 2, correct: false },
            { answer: 3, correct: true },
        ]
    },
    {
    title: "Which is better?",
    answers: [
            { answer: 4, correct: false },
            { answer: 5, correct: false },
            { answer: 6, correct: true },
        ]
    },
    {
        title: "Which is better?",
        answers: [
                { answer: 'js', correct: true },
                { answer: 'Python', correct: true },
                { answer: 'GoLang', correct: true },
            ]
        }
]

function questionPage(question) {
    quiz.innerHTML = /*html*/`
    <p>
    ${question.title}
    </p>
    <ul>
    <li><button class="clickers" id="answerOne" data-correct="${question.answers[0].correct}">${question.answers[0].answer}</button>
    <li><button class="clickers" id="answerTwo" data-correct="${question.answers[1].correct}">${question.answers[1].answer}</button>
    <li><button class="clickers" id="answerThree" data-correct="${question.answers[2].correct}">${question.answers[2].answer}</button>
    </ul>
    `
    document
    .getElementById("answerOne, answerTwo, answerThree")
    .addEventListener(
        'click', 
        function () {
        currentQuestion++
        questionPage(questions[currentQuestion]);
    })

}

function homepage() {
    quiz.innerHTML = /*html*/ `
    <p>
    My Quiz
    </p>
    <button id="startQuiz">Start Quiz</button>
    `

    document.getElementById("startQuiz")
    .addEventListener(
        'click', 
        function () {
        questionPage(questions[currentQuestion]);
    });
}

// function questionPage() {
//     quiz.innerHTML = /*html*/ `
//     <p>
//         Question 1
//     </p>
//     <ul>
//         <li>
//         <button>This Option</button>
//         </li>
//     </ul>
//     `;
// }

homepage();
