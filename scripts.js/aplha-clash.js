// function play() {
//     //step-1 hide the home screen , add hidden class
//     const homeSection = document.getElementById('home-screen');
//     homeSection.classList.add('hidden');
//     // console.log(homeScreen.classList);

//     const playgroundSection = document.getElementById('play-ground');
//     playgroundSection.classList.remove('hidden');

//     //step- 2 show the play ground
// }

function handleKeyboardKeuUpEvent(event) {
    const playerPressed = event.key;

    //stop the game if pressed Esc
    if (playerPressed === 'Escape') {
        gameOver();
    }
    //get the expected to press
    const currentAlphabetElement = document.getElementById('current-alphabet');
    const currentAlphabet = currentAlphabetElement.innerText;
    const expectedAlphabet = currentAlphabet.toLowerCase();

    // check matched or not
    if (playerPressed === expectedAlphabet) {
        console.log('You got a point!');
        const currentScore = getTextElementValueById('current-score');
        const newScore = currentScore + 1;

        setTextElementValueById('current-score', newScore);


        //update score---------------------without func-----------------------------
        //1. get the current score
        // const currentScoreElement = document.getElementById('current-score');
        // const currentScoreText = currentScoreElement.innerText;
        // const currentScore = parseInt(currentScoreText);

        //2. increase the score by 1
        // const newScore = currentScore + 1;
        //3. show the updated score
        // currentScoreElement.innerText = newScore;

        // start a new round
        removeBackgroundColorById(expectedAlphabet);
        continueGame();
    }
    else {
        console.log('you missed');
        const currentLife = getTextElementValueById('current-life');
        const newLife = currentLife - 1;
        setTextElementValueById('current-life', newLife)


        //---------------------------------------------
        //without func
        //1. get the current life
        // const currentLifeElement = document.getElementById('current-life');
        // const currentLifeText = currentLifeElement.innerText;
        // const currentLife = parseInt(currentLifeText);


        //2. decrease the life count
        // const newLife = currentLife - 1;

        //3. show the remaining life
        // currentLifeElement.innerText = newLife;

        if (newLife === 0) {
            gameOver();
        }
    }
}
// capture keyboard key press
document.addEventListener('keyup', handleKeyboardKeuUpEvent);

function continueGame() {
    //step-1: generate a random alphabet
    const alphabet = getARandomAlphabet();
    // console.log(alphabet);

    //set randomly 
    const currentAlphabetElement = document.getElementById('current-alphabet');
    currentAlphabetElement.innerText = alphabet;

    //set bg- color
    setBackgroundColorById(alphabet);
}

function play() {
    //hide everything and show only the play ground
    hideElementById('home-screen');
    hideElementById('final-score')
    showElementById('play-ground');
    // reset life
    setTextElementValueById('current-life', 5);
    setTextElementValueById('current-score', 0);

    continueGame();
}

function gameOver() {
    hideElementById('play-ground');
    showElementById('final-score');

    //update final score
    //1.get the score
    const lastScore = getTextElementValueById('current-score');
    setTextElementValueById('game-score', lastScore);

    //  clear the last selected alphabet highlight
    const currentAlphabet = getElementTextValueById('current-alphabet');
    removeBackgroundColorById(currentAlphabet);
}