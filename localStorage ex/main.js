const userName = document.querySelector(".user-name");
const email = document.querySelector(".email");
const password = document.querySelector(".password");
const btnLogin = document.querySelector(".btn-login");

// userName.innerHTML = `${users[0].name}`;

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
uniqueToken();

let userObject = `{"name":"","email":"","token":""}`;

let user = {};
let usersJsonC = localStorage.user;
if (usersJsonC) {
  user = JSON.parse(userObject);
} else {
  localStorage.user = userObject;
}

let usersJson = `[{"name":"Niro","email":"niranal66@gmail.com","token":"","password":"1234"},{"name":"Avi","email":"aviv@123","token":"","password":"1234"},{"name":"Dan","email":"dan@1","token":"","password":""},{"name":"Meir","email":"meir@2","token":"","password":""},{"name":"Rina","email":"rina@3","token":"","password":""}]`;

let users = {};
let usersJsonIn = localStorage.usersInfo;

if (usersJsonIn) {
  users = JSON.parse(usersJsonIn);
} else {
  localStorage.usersInfo = usersJson;
}

for (let i = 0; i < users.length; i++) {
  user.token = users[i].token;
  const userI = users[i];
  console.log(userI);

  function tokenLogin() {
    if (user.token == users[i].token) {
      alert("hh");
      users[i].token = uniqueToken();
      user.token = users[i].token;
      user.name = users[i].name;
      user.email = users[i].email;
      localStorage.usersInfo = JSON.stringify(users);
      localStorage.user = JSON.stringify(user);
    } else return;
  }

  console.log(!users[i].token);

  function loginEmail() {
    if (!user.name || !users[i].token) {
      console.log("login please");
      btnLogin.addEventListener("click", function () {
        console.log(
          email.value == users[0].email && password.value == users[0].password,
          email.value == users[1].email && password.value == users[1].password,
          email.value == users[2].email && password.value == users[2].password,
          email.value == users[3].email && password.value == users[3].password,
          email.value == users[4].email && password.value == users[4].password
        );
        if (
          email.value == users[0].email &&
          password.value == users[0].password
        ) {
          users[0].token = uniqueToken();
          user.name = users[0].name;
          user.email = users[0].email;
          user.token = users[0].token;
          localStorage.user = JSON.stringify(user);
          console.log("login in");
          console.log(users[0].name);
        }
        welcomwUser();
      });
    }
  }
}

function stayCheckIn() {
  if (user.name == users[0].name && user.token == users[0].token) {
    user.name = users[0].name;
    user.email = users[0].token;
    localStorage.user = JSON.stringify(user);
    console.log("stay!!!!!");
  }
}
loginEmail();
stayCheckIn();
tokenLogin();

function welcomwUser() {
  userName.innerHTML = `Welcome ${user.name}`;
  users = JSON.parse(usersJsonIn);
}

// console.log(users[i].token);

// if (confirm("Do you want to change your password?")) {
//   localStorage.password = prompt("enter a new password");
// }
// users.email = "niranal66@gamil.com";
// users.password = 123456;

// if (users.password == password && users.email == email) {
//   alert("welcomw");
// } else alert("wrong info");

// try {
//   users = JSON.parse(usersJson);
//   console.log(users);
// } catch (e) {}

// users.kids.push({ fName: "Rani", age: 2 });
