const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const list = document.querySelector("#ingredients");

for (const item of ingredients) {
  const ingredient = document.createElement("li");
  ingredient.textContent = item;
  ingredient.className = 'item';
  list.append(ingredient);
}