const userName = document.querySelector(".user-name");
const email = document.querySelector(".email");
const password = document.querySelector(".password");
const btnLogin = document.querySelector(".btn-login");

function uniqueToken() {
  const timeStamp = new Date().getTime().toString(36);
  const tokenUpCase = `${Math.random().toString(36).toUpperCase().substr(2)}`;
  const tokeLowwerCase = `${Math.random()
    .toString(36)
    .toLowerCase()
    .substr(2)}`;
  const token = tokeLowwerCase + tokenUpCase + timeStamp;
  return token;
}

let users = [
  { name: "Niro", email: "niranal66@gmail.com", token: "", password: "1234" },
  { name: "Avi", email: "aviv@123", token: "", password: "1234" },
  { name: "Dan", email: "dan@1", token: "", password: "" },
  { name: "Meir", email: "meir@2", token: "", password: "" },
  { name: "Rina", email: "rina@3", token: "", password: "" },
];

let usersJsonIn = localStorage.usersInfo;

if (usersJsonIn) {
  users = JSON.parse(usersJsonIn);
} else {
  localStorage.usersInfo = JSON.stringify(users);
  loginEmail();
}

let userObject = null;

let user = {};
let userJsonC = localStorage.user;
if (userJsonC) {
  user = JSON.parse(userJsonC);
  tokenLogin();
} else {
  loginEmail();
}

function tokenLogin() {
  for (let i = 0; i < users.length; i++) {
    const u = users[i];
    if (u.email == user.email) {
      if (u.token == user.token) {
        user.token = uniqueToken(); // new token
        u.token = user.token; // meadken
        localStorage.user = JSON.stringify(user); // meadken LS
        localStorage.usersInfo = JSON.stringify(users); // meadken LS
        welcomwUser();

        return;
      }
    }
  }
  loginEmail();
}

function loginEmail() {
  console.log("login please");
  btnLogin.addEventListener("click", function () {
    for (let i = 0; i < users.length; i++) {
      const u = users[i];
      if (email.value == u.email) {
        if (password.value == u.password) {
          user.token = uniqueToken(); // new token
          user.email = u.email;
          user.name = u.name;
          u.token = user.token; // meadken
          localStorage.user = JSON.stringify(user); // meadken LS
          localStorage.usersInfo = JSON.stringify(users); // meadken LS
          welcomwUser();
          found = true;
          return;
        }
      }
    }
    alert("wrong info");
  });
}

function welcomwUser() {
  userName.innerHTML = `Welcome ${user.name}`;
}
