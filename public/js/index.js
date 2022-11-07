var h1 = document.querySelector("h1");
var h2 = document.createElement("h2");
var img = document.createElement("img");
var button = document.querySelector(".btn");
var input = document.createElement("input");
var container = document.querySelector("div");
var icon = document.createElement("i");
var backButton = document.querySelector(".hidden");
const body = document.querySelector("body");
var p = document.createElement("p");
var pageNum = 1;

document.addEventListener("DOMContentLoaded", loadPage("index"));

function changeText(h1Text, h2Text) {
  h1.innerText = h1Text;
  h2.innerText = h2Text;
};

function addImg(src) {
  document.querySelector(".imgcont").appendChild(img);
  img.src = src;
};

function loadPage() {
  document.querySelector(".textcont").appendChild(h2);

  changeText("Star Wheel", "Horoscope Calculator");
  addImg("/images/WindRose.svg");
  button.innerText = "Begin";
  button.classList.add("begin");
  document.querySelector(".btncont").classList.add("center");
  button.addEventListener("click", function () {
    changePage(1);
  });
  // newButton.addEventListener("click", function () {
  //   changePage(pageNum);
  // });
};

function previousPage() {
  backButton.innerHTML = '<i class="fa fa-chevron-left" aria-hidden="true"></i> Back'
  backButton.addEventListener("click", function () {
    changePage(1)
  });
};

function nextPage() {
  button.innerHTML = 'Continue <i class="fa fa-chevron-right" aria-hidden="true" />'
  button.addEventListener("click", function () {
    changePage(pageNum + 1)
  });
};

function backToMain() {
  button.classList.add("home");
  button.innerHTML = "Back to Main";
  button.classList.remove("continue");
  backButton.remove();
  button.addEventListener("click", function () {
    history.go(0);
  });
};

function changePage(pageNum) {
  img.remove();
  h2.remove();
  button.classList.remove("begin");
  button.classList.add("continue");
  
  /* backButton toggle */
  if(backButton.classList.contains("hidden")){
    backButton.classList.replace("hidden","back");
  } else {
    backButton.classList.replace("back","hidden");
  }

  if (pageNum === 1) {
    /* Hide backButton*/
    backButton.classList.replace("back","hidden");
    
    changeText("Enter Your Name");
    input.setAttribute("type", "text");
    document.querySelector("form").appendChild(input);
    document.querySelector(".inputcont").style.display = "flex";
    nextPage();
  };

  if (pageNum === 2) {
    changeText("Select your Date of Birth");
    input.setAttribute("type", "date");
    input.classList.add("date");
    previousPage();
    button.addEventListener("click", function () {
      showResults();
      backToMain();
    });
  };
};

function showResults() {

  var userName = "name";
  var signName = "signName";

  changeText("Hi " + userName + ", " + "You are a " + signName);

  document.querySelector(".imgcont").after(".textcont");

  addImg("/images/signs/leo.svg");

  var div = document.createElement("div")
  document.querySelector(".container").appendChild(div);

  div.classList.add("zodiac-date");
  div.innerText = "Jan 20 - Feb 18";

  document.querySelector(".inputcont").style.display = "none";

  document.querySelector(".container").classList.add("start");
  document.querySelector(".container").classList.remove("center");

  document.querySelector(".container").appendChild(p);
  p.innerText = 'Despite the "aqua" in its name, Aquarius is actually the last air sign of the zodiac. Innovative, progressive, and shamelessly revolutionary. Accordingly, Aquarius is the most humanitarian astrological sign.'
};

//         // <i class="fa fa-chevron-left" aria-hidden="true"></i>
//         // <i class="fa fa-chevron-right" aria-hidden="true"></i>