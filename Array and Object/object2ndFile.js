let person = {
    name : "Adarsh Anand",
    age : 22,
    address : {
        city : "Muzaffarpur",
        village: "Gorigawa"
    },
    greet: function(){
        return "Myself Natsuki Subaru"
    }
}
console.log(person.name)
console.log(person.age)
console.log(person.address.city)
console.log(person.greet()) 

let product = {
    name:"Hello World",
    colors:["Red", "Green", "Blue", "Modi color"],
    manufacturer: {
        data : "Data1",
        data2: "Data2"
    },
    getDetails: function(){
        return `The ${this.name} is basic word to print in programming language for the basics understanding and its colour varieties are${this.colors}`
    }
}
console.log(product.getDetails())

// Methods:- Function inside an object
// this:-refers to the currrent object that owns the method.

let course = {
    title : "JS",
    duration: "1 hour",
    getDetails: function(){
        return this.title
    }
}
console.log(course.getDetails)


// Create a person object with properties firstName and lastName. Add a method called getFullName that returns the full name using this. Call the method and print the result.
// // Add another method named isAdult that checks whether this.age is 18 or above and returns true or false. Test the method with different age values.

let Person = {
    firstName: "Adarsh",
    age: 18,
    lastName: "Anand",
    getFullName:function(){
        return `The Full name is ${this.firstName} ${this.lastName}`
    },
    isAdult:function(){
        if(this.age >= 18){
            console.log(`${this.firstName} ${this.lastName} is an Adult`)
        }

    }
}
console.log(Person.getFullName)
console.log(Person.isAdult)

let student = {
    name : "Ravindra",
    age: 18,
    collegeName: "SRM Institute"
}
for (let key in student){
    console.log(key + ":" + student[key])
}

// Create a student object with at least four properties. Use a for...in loop to print only the values (not the keys) of all properties.
// Write a for...in loop that counts how many properties the object has and prints the total count at the end.
let Student = {
    name : "Akhil",
    age : 22,
    course: "B.tech",
    college:"IIT Kharagpur"
};
let count = 0

for (let key in Student){
    console.log(Student[key])
    count += 1
}
console.log(count)


// Nested Object
let object1 = {
    a : "a",
    b : "b",
    c : "c",
    d : {
        Element1 : "e",
        Element2 : "f",
        Element3 : ["g", "h", "i", "j"]
    }
}

for (let key in object1.d){
        console.log(key+" : "+object1.d[key])
}
console.log(object1.c)

// Create a company object that contains a nested address object (with city and pincode) and an array named employees containing three employee names. Print the city and the first employee name.

let company = {
    companyName : "Nvidia",
    address : {
        city : "New York",
        pinCiode : 987650,
    },
    employees : ["Jenseng Huang", "Albert", "Johnathan"]
}
console.log(company.address.city)
console.log(company.employees[0])

const games = [
    {name : "GTA 6", genre : "Action", Rating: "9.2" },
    {name : "The Last Of Us", genre : "Action", Rating: "9.2" },
    {name : "COD Modern Warfare 4", genre : "Action", Rating: "9.2" }
]
for (let i = 0 ; i < games.length; i++){
    console.log("Name Of The Games are ",games[i].name)
}

// Create an array named products containing four product objects. Each object should have name and price. Use a loop to print the name and price of every product.

let product1 = [
    {name : "Samsung Galaxy S26 Ultra", price : 149999},
    {name : "Samsung Galaxy S25 Ultra", price : 129999},
    {name : "Iphone 18 Pro Max", price : 149999},
    {name : "ROG 9 Pro", price : 342999},    
]

for(let i = 0 ; i < product1.length ; i++){
    console.log("The Names Of Products are :- " , product1[i].name)
    console.log("The Prices Of Products are :- " , product1[i].price)
    console.table(product1)
    console.info(product1)
}

// Access of Array And Object
const object = {
    name : "Adarsh"
}
console.log(object.name) 
console.log(object["name"])


// Object:- to store an entity like (Information about any person, book, employee)
// Array:- To store the collection of Values and to store entities .

// Decide and write whether you should use an object or an array for each of these cases: (a) details of one employee, (b) a shopping cart containing multiple items, (c) a list of city names. Justify your choice in one short sentence for each.
// Output:-(A)Object
// Output:-(B)Array
// Output:-(C)Array

// Create one object that represents a single book and also create an array that contains three different book objects. Print both.
let singleBook = {
    name : "Atomic Habits",
    price : 500,
    publishyear : 2020,
}
let books = [
    {name: "Harry Potter",price: "Rs 400"},
    {name: "Attack On Titan",price: "Rs 200"},
    {name: "One Piece",price: "Rs 160"}
]

console.log(singleBook.name)
console.log(books)


const student1 = {
    name : "Abdul",
    college : "AIIMS Patna"
}
console.log("college" in student1)
console.log("AIIMS Patna" in student1)
let values = Object.keys(student1);
let value = Object.values(student1);
console.log(values ,"=>", value)
console.log(student1.hasOwnProperty("name"))

