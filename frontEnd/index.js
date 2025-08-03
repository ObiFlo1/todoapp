const todoform = document.querySelector("form");
const todoInput = document.getElementById("todo-input");
const todoListUL = document.getElementById("todo-list");

// let allTodo = []; // 'let' is a variable that can be changed/ updated with new information. you want to make an empty arrary, usually when you want to push items in them. so adding items to the screen.
let allTodo = getTodos();
unpdateTodoList();

todoform.addEventListener("submit", function (e) {
  // the event listener so when you click on the button, it performs a function/action. in this case the 'submit' function.
  //i think we're going to create  const and add the divs or li
  //what do we have to do ?
  // add the function when pressed. what function?
  e.preventDefault();
  addTodo();
});

function addTodo() {
  // create item. reset it after pressed. make sure length is long
  //push item to allTOdo
  const todoText = todoInput.value.trim(); // this line saves the users input. from line 23 in html file <input> tag
  if (todoText.length > 0) {
    const todoObject = {
      text: todoText,
      completed: false,
    };
    // allTodo.push(todoText);
    allTodo.push(todoObject);
    //lauch new function that isn't even created yet. i hate when youtube tutorials do this, because, they already have it finished or idk if they are thinking 20 steps forward. well they did this 100 times so yeah
    unpdateTodoList(); // whats the task im giving? what data and i giving? the text value !!!!
    saveTodos();
    todoInput.value = " ";
  }
}

function unpdateTodoList() {
  todoListUL.innerHTML = "";
  allTodo.forEach((todo, todoIndex) => {
    todoItem = createTodoItem(todo, todoIndex); // todoItem doesn't exist yet... todo task doesn't exit either i don't think
    todoListUL.append(todoItem);
  });
}

function createTodoItem(todo, todoIndex) {
  const todoId = "todo-" + todoIndex;
  const todoLI = document.createElement("li");
  //i bet im going to use the 'todo' task in a userInput(todo) something like that. bc in line 23 in the html file its an <input> tag
  //   todoLI.innerText = todo; // see
  const todoText = todo.text; // am i using the object from another function? i don't think that can work
  todoLI.className = "todo";
  todoLI.innerHTML = `
   <input
            type="checkbox"
            id="${todoId}"
          />
          <label
            class="custom-checkbox"
            for="${todoId}"
            ><svg
              fill="transparent"
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 -960 960 960"
              width="24px"
              fill="#e3e3e3"
            >
              <path d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z" /></svg
          ></label>
          <label
            for="${todoId}"
            class="todo-text"
            >${todoText}</label
          >
          <button class="delete-button">
            <svg
              fill="var(--secondary-color)"
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 -960 960 960"
              width="24px"
              fill="#e3e3e3"
            >
              <path
                d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z"
              />
            </svg>
          </button>
  `;

  const deleteButton = todoLI.querySelector(".delete-button");
  deleteButton.addEventListener("click", () => {
    deleteTodoItem(todoIndex);
  });
  const checkbox = todoLI.querySelector("input");
  checkbox.addEventListener("check", () => {
    allTodo[todoIndex].completed = checkbox.checked; // i don't get this code at all
    saveTodos();
  });
  checkbox.checked = todo.completed;
  return todoLI;
}

function deleteTodoItem(todoIndex) {
  allTodo = allTodo.filter((_, i) => i !== todoIndex); //i don't know this at all
  saveTodos(); //i know what it does, but why put it here.
  unpdateTodoList(); //try to understand why we put this everywhere
}

function saveTodos() {
  // going to keep this test line here
  localStorage.setItem("test", "1233");
  // now , how am i suppose to save each item on the local storage.. im thinkig localStorage.updateTodoList()   and call the funciton again but here?? idk
  const todoJson = JSON.stringify(allTodo);
  localStorage.setItem("todo", todoJson);
}

function getTodos() {
  const todos = localStorage.getItem("todos") || "[]";
  return JSON.parse(todos);
}
