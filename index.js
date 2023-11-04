
const questions = [
    {
      question: "Qual a evolução do charmander?",
      options: ["Charizard", "Charmilion", "Largatixu", "Fire red"],
      answer: 1
    },
    {
      question: "Complete a frase : Mega shiny ______ de 6 ivs perfeito OBLITERARRRRR",
      options: ["Pikachu", "Flygon", "Razyaza", "Eevee"],
      answer: 2
    },
    {
        question: "Qual o nome da calopsita de saito?",
        options: ["Scarllet", "Lunna", "Arthur", "Sylvie"],
        answer: 3
    },
    {
        question: "Qual o verdadeiro nome do professor felipe?",
        options: ["Kayn", "Alfred", "Clark kent", "Superman"],
        answer: 2
    },
    {
        question: "Qual o ultimo boss do terraria",
        options: ["Moon Lord", "Pure Vessel", "The Abyss", "Destroyer of Worlds"],
        answer: 0
    },
    {
        question: "Uma ia consegue jogar Pokemon?",
        options: ["Não consegue vencer o rival na primeira batalha", "Sim,mais não zera", "Sim e zera o jogo", "Não consegue nem pegar o inicial"],
        answer: 1
    },
    {
        question: "Quem selou o Satoru e o Gojo",
        options: ["Sukuna", "Suguro Geto", "Tengem", "Kenjaku"],
        answer: 3
    },
    {
        question: "Qual tag HTML é usada para criar um título de nível 1?",
        options: ["<h1>", "<p>", "<div>", "<span>"],
        answer: 0
      },
      {
        question: "Qual propriedade CSS é usada para definir a cor do texto?",
        options: ["background-color", "color" , "font-size", "margin"],
        answer: 1
      },
      {
        question: "Qual função JavaScript é usada para exibir uma janela de alerta no navegador?",
        options: [ "confirm()", "prompt()", "console.log()","alert()"],
        answer: 3
      }
];
  
let currentQuestion = 0;
let score = 0;

const questionElement = document.getElementById("question");
const optionsElement = document.getElementById("options");
const submitButton = document.getElementById("submit-btn");
const scoreElement = document.getElementById("score");

function loadQuestion() {
  const currentQuizQuestion = questions[currentQuestion];
  questionElement.textContent = currentQuizQuestion.question;

  optionsElement.innerHTML = "";
  currentQuizQuestion.options.forEach((option, index) => {
    const button = document.createElement("button");
    button.classList.add("option");
    button.textContent = option;
    button.addEventListener("click", () => checkAnswer(index));
    optionsElement.appendChild(button);
  });
}

function checkAnswer(index) {
  const currentQuizQuestion = questions[currentQuestion];
  if (index === currentQuizQuestion.answer) {
    score++;
    optionsElement.children[index].style.backgroundColor = "#4caf50";
  } else {
    optionsElement.children[index].style.backgroundColor = "#ff0000";
  }

  currentQuestion++;
  if (currentQuestion < questions.length) {
    setTimeout(() => {
      loadQuestion();
    }, 50);
  } else {
    setTimeout(() => {
      showScore();
    }, 50);
  }
}

function showScore() {
  questionElement.textContent = "";
  optionsElement.style.display = "none";
  submitButton.style.display = "none";
  scoreElement.textContent = `Você acertou ${score} de ${questions.length} perguntas!`;
}

loadQuestion();