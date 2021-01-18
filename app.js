// console.log("vishal");


// //input
// var username = prompt("give me username");

// //process
// var welcomemessage = "welcome " + username;

// //output
// alert(welcomemessage);

var btnTranslate = document.querySelector("#btn-translate");

var txtInput = document.querySelector("#txt-input");

console.log(txtInput)

function clickHandler() {
    console.log("click");
    console.log("input", txtInput.value);
};

btnTranslate.addEventListener("click", clickHandler)