const initialInput = document.querySelector('#ininput');
const myForm = document.querySelector('#my-form');
const userList = document.querySelector('.ranking-text');
var userScore = 0;
var scores= JSON.parse(localStorage.getItem("scores"))
if (scores===null){
    scores= []; 
}

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
    
    
