// Model
const app = document.getElementById('app');
let input='';
let newString;
let writeString;
// View
updateView();
function updateView(){
    html = /*html*/ `
    <h1>Metode Revers</h1>
    <div id="Take1">
    <input type="button" id="choice" value="Velg setning" onclick="strSelector()">
    <input type="button" id="start" value="REVERSE IT!" onclick="reversator(input)">
    <input type="button" id="reset" value="Start på nytt" onclick="resetFunction()">
    <input type="text" id="input" value=" "> 
    <div id="str">Setningen er: ${writeString} </div>
    <br>
    
    `;
    app.innerHTML = html;
}

// Controler

function strSelector() {
    input = document.querySelector("#input").value;
    newString = document.querySelector("#str");
    newString.innerHTML = input;
    console.log(input);

}

function reversator(){
    let textString = document.getElementById('input').value;
    for(let i=0; i>=-textString.length; i--) {
        writeString += textString.charAt(textString.length+i);
    }
    updateView();
}

function resetFunction() {
    location.reload();
}

