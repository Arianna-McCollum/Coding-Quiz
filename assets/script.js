const startBtn = document.querySelector(".start-btn button")
const timerText = document.querySelector(".timer .timer-text-left")
const timerSeconds = document.querySelector(".timer .timer-seconds")
const quiz = document.querySelector(".quiz")
const answers = document.querySelector(".answers")
const results = document.querySelector(".results")
const restartBtn = document.querySelector(".restart-btn")
const submitBtn = document.querySelector(".submit-btn")


var userScore = 0;
var counter;
var time = 60;
var scores= JSON.parse(localStorage.getItem("scores"))
if (scores===null){
    scores= []; 
}


startBtn.onclick = ()=> {
    quiz.classList.add("quizActivate");
    showQuestions(0);
    startTimer();
}

var questionCount = 0;

const nextBtn = document.querySelector(".next-btn");

nextBtn.onclick = () => {
    if(questionCount < questions.length - 1){
        questionCount ++;
        showQuestions(questionCount);
    }else{
        showResults();
    }
}
const initialInput = document.querySelector('#ininput');
const myForm = document.querySelector('#my-form');
const userList = document.querySelector('.ranking-text')

var score = { initials: initialInput, value: userScore};
var saveInitials = function() {
    localStorage.setItem("initials", JSON.stringify(initials));
  };

submitBtn.onclick =()=> {
    var score = { initials: initialInput.value, value : userScore};
    scores.push(score);
    console.log(userList);
    localStorage.setItem("scores", JSON.stringify(scores));
    for(var i = 0; i< scores.length; i++){
        const li = document.createElement('li');
        li.appendChild(document.createTextNode(`${scores[i].initials} : ${scores[i].value}` ));
        console.log(li);
        userList.appendChild(li);
    }

//clear fields
    initialInput.value = '';
}


//restartBtn.onclick =()=> {
   // window.localStorage.reload();
//}



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
        userScore += 5;
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

function showResults(){
    quiz.classList.remove("quizActivate");
    results.classList.add("resultsActivate");
    const score = results.querySelector(".score")
    var scoreTag = '<span>You got '+ userScore + ' points!</span>';
    score.innerHTML= scoreTag;

}

function startTimer(){
    counter = setInterval(timer, 1000);
    function timer(){
        timerSeconds.textContent = time;
        time--;
    }
}

function subtractTimer(){
    timerSeconds.textContent = time;
    time -= 15;
}

