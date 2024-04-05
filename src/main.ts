const selectChosenBox = document.querySelectorAll(".grid__box__no");
const selectChosenNumber = document.querySelectorAll(".numbers__single");

if (!selectChosenBox || !selectChosenNumber) {
  throw new Error("Issue With Selector");
}

let box = "";
let boxId = "";
let boxValue = "";
let boxHTML = "";
let numberId = "";



// const handleBoxSelector = (event: Event) => {
//   let boxAsElement = event.target as HTMLInputElement
//   boxId = String(boxAsElement.getAttribute('id'))
//   if (boxId === numberId) {
//     console.log("hey there")
//   }
// };

selectChosenBox.forEach((box) => {
  boxId = "" ;
  box.addEventListener("click", () => {
    boxId = String(box.getAttribute("id"));
    boxValue = boxId.slice(1)
    let boxInnerText = box.innerHTML
    console.log(boxId);
    checkMatch();
    })
  })


selectChosenNumber.forEach((number) => {
  number.addEventListener("click", () => {
    numberId = String(number.getAttribute("id"));
    console.log(numberId);
    checkMatch();
  });
});

const checkMatch = () => {
  if (boxValue === numberId) {
    let newHTML = document.getElementById(boxId)
    newHTML.innerHTML = numberId
    newHTML.style.color = 'blue'
    console.log(newHTML)
  } else {
    let newHTML = document.getElementById(boxId)
    newHTML.innerHTML = numberId
    newHTML.style.color = 'red'
    console.log(newHTML)
  }
};

// event listeners
// selectChosenBox.forEach((box) => {
//   box.addEventListener("click", handleBoxSelector);
// });

// selectChosenNumber.forEach((number) => {
//   number.addEventListener("click", handleNumberSelector);
// });
