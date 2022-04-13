var titleInput = document.querySelector(".user-title");
var bodyInput = document.querySelector(".user-body");
var saveButton = document.querySelector(".save-button");

saveButton.addEventListener("click", getUserInput);

var ideasArray = [];

function getUserInput() {
  event.preventDefault();
  var title = titleInput.value;
  var body = bodyInput.value;
  createIdeaCard(title, body);
}

function createIdeaCard(title, body) {
  var newCard = new Idea(title, body);
  addCardToArray(newCard);
}

function addCardToArray(card) {
  ideasArray.push(card);
}
