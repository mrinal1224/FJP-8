let addBtn = document.querySelector(".add-btn");
let modalCont = document.querySelector(".modal-cont");
let mainCont = document.querySelector(".main-cont");
let taskArea = document.querySelector(".textArea-cont");

let removeBtn = document.querySelector(".remove-btn");

let colors = ["lightpink", "lightgreen", "lightblue", "black"];
let allPriorityColors = document.querySelectorAll(".priority-color");

let modalPriorityColor = colors[colors.length - 1];

let addFlag = false;
let removeFlag = false;

let toolBoxColors = document.querySelectorAll(".color");

let lockClass = "fa-lock";
let unlockClass = "fa-lock-open";

let ticketsArr = [];



if(localStorage.getItem('tickets')){
  ticketsArr = JSON.parse(localStorage.getItem('tickets'))
  ticketsArr.forEach(function(ticket){
    createTicket(ticket.ticketTask , ticket.ticketColor , ticket.ticketID)
  })
}

addBtn.addEventListener("click", function () {
  // display The Modal

  addFlag = !addFlag;

  if (addFlag == true) {
    modalCont.style.display = "flex";
  } else {
    modalCont.style.display = "none";
  }
});

for (let i = 0; i < toolBoxColors.length; i++) {
  toolBoxColors[i].addEventListener("click", function () {
    let selectedToolBoxColor = toolBoxColors[i].classList[0];

    let filteredTickets = ticketsArr.filter(function (ticketObj) {
      return selectedToolBoxColor === ticketObj.ticketColor;
    });

    let allTickets = document.querySelectorAll(".ticket-cont");

    for (let i = 0; i < allTickets.length; i++) {
      allTickets[i].remove();
    }

    filteredTickets.forEach(function (filteredObj) {
      createTicket(
        filteredObj.ticketTask,
        filteredObj.ticketColor,
        filteredObj.ticketID
      );
    });
  });

  toolBoxColors[i].addEventListener("dblclick", function () {
    let allTickets = document.querySelectorAll(".ticket-cont");

    for (let i = 0; i < allTickets.length; i++) {
      allTickets[i].remove();
    }

    ticketsArr.forEach(function (ticketObj) {
      createTicket(
        ticketObj.ticketTask,
        ticketObj.ticketColor,
        ticketObj.ticketID
      );
    });
  });
}

//Select the Priorty Color of The task

allPriorityColors.forEach(function (colorElem) {
  colorElem.addEventListener("click", function (e) {
    allPriorityColors.forEach(function (priorityColorElem) {
      priorityColorElem.classList.remove("active");
    });
    colorElem.classList.add("active");

    modalPriorityColor = colorElem.classList[0]; // lightpink
  });
});

modalCont.addEventListener("keydown", function (e) {
  let key = e.key;

  if (key == "Shift") {
    createTicket(taskArea.value, modalPriorityColor);
    modalCont.style.display = "none";
    addFlag = false;
    taskArea.value = "";
  }
});

function createTicket(ticketTask, ticketColor, ticketID) {
  let id = ticketID || shortid();
  let ticketCont = document.createElement("div");
  ticketCont.setAttribute("class", "ticket-cont");

  ticketCont.innerHTML = `<div class="ticket-color ${ticketColor}"></div>
     <div class="ticket-id">#${id}</div>
     <div class="task-area">${ticketTask}</div>
     <div class="ticket-lock">
       <i class="fa-solid fa-lock"></i>
    </div>`;

  mainCont.append(ticketCont);

  handleRemoval(ticketCont , id);

  handleLock(ticketCont , id );

  handleColor(ticketCont , id);

  if (!ticketID) {
    ticketsArr.push({ ticketTask, ticketColor, ticketID: id });
    localStorage.setItem('tickets' , JSON.stringify(ticketsArr))
  }

  console.log(ticketsArr);
}

removeBtn.addEventListener("click", function () {
  removeFlag = !removeFlag;

  if (removeFlag === true) {
    alert("delete button has been activated");
    removeBtn.style.color = "red";
  } else {
    removeBtn.style.color = "white";
  }
});

function handleRemoval(ticket , id) {
  ticket.addEventListener("click", function () {
    if (!removeFlag) return;

    let idx = getTicketIdx(id)
    ticket.remove(); // ui Removal

    let deletedElement = ticketsArr.splice(idx , 1)

    console.log(deletedElement)


    let strticketArray = JSON.stringify(ticketsArr)


    localStorage.setItem('tickets' , strticketArray)

    ticket.remove(); // ui Removal


  });
}

function handleLock(ticket , id) {
  let ticketLockElem = ticket.querySelector(".ticket-lock");

  let ticketLockIcon = ticketLockElem.children[0];

  let ticketTaskArea = ticket.querySelector(".task-area");


  ticketLockIcon.addEventListener("click", function () {
    let ticketIdx = getTicketIdx(id)
    if (ticketLockIcon.classList.contains(lockClass)) {
      ticketLockIcon.classList.remove(lockClass);
      ticketLockIcon.classList.add(unlockClass);
      ticketTaskArea.setAttribute("contenteditable", "true");
    } else {
      ticketLockIcon.classList.remove(unlockClass);
      ticketLockIcon.classList.add(lockClass);
      ticketTaskArea.setAttribute("contenteditable", "false");
    }


    ticketsArr[ticketIdx].ticketTask=ticketTaskArea.innerText
    localStorage.setItem('tickets' , JSON.stringify(ticketsArr))
  });
}

function handleColor(ticket , id) {
  let ticketColorBand = ticket.querySelector(".ticket-color");

  ticketColorBand.addEventListener("click", function () {
    let currentTicketColor = ticketColorBand.classList[1];

    let ticketIdx = getTicketIdx(id)

    let currentColorIdx = colors.findIndex(function (color) {
      return currentTicketColor === color;
    });

    currentColorIdx++;

    let newTicketColorIdx = currentColorIdx % colors.length;

    let newTicketColor = colors[newTicketColorIdx];

    ticketColorBand.classList.remove(currentTicketColor);
    ticketColorBand.classList.add(newTicketColor);


    ticketsArr[ticketIdx].ticketColor = newTicketColor
    localStorage.setItem('tickets' , JSON.stringify(ticketsArr))
  });
}


function getTicketIdx(id){
  let ticketIdx = ticketsArr.findIndex(function(ticketObj){
    return ticketObj.ticketID === id
  })

  console.log(ticketIdx)

  return ticketIdx
}