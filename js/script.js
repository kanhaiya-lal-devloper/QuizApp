let questions =
    [
        {
            question: "Which is animal in  the forest?",
            answer: [
                { text: "Shark", correct: false },
                { text: "Blue Whale", correct: true },
                { text: "Elephant", correct: false },
                { text: "Giraffe", correct: false },
            ]

        },
        {
            question: "Which is animal in the forest?",
            answer: [
                { text: "Shark", correct: false },
                { text: "Blue Whale", correct: false },
                { text: "Elephant", correct: true },
                { text: "Giraffe", correct: false },
            ]
        },
        {
            question: "Which is is smallest continent in the world?",
            answer: [
                { text: "Africa", correct: false },
                { text: "Asia", correct: false },
                { text: "Australia", correct: true },
                { text: "Europe", correct: false },
            ]
        },
        {
            question: "Which is is smallest planet in the solar system?",
            answer: [
                { text: "Mercury", correct: true },
                { text: "Venus", correct: false },
                { text: "Earth", correct: false },
                { text: "Mars", correct: false },
            ]
        },
        {
            question: "Which is is smallest country in the world?",
            answer: [
                { text: "Vatican City", correct: true },
                { text: "Monaco", correct: false },
                { text: "Nauru", correct: false },
                { text: "Tuvalu", correct: false },
            ]
        }
    ];

const que=document.getElementById("question");
const ans=document.getElementById("ans-button"); 
const nxt=document.getElementById("nxt-btn");
let currentQuestion =0;
let score = 0;

function startQuiz(){
    currentQuestion=0;
    score=0;
    nxt.innerHTML="Next";
    showQuestion();
}
function showQuestion()
{
    restState();
    let Question = questions[currentQuestion];
    let questionNo = currentQuestion+1;
    que.innerHTML = questionNo +  ". " + Question.question;

    Question.answer.forEach(answer =>{
        const button = document.createElement("button");
        button.innerHTML=answer.text;
        button.classList.add("btn2");
        ans.appendChild(button);
        if(answer.correct){
            button.dataset.correct=answer.correct;
        }
        button.addEventListener("click",checkAnswer);
    });

}
function restState()
{
    nxt.style.display="none";
    while(ans.firstChild){
        ans.removeChild(ans.firstChild);
    }
}

function checkAnswer(e)
{
    const selectedButton = e.target;
    const isCorrect = selectedButton.dataset.correct ==="true";
    if (isCorrect){
        selectedButton.classList.add("correct");
        score++;
    }
    else
    {
        selectedButton.classList.add("incorrect");
    }
    Array.from(ans.children).forEach(button =>{
        if(button.dataset.correct==="true"){
            button.classList.add("correct");
        }
        button.disabled="true";
    });
    nxt.style.display="block";

}

function showScore()
{
    restState();
    que.innerHTML=`You Scored ${score} out of ${questions.length}`;
    nxt.innerHTML="Play Again";
    nxt.style.display="block";
}

 function handleNextButton()
 {
    currentQuestion++;
    if(currentQuestion < questions.length){
        showQuestion();
    }
    else
    {
        showScore();
    }
 }

nxt.addEventListener("click", () =>{
    if (currentQuestion < questions.length) {
        handleNextButton();
    }
    else
    {
        startQuiz();
    }

});

startQuiz();
