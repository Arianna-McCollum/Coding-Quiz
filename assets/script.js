const start_btn = document.querySelector(".start-btn button")
const timerText = document.querySelector(".time-left-text .timer")
const timerSeconds = document.querySelector(".timer-seconds .timer")
const quiz = document.querySelector(".quiz")
const answers = document.querySelector(".answers")
const results = document.querySelector(".results")


start_btn.onclick = ()=> {
    quiz.classList.add("quizActivate");
    showQuetion(0);
    startTimer(60);
}