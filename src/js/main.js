/* eslint-disable */
"use strict";

console.log(">> Ready :)");

const baseAmount = 0.3;

function showError(error) {
  const responseErrorEle = document.getElementById("responseError");
  if (error) {
    responseErrorEle.innerHTML = error
  }
  responseErrorEle.style.display = "block"
}

function hideError() {
  const responseErrorEle = document.getElementById("responseError");
  responseErrorEle.style.display = "none"
}

function bodyLoad() {
  hideError()
  const mintCount = document.getElementById("mintCount");
  const mintTotalAmountEle = document.getElementById("mintTotalAmount");
  mintCount.setAttribute("value", 1);
  mintTotalAmountEle.setAttribute("value", `${baseAmount} ETH`);
}

function onAmountChange(value) {
  const mintTotalAmountEle = document.getElementById("mintTotalAmount");
  mintTotalAmountEle.setAttribute("value", `${(baseAmount * value).toFixed(1)} ETH`);
}

function onMintNow() {
  // This is your mount now function
  const mintTotalAmountEle = document.getElementById("mintTotalAmount");
  console.log(mintTotalAmountEle.getAttribute("value")); // Getting final value
  showError(`Error with value ${mintTotalAmountEle.getAttribute("value")}`)
}
