const startBtn = document.querySelector(".start-btn button")
const timerText = document.querySelector(".timer .timer-text-left")
const timerSeconds = document.querySelector(".timer .timer-seconds")
const quiz = document.querySelector(".quiz")
const answers = document.querySelector(".answers")
const results = document.querySelector(".results")

var userScore = 0;
var counter;
startBtn.onclick = ()=> {
    quiz.classList.add("quizActivate");
    showQuestions(0);
    startTimer(60);
}

var questionCount = 0;

const nextBtn = document.querySelector(".next-btn");

nextBtn.onclick = () => {
    if(questionCount < questions.length - 1){
        questionCount ++;
        showQuestions(questionCount);
    }else{
        
    }
}

function showQuestions(index){
    const questionText= document.querySelector(".question-text")
    var questionTag = '<span>'+ questions[index].numb + ". " + questions[index].question +'</span>';
    var optionTag = '<div class="answer"><span>'+ questions[index].options[0] +'</span></div>'
    + '<div class="answer"><span>'+ questions[index].options[1] +'</span></div>'
    + '<div class="answer"><span>'+ questions[index].options[2] +'</span></div>'
    + '<div class="answer"><span>'+ questions[index].options[3] +'</span></div>';
    questionText.innerHTML = questionTag;
    answers.innerHTML = optionTag;
    const option = answers.querySelectorAll(".answer");
    for (let i = 0; i < option.length; i++){
        option[i].setAttribute("onclick", "optionSelected(this)");
    }
}

function optionSelected(answer){
    var userAnswer = answer.textContent;
    var correctAnswer = questions[questionCount].answer;
    var allOptions = answers.children.length;
    if(userAnswer == correctAnswer){
        answer.classList.add("correct");
    }else{
        answer.classList.add("incorrect");
        subtractTimer();

        for (let i = 0; i < allOptions; i++){
            if(answers.children[i].textContent == correctAnswer){
                answers.children[i].setAttribute("class", "answer correct");
            }
        }
    }

    for (let i=0; i < allOptions; i++) {
        answers.children[i].classList.add("disabled")
    }
}

function startTimer(time){
    counter = setInterval(timer, 1000);
    function timer(){
        timerSeconds.textContent = time;
        time--;
    }
}

function subtractTimer(time){
    timerSeconds.textContent = time;
    time -= 10;
}




