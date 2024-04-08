import { renderEasy } from "./easy";
import { renderMedium } from "./medium";
import { renderHard } from "./hard";

const selectChosenBox = document.querySelectorAll(".grid__box__no");
const selectChosenNumber = document.querySelectorAll(".numbers__single");
const errorCount = document.querySelector<HTMLDivElement>(
  ".navigation__errors--error-count"
);
const selectDelete = document.querySelector<HTMLDivElement>(
  ".screen__erase--delete"
);
const levelButtonSelection = document.querySelectorAll<HTMLButtonElement>(
  ".navigation__difficulty--button"
);
const sodukoGridHTML = document.querySelector(".screen__grid");
const restartButton = document.querySelector(".navigation__restart");

if (
  !selectChosenBox ||
  !selectChosenNumber ||
  !errorCount ||
  !selectDelete ||
  !levelButtonSelection ||
  !sodukoGridHTML ||
  !restartButton
) {
  throw new Error("Issue With Selector");
}

let boxId = "";
let boxValue = "";
let numberId = "";
let inputtedNumber = "";
let boxHorizontalClass = "";
let boxVerticalClass = "";
let boxtotalClass = "";
let selectedLevel = "";
// const handleLevelHTML = () => {
//   let selectedLevel = document.get
// }

levelButtonSelection.forEach((level) => {
  level.addEventListener("click", () => {
    selectedLevel = String(level.getAttribute("id"));
    if (selectedLevel === "easy") {
      sodukoGridHTML.innerHTML = renderEasy;
    } else if (selectedLevel === "medium") {
      sodukoGridHTML.innerHTML = renderMedium;
    } else if (selectedLevel === "hard") {
      sodukoGridHTML.innerHTML = renderHard;
    }
    handleRestart();
  });
});

const handleRestart = () => {
  if (selectedLevel === "easy") {
    sodukoGridHTML.innerHTML = renderEasy;
  } else if (selectedLevel === "medium") {
    sodukoGridHTML.innerHTML = renderMedium;
  } else if (selectedLevel === "hard") {
    sodukoGridHTML.innerHTML = renderHard;
  }
};

selectChosenBox.forEach((box) => {
  box.addEventListener("click", () => {
    numberId = " ";
    boxId = String(box.getAttribute("id"));
    boxVerticalClass = String(box.getAttribute("class")).slice(3, 5);
    boxHorizontalClass = String(box.getAttribute("class")).slice(0, 2);
    boxtotalClass = String(box.getAttribute("class")).slice(6, 8);
    box.getAttribute("class");

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
    if (
      allBoxesElementGrab[i].classList.contains(boxHorizontalClass) ||
      allBoxesElementGrab[i].classList.contains(boxtotalClass) ||
      allBoxesElementGrab[i].classList.contains(boxVerticalClass)
    ) {
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

const handleDelete = () => {
  inputtedNumber.innerHTML = " ";
};

// event listeners
selectChosenBox.forEach((box) => {
  box.addEventListener("click", handleHighlightSystem);
});

selectDelete.addEventListener("click", handleDelete);
restartButton.addEventListener("click", handleRestart);
