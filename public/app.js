const inputBill = document.querySelector("#bill");
const inputCustom = document.querySelector("#custom");
const inputPeople = document.querySelector("#people");
const allbtn = document.querySelectorAll(".tip-btn-con > button");
const resetBtn = document.querySelector(".reset");
const tipPerPersonDisplay = document.querySelector("#tip-per-person");
const totalTipPerPersonDisplay = document.querySelector(
  "#tip-per-person-total"
);

inputBill.addEventListener("keydown", typeBill);

let bill = 0;
let numPerson = null;
let tipTotal = null;
let tipPerHead = null;

// disable all click event except bill
disableBTN();

function typeBill(e) {
  if (e.keyCode === 13 && this.value.trim() !== "") {
    // console.log(this.value);
    this.disabled = true;
    for (let index = 0; index < allbtn.length; index++) {
      allbtn[index].style.pointerEvents = "auto";
    }
    inputCustom.disabled = false;
    inputCustom.style.pointerEvents = "auto";
    inputPeople.disabled = false;
    inputPeople.style.pointerEvents = "auto";
  } else if (e.keyCode === 13 && this.value === "") {
    this.style.border = "solid 2px #fa2f2f";
    this.placeholder = "No Empty Value";
  }
}
// have to study this!!!
function isNumberKey(evt) {
  var charCode = evt.which ? evt.which : event.keyCode;
  if (charCode > 31 && (charCode < 48 || charCode > 57)) return false;
  return true;
}

for (let index = 0; index < allbtn.length; index++) {
  allbtn[index].addEventListener("click", tipClick);
}
// btn for each tip
function tipClick() {
  if (this.textContent === "5%") {
    bill = inputBill.value;
    let billstr = parseFloat(bill);
    let tip = 0.05;
    tipTotal = tip * billstr;
    console.log(tipTotal);
  } else if (this.textContent === "10%") {
    bill = inputBill.value;
    let billstr = parseFloat(bill);
    let tip = 0.1;
    tipTotal = tip * billstr;
    console.log(tipTotal);
  } else if (this.textContent === "15%") {
    bill = inputBill.value;
    let billstr = parseFloat(bill);
    let tip = 0.15;
    tipTotal = tip * billstr;
    console.log(tipTotal);
  } else if (this.textContent === "25%") {
    bill = inputBill.value;
    let billstr = parseFloat(bill);
    let tip = 0.25;
    tipTotal = tip * billstr;
    console.log(tipTotal);
  } else if (this.textContent === "50%") {
    bill = inputBill.value;
    let billstr = parseFloat(bill);
    let tip = 0.5;
    tipTotal = tip * billstr;
    console.log(tipTotal);
  }
}
// custom percentage
inputCustom.addEventListener("keydown", function (e) {
  if (e.keyCode === 13 && this.value.trim() !== "") {
    let customVal = this.value;
    let billstr = parseFloat(inputBill.value);
    tipTotal = customVal /= 100;
    tipTotal *= billstr;
    this.disabled = true;
    for (let index = 0; index < allbtn.length; index++) {
      allbtn[index].style.pointerEvents = "none";
    }
    this.style.pointerEvents = "none";
  } else if (e.keyCode === 13 && this.value === "") {
    this.style.border = "solid 2px #fa2f2f";
    this.placeholder = "No Empty Value";
  }
});

// how many people will share
inputPeople.addEventListener("keydown", function (e) {
  if (e.keyCode === 13 && this.value.trim() !== "") {
    numPerson = parseFloat(this.value);
    getTipTotal(tipTotal, numPerson);
    displayTips();
    this.disabled = true;
    this.style.pointerEvents = "none";
    resetBtn.disabled = false;
    resetBtn.style.pointerEvents = "auto";
  } else if (e.keyCode === 13 && this.value === "") {
    this.style.border = "solid 2px #fa2f2f";
    this.placeholder = "No Empty Value";
  }
});

// calculation for how many total / person
function getTipTotal(total, person) {
  console.log(total);
  console.log(person);
  tipPerHead = total / person;
  console.log(tipPerHead);
}

// display result
function displayTips() {
  tipPerPersonDisplay.textContent = `$ ${tipPerHead}`;
  totalTipPerPersonDisplay.textContent = `$ ${tipTotal}`;
}

resetBtn.addEventListener("click", function (e) {
  inputBill.value = "";
  inputCustom.value = "";
  inputPeople.value = "";
  tipPerPersonDisplay.textContent = `$ 0.00`;
  totalTipPerPersonDisplay.textContent = `$ 0.00`;
  this.style.pointerEvents = "none";
  inputBill.disabled = false;
  inputBill.style.pointerEvents = "auto";
});

// early disable all btn
function disableBTN() {
  for (let index = 0; index < allbtn.length; index++) {
    allbtn[index].style.pointerEvents = "none";
  }
  inputCustom.style.pointerEvents = "none";
  inputPeople.style.pointerEvents = "none";
  resetBtn.style.pointerEvents = "none";
  inputCustom.disabled = true;
  inputPeople.disabled = true;
  resetBtn.disabled = true;
}
