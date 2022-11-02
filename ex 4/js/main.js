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

button.addEventListener("click", () => {
  const formCars = document.querySelector(".form-cars");
  if (formCars.style.display === "none") {
    formCars.style.display = "block";
    button.innerText = "HIDE FORM";
  } else {
    formCars.style.display = "none";
    button.innerText = "SHOW FORM";
  }
});

submit.addEventListener("click", addObject);

function addObject() {
  const newObeject = {
    category: [category.value],
    make: [make.value],
    model: [model.value],
    price: [price.value],
    year: [years.value],
    available: [available.value],
  };
  Cars.push(newObeject);
  console.log(Cars);
  addObjectToList(newObeject);
  clear();
}

function clear() {
  category.value = "";
  make.value = "";
  model.value = "";
  price.value = "";
  years.value = "";
  available.value = "";
}

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

const mainDiv = document.querySelector("main");

function createHTML(cars, i) {
  if (cars.available) {
    const div = document.createElement("div");
    div.id = "cars-" + i;
    div.className = "each-cars";
    const btn = document.createElement("button");
    btn.innerText = "X";
    btn.title = "Click to remove";
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
      remove(div);
    });
  }
}

function remove(x) {
  x.remove();
}

console.log(Cars);
