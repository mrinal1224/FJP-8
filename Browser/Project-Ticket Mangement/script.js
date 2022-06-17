let addBtn = document.querySelector(".add-btn");
let modalCont = document.querySelector(".modal-cont");
let mainCont = document.querySelector(".main-cont");
let taskArea = document.querySelector(".textArea-cont");

let removeBtn = document.querySelector(".remove-btn");

let colors = ['lightpink' , 'lightgreen' , 'lightblue' , 'black']
let allPriorityColors = document.querySelectorAll('.priority-color')

let modalPriorityColor = colors[colors.length-1]

let addFlag = false;
let removeFlag = false;

addBtn.addEventListener("click", function () {
  // display The Modal

  addFlag = !addFlag;

  if (addFlag == true) {
    modalCont.style.display = "flex";
  } else {
    modalCont.style.display = "none";
  }
});


//Select the Priorty Color of The task

allPriorityColors.forEach(function (colorElem){
  colorElem.addEventListener('click' ,  function(e){
      allPriorityColors.forEach(function(priorityColorElem){
        priorityColorElem.classList.remove('active')
      })
      colorElem.classList.add('active')

      modalPriorityColor = colorElem.classList[0] // lightpink
  })
})

modalCont.addEventListener("keydown", function (e) {
  let key = e.key;

  if (key == "Shift") {
    createTicket(taskArea.value , modalPriorityColor);
    modalCont.style.display = "none";
    addFlag = false;
    taskArea.value = "";
  }
});

function createTicket(ticketTask , ticketColor) {
  let id = shortid();
  let ticketCont = document.createElement("div");
  ticketCont.setAttribute("class", "ticket-cont");

  ticketCont.innerHTML = `<div class="ticket-color ${ticketColor}"></div>
     <div class="ticket-id">#${id}</div>
     <div class="task-area">${ticketTask}</div>
     <div class="ticket-lock">
       <i class="fa-solid fa-lock"></i>
    </div>`;

  mainCont.append(ticketCont);

  handleRemoval(ticketCont);
}

removeBtn.addEventListener("click", function () {
  removeFlag = !removeFlag;

  if (removeFlag === true) {
    removeBtn.style.color = "red";
  } else {
    removeBtn.style.color = "white";
  }
});

function handleRemoval(ticket) {
  ticket.addEventListener("click", function () {
    if (!removeFlag) return;
    ticket.remove(); // ui Removal
  });
}
