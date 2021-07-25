//Constants used throughout document
const startBtn = document.querySelector(".start-btn button")
const timerText = document.querySelector(".timer .timer-text-left")
const timerSeconds = document.querySelector(".timer .timer-seconds")
const quiz = document.querySelector(".quiz")
const answers = document.querySelector(".answers")
const results = document.querySelector(".results")
const restartBtn = document.querySelector(".restart-btn")
const submitBtn = document.querySelector(".submit-btn")

//Variables used throughout document
var userScore = 0;
var counter;
var time = 60;
var scores= JSON.parse(localStorage.getItem("scores"))
if (scores===null){
    scores= []; 
}

//start button click listener
startBtn.onclick =()=> {
    quiz.classList.add("quizActivate");
    showQuestions(0);
    startTimer();
}

var questionCount = 0;
//Next button constant and click listener
const nextBtn = document.querySelector(".next-btn");

nextBtn.onclick = () => {
    if(questionCount < questions.length - 1){
        questionCount ++;
        showQuestions(questionCount);
        var img1 = document.querySelector(".img1")
        var img2 = document.querySelector(".img2")
        img1.classList.remove("img1-activate");
        img2.classList.remove("img2-activate");
        

    }else{
        showResults();
    }
}
//Constants setting up to save high score
const initialInput = document.querySelector('#ininput');
const myForm = document.querySelector('#my-form');
const userList = document.querySelector('.ranking-text')

var score = { initials: initialInput, value: userScore};
var saveInitials = function() {
    localStorage.setItem("initials", JSON.stringify(initials));
  };

//Submit button click listener
submitBtn.onclick =()=> {
    var score = { initials: initialInput.value, value : userScore};
    scores.push(score);
    console.log(userList);
    localStorage.setItem("scores", JSON.stringify(scores));//local storage to save score to computer
    for(var i = 0; i< scores.length; i++){
        const li = document.createElement('li');
        li.appendChild(document.createTextNode(`${scores[i].initials} : ${scores[i].value}` ));
        console.log(li);
        userList.appendChild(li);
    
    }
//clear fields
    initialInput.value = '';
}

//Shows questions and answers
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
//What happens when user clicks an option
function optionSelected(answer){
    var img1 = document.querySelector(".img1")
    var img2 = document.querySelector(".img2")
    var userAnswer = answer.textContent;
    var correctAnswer = questions[questionCount].answer;
    var allOptions = answers.children.length;
    if(userAnswer == correctAnswer){
        answer.classList.add("correct");
        //Sound from Zapsplat.com
        var audio = new Audio('zapsplat_multimedia_correct_ping_tone_001_68778.mp3');
        audio.play();
        img1.classList.add("img1-activate");

        userScore += 5;
    }else{
        answer.classList.add("incorrect");
        //Sound from Zapsplat.com
        var audio = new Audio('zapsplat_cartoon_wrong_answer_fail_descending_tone_002_69416.mp3');
        audio.play();
        img2.classList.add("img2-activate");
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
//Shows results of quiz
function showResults(){
    quiz.classList.remove("quizActivate");
    results.classList.add("resultsActivate");
    const score = results.querySelector(".score")
    var scoreTag = '<span>You got '+ userScore + ' points!</span>';
    score.innerHTML= scoreTag;

}
//Timer set up
function startTimer(){
    counter = setInterval(timer, 1000);
    function timer(){
        timerSeconds.textContent = time;
        time--;
        if(time<0){
            showResults();
        }
    }
}

function subtractTimer(){
    timerSeconds.textContent = time;
    time -= 15;
}

