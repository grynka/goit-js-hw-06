const dataInput = document.querySelector("#font-size-control");
const textSpan = document.querySelector("#text");



dataInput.addEventListener("input", () => {
    textSpan.style.fontSize = `${dataInput.value}px`;
});