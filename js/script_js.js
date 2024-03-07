const questions = [
    {
      question: "Kas ir JavaScript?",
      answers: [
        { text: "Programmēšanas valoda", correct: true},
        { text: "Stila valoda", correct: false},
        { text: "Datu bāzes valoda", correct: false},
        { text: "Mākoņu komunikācijas protokols", correct: false},
      ]
    },
    {
      question: "Kā var definēt mainīgo JavaScript?",
      answers: [
        { text: "var x = 5;", correct: false},
        { text: "variable x = 5;", correct: false},
        { text: "let x = 5;", correct: true},
        { text: "const x = 5;", correct: false},
      ]
    },
    {
      question: "Kādi datu tipi ir JavaScript?",
      answers: [
        { text: "Character, Integer, TrueFalse, Data, Undefined, Empty.", correct: false},
        { text: "String, Number, Boolean, Object, Null, Undefined.", correct: true},
        { text: "Text, Digit, Choice, Option, Nothing, Notdefined.", correct: false},
        { text: "Value, Float, Logic, Definition, Novalue, None.", correct: false},
      ]
    },
    {
      question: "Kā atšifrējas DOM abreviatūra JavaScript?",
      answers: [
        { text: "Document Order Model", correct: false},
        { text: "Document Object Model", correct: true},
        { text: "Data Overview Module", correct: false},
        { text: "Direct Object Method", correct: false},
      ]
    },
    {
      question: "Ko dara 'console.log' JavaScript?",
      answers: [
        { text: "Tas ir lietotāju saskarsnes elements.", correct: false},
        { text: "Tas palīdz formatēt tekstu.", correct: false},
        { text: "Tas palīdz veidot savienojumu ar datubāzi.", correct: false},
        { text: "Tas ir rīks kļūdu meklēšanai.", correct: true},
      ]
    },
    {
      question: "Kas ir 'if...else' JavaScript?",
      answers: [
        { text: "Tā ir zarošanās konstrukcija nosacījumu pārbaudei.", correct: true},
        { text: "Tā ir cikla konstrukcija.", correct: false},
        { text: "Tas ir salīdzināšanas cikls.", correct: false},
        { text: "Tā ir funkcija kļūdu meklēšanai.", correct: false},
      ]
    },
    {
      question: "Kāds ir 'for' pielietojums?",
      answers: [
        { text: "Cikls izpilda funkciju.", correct: false},
        { text: "Filtrē datus.", correct: false},
        { text: "Tas palīdz atkļūdot kodu.", correct: false},
        { text: "Iterācija caur objektiem vai vērtībām.", correct: true},
      ]
    },
    {
      question: "Kas ir 'array' JavaScript valodā?",
      answers: [
        { text: "Tā ir metode datu kārtošanai.", correct: false},
        { text: "Tā ir nosacījumu pārbaudes konstrukcija.", correct: false},
        { text: "Tā ir elementu / vērtību struktūra.", correct: true},
        { text: "Tas ir atkļūdošanas rīks.", correct: false},
      ]
    },
    {
      question: "Kas ir 'event listeners' JavaScript?",
      answers: [
        { text: "Komanda, lai aizvērtu logus.", correct: false},
        { text: "Metode, lai izpildītu kodu.", correct: false},
        { text: "Iespēja atpazīt lietotāja darbības.", correct: true},
        { text: "Funkcija, lai apstrādātu kļūdas.", correct: false},
      ]
    },
    {
      question: "Kas ir 'JSON' JavaScript?",
      answers: [
        { text: "JavaScript objektu notācija", correct: true},
        { text: "JavaScript novērošanas tīkls", correct: false},
        { text: "JavaScript kārtošanas norādījumi", correct: false},
        { text: "JavaScript objektu nosaukšana", correct: false},
      ]
    },    
    {
      question: "Kā izveidot objektu JavaScript?",
      answers: [
        { text: "createObject = {}", correct: false},
        { text: "newObject = {}", correct: true},
        { text: "var = objekts {}", correct: false},
        { text: "objekts = new {}", correct: false},
      ]
    },    
    {
      question: "Kas ir 'callback functions' JavaScript?",
      answers: [
        { text: "Funkcijas, lai pārbaudītu kļūdas", correct: false},
        { text: "Funkcijas, lai izveidotu masīvus", correct: false},
        { text: "Funkcijas, kas tiek padotas kā argumenti", correct: true},
        { text: "Funkcijas, lai apturētu koda izpildi", correct: false},
      ]
    },
    {
      question: "Kā iegūt gadu no datuma objekta JavaScript?",
      answers: [
        { text: "date.getFullDay()", correct: false},
        { text: "date.year()", correct: false},
        { text: "date.getYear()", correct: false},
        { text: "date.getFullYear()", correct: true},
      ]
    },
    {
      question: "Kā pārveidot tekstu 'Hello' uz 'olleH'?",
      answers: [
        { text: "'Hello'.split('').reverse().join('')", correct: true},
        { text: "'Hello'.flip()", correct: false},
        { text: "'Hello'.invert()", correct: false},
        { text: "reverse('Hello')", correct: false},
      ]
    },
    {
      question: "Kā pārbaudīt, vai mainīgais 'x' ir vesels skaitlis?",
      answers: [
        { text: "if (x % 1 === 0) {}", correct: true},
        { text: "if (x.isInteger()) {}", correct: false},
        { text: "if (x.typeof === 'number') {}", correct: false},
        { text: "if (isInt(x)) {}", correct: false},
      ]
    }
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
  currentQuestionIndex = 0;
  score = 0;
  nextButton.innerHTML = "Nākamais jautājums";
  showQuestion();
}

function showQuestion(){
  resetState();
  let currentQuestion = questions[currentQuestionIndex];
  let questionNo = currentQuestionIndex + 1;
  questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

  currentQuestion.answers.forEach(answer => {
    const button = document.createElement("button");
    button.innerHTML = answer.text;
    button.classList.add("btn");
    answerButtons.appendChild(button);
    if(answer.correct){
      button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", selectAnswer);
  });
}

function resetState(){
  nextButton.style.display = "none";
  while(answerButtons.firstChild){
    answerButtons.removeChild(answerButtons.firstChild);
  }
}

function selectAnswer(e){
  const selectedBtn = e.target;
  const isCorrect = selectedBtn.dataset.correct === "true";
  if(isCorrect){
    selectedBtn.classList.add("correct");
    score++;
  }else{
    selectedBtn.classList.add("incorrect");
  }
  Array.from(answerButtons.children).forEach(button => {
    if(button.dataset.correct === "true"){
      button.classList.add("correct");
    }
    button.disabled = true;
  });
  nextButton.style.display = "block";
}

function showScore(){
  resetState();
  questionElement.innerHTML = `Jūs ieguvāt ${score} punktus no ${questions.length} punktiem!`;
  nextButton.innerHTML = "Spēlēt vēlreiz";
  nextButton.style.display = "block";
}


function handleNextButton(){
  currentQuestionIndex++;
  if(currentQuestionIndex < questions.length){
    showQuestion();
  }else{
    showScore();
  }
}

nextButton.addEventListener("click", ()=>{
  if(currentQuestionIndex < questions.length){
    handleNextButton();
  }else{
    startQuiz();
  }
});

startQuiz();