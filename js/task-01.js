const listUl = document.querySelectorAll('li.item')
console.log("Number of categories: " + listUl.length)

for (const category of listUl) {
    console.log("Category: " + category.firstElementChild.textContent)
    const lissLi = category.querySelectorAll('li');
    console.log("Elements: " + lissLi.length)
    }

