let reMoreGeneral = document.getElementById("reMoreGeneral");
reMoreGeneral.addEventListener("click", () => {
  let showGeneral = document.getElementById("showGeneral");
  showGeneral.style.display = "flex";
  reMoreGeneral.style.display = "none";
  closeGeneral.style.display = "block";
});
let closeGeneral = document.getElementById("closeGeneral");
closeGeneral.addEventListener("click", () => {
  closeGeneral.style.display = "none";
  showGeneral.style.display = "none";
  reMoreGeneral.style.display = "inline";
});

let rdHistory = document.getElementById("rdHistory");
let showHistory = document.getElementById("showHistory");
rdHistory.addEventListener("click", () => {
  rdHistory.style.display = "none";
  showHistory.style.display = "flex";
  closeHistory.style.display = "block";
});

let closeHistory = document.getElementById("closeHistory");
closeHistory.addEventListener("click", () => {
  showHistory.style.display = "none";
  rdHistory.style.display = "flex";
  closeHistory.style.display = "none";
});

let rdColors = document.getElementById("rdColors");
let showColors = document.getElementById("showColors");
rdColors.addEventListener("click", () => {
  rdColors.style.display = "none";
  showColors.style.display = "flex";
  closeColors.style.display = "flex";
});

let closeColors = document.getElementById("closeColors");
closeColors.addEventListener("click", () => {
  closeColors.style.display = "none";
  showColors.style.display = "none";
  rdColors.style.display = "flex";
  showColors.style.display = "none";
});

let rdCostum = document.getElementById("rdCostum");
let showCostum = document.getElementById("showCostum");
rdCostum.addEventListener("click", () => {
  rdCostum.style.display = "none";
  showCostum.style.display = "flex";
  closeCostun.style.display = "flex";
});

let closeCostun = document.getElementById("closeCostun");
closeCostun.addEventListener("click", () => {
  closeCostun.style.display = "none";
  showCostum.style.display = "none";
  rdCostum.style.display = "flex";
  showCostum.style.display = "none";
});

let rdTreditiions = document.getElementById("rdTreditiions");
let showTreditions = document.getElementById("showTreditions");
rdTreditiions.addEventListener("click", () => {
  rdTreditiions.style.display = "none";
  showTreditions.style.display = "flex";
  closeTraditiions.style.display = "flex";
});

let closeTraditiions = document.getElementById("closeTraditiions");
closeTraditiions.addEventListener("click", () => {
  closeTraditiions.style.display = "none";
  showTreditions.style.display = "none";
  rdTreditiions.style.display = "flex";
  showTreditions.style.display = "none";
});

let rdDoubloons = document.getElementById("rdDoubloons");
let showDoubloons = document.getElementById("showDoubloons");
rdDoubloons.addEventListener("click", () => {
  rdDoubloons.style.display = "none";
  showDoubloons.style.display = "flex";
  closeDoubloons.style.display = "inline";
});

let closeDoubloons = document.getElementById("closeDoubloons");
closeDoubloons.addEventListener("click", () => {
  closeDoubloons.style.display = "none";
  showDoubloons.style.display = "none";
  rdDoubloons.style.display = "flex";
  showDoubloons.style.display = "none";
});

let rdflambu = document.getElementById("rdflambu");
let showflambu = document.getElementById("showflambu");
rdflambu.addEventListener("click", () => {
  rdflambu.style.display = "none";
  showflambu.style.display = "flex";
  closeFlambeau.style.display = "flex";
});

let closeFlambeau = document.getElementById("closeFlambeau");
closeFlambeau.addEventListener("click", () => {
  closeFlambeau.style.display = "none";
  showflambu.style.display = "none";
  rdflambu.style.display = "flex";
  showflambu.style.display = "none";
});
