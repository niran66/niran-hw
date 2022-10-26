const getId = function () {
  let firstName = prompt("first name plaese");
  let lastName = prompt("last name plaese");
  let id = prompt("id plaese");
  let fullName = {};
  fullName.firstName = firstName;
  fullName.lastName = lastName;
  fullName.id = id;
  firstNameArray = [];
  lastNameArray = [];
  idArray = [];

  firstNameArray.push(firstName);
  lastNameArray.push(lastName);
  idArray.push(id);

  let text = confirm("Do you want add another user?");
  while (text == true) {
    firstName = prompt("first name plaese");
    lastName = prompt("last name plaese");
    id = prompt("id plaese");
    firstNameArray.push(firstName);
    lastNameArray.push(lastName);
    idArray.push(id);
    text = confirm("Do you want add another user?");
  }

  alphFirstNameArray = firstNameArray.sort();
  alphlastNameArray = lastNameArray.sort();
  alphidArray = idArray.sort();
  console.log(alphFirstNameArray, alphlastNameArray, alphidArray);
};

getId();
