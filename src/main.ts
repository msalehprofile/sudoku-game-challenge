const selectChosenBox = document.querySelectorAll(".grid__box__no");
const selectChosenNumber = document.querySelectorAll(".numbers__single");

if (!selectChosenBox || !selectChosenNumber) {
  throw new Error("Issue With Selector");
}

let boxId = "";
let numberId = "";

const handleBoxSelector = (event: Event) => {
  let boxId = event.target;
  return boxId;
};



const handleNumberSelector = (event: Event) => {
  let numberId = event.target;
  return numberId;
};

// event listeners
selectChosenBox.forEach((box) => {
  box.addEventListener("click", handleBoxSelector);
});

selectChosenNumber.forEach((number) => {
  number.addEventListener("click", handleNumberSelector);
});
