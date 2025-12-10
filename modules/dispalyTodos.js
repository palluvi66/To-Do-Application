export function displayTodos(data) {
  const container = document.getElementById("todos-container");
  container.innerHTML = "";

  data.forEach(todo => {
    let card = document.createElement("div");
    card.style.border = "1px solid #333";
    card.style.padding = "10px";
    card.style.margin = "10px 0";
    card.style.borderRadius = "5px";

    card.innerHTML = `
      <h3>${todo.title}</h3>
      <p>Status: <strong>${todo.completed ? "Completed" : "Pending"}</strong></p>
    `;

    container.appendChild(card);
  });
}
