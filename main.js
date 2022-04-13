var titleInput = document.querySelector(".user-title");
var bodyInput = document.querySelector(".user-body");
var saveButton = document.querySelector(".save-button");
var savedGrid = document.querySelector(".saved-cards-grid");
var inputForm = document.querySelector(".input-field");

saveButton.addEventListener("click", getUserInput);
titleInput.addEventListener("input", checkValue);
bodyInput.addEventListener("input", checkValue);
savedGrid.addEventListener("click", checkClick);

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
        <img class='icons star' src=${ideasArray[i].src} id=${ideasArray[i].id}>
        <img class='icons close' src='./assets/menu-close.svg' id=${ideasArray[i].id}>
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

function checkClick(event){
  if (event.target.className === 'icons close'){
    deleteCard(event);
  }
  if (event.target.className === 'icons star'){
    saveStarredCard(event);
  }
}


function deleteCard(event){
    for (var i = 0; i < ideasArray.length; i++){
        if (event.target.id == ideasArray[i].id){
          ideasArray.splice(i,1);
        }
    }
  showSavedCards();
}

function saveStarredCard(event){
  for (var i = 0; i < ideasArray.length; i++){
      if (event.target.id == ideasArray[i].id){
        ideasArray[i].updateIdea();
      }
    }
  showSavedCards();
}
