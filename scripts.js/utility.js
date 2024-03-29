function hideElementById(elementID) {
    const element = document.getElementById(elementID);
    element.classList.add('hidden');
}

function showElementById(elementID) {
    const element = document.getElementById(elementID);
    element.classList.remove('hidden');
}

function setBackgroundColorById(elementID) {
    const element = document.getElementById(elementID);
    element.classList.add('bg-amber-400');

}
function removeBackgroundColorById(elementID) {
    const element = document.getElementById(elementID);
    element.classList.remove('bg-amber-400');
}

function getTextElementValueById(elementID) {
    const element = document.getElementById(elementID);
    const elementValueText = element.innerText;
    const value = parseInt(elementValueText);
    return value;
}

function setTextElementValueById(elementId, value) {
    const element = document.getElementById(elementId);
    element.innerText = value;
}

function getElementTextValueById(elementId) {
    const element = document.getElementById(elementId);
    const text = element.innerText;
    return text;
}
function getARandomAlphabet() {
    //get or create an alphabet array
    const alphabetString = 'abcdefghijklmnopqrstuvwxyz';
    const alphabets = alphabetString.split('');

    //get a random index between 0-25
    const randomNumber = Math.random() * 25;
    const index = Math.round(randomNumber);

    const alphabet = alphabets[index];
    return alphabet;
}