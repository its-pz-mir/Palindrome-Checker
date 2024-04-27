const inputText = document.querySelector("#input-text");
const submitBtn = document.querySelector("#submit-btn");
const result = document.querySelector("#result");

const palidromChecker = (text) => {
  let reversedText = "";
  for (let i = text.length - 1; i >= 0; i--) {
    reversedText += (text[i])
  }
  if (text === reversedText) {
    return true;
  } else {
    return false
  }
}

submitBtn.addEventListener("click", () => {
  let inputValue = inputText.value.trim().replace(/^[_\s]+|[_\s]+$/g, '');
  if (inputValue.length <= 0) {
    result.innerText = "Please enter a value";
  }
  if (palidromChecker(inputValue)) {
    result.innerText = `Yes, ${inputValue} is a palindrome`;
  } else {
    result.innerText = `No, ${inputValue} is not a palindrome`;
  }
})