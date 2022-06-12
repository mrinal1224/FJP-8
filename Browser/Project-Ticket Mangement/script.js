let addBtn = document.querySelector(".add-btn");
let modalCont = document.querySelector(".modal-cont");

let addFlag = false;

addBtn.addEventListener("click", function () {
  // display The Modal

  addFlag = !addFlag;

  if (addFlag == true) {
    modalCont.style.display = "flex";
  } else {
    modalCont.style.display = "none";
  }
});
