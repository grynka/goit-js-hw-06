const dataInput = document.querySelector("#font-size-control");
const textSpan = document.querySelector("#text");



dataInput.addEventListener("input", () => {
    textSpan.setAttribute("style", `font-size:${dataInput.value}px`);
});