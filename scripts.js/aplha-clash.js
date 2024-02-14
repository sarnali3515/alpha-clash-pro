// function play() {
//     //step-1 hide the home screen , add hidden class
//     const homeSection = document.getElementById('home-screen');
//     homeSection.classList.add('hidden');
//     // console.log(homeScreen.classList);

//     const playgroundSection = document.getElementById('play-ground');
//     playgroundSection.classList.remove('hidden');

//     //step- 2 show the play ground
// }

function continueGame() {
    //step-1: generate a random alphabet
    const alphabet = getARandomAlphabet();
    console.log(alphabet);

    //set randomly 
    const currentAlphabetElement = document.getElementById('current-alphabet');
    currentAlphabetElement.innerText = alphabet;

    //set bg- color
    setBackgroundColorById(alphabet);
}

function play() {
    hideElementById('home-screen');
    showElementById('play-ground');
    continueGame();
}