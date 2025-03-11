const addTaskBtn = document.getElementById("add-task-btn");

//  const todoBoard

addTaskBtn.addEventListener("click", () => {
  const input = prompt("what is the task");
  if (!input) return;

  const taskCard = document.createElement("p");
  taskCard.classList.add("item");
  taskCard.innerText = input;
  // taskCard.setAttribute('drag')
});

// card - Drag Start
// card - Drag End

// Board - Drag Over

const allBoards = document.getElementsByClassName("board");

allBoards.allBoards.forEach((board) => {
  board.addEventListener("dragover", () => {
    console.log(board, "kuch toh mere uper se gayaa");
  });
});



