
const selectChosenBox = document.querySelectorAll(".grid__box__no")

if(!selectChosenBox) {
  throw new Error ("Issue With Selector")
}

selectChosenBox.forEach((box) => {
  box.addEventListener("click", () => {
    let boxId = box.getAttribute('id')
    console.log(boxId)
  })
})
