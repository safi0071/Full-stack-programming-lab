let answer1 = "Islamabad";
let answer2 = "JavaScript";
let answer3 = "HyperText Markup Language";

function checkQuiz() {
    let score = 0;

    let q1 = document.querySelector('input[name="q1"]:checked');
    let q2 = document.querySelector('input[name="q2"]:checked');
    let q3 = document.querySelector('input[name="q3"]:checked');

    if (q1 && q1.value === answer1) score++;
    if (q2 && q2.value === answer2) score++;
    if (q3 && q3.value === answer3) score++;

    let result = document.getElementById("result");

    if (score === 3) {
        result.innerText = "🎉 Excellent! You scored 3/3";
        result.style.color = "#2e7d32";
    } 
    else if (score === 2) {
        result.innerText = "👍 Good job! You scored 2/3";
        result.style.color = "#f9a825";
    } 
    else {
        result.innerText = "❌ You scored " + score + "/3. Try again.";
        result.style.color = "#c62828";
    }
}

function resetQuiz() {
    document.getElementById("quizForm").reset();
    document.getElementById("result").innerText = "";
}
