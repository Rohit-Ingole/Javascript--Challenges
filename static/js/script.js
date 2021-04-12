// Challenge 1: Your Age in Days

function ageInDays() {
  var birthYear = prompt("Enter year were you..... Good Friend?");
  var dayslived = (2020 - birthYear) * 365;

  var h1 = document.createElement("h1"); //Creating an empty h1 element for html
  var textanswer = document.createTextNode(
    "You are " + dayslived + " days old."
  ); // Creating sentence to show on the screen
  h1.setAttribute("id", "ageInDays"); // setting id for the h1 element
  h1.appendChild(textanswer); // Adding text to the h1 element
  document.getElementById("flex-box-result").appendChild(h1); // get the flex-box-result container and add h1 tag to it
}

function reset() {
  document.getElementById("ageInDays").remove();
}

//Challenge 2: Cat Generator
function generatecat() {
  var img = document.createElement("img");
  var div = document.getElementById("flex-box-gen");
  img.src =
    "http://thecatapi.com/api/images/get?format=src&type=gif&size-small";
  div.appendChild(img);
}

// Challenge 3: Rock, Paper, Scissor
function rpsGame(yourChoice) {
  var humanchoice, botChoice;
  humanchoice = yourChoice.id;
  botChoice = BotChoice();
  result = decideWinner(humanchoice, botChoice);
  message = finalMessage(result);
  rpsFrontEnd(humanchoice, botChoice, message);
}

function BotChoice() {
  return ["rock", "paper", "scissors"][Math.floor(Math.random() * 3)];
}

function decideWinner(yourChoice, computerChoice) {
  var rpsDatabase = {
    rock: { scissors: 1, rock: 0.5, paper: 0 },
    paper: { rock: 1, paper: 0.5, scissors: 0 },
    scissors: { paper: 1, scissors: 0.5, rock: 0 },
  };

  var yourScore = rpsDatabase[yourChoice][computerChoice];
  var computerScore = rpsDatabase[computerChoice][yourChoice];

  return [yourScore, computerScore];
}

function finalMessage(result) {
  if (result[0] === 0) {
    return { message: "You Lost!", color: "red" };
  } else if (result[0] === 1) {
    return { message: "You Won!", color: "green" };
  } else {
    return { message: "You Tied!", color: "yellow" };
  }
}

function rpsFrontEnd(humanimagechoice, botimagechoice, finalmessage) {
  var imagaesdatabase = {
    rock: document.getElementById("rock").src,
    paper: document.getElementById("paper").src,
    scissors: document.getElementById("scissors").src,
  };

  // removing all the images to display the result
  document.getElementById("img-container--1").remove();
  document.getElementById("img-container--2").remove();
  document.getElementById("img-container--3").remove();

  var humandiv = document.createElement("div");
  var messagediv = document.createElement("div");
  var botdiv = document.createElement("div");

  humandiv.innerHTML =
    "<img src='" +
    imagaesdatabase[humanimagechoice] +
    "' style='box-shadow: 0px 10px 50px rgba(37, 50, 233, 1);'>";
  messagediv.innerHTML =
    "<h1 style='color: " +
    finalmessage["color"] +
    "; font-size: 60px; padding: 30px; '>" +
    finalmessage["message"] +
    "</h1>";
  botdiv.innerHTML =
    "<img src='" +
    imagaesdatabase[botimagechoice] +
    "' style='box-shadow: 0px 10px 50px rgba(243, 38, 24, 1);'>";

  document.getElementById("flex-box-rps-div").appendChild(humandiv);
  document.getElementById("flex-box-rps-div").appendChild(messagediv);
  document.getElementById("flex-box-rps-div").appendChild(botdiv);
}

// Challenge 4: Change the Color of All Buttons!
var all_buttons = document.getElementsByTagName("button");

var copyAllButtons = [];
for (let i = 0; i < all_buttons.length; i++) {
  copyAllButtons.push(all_buttons[i].classList[1]);
}

function buttonColorChange(buttonClicked) {
  if (buttonClicked.value === "red") {
    buttonsRed();
  } else if (buttonClicked.value === "green") {
    buttonsGreen();
  } else if (buttonClicked.value === "reset") {
    buttonsColorReset();
  } else {
    randomColors();
  }
}

function buttonsRed() {
  for (let i = 0; i < all_buttons.length; i++) {
    all_buttons[i].classList.remove(all_buttons[i].classList[1]);
    all_buttons[i].classList.add("btn-danger");
  }
}

function buttonsGreen() {
  for (let i = 0; i < all_buttons.length; i++) {
    all_buttons[i].classList.remove(all_buttons[i].classList[1]);
    all_buttons[i].classList.add("btn-success");
  }
}

function buttonsColorReset() {
  for (let i = 0; i < all_buttons.length; i++) {
    all_buttons[i].classList.remove(all_buttons[i].classList[1]);
    all_buttons[i].classList.add(copyAllButtons[i]);
  }
}

function randomColors() {
  var choices = ["btn-primary", "btn-danger", "btn-success", "btn-warning"];
  var randomChoices = [];
  for (let i = 0; i < all_buttons.length; i++) {
    var randomNum = Math.floor(Math.random(3) * 4);
    all_buttons[i].classList.remove(all_buttons[i].classList[1]);
    all_buttons[i].classList.add(choices[randomNum]);
  }
}

// Challenge 5: Blackjack
let blackjackGame = {
  you: { scorespan: "#your-blackjack-result", div: "#your-box", score: 0 },
  dealer: {
    scorespan: "#dealer-blackjack-result",
    div: "#dealer-box",
    score: 0,
  },
  cards: [
    "AS.jpg",
    "2C.jpg",
    "3D.jpg",
    "4H.jpg",
    "5S.jpg",
    "6D.jpg",
    "7H.jpg",
    "8C.jpg",
    "9S.jpg",
    "10H.jpg",
    "JD.jpg",
    "QC.jpg",
    "KS.jpg",
  ],
  cardsMap: {
    "AS.jpg": 11,
    "2C.jpg": 2,
    "3D.jpg": 3,
    "4H.jpg": 4,
    "5S.jpg": 5,
    "6D.jpg": 6,
    "7H.jpg": 7,
    "8C.jpg": 8,
    "9S.jpg": 9,
    "10H.jpg": 10,
    "JD.jpg": 10,
    "QC.jpg": 10,
    "KS.jpg": 10,
  },
  wins: 0,
  losses: 0,
  draws: 0,
};

const YOU = blackjackGame["you"];
const DEALER = blackjackGame["dealer"];
const CARDS = blackjackGame["cards"];
const CARDSMAP = blackjackGame["cardsMap"];

const hitSound = new Audio("./static/sounds/swish.m4a");
const cash = new Audio("./static/sounds/cash.mp3");
const aww = new Audio("./static/sounds/aww.mp3");

document
  .querySelector("#blackjack-hit-button")
  .addEventListener("click", blackjackHit);
document
  .querySelector("#blackjack-deal-button")
  .addEventListener("click", blackjackDeal);
document
  .querySelector("#blackjack-stand-button")
  .addEventListener("click", blackjackStand);

function blackjackHit() {
  document.querySelector("#blackjack-result").textContent = "Lets Play";
  document.querySelector("#blackjack-result").style.color = "black";
  showCard(YOU, CARDS);
  showScore(YOU);
}

function showCard(activePlayer, cards) {
  if (activePlayer["score"] <= 21) {
    let cardImage = document.createElement("img");
    let randomCard = cards[Math.floor(Math.random() * 13)];
    cardImage.src = `./static/images/${randomCard}`;

    document.querySelector(activePlayer["div"]).appendChild(cardImage);
    hitSound.play();

    updateScore(randomCard, activePlayer);
  }
}

function blackjackDeal() {
  document.querySelector("#blackjack-result").textContent = "Lets Play";
  document.querySelector("#blackjack-result").style.color = "black";

  document.getElementById("blackjack-hit-button").disabled = false;
  document.getElementById("blackjack-stand-button").disabled = false;

  let yourImages = document.querySelector("#your-box").querySelectorAll("img");
  let dealerImages = document
    .querySelector("#dealer-box")
    .querySelectorAll("img");

  for (let i = 0; i < yourImages.length; i++) {
    yourImages[i].remove();
  }

  for (let i = 0; i < dealerImages.length; i++) {
    dealerImages[i].remove();
  }

  let players = [YOU, DEALER];
  for (i = 0; i < players.length; i++) {
    players[i]["score"] = 0;
    document.querySelector(players[i]["scorespan"]).textContent =
      players[i]["score"];
    document.querySelector(players[i]["scorespan"]).style.color = "white";
  }

  document.getElementById("blackjack-hit-button").disabled = false;
}

function updateScore(card, activePlayer) {
  if (activePlayer["score"] + 11 > 21) {
    CARDSMAP["AS.jpg"] = 1;
  } else {
    CARDSMAP["AS.jpg"] = 11;
  }

  activePlayer["score"] += CARDSMAP[card];
}

function showScore(activePlayer) {
  if (activePlayer["score"] > 21) {
    document.querySelector(activePlayer["scorespan"]).textContent = "BUST!";
    document.querySelector(activePlayer["scorespan"]).style.color = "red";
  } else if (activePlayer["score"] < 22) {
    document.querySelector(activePlayer["scorespan"]).textContent =
      activePlayer["score"];
  }
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function blackjackStand() {
  document.getElementById("blackjack-hit-button").disabled = true;
  let randomCardsNo = [2, 3, 4];
  let randomCardNoChoice = randomCardsNo[Math.floor(Math.random() * 2)];
  for (i = 0; i < randomCardNoChoice; i++) {
    showCard(DEALER, CARDS);
    showScore(DEALER);
    await sleep(750);
  }
  if (DEALER["score"] > YOU["score"]) {
    winner = computeWinner();
    updateLabel(winner);
  }

  if (DEALER["score"] < YOU["score"]) {
    winner = computeWinner();
    updateLabel(winner);
  }

  document.getElementById("blackjack-stand-button").disabled = true;
}

function updateTable(winner) {
  if (winner === YOU) {
    blackjackGame["wins"]++;
    document.querySelector("#wins").textContent = blackjackGame["wins"];
  } else if (winner === DEALER) {
    blackjackGame["losses"]++;
    document.querySelector("#losses").textContent = blackjackGame["losses"];
  } else if (winner === "Draw") {
    blackjackGame["draws"]++;
    document.querySelector("#draws").textContent = blackjackGame["draws"];
  }
}

function computeWinner() {
  let winner;
  if (YOU["score"] <= 21) {
    if (YOU["score"] > DEALER["score"] || DEALER["score"] > 21) {
      winner = YOU;
    } else if (YOU["score"] < DEALER["score"] && DEALER["score"] < 21) {
      winner = DEALER;
    } else if (YOU["score"] === DEALER["score"]) {
      winner = "Draw";
    }
  } else if (YOU["score"] > 21 && DEALER["score"] <= 21) {
    winner = DEALER;
  } else if (YOU["score"] > 21 && DEALER["score"] > 21) {
    winner = "Draw";
  }

  return winner;
}

function updateLabel(winner) {
  if (winner === YOU) {
    document.querySelector("#blackjack-result").textContent = "You Won !";
    document.querySelector("#blackjack-result").style.color = "green";
    cash.play();
  } else if (winner === DEALER) {
    document.querySelector("#blackjack-result").textContent = "Dealer Won !";
    document.querySelector("#blackjack-result").style.color = "red";
    aww.play();
  } else if (winner === "Draw") {
    document.querySelector("#blackjack-result").textContent = "You Drew !";
    document.querySelector("#blackjack-result").style.color = "yellow";
  }

  updateTable(winner);
}
