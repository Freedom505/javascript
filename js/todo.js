// const todoForm = document.querySelector("#todo-form");
// const todoUl = document.querySelector("#todo-ul");
// const todoInput = todoForm.querySelector("input");
// let todos = [];
// const TODOS_KEY = "todos";

// function saveTodo() {
//   localStorage.setItem(TODOS_KEY, JSON.stringify(todos));
// }

// function deleteTodo(event) {
//   const li = event.target.parentElement;
//   li.remove();
//   todos = todos.filter((todo) => todo.id !== parseInt(li.id));
// }

// function paintTodo(newTodo) {
//   const li = document.createElement("li");
//   li.id = newTodo.id;
//   const span = document.createElement("span");
//   li.appendChild(span);
//   const btn = document.createElement("button");
//   btn.innerText = "X";
//   li.appendChild(btn);
//   btn.addEventListener("click", deleteTodo);
//   span.innerText = newTodo.text;

//   todoUl.appendChild(li);
// }

// function todoSubmit(event) {
//   event.preventDefault();
//   const newTodo = todoInput.value;
//   todoInput.value = "";
//   const newTodoObj = {
//     text: newTodo,
//     id: Date.now(),
//   };
//   todos.push(newTodoObj);
//   paintTodo(newTodoObj);
//   saveTodo();
// }

// todoForm.addEventListener("submit", todoSubmit);

// const savedTodos = localStorage.getItem(TODOS_KEY);

// if (savedTodos !== null) {
//   const parseTodo = JSON.parse(savedTodos);
//   todos = parseTodo;
//   parseTodo.forEach(paintTodo);
// }

const todoForm = document.querySelector("#todo-form");
const todoList = document.querySelector("#todo-list");
const todoInput = todoForm.querySelector("input");
let storage = [];
const STORAGE_KEY = "storage";

function savedTodo() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(storage));
}

function deleteTodo(event) {
  const li = event.target.parentElement;
  li.remove();
  storage = storage.filter((todo) => todo.id !== parseInt(li.id));
  savedTodo();
}

function paintTodo(newTodo) {
  const li = document.createElement("li");
  li.id = newTodo.id;
  const span = document.createElement("span");
  const btn = document.createElement("button");
  btn.addEventListener("click", deleteTodo);
  todoList.appendChild(li);
  li.appendChild(span);
  span.innerText = newTodo.text;
  li.appendChild(btn);
  btn.innerText = "X";
}

function todoSubmit(event) {
  event.preventDefault();
  const newTodo = todoInput.value;
  todoInput.value = "";
  const newTodoObj = {
    id: Date.now(),
    text: newTodo,
  };
  storage.push(newTodoObj);
  paintTodo(newTodoObj);
  savedTodo();
}

todoForm.addEventListener("submit", todoSubmit);

const savetodo = localStorage.getItem(STORAGE_KEY);

if (savetodo) {
  const parsedTodo = JSON.parse(savetodo);
  storage = parsedTodo;
  parsedTodo.forEach((item) => paintTodo(item));
}
