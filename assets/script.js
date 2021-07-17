const start_btn = document.querySelector(".start-btn button")
const timerText = document.querySelector(".time-left-text .timer")
const timerSeconds = document.querySelector(".timer-seconds .timer")
const quiz = document.querySelector(".quiz")
const answers = document.querySelector(".answers")
const results = document.querySelector(".results")

var userScore = 0;
var timeValue = 60;
var counter;
start_btn.onclick = ()=> {
    quiz.classList.add("quizActivate");
    showQuestions();
}

var questionCount = 0;

function showQuestions(index){
    const questionText= document.querySelector(".question-text")
    questionText.innerHTML=questionTag;
    let questionTag = '<span>'+ questions[index].numb + ". " + questions[index].question +'</span>';
    let optionTag = '<div class="answer"><span>'+ questions[index].options[0] +'</span></div>'
    + '<div class="answer"><span>'+ questions[index].options[1] +'</span></div>'
    + '<div class="answer"><span>'+ questions[index].options[2] +'</span></div>'
    + '<div class="answer"><span>'+ questions[index].options[3] +'</span></div>';
    questionText.innerHTML = questionTag;
    answers.innerHTML = optionTag;
}
