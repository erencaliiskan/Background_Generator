let firstColor = document.querySelector("#first-input");
let secondColor = document.querySelector("#second-input");
let body = document.querySelector("#gradient");
let css = document.querySelector("h3");
let copyButton = document.querySelector("#copy-button");

function setGradient(color1, color2) {
  body.style.background =
    "Linear-gradient(to right," +
    firstColor.value +
    "," +
    secondColor.value +
    ")";
  css.textContent = body.style.background;
}

function selectText(node) {
  node = document.getElementById(node);

  if (document.body.createTextRange) {
    const range = document.body.createTextRange();
    range.moveToElementText(node);
    range.select();
  } else if (window.getSelection) {
    const selection = window.getSelection();
    const range = document.createRange();
    range.selectNodeContents(node);
    selection.removeAllRanges();
    selection.addRange(range);
  }
  document.execCommand("copy");
}

const clickable = document.querySelector(".copy-button");
clickable.addEventListener("click", () => selectText("rgb-codes"));
firstColor.addEventListener("input", setGradient);
secondColor.addEventListener("input", setGradient);

//  function copyGradient() {

//      var currentGradient = document.getElementById('fuck-you')
//      document.execCommand('copy');
//      alert('Current RGB copied:' + currentValueText);
//  }

// function copyElementText(id) {
//     let text = document.getElementById(id).innerText;
//     let element = document.createElement("textarea");
//     document.body.appendChild(elem);
//     element.value = text;
//     element.select();
//     document.execCommand("copy");
//     document.body.removeChild(element);
//     alert('Current Gradient RGB:' + css.textContent);
// }

// copyButton.addEventListener('click', copyGradient);

// function copyGradient() {
//     let currentValueText = css.textContent;
//     document.execCommand('copy');
//     alert('Current RGB copied:' + currentValueText);
// }

// copyButton.addEventListener('click', copyGradient);
