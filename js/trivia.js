let openTrv = document.getElementById("openTrv");
let triviaContainer = document.getElementById("triviaContainer");
openTrv.addEventListener("click", () => {
  triviaContainer.style.display = "flex";
});

let close = document.getElementById("close");
close.addEventListener("click", () => {
  triviaContainer.style.display = "none";
});

let ans2 = document.getElementById("ans2");
let msg = document.getElementById("trvMsg");
let currentSqr = document.getElementById("currentSqr");
const score = [];

let question1 = document.getElementById("question1");
ans2.addEventListener("click", () => {
  msg.style.fontSize = "1.2em";
  msg.style.color = "red";

  msg.innerHTML = "nice job ";
  score.push(10);

  let sum = 0;

  for (let i = 0; i < score.length; i++) {
    sum += score[i];
  }
  currentSqr.innerHTML = sum;

  question1.style.display = "none";
  question2.style.display = "block";
});
let ans1 = document.getElementById("ans1");
ans1.addEventListener("click", () => {
  msg.innerHTML = "wrong answer, better luck next question";
  question1.style.display = "none";
  question2.style.display = "block";
});
let ans3 = document.getElementById("ans3");
ans3.addEventListener("click", () => {
  msg.innerHTML = "wrong answer, better luck next question";
  question1.style.display = "none";
  question2.style.display = "block";
});
let ans4 = document.getElementById("ans4");
ans4.addEventListener("click", () => {
  msg.innerHTML = "wrong answer, better luck next question";
  question1.style.display = "none";
  question2.style.display = "block";
});

// qus2

let q2ans3 = document.getElementById("q2ans3");

let question2 = document.getElementById("question2");
msg.style.fontSize = "1.2em";
msg.style.color = "red";
q2ans3.addEventListener("click", () => {
  msg.innerHTML = "good! ";
  score.push(10);
  let sum = 0;

  for (let i = 0; i < score.length; i++) {
    sum += score[i];
  }
  currentSqr.innerHTML = sum;
  question1.style.display = "none";
  question2.style.display = "none";
  question3.style.display = "block";
});
let q2ans1 = document.getElementById("q2ans1");
q2ans1.addEventListener("click", () => {
  msg.innerHTML = " better luck next question";
  question1.style.display = "none";
  question2.style.display = "none";
  question3.style.display = "block";
});
let q2ans2 = document.getElementById("q2ans2");
q2ans2.addEventListener("click", () => {
  msg.innerHTML = " better luck next question";
  question1.style.display = "none";
  question2.style.display = "none";
  question3.style.display = "block";
});
let q2ans4 = document.getElementById("q2ans4");
q2ans4.addEventListener("click", () => {
  msg.innerHTML = " better luck next question";
  question1.style.display = "none";
  question2.style.display = "none";
  question3.style.display = "block";
});

// ques 3

let q3ans4 = document.getElementById("q3ans4");

let question3 = document.getElementById("question3");
q3ans4.addEventListener("click", () => {
  msg.innerHTML = "nice job ";
  score.push(10);
  let sum = 0;

  for (let i = 0; i < score.length; i++) {
    sum += score[i];
  }
  currentSqr.innerHTML = sum;
  question4.style.display = "block";
  question3.style.display = "none";
});
let q3ans1 = document.getElementById("q3ans1");
q3ans1.addEventListener("click", () => {
  msg.innerHTML = " better luck next question";
  question3.style.display = "none";
  question4.style.display = "block";
});
let q3ans2 = document.getElementById("q3ans2");
q3ans2.addEventListener("click", () => {
  msg.innerHTML = "wrong answer, better luck next question";
  question3.style.display = "none";
  question4.style.display = "block";
});
let q3ans3 = document.getElementById("q3ans3");
q3ans3.addEventListener("click", () => {
  msg.innerHTML = "wrong answer, better luck next question";
  question3.style.display = "none";
  question4.style.display = "block";
});

// quse4

let q4ans3 = document.getElementById("q4ans3");

let question4 = document.getElementById("question4");
q4ans3.addEventListener("click", () => {
  msg.innerHTML = "very good ";
  score.push(10);
  let sum = 0;

  for (let i = 0; i < score.length; i++) {
    sum += score[i];
  }
  currentSqr.innerHTML = sum;
  question4.style.display = "none";
  question5.style.display = "block";
});
let q4ans1 = document.getElementById("q4ans1");
q4ans1.addEventListener("click", () => {
  msg.innerHTML = "are you stupid?";
  question4.style.display = "none";
  question5.style.display = "block";
});
let q4ans2 = document.getElementById("q4ans2");
q4ans2.addEventListener("click", () => {
  msg.innerHTML = "are you stupid?";
  question4.style.display = "none";
  question5.style.display = "block";
});
let q4ans4 = document.getElementById("q4ans4");
q4ans4.addEventListener("click", () => {
  msg.innerHTML = "are you stupid?";
  question4.style.display = "none";
  question5.style.display = "block";
});

// qus5

let q5ans1 = document.getElementById("q5ans1");

let question5 = document.getElementById("question5");
q5ans1.addEventListener("click", () => {
  msg.innerHTML = "well done! ";
  score.push(10);
  let sum = 0;

  for (let i = 0; i < score.length; i++) {
    sum += score[i];
  }
  currentSqr.innerHTML = sum;
  question5.style.display = "none";
  question6.style.display = "block";
});
let q5ans2 = document.getElementById("q5ans2");
q5ans2.addEventListener("click", () => {
  msg.innerHTML = "wrong answer, better luck next question";
  question5.style.display = "none";
  question6.style.display = "block";
});
let q5ans3 = document.getElementById("q5ans3");
q5ans3.addEventListener("click", () => {
  msg.innerHTML = "wrong answer, better luck next question";
  question5.style.display = "none";
  question6.style.display = "block";
});
let q5ans4 = document.getElementById("q5ans4");
q5ans4.addEventListener("click", () => {
  msg.innerHTML = "wrong answer, better luck next question";
  question5.style.display = "none";
  question6.style.display = "block";
});

// ques 6

let q6ans2 = document.getElementById("q6ans2");

let question6 = document.getElementById("question6");
q6ans2.addEventListener("click", () => {
  msg.innerHTML = "nice job ";
  score.push(10);
  let sum = 0;

  for (let i = 0; i < score.length; i++) {
    sum += score[i];
  }
  currentSqr.innerHTML = sum;
  question6.style.display = "none";
  question7.style.display = "block";
});
let q6ans1 = document.getElementById("q6ans1");
q6ans1.addEventListener("click", () => {
  msg.innerHTML = "wrong answer";
  question6.style.display = "none";
  question7.style.display = "block";
});
let q6ans3 = document.getElementById("q6ans3");
q6ans3.addEventListener("click", () => {
  msg.innerHTML = "wrong answer";
  question6.style.display = "none";
  question7.style.display = "block";
});
let q6ans4 = document.getElementById("q6ans4");
q6ans4.addEventListener("click", () => {
  msg.innerHTML = "wrong answer";
  question6.style.display = "none";
  question7.style.display = "block";
});

// question7

let q7ans4 = document.getElementById("q7ans4");

let question7 = document.getElementById("question7");
q7ans4.addEventListener("click", () => {
  msg.innerHTML = "yayyy ";
  score.push(10);
  let sum = 0;

  for (let i = 0; i < score.length; i++) {
    sum += score[i];
  }
  currentSqr.innerHTML = sum;
  question7.style.display = "none";
  question8.style.display = "block";
});
let q7ans1 = document.getElementById("q7ans1");
q7ans1.addEventListener("click", () => {
  msg.innerHTML = " better luck next question";
  question7.style.display = "none";
  question8.style.display = "block";
});
let q7ans2 = document.getElementById("q7ans2");
q7ans2.addEventListener("click", () => {
  msg.innerHTML = " better luck next question";
  question7.style.display = "none";
  question8.style.display = "block";
});
let q7ans3 = document.getElementById("q7ans3");
q7ans3.addEventListener("click", () => {
  msg.innerHTML = " better luck next question";
  question7.style.display = "none";
  question8.style.display = "block";
});

// question8

let q8ans2 = document.getElementById("q8ans2");

let question8 = document.getElementById("question8");
q8ans2.addEventListener("click", () => {
  msg.innerHTML = "nice job ";
  score.push(10);
  let sum = 0;

  for (let i = 0; i < score.length; i++) {
    sum += score[i];
  }
  currentSqr.innerHTML = sum;
  question8.style.display = "none";
  question9.style.display = "block";
});
let q8ans1 = document.getElementById("q8ans1");
q8ans1.addEventListener("click", () => {
  msg.innerHTML = "wrong answer, better luck next question";
  question8.style.display = "none";
  question9.style.display = "block";
});
let q8ans3 = document.getElementById("q8ans3");
q8ans3.addEventListener("click", () => {
  msg.innerHTML = "wrong answer, better luck next question";
  question8.style.display = "none";
  question9.style.display = "block";
});
let q8ans4 = document.getElementById("q8ans4");
q8ans4.addEventListener("click", () => {
  msg.innerHTML = "wrong answer, better luck next question";
  question8.style.display = "none";
  question9.style.display = "block";
});

// question9

let q9ans1 = document.getElementById("q9ans1");

let question9 = document.getElementById("question9");
q9ans1.addEventListener("click", () => {
  msg.innerHTML = "well done ";
  score.push(10);
  let sum = 0;

  for (let i = 0; i < score.length; i++) {
    sum += score[i];
  }
  currentSqr.innerHTML = sum;
  question9.style.display = "none";
  question10.style.display = "block";
});
let q9ans2 = document.getElementById("q9ans2");
q9ans2.addEventListener("click", () => {
  msg.innerHTML = "are you stupid?";
  question9.style.display = "none";
  question10.style.display = "block";
});
let q9ans3 = document.getElementById("q9ans3");
q9ans3.addEventListener("click", () => {
  msg.innerHTML = "are you stupid?";
  question9.style.display = "none";
  question10.style.display = "block";
});
let q9ans4 = document.getElementById("q9ans4");
q9ans4.addEventListener("click", () => {
  msg.innerHTML = "are you stupid?";
  question9.style.display = "none";
  question10.style.display = "block";
});

// question10

let q10ans2 = document.getElementById("q10ans2");

let question10 = document.getElementById("question10");
q10ans2.addEventListener("click", () => {
  msg.innerHTML = "nice job ";
  score.push(10);
  let sum = 0;

  for (let i = 0; i < score.length; i++) {
    sum += score[i];
  }
  currentSqr.innerHTML = sum;

  question10.style.display = "none";
});
let q10ans1 = document.getElementById("q10ans1");
q10ans1.addEventListener("click", () => {
  msg.innerHTML = "are you stupid?";

  question10.style.display = "none";
});
let q10ans3 = document.getElementById("q10ans3");
q10ans3.addEventListener("click", () => {
  msg.innerHTML = "are you stupid?";

  question10.style.display = "none";
});
let q10ans4 = document.getElementById("q10ans4");
q10ans4.addEventListener("click", () => {
  msg.innerHTML = "are you stupid?";

  question10.style.display = "none";
});
