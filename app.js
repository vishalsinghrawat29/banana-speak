// input
var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
var outputDiv =  document.querySelector("#output");
outputDiv.innerText = "Vishal Singh";
console.log(outputDiv);
function clickHandler() {
        console.log("clicked");
        console.log("input:", txtInput.value);
}


btnTranslate.addEventListener("click", clickHandler)
