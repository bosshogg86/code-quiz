const $todoInput = $("#todo-text");
const $todoForm = $("#todo-form");
const $todoList = $("#todo-list");
const $todoCountSpan = $("#todo-count");
const todos = [];
init();
function renderTodos() {
  // Clear todoList element and update todoCountSpan
  // todoList.innerHTML = "";
  // $todoList.html('');
  // todoCountSpan.textContent = todos.length;
  $todoCountSpan.text(todos.length);
  // Render a new li for each todo
  for (let i = 0; i < todos.length; i++) {
    const todo = todos[i];
    // var li = document.createElement("li");
    const $li = $('<li>');
    // li.textContent = todo;
    $li.text(todo);
    // li.setAttribute("data-index", i);
    // li.getAttribute
    $li.attr('data-index', i);
    const $button = $('<button>').text('Complete');
    // $li.appendChild(button);
    $li.append($button);
    //    <li>sleep <button>Complete></li>
    // todoList.appendChild(li);
    $todoList.append($li);
  }
}
function init() {
  // Write code here to check if there are todos in localStorage
  if (localStorage.getItem("todos")) {
    const savedTodos = JSON.parse(localStorage.getItem("todos"))
    todos.push(...savedTodos);

    // the spread operator is a shortcut for doing for every element in the savedTodos array, push it to the current todos array one at a time

    console.log(todos);
    // todos.push(...JSON.parse(localStorage.getItem("todos")));
  }
  // Render todos to the DOM
  renderTodos();
}
function storeTodos() {
  // Add code here to stringify the todos array and save it to the "todos" key in localStorage
  localStorage.setItem('todos', JSON.stringify(todos));
}
// When form is submitted...
$todoForm.on("submit", function(event) {
  event.preventDefault();
  // var todoText = $todoInput.value.trim();
  const todoText = $todoInput.val().trim();
  // Return from function early if submitted todoText is blank
  if (todoText === "") {
    return;
  }
  // Add new todoText to todos array, clear the input
  todos.push(todoText);

  // $todoInput.value = "";
  $todoInput.val('');
  // Store updated todos in localStorage, re-render the list
  storeTodos();
  renderTodos();
});
