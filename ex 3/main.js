const user = document.querySelector(".user");
const password = document.querySelector(".password");
const button = document.querySelector(".submit");
const h1 = document.querySelector(".headline");

const users = [
  {
    firstName: "alon",
    userName: "alon11",
    password: 112233,
  },
  {
    firstName: "dan",
    userName: "dan22",
    password: 223344,
  },
  {
    firstName: "niran",
    userName: "niran33",
    password: 334455,
  },
];

button.addEventListener("click", userDeatiles);

function userDeatiles() {
  for (let i = 0; i < users.length; i++) {
    let uName = user.value;
    let pass = password.value;
    uName.innerText = "";
    pass.innerText = "";

    if (uName == users[i].userName && pass == users[i].password) {
      h1.innerText = `Welcome ${users[i].firstName}`;
      return;
    }
  }
  alert(`The user or the password wrong ✋`);
}
