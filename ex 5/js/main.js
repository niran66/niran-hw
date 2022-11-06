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

const category = document.querySelector(".cars-category-input");
const make = document.querySelector(".cars-make-input");
const model = document.querySelector(".cars-model-input");
const price = document.querySelector(".cars-price-input");
const years = document.querySelector(".cars-years-input");
const button = document.querySelector(".btn-success");
const submit = document.querySelector(".btn-primary");
const showAllCars = document.querySelector(".all-cars");
const formCars = document.querySelector(".container");
const mainDiv = document.querySelector("main");

Cars.forEach(createHTML);

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
    years.value
  );
  Cars.push(newObeject);
  createHTML(newObeject, Cars.length - 1);
  clear();
}

class addCar {
  constructor(category, make, model, price, year) {
    this.category = category;
    this.make = make;
    this.model = model;
    this.price = price;
    this.year = year;
    this.available = true;
  }
}

function clear() {
  category.value = "";
  make.value = "";
  model.value = "";
  price.value = "";
  years.value = "";
}

function createHTML(car, i) {
  if (car.available) {
    const div = document.createElement("div");
    div.id = "car-" + i;
    div.className = "each-car";
    const btn = document.createElement("button");
    btn.innerText = "X";
    btn.className = "btn-x";
    const h1 = document.createElement("h1");
    h1.innerText = car.make;
    const h2 = document.createElement("h2");
    h2.innerText = car.model;
    const h3 = document.createElement("h3");
    h3.innerText = car.year;
    const p = document.createElement("p");
    p.innerText = car.price;
    div.append(btn, h1, h2, h3, p);
    car.DOM = div;
    mainDiv.appendChild(div);
    btn.addEventListener("click", function () {
      removeBtn(div);
      Cars.splice([i], 1);
      console.log(Cars);
    });
  }
}

function removeBtn(x) {
  x.remove();
}
