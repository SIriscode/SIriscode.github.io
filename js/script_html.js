const questions = [
    {
      question: "Ko nozīmē HTML abreviatūra?",
      answers: [
        { text: "HyperText Markup Language", correct: true},
        { text: "Hyperlinks Markup Language", correct: false},
        { text: "HomeTool Markup Language", correct: false},
        { text: "HyperText Making Language", correct: false},
      ]
    },
    {
      question: "Kāda ir atšķirība starp &lt;div&gt; un &lt;span&gt; elementiem?",
      answers: [
        { text: "Starp šiem elementiem nav atšķirības.", correct: false},
        { text: "Tie abi pievieno attēlus.", correct: false},
        { text: "&lt;div&gt; - bloka elements / &lt;span&gt; - līnijas elements.", correct: true},
        { text: "&lt;div&gt; - līnijas elements / &lt;span&gt; - bloka elements.", correct: false},
      ]
    },
    {
      question: "Kādi ir 5 galvenie HTML elementi, kas nepieciešami katrā HTML lapā?",
      answers: [
        { text: "&lt;img&gt;, &lt;header&gt;, &lt;font-size&gt;, &lt;color&gt;.", correct: false},
        { text: "&lt;html&gt;, &lt;head&gt;, &lt;meta charset='utf-8'&gt;, &lt;title&gt;, &lt;body&gt;.", correct: true},
        { text: "&lt;html&gt;, &lt;head&gt;, &lt;body&gt;.", correct: false},
        { text: "Šeit nav norādīta pareizā atbilde!", correct: false},
      ]
    },
    {
      question: "Kā var izveidot virsrakstu h2 HTML lapā?",
      answers: [
        { text: "&lt;head&gt; Šis ir virsraksts &lt;/head&gt;", correct: false},
        { text: "&lt;h2&gt; Šis ir virsraksts &lt;/h2&gt;", correct: true},
        { text: "&lt;heading&gt; Šis ir virsraksts &lt;/heading&gt;", correct: false},
        { text: "&lt;h6&gt; Šis ir virsraksts &lt;/h6&gt;", correct: false},
      ]
    },
    {
      question: "Kā var izveidot sarakstu ar numerāciju HTML lapā?",
      answers: [
        { text: "&lt;dl&gt;&lt;dt&gt; Ābols &lt;/dt&gt;&lt;dd&gt; Bumbieris &lt;/dd&gt;&lt;/dl&gt;", correct: false},
        { text: "&lt;list&gt;&lt;li&gt; Ābols &lt;/li&gt;&lt;li&gt; Bumbieris &lt;/li&gt;&lt;/list&gt;", correct: false},
        { text: "&lt;ul&gt;&lt;li&gt; Ābols &lt;/li&gt;&lt;li&gt; Bumbieris &lt;/li&gt;&lt;/ul&gt;", correct: false},
        { text: "&lt;ol&gt;&lt;li&gt; Ābols &lt;/li&gt;&lt;li&gt; Bumbieris &lt;/li&gt;&lt;/ol&gt;", correct: true},
      ]
    },
    {
      question: "Kā var izveidot saiti (link) uz citu lapu HTML lapā?",
      answers: [
        { text: "&lt;a href='http://www.iriscode.lv'&gt; Spiediet šeit &lt;/a&gt;", correct: true},
        { text: "&lt;link src='http://www.iriscode.lv'&gt; Spiediet šeit &lt;/link&gt;", correct: false},
        { text: "&lt;href='http://www.iriscode.lv'&gt; Spiediet šeit &lt;/href&gt;", correct: false},
        { text: "&lt;a src='http://www.iriscode.lv'&gt; Spiediet šeit &lt;/a&gt;", correct: false},
      ]
    },
    {
      question: "Kā var ievietot attēlu HTML lapā?",
      answers: [
        { text: "&lt;image src='attels.jpg' alt='Attēls'&gt;", correct: false},
        { text: "&lt;image='attels.jpg' alt='Attēls'&gt;", correct: false},
        { text: "&lt;img alt='attels'&gt;", correct: false},
        { text: "&lt;img src='attels.jpg' alt='Attēls'&gt;", correct: true},
      ]
    },
    {
      question: "Kā var izveidot horizontālu līniju HTML lapā?",
      answers: [
        { text: "&lt;line&gt;", correct: false},
        { text: "&lt;hl&gt;", correct: false},
        { text: "&lt;hr&gt;", correct: true},
        { text: "&lt;linebreak&gt;", correct: false},
      ]
    },
    {
      question: "Kā var izveidot ievades lauku (input field) HTML formā?",
      answers: [
        { text: "&lt;fieldinput&gt;", correct: false},
        { text: "&lt;textinput&gt;", correct: false},
        { text: "&lt;input type='text'&gt;", correct: true},
        { text: "&lt;input type='input'&gt;", correct: false},
      ]
    },
    {
      question: "Kā var izveidot izvēles lauku (checkbox) HTML formā?",
      answers: [
        { text: "&lt;input type='checkbox'&gt;", correct: true},
        { text: "&lt;checkbox&gt;", correct: false},
        { text: "&lt;check&gt;", correct: false},
        { text: "&lt;input type='check'&gt;", correct: false},
      ]
    },    
    {
      question: "Kā var izveidot radio pogu HTML formā?",
      answers: [
        { text: "&lt;radio&gt;", correct: false},
        { text: "&lt;input type='radio'&gt;", correct: true},
        { text: "&lt;input type='button'&gt;", correct: false},
        { text: "&lt;input type='radio_button'&gt;", correct: false},
      ]
    },    
    {
      question: "Kā var izveidot aizpildāmo lauku (textarea) HTML formā?",
      answers: [
        { text: "&lt;input type='textarea'&gt;", correct: false},
        { text: "&lt;textinput&gt;", correct: false},
        { text: "&lt;textarea&gt;&lt;/textarea&gt;", correct: true},
        { text: "&lt;input type='text_area'&gt;", correct: false},
      ]
    },
    {
      question: "Kā var izveidot krītošo sarakstu (dropdown menu) HTML formā?",
      answers: [
        { text: "&lt;menu&gt;&lt;item&gt; Opcija 1 &lt;/item&gt;&lt;item&gt; Opcija 2 &lt;/item&gt;&lt;/menu&gt;", correct: false},
        { text: "&lt;list&gt;&lt;li&gt; Opcija 1 &lt;/li&gt;&lt;li&gt; Opcija 2 &lt;/li&gt;&lt;/list&gt;", correct: false},
        { text: "&lt;dropdown&gt;&lt;item&gt; Opcija 1 &lt;/item&gt;&lt;item&gt; Opcija 2 &lt;/item&gt;&lt;/dropdown&gt;", correct: false},
        { text: "&lt;select&gt;&lt;option value='1'&gt; Opcija 1 &lt;/option&gt;&lt;option value='2'&gt; Opcija 2 &lt;/option&gt;&lt;/select&gt;", correct: true},
      ]
    },
    {
      question: "Kā var izveidot tabulu (table) HTML lapā?",
      answers: [
        { text: "&lt;table&gt;&lt;tr&gt;&lt;td&gt; Dārzeņi &lt;/td&gt;&lt;/tr&gt;&lt;/table&gt;", correct: true},
        { text: "&lt;tab&gt;&lt;row&gt;&lt;cell&gt; Dārzeņi &lt;/cell&gt;&lt;/row&gt;&lt;/tab&gt;", correct: false},
        { text: "&lt;grid&gt;&lt;row&gt;&lt;cell&gt; Dārzeņi &lt;/cell&gt;&lt;/row&gt;&lt;/grid&gt;", correct: false},
        { text: "&lt;table&gt;&lt;tbody&gt;&lt;tr&gt;&lt;td&gt; Dārzeņi &lt;/td&gt;&lt;/tr&gt;&lt;/tbody&gt;&lt;/table&gt;", correct: false},
      ]
    },
    {
      question: "Kā iegūt hiperlinku, kas atveras jaunā logā?",
      answers: [
        { text: "&lt;a href='http://www.iriscode.lv' target='_blank'&gt;Teksts&lt/a&gt;", correct: true},
        { text: "&lt;a link='http://www.iriscode.lv' target='_blank'&gt;Teksts&lt/a&gt;", correct: false},
        { text: "&lt;h link='http://www.iriscode.lv' target='_blank'&gt;Teksts&lt/h&gt;", correct: false},
        { text: "&lt;b href='http://www.iriscode.lv' target='_blank'&gt;Teksts&lt/b&gt;", correct: false},
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