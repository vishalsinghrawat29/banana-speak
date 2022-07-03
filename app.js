// input
var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
var outputDiv =  document.querySelector("#output");
var serverUrl = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json";
function getTransalationURL(text){
       return serverUrl+"?" + "Text=" + text
}
function clickHandler() {
       var inputText =  txtInput.value ; //taking input

       //calling server for processing
       fetch(getTransalationURL(inputText))
       .then(response => response.json())
       .then(json => console.log(json))
};


btnTranslate.addEventListener("click", clickHandler)
