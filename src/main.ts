import countdown from 'time-span'

const selectChosenBox = document.querySelectorAll(".grid__box__no");
const selectChosenNumber = document.querySelectorAll(".numbers__single");
const errorCount = document.querySelector<HTMLDivElement>(".error-count");

if (!selectChosenBox || !selectChosenNumber || !errorCount) {
  throw new Error("Issue With Selector");
}


let boxId = "";
let boxValue = "";
let numberId = "";
let newHTML = "";

let countdown = require('time-counter'),
    log = console.log.bind(console);

let countUpTimer = new Timer();
countUpTimer.on('change', log);

// const handleBoxSelector = (event: Event) => {
//   let boxAsElement = event.target as HTMLInputElement
//   boxId = String(boxAsElement.getAttribute('id'))
//   if (boxId === numberId) {
//     console.log("hey there")
//   }
// };

selectChosenBox.forEach((box) => {
  boxId = "";
  box.addEventListener("click", () => {
    numberId = " ";
    boxId = String(box.getAttribute("id"));
    boxValue = boxId.slice(1);
    let boxInnerText = box.innerHTML;
    console.log(boxId);
    console.log("this is the numberid", numberId);
    checkMatch();
  });
});

selectChosenNumber.forEach((number) => {
  number.addEventListener("click", () => {
    numberId = String(number.getAttribute("id"));
    console.log(numberId);
    checkMatch();
  });
});

const checkMatch = () => {
  if (boxValue === numberId) {
    newHTML = document.getElementById(boxId);
    newHTML.innerHTML = numberId;
    newHTML.style.color = "blue";
    console.log(newHTML);
  } else if (numberId === " " || boxId === " ") {
    errorCount.innerHTML = errorCount.innerHTML;
  } else if (boxValue != numberId) {
    newHTML = document.getElementById(boxId);
    newHTML.innerHTML = numberId;
    newHTML.style.color = "red";
    errorCount.innerHTML = String(Number(errorCount.innerHTML) + 1)
  }
};

// event listeners
// selectChosenBox.forEach((box) => {
//   box.addEventListener("click", handleBoxSelector);
// });

// selectChosenNumber.forEach((number) => {
//   number.addEventListener("click", handleNumberSelector);
// });
