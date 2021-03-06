var bodyInput = document.querySelector(".user-body");
var inputForm = document.querySelector(".input-field");
var saveButton = document.querySelector(".save-button");
var showStarredButton = document.querySelector(".show-starred");
var savedGrid = document.querySelector(".saved-cards-grid");
var titleInput = document.querySelector(".user-title");

bodyInput.addEventListener("input", checkValue);
saveButton.addEventListener("click", getUserInput);
showStarredButton.addEventListener("click", showSaved);
savedGrid.addEventListener("click", checkClick);
titleInput.addEventListener("input", checkValue);

var ideasArray = [];
var savedArray = [];

function checkValue() {
  if (bodyInput.value && titleInput.value) {
    saveButton.disabled = false;
  } else {
    saveButton.disabled = true;
  }
}

function getUserInput() {
  event.preventDefault();
  var title = titleInput.value;
  var body = bodyInput.value;
  createIdeaCard(title, body);
  inputForm.reset();
  saveButton.disabled = true;
}

function createIdeaCard(title, body) {
  var newCard = new Idea(title, body);
  addCardToArray(newCard);
}

function addCardToArray(card) {
  ideasArray.push(card);
  showCards(ideasArray);
}

function showCards(array) {
  var displayGrid = "";
  for (var i = 0; i < array.length; i++) {
    displayGrid += `<article class='idea-card'>
        <div class='star'>
          <img class='icons star' src=${array[i].src} id=${array[i].id}>
          <img class='icons close' src='./assets/menu-close.svg' id=${array[i].id}>
        </div>
        <div class='card-content'>
          <h3>${array[i].title}</h3>
          <p>${array[i].body}</p>
        </div>
        <div class='comment'>
          <img class='icons' src='./assets/comment.svg'>
          <p>Comment</p>
        </div>
    </article>`;
  }
  savedGrid.innerHTML = displayGrid;
}

function checkClick(event) {
  if (event.target.className === "icons close") {
    deleteCard(event, ideasArray);
    deleteCard(event, savedArray);
  }
  if (event.target.className === "icons star") {
    updateStar(event);
  }
}

function deleteCard(event, array) {
  for (var i = 0; i < array.length; i++) {
    if (event.target.id == array[i].id) {
      array.splice(i, 1);
    }
  }
  showCards(ideasArray);
}

function updateStar(event) {
  for (var i = 0; i < ideasArray.length; i++) {
    if (event.target.id == ideasArray[i].id) {
      ideasArray[i].updateIdea();
    }
    saveStarredCard();
    showCards(ideasArray);
  }
}

function saveStarredCard() {
  var newArray = [];
  for (var i = 0; i < ideasArray.length; i++) {
    if (ideasArray[i].star === true) {
      newArray.push(ideasArray[i]);
    }
    savedArray = newArray;
  }
}

function showSaved() {
  if (showStarredButton.id === "showStar") {
    showStarredButton.innerText = "Show All Ideas";
    showStarredButton.id = "showAll";
    showCards(savedArray);
  } else {
    showStarredButton.innerText = "Show Starred Ideas";
    showStarredButton.id = "showStar";
    showCards(ideasArray);
  }
}
