let textInput = document.querySelector("#name-input")
let textOutput = document.querySelector("#name-output")


textInput.addEventListener("input", (event) => {
    textOutput.textContent = event.currentTarget.value;
    if(textInput.value === '') {
        textOutput.textContent = "Anonymous"
    }
      });

