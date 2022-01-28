Defining fonts

font-family: 'Inter', sans-serif;
font-family: 'Poppins', sans-serif;

HTML DOM elements used in the project

Selectors

const todoInput = document.querySelector(".todo-input");

// document.querySelector(".todo-input") returns the frist element which has
// a class of .todo-input form our html file.

Event Listeners

todoButton.addEventListener("click", addTodo);

//when we click on todobutton then we would
// want addTodo function to run

Understanding JSON

JSON.stringify() - transforms a Javascript object into a string

JSON.parse() - takes a JSON string and transforms into a javascript object

We can also use these to tranform JSON array to string and vice versa.

JSON.stringify() - JSON array into a string

JSON.parse() - JSON string to array

function saveLocalTodos(todo) {
// CHECK if there is already a todo in local storage
let todos;
if (localStorage.getItem("todos") === null) todos = [];
else {
todos = JSON.parse(localStorage.getItem("todos"));
}
todos.push(todo);
localStorage.setItem("todos", JSON.stringify(todos));
}

So, here first of all we check if we have anything in local
storage with the key todos;
-if we do not have it then we want to initalize the key as
an empty array

IF WE HAVE A KEY ALREAY THEN

- we want to grab the key with name
  todos from local storage the way we do it is

--- localStorage.getItem("todos")

- then we want to turn the key to an array hence JSON.parse()

NOW,
in our function 'todo' is refering to the todoInput.value
the value which we type on our input section in our webpage

we push the value to our array and at last
we set the array as the local strogae hence
---- localStorage.setItem("todos", JSON.stringify(todos));
JSON.stringify because we want to take our array and turn it into the
JSON string.
