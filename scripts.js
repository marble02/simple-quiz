const questions = [{
        question: "Who is the best basketball player among these options?",
        options: ["Lebron", "Steph Curry", "KD", "can't compare"],
        answer: "can't compare"
    },
    {
        question: "What is 10 + 10?",
        options: ["8", "20", "28", "30"],
        answer: "20"
    },
    {
        question: "How many eevee evolutions are there?",
        options: ["2", "4", "8", "10"],
        answer: "8"
    }
];

let question_number = 0;
let correct = 0;

document.addEventListener("DOMContentLoaded", () => {
    load_question();
});

function load_question() {
    const q = document.querySelector("#question");
    const options = document.querySelector("#options");
    const correct_display = document.querySelector("#correct");

    q.innerHTML = questions[question_number].question;
    options.innerHTML = "";
    correct_display.innerHTML = `${correct} of ${question_number}`;
    for (const option of questions[question_number].options) {
        options.innerHTML += `<button class="option">${option}</button>`;
    }

    document.querySelectorAll(".option").forEach(option => {
        option.onclick = () => {
            alert(option.textContent);
            if (option.textContent == questions[question_number].answer) {
                correct++;
            }
            if (question_number == questions.length - 1) {
                // load_question();
                q.innerHTML = "Quiz complete!";
                options.style.display = "none";
                correct_display.innerHTML = `${correct} of ${questions.length}`;
            } else {
                question_number++;
                load_question();
            }

        }
    });

}