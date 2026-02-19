//Arrow functions and Template Literals

const greet = (name) => {
  //console.log(`hello ${name}`);
};

greet("Rejisha");

//Array methods

const numbers = [10, 20, 40, 60];

//Push and Pop

numbers.push(80);
numbers.push(100);

//console.log(numbers);

numbers.pop();
//console.log(numbers);

//Map, Filter and Reduce

const numberList = [10, 20, 35, 45, 50];

const doubleNumbers = numberList.map((number) => {
  return number * 2;
});

//console.log(doubleNumbers);

const evenNumberList = numberList.filter((number) => {
  return number % 2 === 0;
});

//console.log(evenNumberList);

const totalSum = numberList.reduce((accumulator, currentValue) => {
  //console.log(accumulator, currentValue);
  return accumulator + currentValue;
}, 0);

//console.log(totalSum);

//Slice and Splice

const fruits = ["apple", "banana", "orange", "mango"];

const slicedFruits = fruits.slice(1, 3);

//console.log(slicedFruits);

const splicedFruits = fruits.splice(1, 2, "grape", "kiwi");

//console.log(splicedFruits);
//console.log(fruits);


//Spread operator

const names = ['Rejisha', 'Rihana', 'Prashna'];

const newNames = [...names, 'Azina'];
// console.log(newNames);

const user = {
    name: 'Rejisha',
    age: 20,
    address: 'Kathmandu, Nepal'
};

const updateUser = {
    ...user,
    isStudent: true,
};

// console.log(updateUser);

//Destructuring

const [firstName, secondName] = newNames;

// console.log(firstName);
// console.log(secondName);


const {name, address} = updateUser;
console.log(name, address);