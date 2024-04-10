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

// for each loop to render the level selected onto the screen
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
  });
});

// function to handle game play
const handleGame = (event: Event) => {
  const target = event.target as HTMLButtonElement;
  if (
    target.matches("#easy") ||
    target.matches("#medium") ||
    target.matches("#hard")
  ) {
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
    let boxeditable = "";

    // gets information stored about the box user selected
    selectChosenBox.forEach((box) => {
      box.addEventListener("click", () => {
        numberId = " ";
        boxId = String(box.getAttribute("id"));
        boxVerticalClass = String(box.getAttribute("class")).slice(3, 5);
        boxHorizontalClass = String(box.getAttribute("class")).slice(0, 2);
        boxtotalClass = String(box.getAttribute("class")).slice(6, 8);
        box.getAttribute("class");
        boxValue = boxId.slice(1, 2);
        boxeditable = boxId.slice(2);
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
      
      console.log("box is", inputtedNumber)
      if (inputtedNumber != null && boxeditable === "H") {
        inputtedNumber.innerHTML = inputtedNumber.innerHTML;
      } else if (inputtedNumber != null) {
        inputtedNumber.innerHTML = ""
      }
    };

    // getting the HTML for the end screen
    let totalErrors = errorCount.innerHTML;
    let goodScore = "Amazing, you made no errors!";
    let aveScore = `You only made ${totalErrors} errors!`;
    let badScore = `You made ${totalErrors} errors, try again!`;

    const returnFinalScoreMessage = (errors: string) => {
      if (errors === "0") {
        return goodScore;
      } else if (errors === "1" || errors === "2" || errors === "3") {
        return aveScore;
      } else {
        return badScore;
      }
    };
    const finalScoreMessage = returnFinalScoreMessage(totalErrors);

    //handle end of game
    const handleEndGame = () => {
      let finishLevel =
        selectedLevel.slice(0, 1).toUpperCase() + selectedLevel.slice(1);
      screenLayoutHTML.innerHTML = `<header class="result">
            <h1 class="result-card__title">SUDOKU</h1>
            <section class="result-card">
              <h1 class="result-card__congrats">Well Done!</h1>
              <p class="result-card__level">You Completed the ${finishLevel} Level</p>
              <p class="result-card__errors">${finalScoreMessage}</p>
            </section>
            <button class="result__home">Home</button>
          </header>`;
    };

    // handles the go back button on the game page
    const handleGoHome = () => {
      window.location.href = "index.html";
    };

    // handles the home button on the finishing page
    const handleFinalGoHome = (event: Event) => {
      const target = event.target as HTMLButtonElement;
      if (target.matches(".screen__edit--finish")) {
        const goHomeButton = document.querySelector(".result-card__home");

        if (!goHomeButton) {
          throw new Error("issue with Home button");
        }

        goHomeButton.addEventListener("click", handleGoHome);
      }
    };

    // event listeners
    selectChosenBox.forEach((box) => {
      box.addEventListener("click", handleHighlightSystem);
    });
    selectDelete.addEventListener("click", handleDelete);
    restartButton.addEventListener("click", handleRestart);
    finishButton.addEventListener("click", handleEndGame);
    goBackButton.addEventListener("click", handleGoHome);
    loadedGame.addEventListener("click", handleFinalGoHome);
  }
};

// event listeners
loadedGame.addEventListener("click", handleGame);
