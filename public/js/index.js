var h1 = document.querySelector("h1");
var h2 = document.createElement("h2");
var img = document.createElement("img");
var button = document.querySelector("button");
var input = document.querySelector("input");
var container = document.querySelector("div");
var icon = document.createElement("i");
var backButton = document.createElement("button");
const body = document.querySelector("body");
var p = document.createElement("p");

var page = 1;
var pageCount = 3;

document.addEventListener("DOMContentLoaded", loadFirstPage("index"));

function changeText(h1Text, h2Text) {
  h1.innerText = h1Text;
  h2.innerText = h2Text;
};

function addImg(src) {
  document.querySelector(".imgcont").appendChild(img);
  img.src = src;
};

function backToMain() {
  button.classList.add("home");
  button.innerText = "Back to Main";
  button.classList.remove("continue");
  backButton.remove();
  button.addEventListener("click", function () {
    history.go(0);
  });
};

function previousPage() {
  backButton.addEventListener("click", function () {
    page = (page + 1) - (page - 1)
    display(page);
  });
};

function nextPage() {
  button.addEventListener("click", function () {
    page = page + 1
    display(page);
  });
};

function loadFirstPage() {
  document.querySelector(".textcont").appendChild(h2);

  changeText("Star Wheel", "Horoscope Calculator");
  addImg("/images/WindRose.svg");
  button.innerText = "Begin";
  button.classList.add("begin");
  document.querySelector(".btncont").classList.add("center");

  button.addEventListener("click", function () {
    display(1);
  });
};

function display(page) {
  h2.remove();

  button.classList.replace("begin", "continue");
  button.innerHTML = 'Continue <i class="fa fa-chevron-right" aria-hidden="true" />'
  document.querySelector(".btncont").appendChild(backButton);
  document.querySelector(".btncont").insertBefore(backButton, button)

  backButton.classList.add("back");
  backButton.innerHTML = '<i class="fa fa-chevron-left" aria-hidden="true"></i> Back'
  document.querySelector(".btncont").style.justifyContent = "space-between";

  document.querySelector(".container").classList.replace('center', 'start');

  nextPage();
  previousPage();

  if (page === 1) {
    changeText("Enter Your Name");
    input.setAttribute("type", "text");
    document.querySelector(".inputcont").classList.replace("hidden", "center");
    img.classList.add("hidden");
  };

  if (page === 2) {
    changeText("Select your Date of Birth");
    input.setAttribute("type", "date");
    document.querySelector(".inputcont").classList.replace("hidden", "center");
    img.classList.add("hidden");
  };

  if (page === 3) {
    img.classList.remove("hidden");
    addImg("/images/signs/leo.svg");
    // document.querySelector(".imgcont").after("textcont");
    document.querySelector(".container").style.gap = "40px"

    var div = document.createElement("div")
    document.querySelector(".container").appendChild(div);

    div.classList.add("zodiac-date");
    div.innerText = "Jan 20 - Feb 18";

    document.querySelector(".btncont").classList.add("hidden");

    document.querySelector(".container").classList.replace("center", "start");
    document.querySelector(".inputcont").classList.replace("center", "hidden");

    document.querySelector(".container").appendChild(p);
    p.innerText = 'Despite the "aqua" in its name, Aquarius is actually the last air sign of the zodiac. Innovative, progressive, and shamelessly revolutionary. Accordingly, Aquarius is the most humanitarian astrological sign.'
    // showResults();

  };
};

input.addEventListener("input", (event) => {
  var userName = event.target.value
  changeText("Hi " + userName + ", " + "You are a " + "signName");

  console.log(userName)//Gets a property of the element
})

function storeInput() {

}






// function changePage() {



//   /* INPUT VALUE*/

//   // /* BACKBUTTON */
//   // if (backButton.classList.contains("back")) {
//   //   backButton.classList.replace("back", "back");
//   // } else {
//   //   backButton.classList.replace("back", "back");
//   // }

//   if (page === 1) {
//     changeText("Enter Your Name");
//     img.remove();


//     /* Hide backButton */
//     // backButton.classList.replace("back", "back");

//     /* NAME INPUT */
//     // nameInput.setAttribute("type", "text");
//     // signInput.classList.add("hidden");
//     // storeInput()
//   };

//   if (page === 2) {
//     img.remove();
//     changeText("Select your Date of Birth");
//     input.setAttribute("type", "date");


//     // nameInput.classList.add("hidden");
//     // signInput.setAttribute("type", "date");
//     // signInput.classList.remove("hidden");
//   };

//   if (page === 3) {
//     addImg("/images/signs/leo.svg");
//     // document.querySelector(".imgcont").after("textcont");
//     document.querySelector(".inputcont").remove();
//     document.querySelector(".container").style.gap ="40px"

//     var div = document.createElement("div")
//     document.querySelector(".container").appendChild(div);

//     div.classList.add("zodiac-date");
//     div.innerText = "Jan 20 - Feb 18";


//     document.querySelector(".container").classList.replace("center", "start");

//     document.querySelector(".container").appendChild(p);
//     p.innerText = 'Despite the "aqua" in its name, Aquarius is actually the last air sign of the zodiac. Innovative, progressive, and shamelessly revolutionary. Accordingly, Aquarius is the most humanitarian astrological sign.'
//     showResults()
//   }
// };



//         // <i class="fa fa-chevron-left" aria-hidden="true"></i>
//         // <i class="fa fa-chevron-right" aria-hidden="true"></i>