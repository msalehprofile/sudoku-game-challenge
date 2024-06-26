import { renderGameHTML } from "./gamecompiler";
import { easyMode } from "./object";
import { mediumMode } from "./object";
import { hardMode } from "./object";

const levelButtonSelection = document.querySelectorAll<HTMLButtonElement>(
  ".navigation__difficulty--button"
);
const screenLayoutHTML = document.querySelector(".screen");
const loadedGame = document.querySelector(".screen");

if (!levelButtonSelection || !screenLayoutHTML || !loadedGame) {
  throw new Error("Issue With Selector");
}

let selectedLevel = "";
let renderEasyGame = "";
let renderMediumGame = "";
let renderHardGame = "";

// for each loop to render the level selected onto the screen
levelButtonSelection.forEach((level) => {
  level.addEventListener("click", () => {
    selectedLevel = String(level.getAttribute("id"));
    if (selectedLevel === "easy") {
      renderEasyGame = renderGameHTML(easyMode[Math.floor(Math.random() * 3)]);
      screenLayoutHTML.innerHTML = renderEasyGame;
    } else if (selectedLevel === "medium") {
      renderMediumGame = renderGameHTML(
        mediumMode[Math.floor(Math.random() * 3)]
      );
      screenLayoutHTML.innerHTML = renderMediumGame;
    } else if (selectedLevel === "hard") {
      renderHardGame = renderGameHTML(hardMode[Math.floor(Math.random() * 3)]);
      screenLayoutHTML.innerHTML = renderHardGame;
    }
  });
});

// function to handle game play
const handleGame = (event: Event) => {
  const target = event.target as HTMLButtonElement;
  if (
    target.matches("#easy") ||
    target.matches("#medium") ||
    target.matches("#hard") ||
    target.matches(".screen__edit--restart") ||
    target.matches(".screen__edit--delete")
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
    const goBackButton = document.querySelector(".nagivation__home");

    if (
      !selectChosenBox ||
      !selectChosenNumber ||
      !errorCount ||
      !selectDelete ||
      !restartButton ||
      !restartButton ||
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
    let totalErrors = "";

    // gets information stored about the box user selected
    selectChosenBox.forEach((box) => {
      box.addEventListener("click", () => {
        numberId = " ";
        boxId = String(box.getAttribute("id"));
        boxVerticalClass = String(box.getAttribute("class")).slice(3, 5);
        boxHorizontalClass = String(box.getAttribute("class")).slice(0, 2);
        boxtotalClass = String(box.getAttribute("class")).slice(6, 8);
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
      const allBoxesElementGrab = Array.from(
        document.getElementsByClassName("grid__box__no")
      ) as unknown as HTMLCollectionOf<HTMLElement>;

      for (let i = 0; i < allBoxesElementGrab.length; i++) {
        // if the classes contain the combination of rows and columns selected in event listener, make background grey, otherwise make background white
        if (
          allBoxesElementGrab[i].classList.contains(boxHorizontalClass) ||
          allBoxesElementGrab[i].classList.contains(boxtotalClass) ||
          allBoxesElementGrab[i].classList.contains(boxVerticalClass)
        ) {
          allBoxesElementGrab[i].style.backgroundColor = "#D4BBF9";
        } else allBoxesElementGrab[i].style.backgroundColor = "white";
      }
    };

    // check if the number player selected matches the correct answer
    const checkMatch = () => {
      let inputtedNumber = document.getElementById(boxId);
      let currentErrors = errorCount.innerHTML;

      if (boxValue === numberId) {
        if (inputtedNumber != null) {
          inputtedNumber.innerHTML = numberId;
          inputtedNumber.style.color = "#374785";

          // checking how many empty boxes are left
          let emptyBoxes = 0;
          const boxArr = document.querySelectorAll(".grid__box__no");

          if (!boxArr) {
            throw new Error("issue with selectors");
          }

          for (let i = 0; i < boxArr.length; i++) {
            if (boxArr[i].innerHTML === "") {
              emptyBoxes++;
            }
          }
          if (emptyBoxes === 0) {
            const finalScoreMessage = returnFinalScoreMessage(totalErrors);
            let finishLevel =
              selectedLevel.slice(0, 1).toUpperCase() + selectedLevel.slice(1);
            screenLayoutHTML.innerHTML = `<header class="result">
            <h1 class="result__title">Level completed</h1>
            <section class="result-card">
              <p class="result-card__level">Difficulty: ${finishLevel}</p>
              <p class="result-card__errors">${finalScoreMessage}</p>
            </section>
            <button class="result__home">Home</button>
          </header>`;
          }
          handleFinalGoHome(event);
        }
      } else if (numberId === " " || boxeditable === "H") {
        errorCount.innerHTML = errorCount.innerHTML;
      } else if (boxValue != numberId) {
        if (inputtedNumber != null) {
          inputtedNumber.innerHTML = numberId;
          inputtedNumber.style.color = "#DC541C";
          totalErrors = String(Number(currentErrors) + 1);
          errorCount.innerHTML = totalErrors;
          returnFinalScoreMessage(errorCount.innerHTML);
        }
      }
    };

    // restarts the game
    const handleRestart = () => {
      if (selectedLevel === "easy") {
        screenLayoutHTML.innerHTML = renderEasyGame;
      } else if (selectedLevel === "medium") {
        screenLayoutHTML.innerHTML = renderMediumGame;
      } else if (selectedLevel === "hard") {
        screenLayoutHTML.innerHTML = renderHardGame;
      }
    };

    // delete numbers from selected box
    const handleDelete = () => {
      let inputtedNumber = document.getElementById(boxId);
      if (inputtedNumber != null && boxeditable === "H") {
        inputtedNumber.innerHTML = inputtedNumber.innerHTML;
      } else if (inputtedNumber != null) {
        inputtedNumber.innerHTML = "";
      }
    };

    // getting the HTML for the end screen
    const returnFinalScoreMessage = (errors: string) => {
      totalErrors = errorCount.innerHTML;
      if (errors === "0") {
        return "You got no penalties!";
      } else if (errors === "1") {
        return `You recieved ${totalErrors} penalty`;
      } else {
        return `You recieved ${totalErrors} penalties`;
      }
    };

    // handles the go back button on the game page
    const handleGoHome = () => {
      window.location.href = "index.html";
    };

    // handles the home button on the finishing page
    const handleFinalGoHome = (event: Event) => {
      const target = event.target as HTMLButtonElement;

      if (target.matches(".numbers__single")) {
        const goHomeButton = document.querySelector(".result__home");
        if (!goHomeButton) {
        }

        if (goHomeButton) {
          goHomeButton.addEventListener("click", handleGoHome);
        }
      }
    };

    // event listeners
    selectChosenBox.forEach((box) => {
      box.addEventListener("click", handleHighlightSystem);
    });
    selectDelete.addEventListener("click", handleDelete);
    restartButton.addEventListener("click", handleRestart);
    goBackButton.addEventListener("click", handleGoHome);
    loadedGame.addEventListener("click", handleFinalGoHome);
  }
};

// event listeners
loadedGame.addEventListener("click", handleGame);
