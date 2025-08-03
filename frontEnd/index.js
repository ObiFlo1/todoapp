const todoform = document.querySelector("form");
const todoInput = document.getElementById("todo-input");
const todoListUL = document.getElementById("todo-list");

let allTodo = []; // 'let' is a variable that can be changed/ updated with new information. you want to make an empty arrary, usually when you want to push items in them. so adding items to the screen.

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
    allTodo.push(todoText);
    //lauch new function that isn't even created yet. i hate when youtube tutorials do this, because, they already have it finished or idk if they are thinking 20 steps forward. well they did this 100 times so yeah
    unpdateTodoList(); // whats the task im giving? what data and i giving? the text value !!!!
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
  // how do you know you want to add this powerup. 'todo' who are we giving this power up object to ?
  const todoLI = document.createElement("li");
  //i bet im going to use the 'todo' task in a userInput(todo) something like that. bc in line 23 in the html file its an <input> tag
  //   todoLI.innerText = todo; // see
  todoLI.className = "todo";
  return todoLI;
}
