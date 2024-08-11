let newtxt = document.getElementById("input-div");
let newCont = document.querySelector(".main-section");

let mybtn = document.querySelector(".button1");

const getTodoList = () => {
  return JSON.parse(localStorage.getItem("newStore"));
};

let localTodoList = getTodoList() || [];

const addTodoElm = (curElm) => {
  const divElm = document.createElement("div");
  divElm.classList.add("todo-div");
  divElm.innerHTML = `<li>${curElm}</li>
       <button class="delete-btn">Delete</button>`;
  
  // Add event listener to delete button
  divElm.querySelector(".delete-btn").addEventListener("click", () => {
    removeTodoElm(curElm, divElm);
  });
  
  newCont.append(divElm);
};

const addTodo = (e) => {
  e.preventDefault();

  const localTodoValue = newtxt.value.trim();
  localTodoList.push(localTodoValue);
  localTodoList = [...new Set(localTodoList)];
  console.log(localTodoList);

  localStorage.setItem("newStore", JSON.stringify(localTodoList));

  addTodoElm(localTodoValue);
};

const showTodo = () => {
  console.log(localTodoList);

  localTodoList.forEach((curElm) => {
    addTodoElm(curElm);
  });
};

const removeTodoElm = (todoText, todoDiv) => {
  // Remove the item from localStorage
  localTodoList = localTodoList.filter((item) => item !== todoText);
  localStorage.setItem("newStore", JSON.stringify(localTodoList));

  // Remove the element from the DOM
  todoDiv.remove();
};

showTodo();
mybtn.addEventListener("click", (e) => {
  addTodo(e);
});
