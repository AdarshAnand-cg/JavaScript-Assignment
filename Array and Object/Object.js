const student = {
    name: "Arjun",
    age: 18,
    course: "CSE"
};

const info = {
    name: "Adarsh Anand",
    age: 18,
    course: "CSE",
    fathersName: "Ajeet Kumar singh"
}

console.log(student)

let car = {
    car: "Rolls Royce",
    model:"Phantom 8",
    price:"9.5Cr",
    year:2017
}

// You are given three separate variables: productName = "Laptop", price = 45000, and inStock = true. Convert these three variables into a single object named product and print the object.

let product = {
    productName : "Laptop",
    price : 45000,
    inStock : true
}
console.log(product)

// Create an object named employee that stores name, id, and department. Print the complete object and also print only the department using dot notation.
let employee = {
    name : "Jenseng Huang",
    id: "NV267540",
    department: "Tech Industry"
}
console.log(employee)
console.log(employee.department)  //Dot Notation

// 
let proDuct = {
    productType : "SmartPhone",
    phoneName: "Samsung Galaxy S26 Ultra",
    price : "₹1,49,999",
    launchYear:2026
}
console.log(proDuct),console.log(proDuct.productType)

// Using New Object()=>
let students = new Object();
students.name = "Sam Altman"
student.age = 24
student.status = "CEO of OpenAI"
student.currentNews = "Being Famous/Criticised for giving an statement on RAM i.e:- RAM in Personal Computer Of normal Users which is Empty is useless and can't be used for any progress"

// Constructor Function
function Student(name, age, marks) {
    this.name = name;
    this.age = age;
    this.marks = marks;
}

const student1 = new Student("AdarshAnand", 18, 95);
const student2 = new Student("JohnSmith", 19, 87);

console.log(student1);
console.log(student2);

function Hello(a,b,c){
    this.a = a
    this.b = b
    this.c = c
}
const Hello1 = new Hello("Hi","Everyone","My Name is Shadow.The One who lurks in Shadow and hunts in the Shadow")
const Hello2 = new Hello("Feel The Pain", "Accept The Pain and Know The Pain","Those who do not know pain shall never understand True peace. And Now this World shall Know PAIN. Almighty Pushhhhh!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!💥💥💥💥💥💥💥💥💥💥💥💥💥💥💥💥💥💥💥💥💥💥💥💥💥💥💥💥💥💥💥💥💥💥💥💥💥💥💥💥💥💥💥💥💥💥💥💥💥💥💥💥💥💥💥💥💥💥💥💥💥💥💥💥💥💥💥💥💥💥💥💥💥💥💥💥💥💥💥💥💥💥💥💥💥💥💥💥💥💥💥💥💥💥💥💥💥💥💥💥💥💥💥💥💥💥💥💥💥💥💥💥💥💥💥💥💥💥💥💥💥💥💥💥💥💥💥💥💥💥💥💥💥💥💥💥💥💥v")

console.log(Hello1)
console.log(Hello2)

// Create a constructor function named Book that accepts two parameters: title and author. Using this constructor, create two book objects and print both objects.

function Book(title, author){
    this.title = title
    this.author= author
}

const Book1 = new Book("Harry Potter Series","J k Rowling")
const Book2 = new Book("Game Of Thrones","R R Martin")
const Book3 = new Book("Jujutsu Kaisen", "Gege Akutami")

// Create a student object using Method 2 (new Object()). Add the properties name, age, and course to it and print the final object.
stuDent = new Object()
stuDent.Nameame = "Adarsh Anand"
stuDent.Age = 18
stuDent.Course = "CSE"
console.log(stuDent)

let person = {
    name:"Ravi Kishan",
    age:"Don't Know",
    email:"moneyfollowsmybrother.modibhakt@gmail.com"
}
console.log(person)
console.log(person.email)

let Name = {
    username : "Natsuki_Subaru_S4" ,
    "names":"Rem,Ram" ,
    "name2":"Arch_bishops:-lust,pride,gluttony,",
    age : 18,
    "email-Address:-":"natsukisubaru.RBD@gmail.com"
}
// Dot Notation:-Only Key-pair whose key isn't written quotes 
console.log(Name.age)
console.log(Name.username)

// Bracket Notation: the pair whose key is written in quotes
console.log(Name["age"])
console.log(Name["email-Address:-"])

const stu= {
    name:"William", 
    age:"43", 
    "favouriteSubject":"Maths"
}

let h = "favouriteSubject"
console.log(stu[h]) //Here Quotes isn't Used

let Product = {
    price: 23456, 
    "Product Name":"PS5",
    Availability:100
}

let inShort = "price"
let nameOfProduct = "Product Name"
console.log(Product["inShort"])
console.log(Product[nameOfProduct])


// Adding of Properties in an Empty Object
let Person = {};
Person.Name = "Adarsh Anand"
Person.Age = 18
Person.City = "Muzaffarpur"
console.log(Person)

let PERSON = {}
PERSON["Full Name:-"] = "ADARSH ANAND SINGH",
PERSON["Age:-"] = 18
console.log(PERSON)

// Updating The Property Value
let Info = {
    name : "Muzan",
    "full name": "Kibutsuji Muzan",
    status : "The First Ever Demon In the Demon Slayer Universe"
} 
Info.name = "Akaza as a Demon"
Info["full name"] = "Hakuji as a Human"
Info.status = "Initially ,he is a theif and and a martial artist expert.currently Dead inInfinity Castle Movie"
console.log(Info)
