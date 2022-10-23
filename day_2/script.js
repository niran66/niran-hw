// if (location.hash) {
//   location.hash = "#first";
// }
const Cars = ["Hyundai", "BMW", "Ford", "Toyota", "Audi", "Mercedes"];
let fullName = "Niran Algrabli";
let cLth = Cars.length; // 5
let fnLth = fullName.length; // 14

// let carBrand = prompt("enter a enter a car brand").toUpperCase();
// for (let i = 0; i < Cars.length; i++) {
//   const car = Cars[i].toUpperCase();
//   if (car.toUpperCase() == carBrand) {
//     alert(carBrand + "is in the array! ");
//     break;
//   }
// }

// let carBrand = prompt("enter a enter a car brand");
// alert(
//   "The position of " + carBrand + " in the array is " + Cars.indexOf(carBrand)
// );

// const myCars = Cars.slice(5) // ['Mercedes']
// const myCars = Cars.slice(4) // ['Audi' ,'Mercedes']
// const myCars = Cars.slice(4, 5) // ['Audi']

// const firstName = fullName.slice(0, 5) // 'Niran'

// alert(Cars.join(" and ") + ".");

// let text =
//   " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam praesentium consequuntur quam ipsam soluta harum, vel repudiandae facilis in placeat a vero, quo illum nisi! Hic explicabo tenetur aliquam sit!";

// text = text.replaceAll("!", ",");
// text = text.replaceAll(".", ",");
// console.log(text.split(","));

// Cars.push(prompt('Enter a car to add')) // 'Farrari
// let firstPopped =Cars.pop() // 'Mercedes'
// let secPopped =Cars.pop() //'Audi'
// Cars.pop(); // dellted tha last
// Cars.pop();

// Cars.shift() // delleted the first element

// Cars.sort(); // organized order in abc
// Cars.reverse(); // switch the order back

// Cars.splice(2, 3, "Farrari", "Honda", "Aston"); // תתחיל מ2 ואז תמחוק 3 ואז תוסיף את החדשים בינהם
// console.log(Cars); //

// let Students = [];
// for (let i = 0; i < 5; i++) {
//   Students.push(prompt("Enter the name for student #" + (i + 1)));
// }

// let Teachers = [];
// for (let i = 0; i < 5; i++) {
//   Teachers.push(prompt("Enter the name for teachers #" + (i + 1)));
// }

// function sortAndPront(string, role) {
//   let text = string.sort().reverse().join(", ");
//   alert(`The ${string.length} ${role} are ${text}.`);
// }

// sortAndPront(Students, "students");
// sortAndPront(Teachers, "Teachers");

// console.log(Students);

//////////////////// HOMEWORK ////////////////////
// EX 1

const shortWord = function () {
  const string = prompt("Write your name");
  let vowelsArray = [];
  let consArray = [];
  const vowels = ["a", "e", "i", "o", "u"];
  let myArray = string.toLowerCase().replaceAll(" ", "");
  for (let i = 0; i < myArray.length; i++) {
    const letter = myArray[i];
    vowels.includes(letter) ? vowelsArray.push(letter) : consArray.push(letter);
  }
  vowelsArray.sort();
  consArray.sort();
  let text = `"Your string contains the following vowels: ${vowelsArray} And the following consonants:${consArray}`;
  console.log(text);
};

// shortWord();

// EX 2

const keyAndValue = function () {
  const name = prompt("Write your name");
  let firstLetter = [];
  let array = name.toUpperCase().split("").sort();

  for (let i = 0; i < array.length; i++) {
    firstLetter[i] = {
      letter: array[i],
      amount: array.join().split(array[i]).length - 1,
    };
  }
  console.log(firstLetter);
};
// keyAndValue();

var text = prompt("Enter yout name") // string
  .toUpperCase() // string
  .replaceAll(" ", "") // string
  .split("") // array
  .sort(); // array

function buildMeAndObject(char) {
  const obj = {};
  obj.letter = char;
  obj.qty = 1;
  return obj;
}

const FinalArray = [];
FinalArray.push(buildMeAndObject(text[0]));

for (let i = 1; i < text.length; i++) {
  const letter = text[i];
  let lastObj = FinalArray[FinalArray.length - 1];
  letter == lastObj.letter
    ? lastObj.qty++
    : FinalArray.push(buildMeAndObject(letter));
}

console.log(FinalArray);
