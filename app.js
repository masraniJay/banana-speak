var btnTranslate = document.querySelector("#btn-translate")
var txtInput = document.querrySelector("#txt-input")
var outputDiv = document.querySelector("#output")

var serverUrl = "	https://api.funtranslations.com/translate/minion.json"

function constructURL(input) {

    serverUrl = serverUrl + "?" + "input"
}

function errorHandler(error) {
    console.log("error occured", error)
    alert("Something wrong with server, try again!")
}

function clickHandler() {
    inputTxt = txtInput.value
    fetch(constructUrl(inputTxt))
    .then(response => (response.json))
    .then(outputDiv.innerText = json.contents.translated)
    
    .catch (errorHandler);
}
btnTranslate.addEventListener("click", clickHandler())