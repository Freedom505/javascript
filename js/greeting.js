const form = document.querySelector(".login-form");
const input = form.querySelector("input");

const h1 = document.querySelector("#greeting");
const HIDDEN_CLASSNAME = "hidden";
const savedUsername = localStorage.getItem("username");

function submitForm(event) {
  const userName = input.value;
  event.preventDefault();
  form.classList.add(HIDDEN_CLASSNAME);
  h1.classList.remove(HIDDEN_CLASSNAME);
  h1.innerText = `Hello ${userName}`;
  localStorage.setItem("username", userName); // function에 있는 value 값을 밖으로 빼내려고 브라우저에 저장 함.펑션 - 브라우저 - 외부변수
}
if (localStorage.getItem("username") === null) {
  form.classList.remove(HIDDEN_CLASSNAME);
  form.addEventListener("submit", submitForm);
} else {
  h1.innerText = `Hello ${savedUsername}`;
  h1.classList.remove(HIDDEN_CLASSNAME);
}

// const loginForm = document.querySelector(".login-form");
// const loginInput = loginForm.querySelector("input");
// const link = document.querySelector("a");
// const greeting = document.querySelector("#greeting");
// const USERNAME_KEY = "username";

// const HIDDEN_CLASSNAME = "hidden";
// const savedUsername = localStorage.getItem(USERNAME_KEY);

// function loginSubmit(event) {
//   event.preventDefault();
//   loginForm.classList.add(HIDDEN_CLASSNAME);
//   const userName = loginInput.value;
//   greeting.innerText = `Hello ${userName}`;
//   localStorage.setItem(USERNAME_KEY, userName);
//   greeting.classList.remove(HIDDEN_CLASSNAME);
// }

// if (savedUsername === null) {
//   loginForm.classList.remove(HIDDEN_CLASSNAME);
//   loginForm.addEventListener("submit", loginSubmit);
// } else {
//   greeting.classList.remove(HIDDEN_CLASSNAME);
//   greeting.innerText = `Hello ${savedUsername}`;
// }
