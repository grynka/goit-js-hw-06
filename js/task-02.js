const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const list = document.querySelector("#ingredients");

const items = ingredients
  .map((ingredients) => `<li class="item">${ingredients}</li>`)
  .join("");
list.insertAdjacentHTML("beforeend", items);
