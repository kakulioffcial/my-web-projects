var questions = [
    {
        question: "What does HTML stand for?",
        options: ["Hyper Text Markup Language", "Home Tool Markup Language", "Hyperlinks and Text Markup Language", "Hypermarking Text Language"],
        answer: 0
    },
    {
        question: "Which tag is used for the largest heading in HTML?",
        options: ["<h6>", "<heading>", "<h1>", "<head>"],
        answer: 2
    }
];

var currentQ = 0;
var score = 0;

function loadQuestion() {
    var q = questions[currentQ];
    document.getElementById("questionText").innerHTML = (currentQ + 1) + ". " + q.question;
    
    var buttons = document.getElementsByClassName("opt-btn");
    for (var i = 0; i < buttons.length; i++) {
        buttons[i].innerHTML = q.options[i];
    }
    document.getElementById("resultText").innerHTML = "";
}

function checkAnswer(selected) {
    var q = questions[currentQ];
    if (selected === q.answer) {
        document.getElementById("resultText").innerHTML = "Correct! 🎉";
        score++;
    } else {
        document.getElementById("resultText").innerHTML = "Wrong! ❌";
    }
}

function nextQuestion() {
    currentQ++;
    if (currentQ < questions.length) {
        loadQuestion();
    } else {
        document.getElementById("questionBox").innerHTML = "<h3>Quiz Finished! Your Score: " + score + " / " + questions.length + "</h3>";
        document.getElementById("nextBtn").style.display = "none";
        document.getElementById("resultText").innerHTML = "";
    }
}
