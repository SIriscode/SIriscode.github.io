const questions = [
    {
      question: "Ko nozīmē CSS abreviatūra?",
      answers: [
        { text: "Central Style Sheets", correct: false},
        { text: "Cascading Style Sheets", correct: true},
        { text: "Computer Style Sheets", correct: false},
        { text: "Colorful Style Sheets", correct: false},
      ]
    },
    {
      question: "Kuras no šim ir CSS īpašības stilu izveidei?",
      answers: [
        { text: "Font-family, color, margin", correct: false},
        { text: "Width, height, weight", correct: false},
        { text: "Background-color, position, padding", correct: false},
        { text: "Visi iepriekšminētie", correct: true},
      ]
    },
    {
      question: "Kas ir 'selector' CSS?",
      answers: [
        { text: "Klase, kas norāda, ka elementi atrodas augšā.", correct: false},
        { text: "Elementi, kam piemēro stila norādījumus.", correct: true},
        { text: "Funkcijas, kuras izvēlas stilus.", correct: false},
        { text: "Metode, lai pārbaudītu kļūdas.", correct: false},
      ]
    },
    {
      question: "Kā definēt klasi CSS?",
      answers: [
        { text: "#klase {}", correct: false},
        { text: ".klase {}", correct: true},
        { text: ".&lt;class&gt; {}", correct: false},
        { text: ".&lt;klase&gt; {}", correct: false},
      ]
    },
    {
      question: "Kas ir 'box model' CSS?",
      answers: [
        { text: "Tā ir metode divu elementu savienošanai.", correct: false},
        { text: "Tā ir metode kastu (boxes) veidošanai lapā.", correct: false},
        { text: "Tā ir matemātiska formula izmēru noteikšanai.", correct: false},
        { text: "Tas ir dizaina modelis, kur elements sastāv no rāmja, iekšējās malas, platuma un augstuma.", correct: true},
      ]
    },
    {
      question: "Kā definēt stila bloka ID, izmantojot, CSS?",
      answers: [
        { text: "#ID {}", correct: true},
        { text: "&lt;ID&gt; {}", correct: false},
        { text: "&lt;id&gt; {}", correct: false},
        { text: ".ID {}", correct: false},
      ]
    },
    {
      question: "Kas ir 'float'?",
      answers: [
        { text: "Elementa fona krāsa", correct: false},
        { text: "Elementa kustības animācija", correct: false},
        { text: "Izvēlēta elementa vērtība", correct: false},
        { text: "Elements, kurš peld virs lapas", correct: true},
      ]
    },
    {
      question: "Kuras no šīm īpašībām var tikt mantotas no bāzes stila bloka?",
      answers: [
        { text: "margin, border, padding", correct: false},
        { text: "color, font-size, background", correct: false},
        { text: "position, display, float", correct: false},
        { text: "Visi iepriekšminētie", correct: true},
      ]
    },
    {
      question: "Kas ir 'media queries' CSS?",
      answers: [
        { text: "Speciālas vaicājuma funkcijas", correct: false},
        { text: "Alternatīvas lapas dizaini", correct: false},
        { text: "Stila norādījumi, kas atbilst noteiktām ierīcēm vai izšķirtspējai", correct: true},
        { text: "Galvenais CSS fails", correct: false},
      ]
    },
    {
      question: "Kas ir 'flexbox'?",
      answers: [
        { text: "Lapas izvietošanas metode", correct: true},
        { text: "Noformēšanas atribūtu kolekcija", correct: false},
        { text: "Animācijas veidošanas rīks", correct: false},
        { text: "Vizuālās struktūras īpašības", correct: false},
      ]
    },    
    {
      question: "Kas ir 'grid'?",
      answers: [
        { text: "Stila norādījumu grupa", correct: false},
        { text: "Tīkla izvietošanas metode", correct: true},
        { text: "Grafiskā īpašību kopa", correct: false},
        { text: "Grafisko iestatījumu rīks", correct: false},
      ]
    },    
    {
      question: "Kas ir 'animation'?",
      answers: [
        { text: "JavaScript funkcija", correct: false},
        { text: "Vizuālās struktūras metode", correct: false},
        { text: "Elementu kustības efekts", correct: true},
        { text: "Stila norādījums", correct: false},
      ]
    },
    {
      question: "Kā noslēpt elementu ar CSS?",
      answers: [
        { text: "opacity: 0;", correct: false},
        { text: "hidden: true;", correct: false},
        { text: "visibility: hidden;", correct: false},
        { text: "display: none;", correct: true},
      ]
    },
    {
      question: "Kā pielāgot attēlu, lai tas neizstieptos CSS?",
      answers: [
        { text: "object-fit: cover;", correct: true},
        { text: "stretch: none;", correct: false},
        { text: "resize: none;", correct: false},
        { text: "image-size: contain;", correct: false},
      ]
    },
    {
      question: "Kā izveidot klasi ar nosaukumu 'darzeni' CSS?",
      answers: [
        { text: ".darzeni {color: red;}", correct: true},
        { text: "class: darzeni {color: red;}", correct: false},
        { text: "#darzeni {color: red;}", correct: false},
        { text: "darzeni: { color: red; }", correct: false},
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