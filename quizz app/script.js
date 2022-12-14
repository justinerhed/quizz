const quizData = [
  {
    question: "How old am i ?",
    a: "10",
    b: "15",
    c: "16",
    d: "17",
    correct: "d",
  },
  {
    question: "Who is the upcoming president of the philippines ?",
    a: "Rodrigo Duterte",
    b: "Leni Robredo",
    c: "Bobong Marcos jr",
    d: "Isko Moreno",
    correct: "c",
  },
  {
    question: "Who is the founder of starlink",
    a: "Bill Gates",
    b: "Elon Musk",
    c: "Jeff Bezos",
    d: "None of the above",
    correct: "b",
  },
  {
    question: "What's the most used programming language in 2019 ?",
    a: "java",
    b: "C",
    c: "Python",
    d: "Javascript",
    correct: "d",
  },
  {
    question: "Who is the current president of US ?",
    a: "Donald Trump",
    b: "Barrack Obama",
    c: "Me",
    d: "Joe Biden",
    correct: "d",
  },
];

const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
  deselectAnswers();
  const currentQuizData = quizData[currentQuiz];
  questionEl.innerText = currentQuizData.question;
  a_text.innerText = currentQuizData.a;
  b_text.innerText = currentQuizData.b;
  c_text.innerText = currentQuizData.c;
  d_text.innerText = currentQuizData.d;
}

function getSelected() {
  let answer = undefined;

  answerEls.forEach((answerEl) => {
    if (answerEl.checked) {
      answer = answerEl.id;
    }
  });

  return answer;
}

function deselectAnswers() {
  answerEls.forEach((answerEl) => {
    answerEl.checked = false;
  });
}

submitBtn.addEventListener("click", () => {
  const answer = getSelected();
  if (answer) {
    if (answer === quizData[currentQuiz].correct) {
      score++;
    }

    currentQuiz++;
    if (currentQuiz < quizData.length) {
      loadQuiz();
    } else {
      quiz.innerHTML = `<h2>You answered
      correctly ${score}/${quizData.length} questions.</h2>
      <button onclick="location.reload()">try again</button>`;
    }
  }
});
