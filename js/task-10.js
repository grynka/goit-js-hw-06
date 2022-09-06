const nums = document.querySelector("input");
const buttonCreate = document.querySelector('button[data-create]');
const buttonDestroy = document.querySelector('button[data-destroy]');
const boxes = document.querySelector("#boxes");
const amount = nums.value; 
const items = [];

buttonCreate.addEventListener("click", createBoxes);
buttonDestroy.addEventListener("click", destroyBoxes);

function createBoxes(amount) {
  amount = nums.value;
   for (let i = 0; i < amount; i += 1) {
    const item = document.createElement("div");
    item.style.width = 30 + i * 10 + "px";
    item.style.height = 30 + i * 10 + "px";
    item.style.backgroundColor = getRandomHexColor();
    items.push(item);
  }
  
  boxes.append(...items)

}

function destroyBoxes() {
boxes.innerHTML  = "";
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}