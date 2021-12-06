// player 1
let randomNumber = Math.ceil(Math.random() * 6)

let randomDiceImage = randomNumber + '.jpeg';
let randomImageSrc = './images/' + randomDiceImage;
let image = document.querySelectorAll('img')[0];

image.setAttribute('src', randomImageSrc);

// player 2
let randomNumber2 = Math.ceil(Math.random() * 6)

let randomDiceImage2 = randomNumber2 + '.jpeg';
let randomImageSrc2 = './images/' + randomDiceImage2;
let image2 = document.querySelectorAll('img')[1];

image2.setAttribute('src', randomImageSrc2);

// condition
let winMsg = document.querySelector('h1')

if (randomNumber > randomNumber2){
    winMsg.textContent = 'Player 1 wins 🎈'
}else if(randomNumber2 > randomNumber){
    winMsg.textContent = 'Player 2 wins 🎈'
}else{
    winMsg.textContent = 'Draw 👩🏻‍🤝‍🧑🏼'
}