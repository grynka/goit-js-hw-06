const dataInput = document.querySelector("#font-size-control");
const textSpan = document.querySelector("#text");
textSpan.style.fontSize = `${dataInput.value}px`;



dataInput.addEventListener("input", () => {
    textSpan.style.fontSize = `${dataInput.value}px`;
});