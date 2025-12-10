document.getElementById("loginForm").addEventListener("submit", function(e) {
  e.preventDefault();

  let enteredEmail = document.getElementById("email").value;
  let enteredPass = document.getElementById("password").value;

  let storedUser = JSON.parse(localStorage.getItem("user"));

  if (storedUser && storedUser.email === enteredEmail && storedUser.password === enteredPass) {
    localStorage.setItem("isLoggedIn", true);
    alert("Login Successful!");
    window.location.href = "todos.html";
  } else {
    alert("Invalid Email or Password");
  }
});
