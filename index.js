const getRandomCard = () => {
  let randomNumber = Math.floor(Math.random() * 13) + 1;
  if (randomNumber === 1) {
    return 11;
  } else if (randomNumber >= 11) {
    return 10;
  } else return randomNumber;
};

let cards = [];
let sum = 0;
let message = "";
let hasBlackJack = false;
let isAlive = false;

let messageEl = document.getElementById("message-el");
let sumEl = document.querySelector("#sum-el");
let cardsEl = document.querySelector("#cards-el");

let player = {
  Name: "Ghost",
  Chips: 125,
};

let playerEl = document.querySelector("#player-el");
playerEl.textContent = player.Name + ": $" + player.Chips;

const renderGame = () => {
  cardsEl.textContent = "Cards: ";
  for (let index = 0; index < cards.length; index++) {
    cardsEl.textContent += cards[index] + " ";
  }
  sumEl.textContent = "Sum: " + sum;
  if (sum > 21) {
    message = "You lose!!";
    isAlive = false;
  } else if (sum === 21) {
    message = "You Win!!";
    hasBlackJack = true;
  } else {
    message = "Draw another card?";
    isAlive = true;
  }

  messageEl.textContent = message;
};

const startGame = () => {
  let firstCard = getRandomCard();
  let secondCard = getRandomCard();
  cards = [firstCard, secondCard];
  sum = firstCard + secondCard;
  renderGame();
};

const newCard = () => {
  if (isAlive && !hasBlackJack) {
    let nextCard = getRandomCard();
    cards.push(nextCard);
    sum += nextCard;
    renderGame();
  }
};
