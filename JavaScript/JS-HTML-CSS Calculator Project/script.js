// START Variables take from HTML

const fivePercentBtn = document.getElementsByClassName("percent-btn-5")[0];

const tenPercentBtn = document.getElementsByClassName("percent-btn-10")[0];

const fifteenPercentBtn = document.getElementsByClassName("percent-btn-15")[0];

const amountInput = document.getElementsByName("amount-input")[0];

const peopleInput = document.getElementsByName("people-input")[0];

const calcButton = document.getElementsByClassName("calculate-btn")[0];

const resetButton = document.getElementsByClassName("reset-btn")[0];

const amountVisible = document.getElementsByClassName(
  "total-amount-visible"
)[0];

const tipAmountVisible =
  document.getElementsByClassName("tip-amount-visible")[0];

// END Variables take from HTML

// START Styling with button clicked

function changeColorforFive() {
  fivePercentBtn.setAttribute("style", "background-color: hsl(184, 14%, 56%);");
  tenPercentBtn.setAttribute("style", "background-color: hsl(183, 100%, 15%)");
  fifteenPercentBtn.setAttribute(
    "style",
    "background-color: hsl(183, 100%, 15%)"
  );
}

function changeColorforTen() {
  fivePercentBtn.setAttribute("style", "background-color: hsl(183, 100%, 15%)");
  tenPercentBtn.setAttribute("style", "background-color: hsl(184, 14%, 56%);");
  fifteenPercentBtn.setAttribute(
    "style",
    "background-color: hsl(183, 100%, 15%)"
  );
}

function changeColorforFifteen() {
  fivePercentBtn.setAttribute("style", "background-color: hsl(183, 100%, 15%)");
  tenPercentBtn.setAttribute("style", "background-color: hsl(183, 100%, 15%)");
  fifteenPercentBtn.setAttribute(
    "style",
    "background-color: hsl(184, 14%, 56%);"
  );
}

function backColor() {
  fivePercentBtn.setAttribute("style", "background-color: hsl(183, 100%, 15%)");
  tenPercentBtn.setAttribute("style", "background-color: hsl(183, 100%, 15%)");
  fifteenPercentBtn.setAttribute(
    "style",
    "background-color: hsl(183, 100%, 15%)"
  );
}

// END Styling with button clicked

// START Styling Tip color

function changeTipColor() {
  tipAmountVisible.setAttribute("style", "color:  hsl(189, 41%, 97%)");
}

function backTipColor() {
  tipAmountVisible.setAttribute("style", "color:  hsl(184, 14%, 56%)");
}

// END Styling Tip color

// START Func's with btn enabled/disabled

function calcBtnCheck() {
  if (!tipAmountVisible.value || !amountVisible.value) {
    calcButton.setAttribute("disabled", "");
  }
}
calcBtnCheck();

function resetBtnCheck() {
  if (!tipAmountVisible.value || !amountVisible.value) {
    resetButton.setAttribute("disabled", "");
  }
}
resetBtnCheck();

amountInput.addEventListener("input", () => {
  resetButton.removeAttribute("disabled");
});

peopleInput.addEventListener("input", () => {
  resetButton.removeAttribute("disabled");
});

function isClicked() {
  if ((clicked = true)) {
    resetButton.removeAttribute("disabled");
  }
}

amountInput.addEventListener("input", () => {
  calcButton.removeAttribute("disabled");
});

peopleInput.addEventListener("input", () => {
  calcButton.removeAttribute("disabled");
});

// END Func's with btn enabled/disabled

// START Tips calculations

let inputAmount = amountInput.value;
let tip;
let clicked = false;

function tip5Add() {
  tip = amountInput.value * 0.05;
  finalAmountWithoutPeople = Math.floor(amountInput.value) + tip;
  console.log(finalAmountWithoutPeople);
  changeColorforFive();
  clicked = true;
  isClicked();
}

function tip10Add() {
  tip = amountInput.value * 0.1;
  finalAmountWithoutPeople = Math.floor(amountInput.value) + tip;
  console.log(finalAmountWithoutPeople);
  changeColorforTen();
  clicked = true;
  isClicked();
}

function tip15Add() {
  tip = amountInput.value * 0.15;
  finalAmountWithoutPeople = Math.floor(amountInput.value) + tip;
  console.log(finalAmountWithoutPeople);
  changeColorforFifteen();
  clicked = true;
  isClicked();
}

// END Tips calculations

// START Amounts calc's

let finalAmount;

function countByPeopleNum() {
  finalAmount = finalAmountWithoutPeople / peopleInput.value;

  return finalAmount;
}

function insertAmounts() {
  // console.log(finalAmount)

  if (clicked == true) {
    countByPeopleNum();

    amountVisible.innerText = "$" + parseFloat(finalAmount).toFixed(2);

    tipAmountVisible.innerText =
      "$" + parseFloat(tip / peopleInput.value).toFixed(2);
    changeTipColor();
  } else {
    tip = 0;
    finalAmountWithoutPeople = Math.floor(amountInput.value);

    finalAmount = finalAmountWithoutPeople / peopleInput.value;

    amountVisible.innerText = "$" + parseFloat(finalAmount).toFixed(2);

    tipAmountVisible.innerText = "$0.00";

    changeTipColor();

    return false;
  }
}

// END Amounts calc's

// START Reset all values

function resetAmounts() {
  amountVisible.innerText = "$0.00";

  tipAmountVisible.innerText = "$0.00";

  tip = 0;

  amountInput.value = "";
  peopleInput.value = "";

  clicked = false;

  backColor();
  backTipColor();
  resetBtnCheck();
  calcBtnCheck();
}

// END Reset all values

// START Buttons assigned

calcButton.addEventListener("click", insertAmounts);

resetButton.addEventListener("click", resetAmounts);

fivePercentBtn.addEventListener("click", tip5Add);
tenPercentBtn.addEventListener("click", tip10Add);
fifteenPercentBtn.addEventListener("click", tip15Add);

// END Buttons assigned
