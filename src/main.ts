import countdown from "time-span";

const selectChosenBox = document.querySelectorAll(".grid__box__no");
const selectChosenNumber = document.querySelectorAll(".numbers__single");
const errorCount = document.querySelector<HTMLDivElement>(".error-count");

if (!selectChosenBox || !selectChosenNumber || !errorCount) {
  throw new Error("Issue With Selector");
}

console.log(selectChosenBox)



let boxId = "";
let boxValue = "";
let numberId = "";
let inputtedNumber = "";
let boxHorizontalClass = "";
let boxVerticalClass = "";
let boxtotalClass = "";


// let countdown = require('time-counter'),
//     log = console.log.bind(console);

// let countUpTimer = new Timer();
// countUpTimer.on('change', log);

selectChosenBox.forEach((box) => {
  box.addEventListener("click", () => {
    numberId = " ";
    boxId = String(box.getAttribute("id"));
    boxVerticalClass = String(box.getAttribute("class")).slice(3, 5);
    boxHorizontalClass = String(box.getAttribute("class")).slice(0, 2);
    boxtotalClass = String(box.getAttribute("class")).slice(6, 8);
    box.getAttribute('class')

    boxValue = boxId.slice(1);
    console.log("this is the boxclass", boxVerticalClass);
    console.log("this is the boxid", boxId);
    console.log("this is the numberid", numberId);
    checkMatch();
    handleHighlightSystem();
  });
});

selectChosenNumber.forEach((number) => {
  number.addEventListener("click", () => {
    numberId = String(number.getAttribute("id"));
    console.log(numberId);
    checkMatch();
  });
});


const handleHighlightSystem = () => {
  const allBoxesElementGrab = document.getElementsByClassName("grid__box__no");
  for (let i = 0; i < allBoxesElementGrab.length; i++) {
    // if the classes contain the combination of rows and columns selected in event listener, make background grey, otherwise make background white
    if (allBoxesElementGrab[i].classList.contains(boxHorizontalClass) || allBoxesElementGrab[i].classList.contains(boxtotalClass) ||allBoxesElementGrab[i].classList.contains(boxVerticalClass)) {
      allBoxesElementGrab[i].style.backgroundColor = "grey";
    } else allBoxesElementGrab[i].style.backgroundColor = "white";
  }
};

const checkMatch = () => {
  if (boxValue === numberId) {
    inputtedNumber = document.getElementById(boxId);
    inputtedNumber.innerHTML = numberId;
    inputtedNumber.style.color = "blue";
    console.log(inputtedNumber);
  } else if (numberId === " " || boxId === " ") {
    errorCount.innerHTML = errorCount.innerHTML;
  } else if (boxValue != numberId) {
    inputtedNumber = document.getElementById(boxId);
    inputtedNumber.innerHTML = numberId;
    inputtedNumber.style.color = "red";
    errorCount.innerHTML = String(Number(errorCount.innerHTML) + 1);
  }
};

// event listeners
selectChosenBox.forEach((box) => {
  box.addEventListener("click", handleHighlightSystem);
});
