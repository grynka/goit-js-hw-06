const textInput = document.querySelector("#validation-input");

textInput.addEventListener("blur", () => {
    if (textInput.value.length == textInput.getAttribute('data-length')) {
      textInput.classList.replace("invalid", "valid");
    }
    else {textInput.classList.add("invalid")}
  });

