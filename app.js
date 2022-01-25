//Selectors

const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todolist = document.querySelector(".todo-list");

// document.querySelector(".todo-input") returns the frist element which has
// a class of .todo-input form our html file.

// Event Listeners

todoButton.addEventListener("click", addTodo);

//when we click on todobutton then we would
// want addTodo function to run

//Functions

function addTodo(event) {
  // prevent form form submitting(from refreshing)
  event.preventDefault();
  //Tdo div
  const todoDiv = document.createElement("div");
  todoDiv.classList.add("todo");
}
