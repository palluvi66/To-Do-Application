import { displayTodos } from "../modules/displayTodos.js";

// Protect Todos Page
let loggedIn = localStorage.getItem("isLoggedIn");

if (!loggedIn) {
  alert("Please login to access Todos");
  window.location.href = "login.html";
}

async function fetchTodos() {
  try {
    let res = await fetch("https://jsonplaceholder.typicode.com/todos");
    let data = await res.json();
    displayTodos(data.slice(0, 20)); // Show first 20 todos
  } catch (error) {
    console.error("Error:", error);
  }
}

fetchTodos();
