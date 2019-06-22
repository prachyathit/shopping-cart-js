var button = document.querySelector("#enter");
var input = document.querySelector("#userInput");
var ul = document.querySelector("ul");
var lis = document.querySelectorAll("li");
var deleteButtons = document.querySelectorAll(".delete");

// Return true if input is not empty
function inputValid() {
  return input.value.length > 0;
}

// This function attach to element "toggle done class action on click"
function handleDoneEvent(el) {
  el.addEventListener("click", function() {
    el.classList.toggle("done");
  })
}

// This function attach to element "remove li element on click"
function handleDeleteEvent(el) {
  el.addEventListener("click", function() {
    var li = el.parentNode;
    li.parentNode.removeChild(li);
  });
}

function createListElement() {
  var li = document.createElement("li");
  handleDoneEvent(li);

  var button = document.createElement("button");
  button.className = "delete";
  button.appendChild(document.createTextNode("Delete"));
  handleDeleteEvent(button);

  li.appendChild(document.createTextNode(input.value + " "));
  li.appendChild(button);
  ul.appendChild(li);

  input.value = "";
}

function addElementClick() {
  if (inputValid()) {
    createListElement();
  }
}

function addElementEnter(e) {
  if(inputValid() && e.keyCode === 13) {
    createListElement();
  }
}

button.addEventListener("click", addElementClick);
input.addEventListener("keypress", addElementEnter);

//Attach handleDoneEvent to each existing li
lis.forEach(function(li) {
  handleDoneEvent(li);
})

//Attach handleDeleteEvent to each existing li
deleteButtons.forEach(function(deleteButton) {
  handleDeleteEvent(deleteButton);
})