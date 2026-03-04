const questions = [
    {
        question: "Capital of Pakistan?",
        options: ["Lahore", "Islamabad", "Karachi"],
        answer: "Islamabad"
    },
    {
        question: "2 + 2 = ?",
        options: ["3", "4", "5"],
        answer: "4"
    }
];

let current = 0;
let score = 0;

const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const resultEl = document.getElementById("result");

function loadQuestion() {
    const q = questions[current];
    questionEl.textContent = q.question;
    optionsEl.innerHTML = "";

    q.options.forEach(option => {
        const btn = document.createElement("button");
        btn.textContent = option;
        btn.onclick = function() {
            if (option === q.answer) {
                score++;
            }
        };
        optionsEl.appendChild(btn);
    });
}

document.getElementById("next").onclick = function() {
    current++;
    if (current < questions.length) {
        loadQuestion();
    } else {
        document.getElementById("quiz").style.display = "none";
        resultEl.textContent = "Your score: " + score;
    }
};

loadQuestion();