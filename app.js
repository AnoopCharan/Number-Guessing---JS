let min = 1,
    max = 10,
    winningNum = Math.floor((Math.random() * (max-1) )+  1),
    guesses = Math.ceil(Math.log2(max));
    console.log('guesses:', guesses);

console.log(winningNum);

// UI elements
const 
    game = document.querySelector('#game'),
    minNum = document.querySelector('.min-num'),
    maxNum = document.querySelector('.max-num'),
    guessBtn = document.querySelector('#guess-btn'),
    guessInput = document.querySelector('#guess-input'),
    message = document.querySelector('.message');


guessInput.setAttribute('min', String(min));
guessInput.setAttribute('max', String(max));
// Assign min and max.
// console.log(guessInput.getAttribute('max'));

minNum.textContent = min;
maxNum.textContent = max;

// events
guessBtn.addEventListener('click', function(e) {
    let guess = parseInt(guessInput.value);
    console.log(guesses);
    
    if (guesses === 0) {
        guessInput.disabled = true;
        guessInput.style.borderColor= 'red'
        setMessage('GAMEOVER!! Out of guesses.', 'red');
        playAgain();
    } else {
        console.log(guess);
        
        if (guess === winningNum) {
            guessInput.disabled = true;
            guessInput.style.borderColor= 'green'
            setMessage(`${guess} is the correct answer!`, 'green');
            playAgain();
    
        }

        else if (guess > winningNum) {
           
            setMessage(`${guess} is too high, ${guesses} guesses left`, 'black');
            guesses -= 1;
        }

        else if (guess < winningNum) {
           
            setMessage(`${guess} is too Low ${guesses} guesses left`, 'black');
            guesses -= 1;
        }


    }


  
     })

function setMessage(msg, color) {
    message.style.color = color;
    message.textContent = msg;
}

function playAgain() {
    guessBtn.value = 'Play Again';
    guessBtn.className ='play-again';

}

game.addEventListener('mousedown', function(e){
    // console.log(e.target);
    if (e.target.className === 'play-again'){
        window.location.reload();
    }
})
    
