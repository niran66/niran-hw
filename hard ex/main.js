const CodeProject = {
  code: "",
  tries: 1,
  click: 0,
  codeEntered: "",
};

const divNumbers = document.querySelector(".btn-numbers");
const btnInput = document.querySelector(".input-password");
const btnCheckIt = document.querySelector(".btn-check-it");
const btnNumber = document.querySelectorAll(".number");
const inputDiv = document.querySelector(".input-div");
const btnCheckPassword = document.querySelector(".check-password");

btnCheckIt.addEventListener("click", function (e) {
  e.preventDefault();
  CodeProject.code = btnInput.value;
  if (divNumbers.style.display == "grid") {
    divNumbers.style.display = "none";
  } else {
    divNumbers.style.display = "grid";
  }
  inputDiv.style.display = "none";
});

for (let i = 0; i < btnNumber.length; i++) {
  let val = btnNumber[i].innerText;
  setClicksBTNS(btnNumber[i], val);
}

//////// function ////////

function setClicksBTNS(btn, val) {
  btn.addEventListener("click", function () {
    CodeProject.codeEntered += val;
    // console.log(val);
    checkValue();
    btn.style.backgroundColor = "black";
    btn.style.color = "white";
    CodeProject.click++;
    console.log(CodeProject.codeEntered);
    noClick();
  });
}

function checkValue() {
  if (CodeProject.codeEntered.length == 4) {
    if (CodeProject.codeEntered == CodeProject.code) {
      success();
    } else if (CodeProject.tries < 3) {
      CodeProject.tries++;
      reset();
    } else {
      callPolice();
    }
  }
}

function success() {
  setTimeout(function () {
    alert("SUCCES 🥳");
  }, 500);
}

function reset() {
  setTimeout(function () {
    alert("Wrong Code");
    for (let i = 0; i < btnNumber.length; i++) {
      btnNumber[i].style.backgroundColor = "#ffec99";
      btnNumber[i].style.color = "#212529";
    }
  }, 500);
  CodeProject.codeEntered = "";
}

function callPolice() {
  if (CodeProject.tries == 3) alert("🚔 Calling police 🚔");
}

function noClick() {
  setTimeout(function () {
    for (let i = 0; i < btnNumber.length; i++) {
      btnNumber[i].style.backgroundColor = "#ffec99";
      btnNumber[i].style.color = "#212529";
      CodeProject.codeEntered = "";
    }
  }, 3000);
  clearTimeout();
}
