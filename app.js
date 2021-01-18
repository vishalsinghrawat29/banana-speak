// console.log("vishal");


// //input
// var username = prompt("give me username");

// //process
// var welcomemessage = "welcome " + username;

// //output
// alert(welcomemessage);

var btnTranslate = document.querySelector("#btn-translate");

var txtInput = document.querySelector("#txt-input");

var outputDiv =  document.querySelector("#output");


function clickHandler() {
    outputDiv.innerText = "skflkflskflkfkasfksa "  + txtInput.value;
};

btnTranslate.addEventListener("click", clickHandler)