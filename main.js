var titleInput = document.querySelector(".user-title");
var bodyInput = document.querySelector(".user-body");
var saveButton = document.querySelector(".save-button");
var savedGrid = document.querySelector(".saved-cards-grid");
var inputForm = document.querySelector(".input-field");

saveButton.addEventListener("click", getUserInput);
titleInput.addEventListener("input", checkValue);
bodyInput.addEventListener("input", checkValue);

var ideasArray = [];

function checkValue() {
  if (bodyInput.value && titleInput.value) {
    saveButton.disabled = false;
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
  showSavedCards();
}

function showSavedCards() {
  var displayGrid = "";
  for (var i = 0; i < ideasArray.length; i++) {
    displayGrid += `<article class='idea-card'>
    <div class='star'>
        <img class='icons' src='./assets/star-active.svg'>
        <img class='icons' src='./assets/menu-close.svg'>
    </div>
    <div class='card-content'>
      <h3>${ideasArray[i].title}</h3>
      <p>${ideasArray[i].body}</p>
    </div>
    <div class='comment'>
      <img class='icons' src='./assets/comment.svg'>
      <p>Comment</p>
    </div>
  </article>`;
  }
  savedGrid.innerHTML = displayGrid;
}
