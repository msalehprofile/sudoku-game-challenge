import { renderEasy } from "./easy";
import { renderMedium } from "./medium";
import { renderHard } from "./hard";

const levelButtonSelection = document.querySelectorAll<HTMLButtonElement>(
  ".navigation__difficulty--button"
);
const screenLayoutHTML = document.querySelector(".screen");

const loadedGame = document.querySelector(".screen");

if (!levelButtonSelection || !screenLayoutHTML || !loadedGame) {
  throw new Error("Issue With Selector");
}

let selectedLevel = "";
let originalHTML = screenLayoutHTML.innerHTML
console.log(originalHTML)

levelButtonSelection.forEach((level) => {
  level.addEventListener("click", () => {
    selectedLevel = String(level.getAttribute("id"));
    if (selectedLevel === "easy") {
      screenLayoutHTML.innerHTML = renderEasy();
    } else if (selectedLevel === "medium") {
      screenLayoutHTML.innerHTML = renderMedium;
    } else if (selectedLevel === "hard") {
      screenLayoutHTML.innerHTML = renderHard;
    }
    handleRestart();
  });
});

const handleRestart = () => {
  if (selectedLevel === "easy") {
    screenLayoutHTML.innerHTML = renderEasy();
  } else if (selectedLevel === "medium") {
    screenLayoutHTML.innerHTML = renderMedium;
  } else if (selectedLevel === "hard") {
    screenLayoutHTML.innerHTML = renderHard;
  }
};

const handleGame = (event: Event) => {
  const target = event.target as HTMLButtonElement;
  if (target.matches(".grid__box--start")) {
    const restartButton = document.querySelector(".screen__edit--restart");
    const selectChosenBox = document.querySelectorAll(".grid__box__no");
    const selectChosenNumber = document.querySelectorAll(".numbers__single");
    const errorCount = document.querySelector<HTMLDivElement>(
      ".navigation__errors--error-count"
    );
    const selectDelete = document.querySelector<HTMLButtonElement>(
      ".screen__edit--delete"
    );
    const finishButton = document.querySelector(".screen__edit--finish");
    const goBackButton = document.querySelector(".nagivation__home");

    if (
      !selectChosenBox ||
      !selectChosenNumber ||
      !errorCount ||
      !selectDelete ||
      !restartButton ||
      !restartButton ||
      !finishButton ||
      !goBackButton
    ) {
      throw new Error("Issue With Selector");
    }

    let boxId = "";
    let boxValue = "";
    let numberId = "";
    let boxHorizontalClass = "";
    let boxVerticalClass = "";
    let boxtotalClass = "";


    levelButtonSelection.forEach((level) => {
      level.addEventListener("click", () => {
        selectedLevel = String(level.getAttribute("id"));
        if (selectedLevel === "easy") {
          screenLayoutHTML.innerHTML = renderEasy();
        } else if (selectedLevel === "medium") {
          screenLayoutHTML.innerHTML = renderMedium;
        } else if (selectedLevel === "hard") {
          screenLayoutHTML.innerHTML = renderHard;
        }
        handleRestart();
      });
    });

    // gets information stored about the box user selected
    selectChosenBox.forEach((box) => {
      box.addEventListener("click", () => {
        numberId = " ";
        boxId = String(box.getAttribute("id"));
        boxVerticalClass = String(box.getAttribute("class")).slice(3, 5);
        boxHorizontalClass = String(box.getAttribute("class")).slice(0, 2);
        boxtotalClass = String(box.getAttribute("class")).slice(6, 8);
        box.getAttribute("class");
        console.log("this is the box HTML", boxId);
        boxValue = boxId.slice(1);
        checkMatch();
        handleHighlightSystem();
      });
    });

    // gets the id of the selected number
    selectChosenNumber.forEach((number) => {
      number.addEventListener("click", () => {
        numberId = String(number.getAttribute("id"));
        checkMatch();
      });
    });

    // highlights the box user selected, and the range that cannot have the same number in
    const handleHighlightSystem = () => {
      const allBoxesElementGrab =
        document.getElementsByClassName("grid__box__no");
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

    // check if the number player selected matches the correct answer
    const checkMatch = () => {
      if (boxValue === numberId) {
        let inputtedNumber = document.getElementById(boxId);
        if (inputtedNumber != null) {
          inputtedNumber.innerHTML = numberId;
          inputtedNumber.style.color = "blue";
          console.log(inputtedNumber);
        }
      } else if (numberId === " " || boxId === " ") {
        errorCount.innerHTML = errorCount.innerHTML;
      } else if (boxValue != numberId) {
        let inputtedNumber = document.getElementById(boxId);
        if (inputtedNumber != null) {
          inputtedNumber.innerHTML = numberId;
          inputtedNumber.style.color = "red";
          errorCount.innerHTML = String(Number(errorCount.innerHTML) + 1);
        }
      }
    };

    // restarts the game
    const handleRestart = () => {
      if (selectedLevel === "easy") {
        screenLayoutHTML.innerHTML = renderEasy();
      } else if (selectedLevel === "medium") {
        screenLayoutHTML.innerHTML = renderMedium;
      } else if (selectedLevel === "hard") {
        screenLayoutHTML.innerHTML = renderHard;
      }
    };

    // delete numbers from selected box
    const handleDelete = () => {
      let inputtedNumber = document.getElementById(boxId);
      if (inputtedNumber != null) {
        inputtedNumber.innerHTML = "";
      }
    };

    //handle end of game
    const handleEndGame = () => {
      let finishLevel =
        selectedLevel.slice(0, 1).toUpperCase() + selectedLevel.slice(1);

      if (errorCount.innerHTML === "0") {
        screenLayoutHTML.innerHTML = `    
        <header>
          <h1 class="result-card">Well Done!</h1>
          <p class="result-card__level">You Completed the ${finishLevel} Level</p>
          <p class="result-card__errors">Amazing, you made no errors!</p>
          <button class="result-card__home">Home</button>
        </header>`;
      } else if (
        errorCount.innerHTML === "1" ||
        errorCount.innerHTML === "2" ||
        errorCount.innerHTML === "3"
      ) {
        let totalErrors = errorCount.innerHTML;
        screenLayoutHTML.innerHTML = `    
        <header>
          <h1 class="result-card">Well Done!</h1>
          <p class="result-card__level">You Completed the ${finishLevel} Level</p>
          <p class="result-card__errors">You only made ${totalErrors} errors!</p>
          <button class="result-card__home">Home</button>
        </header>`;
      } else {
        let totalErrors = errorCount.innerHTML;
        screenLayoutHTML.innerHTML = `    
        <header class="result-card">
          <h1 class="result-card__congrats">Well Done!</h1>
          <p class="result-card__level">You Completed the ${finishLevel} Level</p>
          <p class="result-card__errors">You made ${totalErrors} errors, try again!</p>
          <button class="result-card__home">Home</button>
        </header>`;
      }
    };

    const handleGoHome = () => {
      screenLayoutHTML.innerHTML = `${originalHTML}`
    };

    // event listeners
    selectChosenBox.forEach((box) => {
      box.addEventListener("click", handleHighlightSystem);
    });
    selectDelete.addEventListener("click", handleDelete);
    restartButton.addEventListener("click", handleRestart);
    finishButton.addEventListener("click", handleEndGame);
    goBackButton.addEventListener("click", handleGoHome);
  }
};
// event listeners

loadedGame.addEventListener("click", handleGame);
