let todos = JSON.parse(localStorage.getItem("todos")) || [];

function renderTodos() {
  const list = document.getElementById("todoList");
  list.innerHTML = "";

  todos.forEach((todo, index) => {
    const li = document.createElement("li");
    li.textContent = todo;

    const btn = document.createElement("button");
    btn.textContent = "Delete";
    btn.onclick = () => removeTodo(index);

    li.appendChild(btn);
    list.appendChild(li);
  });
}

function addTodo() {
  const input = document.getElementById("todoInput");
  if (input.value.trim() === "") return;

  todos.push(input.value);
  localStorage.setItem("todos", JSON.stringify(todos));
  input.value = "";
  renderTodos();
}

function removeTodo(index) {
  todos.splice(index, 1);
  localStorage.setItem("todos", JSON.stringify(todos));
  renderTodos();
}

window.onload = renderTodos;