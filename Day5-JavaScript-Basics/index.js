// JavaScript variables

var fullName = "Rejisha Maharjan";
let address = "Kathmandu, Nepal";
const bloodGroup = "AB+";

console.log("Full Name: ", fullName);
console.log("Address: ", address);
console.log("Blood Group: ", bloodGroup);

//Data Types

let name = "Rejisha"; //String

let age = 20; //Number

let isStudent = true; //Boolean

let hobbies = ["Cooking", "Sketching", "Traveling"]; //Array

console.log(hobbies[0]);

let user = {
  name: "Rejisha",
  age: 20,
  isStudent: true,
  hobbies: ["Cooking", "Sketching", "Traveling"],
}; //Object

console.log(user["name"]);
console.log(user.name);

//Functions

function greet(name) {
  console.log("Welcome", name);
}
greet("Rejisha");

//DOM Manipulation

const headingElementById = document.getElementById("heading-2");
console.log("heading element by id", headingElementById);

const headingElementByQuery = document.querySelector("#heading-2");
console.log("heading element by query selector", headingElementByQuery);

headingElementByQuery.textContent = "Get element by query selector";
headingElementByQuery.style.color = "blue";
headingElementByQuery.style.fontSize = "24px";

const buttonElement = document.querySelector(".btn");

buttonElement.addEventListener("click", function () {
  alert("Button clicked");
  console.log("Button clicked");
});
