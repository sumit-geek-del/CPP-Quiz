const quiz = [{

    Q:"Who is the founder of the C++?",
    A: "Bjarne Stroustrup",
    B: "Sumit Kumar",
    C: "Rahul Kumar",
    D:"DevManus",
    ans:"ans1"
},
{
    Q:`What is a correct syntax to output "Hello World" in C++?`,
    A:`print("Hello World")`,
    B:`console.log("Hello World")`,
    C:`System.out.println("Hello World")`,
    D:`cout<<"Hello World"`,
    ans:"ans4"
},
{
    Q:"Which data type is used to create a variable that should store text?",
    A:"txt",
    B:"string",
    C:"char",
    D:"myString",
    ans:"ans2"
},
{
    Q:"Choose the operator which cannot be overloaded.",
    A:" /",
    B: "%",
    C:"::",
    D:"()",
    ans:"ans3"
},
{
    Q:`‘cin’ is an __`,
    A:"class",
    B:"object",
    C:"Package",
    D:"Namespace",
    ans:"ans2"
},
{
    Q:"With respective to streams >> (operator) is called as",
    A:"Insertion Operator",
    B:"Extraction Operator",
    C:"Right Shift Operator",
    D:"Left Shift Operator",
    ans:"ans2"
}



];
const name = prompt('Enter Your name');
const greet = document.getElementById('quiz-heading');
greet.innerHTML = `Welcome ${name} 👋`;

const ques = document.getElementById('questions');
const op1 = document.getElementById('option1');
const op2 = document.getElementById('option2');
const op3 = document.getElementById('option3');
const op4 = document.getElementById('option4');
const sub = document.getElementById("submit-button");


const answers = document.querySelectorAll('.quiz1');



let quesCount =0;
let score =0;

const loadQuestion = ()=>{
    let question = quiz[quesCount];
    ques.innerHTML = `Q${1+quesCount}. ${question.Q}`;
    op1.innerHTML =  question.A;
    op2.innerHTML = question.B;
    op3.innerHTML = question.C;
    op4.innerHTML = question.D;
    
}

loadQuestion();

const CheckAnswer = () => {
    let answer;

    answers.forEach((curAnsElem) => {
        if(curAnsElem.checked){
            
            answer = curAnsElem.id;
        }
    });

    return answer;

};
const deselect = ()=>{
    answers.forEach(element => {
        element.checked = false;
        
    });
}
sub.addEventListener('click', ()=>{
    const getCheckedAnswer = CheckAnswer();
    if(getCheckedAnswer === quiz[quesCount].ans){
        score++;
    }
    quesCount++;
    
    if(quesCount<quiz.length){
        deselect();
        loadQuestion();
    }
    else{
        document.getElementById('showscore').innerHTML = `
        <h3>Your Score is ${score} ✌️</h3>
        <button class="btn" onclick="location.reload()">Play Again </button>`
    }

    
});







