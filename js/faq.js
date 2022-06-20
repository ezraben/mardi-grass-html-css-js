let nav = document.querySelector("nav");
nav.addEventListener("click", () => {
  ansr1.style.display = "none";
  ansr2.style.display = "none";
  ansr3.style.display = "none";
  ansr4.style.display = "none";
  ansr5.style.display = "none";
  ansr6.style.display = "none";
  ansr7.style.display = "none";
});

let footer = document.querySelector("footer");
footer.addEventListener("click", () => {
  ansr1.style.display = "none";
  ansr2.style.display = "none";
  ansr3.style.display = "none";
  ansr4.style.display = "none";
  ansr5.style.display = "none";
  ansr6.style.display = "none";
  ansr7.style.display = "none";
});

let qus1 = document.getElementById("qus-1");
let ansr1 = document.getElementById("ans-1");

qus1.addEventListener("click", () => {
  ansr1.style.display = "block";
  ansr2.style.display = "none";
  ansr3.style.display = "none";
  ansr4.style.display = "none";
  ansr5.style.display = "none";
  ansr6.style.display = "none";
  ansr7.style.display = "none";
});

let qus2 = document.getElementById("qus-2");
let ansr2 = document.getElementById("ans-2");
qus2.addEventListener("click", () => {
  ansr2.style.display = "block";
  ansr1.style.display = "none";
  ansr3.style.display = "none";
  ansr4.style.display = "none";
  ansr5.style.display = "none";
  ansr6.style.display = "none";
  ansr7.style.display = "none";
});

let qus3 = document.getElementById("qus-3");
let ansr3 = document.getElementById("ans-3");
qus3.addEventListener("click", () => {
  ansr3.style.display = "block";
  ansr1.style.display = "none";
  ansr2.style.display = "none";
  ansr4.style.display = "none";
  ansr5.style.display = "none";
  ansr6.style.display = "none";
  ansr7.style.display = "none";
});

let qus4 = document.getElementById("qus-4");
let ansr4 = document.getElementById("ans-4");
qus4.addEventListener("click", () => {
  ansr4.style.display = "block";
  ansr1.style.display = "none";
  ansr2.style.display = "none";
  ansr3.style.display = "none";
  ansr5.style.display = "none";
  ansr6.style.display = "none";
  ansr7.style.display = "none";
});

let qus5 = document.getElementById("qus-5");
let ansr5 = document.getElementById("ans-5");
qus5.addEventListener("click", () => {
  ansr5.style.display = "block";
  ansr1.style.display = "none";
  ansr2.style.display = "none";
  ansr3.style.display = "none";
  ansr4.style.display = "none";
  ansr6.style.display = "none";
  ansr7.style.display = "none";
});

let qus6 = document.getElementById("qus-6");
let ansr6 = document.getElementById("ans-6");
qus6.addEventListener("click", () => {
  ansr6.style.display = "block";
  ansr1.style.display = "none";
  ansr2.style.display = "none";
  ansr3.style.display = "none";
  ansr4.style.display = "none";
  ansr5.style.display = "none";
  ansr7.style.display = "none";
});

let qus7 = document.getElementById("qus-7");
let ansr7 = document.getElementById("ans-7");
qus7.addEventListener("click", () => {
  ansr7.style.display = "block";
  ansr1.style.display = "none";
  ansr2.style.display = "none";
  ansr3.style.display = "none";
  ansr4.style.display = "none";
  ansr5.style.display = "none";
  ansr6.style.display = "none";
});
