const Cars = [
  {
    category: ["sport", "luxury"],
    make: "Ferrary",
    model: "Califorina",
    price: "$350,000",
    year: 2022,
    available: true,
  },
  {
    category: ["sport"],
    make: "Ford",
    model: "Mustang",
    price: "$50,000",
    year: 2022,
    available: true,
  },
  {
    category: ["SUV", "luxury"],
    make: "Land Rover",
    model: "Range Rover",
    price: "$110,000",

    year: 2021,
    available: true,
  },
  {
    category: ["Economey"],
    make: "Honda",
    model: "Civic",
    price: "$30,000",

    year: 2020,
    available: true,
  },
  {
    category: ["Economey"],
    make: "Cheverolet",
    model: "suburban",
    price: "$40,000",

    year: 2020,
    available: true,
  },
];

const category = document.querySelector(".cras-category-input");
const make = document.querySelector(".cras-make-input");
const model = document.querySelector(".cras-model-input");
const price = document.querySelector(".cras-price-input");
const years = document.querySelector(".cras-years-input");
const available = document.querySelector(".cras-available-input");
const button = document.querySelector(".show-form");
const submit = document.querySelector(".submit");
const showAllCars = document.querySelector(".all-cars");
const formCars = document.querySelector(".form-cars");
const mainDiv = document.querySelector("main");

button.addEventListener("click", toggleForm);

function toggleForm() {
  if (formCars.style.display == "block") {
    formCars.style.display = "none";
    this.innerHTML = "Show Form";
  } else {
    formCars.style.display = "block";
    this.innerHTML = "Hide Form";
  }
}

submit.addEventListener("click", addObject);

function addObject() {
  const newObeject = new addCar(
    category.value,
    make.value,
    model.value,
    price.value,
    years.value,
    available.value
  );
  Cars.push(newObeject);
  console.log(Cars);
  createHTML(newObeject, Cars.length - 1);
  // addObjectToList(newObeject);
  clear();
}

class addCar {
  constructor(category, make, model, price, year) {
    this.category = category;
    this.make = make;
    this.model = model;
    this.price = price;
    this.year = year;
  }
}

function clear() {
  category.value = "";
  make.value = "";
  model.value = "";
  price.value = "";
  years.value = "";
  available.value = "";
}

Cars.forEach(createHTML);

function addObjectToList(cars) {
  const div = document.querySelector("div");
  div.className = "div-cars";
  const btn = document.createElement("button");
  btn.innerText = "X";
  const h3 = document.createElement("h3");
  h3.innerText = `Category: ${cars.category}, Make: ${cars.make}, Model: ${cars.model}`;
  const h5 = document.createElement("h5");
  h5.innerText = `Price of the car: ${cars.price}`;
  const p = document.createElement("p");
  p.innerText = `Years of the car: ${cars.year}`;
  div.append(btn, h3, h5, p);
  cars.DOM = div;
  mainDiv.appendChild(div);
  btn.addEventListener("click", function () {
    h3.style.display = "none";
    h5.style.display = "none";
    p.style.display = "none";
  });
}

function createHTML(car, i) {
  if (car.available) {
    const div = document.createElement("div");
    div.id = "car-" + i;
    div.className = "each-car";
    const btn = document.createElement("button");
    btn.innerText = "X";
    btn.title = "Click to remove";
    const h1 = document.createElement("h1");
    h1.innerText = car.make;
    const h2 = document.createElement("h2");
    h2.innerText = car.model;
    const p = document.createElement("p");
    p.innerText = car.price;
    div.append(btn, h1, h2, p);
    car.DOM = div;
    mainDiv.appendChild(div);
  }
}

function remove(x) {
  x.remove();
}

console.log(Cars);
