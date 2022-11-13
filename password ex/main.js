const CodeProject = {
  code: "1234",
  tries: 1,
  codeEntered: "",
};

var main = document.createElement("main");
var keypadSection = document.createElement("section");
keypadSection.className = "keypad-section";
var keypad = document.createElement("div");
keypad.className = "keypad";
keypad.style.backgroundColor = "yellow";
keypad.style.padding = "80px";
for (let i = 0; i < 10; i++) {
  var btn = document.createElement("div");
  btn.className = "section";
  var btnSpan = document.createElement("span");
  var val = i == 9 ? "0" : (i + 1).toString();
  btnSpan.innerText = val;
  btn.append(btnSpan);
  keypad.append(btn);
  setClicksBTNS(btn, val);
}
keypadSection.append(keypad);
main.append(keypadSection);

function setClicksBTNS(btn, val) {
  btn.addEventListener("click", function () {
    CodeProject.codeEntered += val;
    checkValue();
  });
}

function checkValue() {
  if (CodeProject.codeEntered.length == 4) {
    if (CodeProject.codeEntered === CodeProject.code) {
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
  alert("Success");
}

function reset() {
  alert("Wrong Code");
  CodeProject.codeEntered = "";
}

function callPolice() {
  alert("Calling police");
}

console.log("d");
