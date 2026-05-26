// Spread Operator

let frontEnd = ["HTML", "CSS"];
let backEnd = ["Node", "MongoDB"];

let fullStack = [...frontEnd, ...backEnd];

console.log(fullStack);

// Copy Array

let original = [1, 2, 3];

let copied = [...original];

copied.push(4);

console.log("Original:", original);
console.log("Copied:", copied);

// Object Merge

let student1 = {
    name: "Rahul"
};

let student2 = {
    role: "Developer"
};

let student = {
    ...student1,
    ...student2
};

console.log(student);

// Rest Operator

function total(a, b, ...rest) {

    console.log("A:", a);
    console.log("B:", b);
    console.log("Remaining Values:", rest);
    console.log("Total Remaining Count:", rest.length);

}

total(1, 2, 3, 4, 5, 6, 7, 8);

// Array Destructuring

let colors = ["red", "green", "blue", "yellow"];

let [c1, c2, c3, c4] = colors;

console.log(c3);

// Nested Array Destructuring

let data = [1, [2, [3, [4]]]];

let [a, [b, [c, [d]]]] = data;

console.log(a, b, c, d);

// Object Destructuring

let mobile = {
    brand: "Samsung",
    price: 20000,
    color: "black"
};

let { brand, price, color } = mobile;

console.log(brand, color);

// push() & pop()

let numbers = [1, 2, 3];

numbers.push(4, 5, 6);

numbers.pop();

console.log(numbers);

// shift() & unshift()

let fruits = ["banana", "orange"];

fruits.unshift("apple");

fruits.shift();

console.log(fruits);

// splice()

let arr = [1, 2, 30, 40, 5, 6];

arr.splice(2, 2, 3, 4);

console.log(arr);

// concat()

let a = [1, 2];
let b = [3, 4];

let result = a.concat(b, [5, 6]);

console.log(result);

// slice()

let marks = [10, 20, 30, 40, 50, 60];

let extracted = marks.slice(2, 5);

console.log(extracted);

// flat()

let nest = [1, [2, [3, [4, [5]]]]];

let flatArray = nest.flat(Infinity);

console.log(flatArray);

// fill()

let arr = [1, 2, 3, 4, 5];

arr.fill("done", 3);

console.log(arr);

// includes()

let values = [10, 20, 30, 40];

console.log(values.includes(20));

console.log(values.includes(100));

// indexOf()

let arr = [1, 2, 3, 4, 3, 2];

console.log(arr.indexOf(3));

console.log(arr.indexOf(2));

// lastIndexOf()

let arr = [1, 2, 3, 4, 3, 2];

console.log(arr.lastIndexOf(3));

console.log(arr.lastIndexOf(2));

// sort()

let nums = [100, 2, 55, 1, 9];

console.log(nums.sort());

console.log(nums.sort((a, b) => a - b));

// reverse()

let letters = ["a", "b", "c", "d"];

letters.reverse();

console.log(letters);

// Student Management

let students = ["Rahul", "Ajay", "Kumar"];

students.push("Naveen");

students.splice(1, 1);

students.splice(1, 1, "Arun");

students.reverse();

console.log(students);

// Shopping Cart

let cart = ["Shoes", "Watch", "Phone"];

cart.push("Laptop");

cart.splice(cart.indexOf("Watch"), 1);

console.log(cart.includes("Phone"));

console.log("Total Items:", cart.length);

console.log(cart);

// Employee Database

let employee = {
    name: "Naveen",
    role: "Web Developer",
    salary: "5LPA"
};

let { name, role, salary } = employee;

console.log(name, role, salary);

let copiedEmployee = {
    ...employee
};

copiedEmployee.salary = "8LPA";

console.log("Original:", employee);

console.log("Copied:", copiedEmployee);

// Custom Function

function company(name, ...skills) {

    console.log("Employee Name:", name);

    console.log("Skills:", skills);

    console.log("Total Skills:", skills.length);

}

company("Naveen", "HTML", "CSS", "JS", "React");

// Array Analyzer

let data = [1,2,3,4,5,6,7,8,9,10];

let firstFive = data.slice(0, 5);

console.log(firstFive);

data.reverse();

console.log(data);

console.log(data.includes(7));

console.log(data.indexOf(10));

// Complete Challenge

let users = [
    {name:"Rahul", role:"Developer"},
    {name:"Ajay", role:"Designer"},
    {name:"Kumar", role:"Tester"}
];

users.push({name:"Naveen", role:"Manager"});

users.pop();

let newUsers = [
    {name:"Arun", role:"Backend"},
    {name:"Vijay", role:"Frontend"}
];

users = [...users, ...newUsers];

for(let user of users) {
    console.log(user.name);
}

users.reverse();

console.log(users);

