
// ====================================================================================================================================
// 1Section 1: What Is an Object?
// ====================================================================================================================================

//----------------------------Question => 1.1----------------------------

let book1_1 = {
    title : "Game Of Thrones",
    author : "R R Martin",
    pages : 500
}
console.log(book1_1)


//----------------------------Question => 1.2----------------------------

let object1_2 = {
    String : "This Is A String",
    Number : 10,
    Boolean : true
}


//----------------------------Question => 1.3----------------------------

let person1_3 = {
    String : "This Is A Another String",
    Number : 25,
    Boolean : true
}


//----------------------------Question => 1.4----------------------------

let object1_4 = {
    String : "Object 1_4",
    Number : 14,
    Boolean : false,
    Array : ["Hello", 10, true]
}


//----------------------------Question => 1.5----------------------------

let student1_5 = {
    name: "Adarsh",

    greeting: function() {
        return "Hello, my name is " + this.name;
    }
};

console.log(student1_5.greeting());



// ====================================================================================================================================
// Section 2: Why Do We Need Objects?
// ====================================================================================================================================

//----------------------------Question => 2.1----------------------------

let person2_1 = {
    name: "Rahul",
    age: 20,
    city: "Delhi"
};

console.log(person2_1);


//----------------------------Question => 2.2----------------------------

let product2_2 = {
    name: "Laptop",
    price: 50000,
    availability: true
};

console.log(product2_2);


//----------------------------Question => 2.3----------------------------

// Objects group related data together in one place.
// They make code more organized, readable, and easier to manage.


//----------------------------Question => 2.4----------------------------

let student2_4 = {
    name: "Adarsh",
    age: 19,
    course: "B.Tech"
};

let book2_4 = {
    title: "Game Of Thrones",
    author: "R R Martin",
    pages: 500
};

console.log(student2_4);
console.log(book2_4);


//----------------------------Question => 2.5----------------------------

let car2_5 = {
    brand: "Toyota",
    model: "Fortuner",
    color: "Black",
    price: 4000000,
    year: 2025
};

console.log(car2_5);



// ====================================================================================================================================
// Section 3: Creating Objects
// ====================================================================================================================================

//----------------------------Question => 3.1----------------------------

let student3_1 = {
    name: "Adarsh",
    age: 19,
    city: "Muzaffarpur"
};

console.log(student3_1);


//----------------------------Question => 3.2----------------------------

let object3_2 = new Object();

object3_2.name = "Rahul";
object3_2.age = 20;
object3_2.city = "Delhi";

console.log(object3_2);


//----------------------------Question => 3.3----------------------------

function Car3_3(brand, model) {
    this.brand = brand;
    this.model = model;
}

let car3_3_1 = new Car3_3("Toyota", "Fortuner");
let car3_3_2 = new Car3_3("BMW", "M5");

console.log(car3_3_1);
console.log(car3_3_2);


//----------------------------Question => 3.4----------------------------

// Using Object Literal

let employee3_4_1 = {
    name: "Aman",
    salary: 30000,
    department: "IT"
};

console.log(employee3_4_1);


// Using Constructor Function

function Employee3_4(name, salary, department) {
    this.name = name;
    this.salary = salary;
    this.department = department;
}

let employee3_4_2 = new Employee3_4("Aman", 30000, "IT");

console.log(employee3_4_2);


//----------------------------Question => 3.5----------------------------

function Student3_5(name, age, city) {
    this.name = name;
    this.age = age;
    this.city = city;
}

let students3_5 = [
    new Student3_5("Adarsh", 19, "Bihar"),
    new Student3_5("Rahul", 20, "Delhi"),
    new Student3_5("Aman", 21, "Mumbai")
];

console.log(students3_5);



// ====================================================================================================================================
// Section 4: Accessing Object Properties
// ====================================================================================================================================

//----------------------------Question => 4.1----------------------------

let student4_1 = {
    name: "Adarsh",
    age: 19
};

console.log(student4_1.name);
console.log(student4_1.age);


//----------------------------Question => 4.2----------------------------

let student4_2 = {
    name: "Rahul",
    "student city": "Delhi"
};

console.log(student4_2["student city"]);


//----------------------------Question => 4.3----------------------------

let student4_3 = {
    name: "Adarsh",
    age: 19,
    city: "Bihar"
};

let property4_3 = "city";

console.log(student4_3[property4_3]);


//----------------------------Question => 4.4----------------------------

let person4_4 = {
    name: "Rahul",
    age: 20,
    city: "Delhi",
    course: "B.Tech",
    college: "Coding Gita"
};

// Using Dot Notation

console.log(person4_4.name);
console.log(person4_4.age);
console.log(person4_4.city);
console.log(person4_4.course);
console.log(person4_4.college);

// Using Bracket Notation

console.log(person4_4["name"]);
console.log(person4_4["age"]);
console.log(person4_4["city"]);
console.log(person4_4["course"]);
console.log(person4_4["college"]);


//----------------------------Question => 4.5----------------------------

let student4_5 = {
    name: "Adarsh",
    age: 19,
    city: "Bihar"
};

let key4_5 = "name";

// Correct Way

console.log(student4_5[key4_5]);

// Incorrect Way

console.log(student4_5.key);

// student4_5.key searches for a property literally named "key".



// ====================================================================================================================================
// Section 5: Adding New Properties
// ====================================================================================================================================

//----------------------------Question => 5.1----------------------------

let person5_1 = {
    name: "Rahul",
    age: 20
};

person5_1.city = "Delhi";

console.log(person5_1);


//----------------------------Question => 5.2----------------------------

let student5_2 = {
    name: "Adarsh",
    age: 19
};

student5_2["student city"] = "Bihar";

console.log(student5_2);


//----------------------------Question => 5.3----------------------------

let object5_3 = {};

object5_3.name = "Rahul";
object5_3.age = 20;
object5_3.city = "Delhi";
object5_3.course = "B.Tech";

console.log(object5_3);


//----------------------------Question => 5.4----------------------------

let student5_4 = {
    name: "Adarsh",
    age: 19
};

student5_4.city = "Bihar";
student5_4["student college"] = "Swaminarayan University";

console.log(student5_4);


//----------------------------Question => 5.5----------------------------

let employee5_5 = {
    name: "Aman",
    age: 22
};

// Using Dot Notation

employee5_5.salary = 30000;
employee5_5.department = "IT";

// Using Bracket Notation

employee5_5["employee city"] = "Delhi";
employee5_5["joining year"] = 2025;

console.log(employee5_5);



// ====================================================================================================================================
// Section 6: Updating Property Values
// ====================================================================================================================================

//----------------------------Question => 6.1----------------------------

let student6_1 = {
    name: "Adarsh",
    age: 19
};

student6_1.age = 20;

console.log(student6_1);


//----------------------------Question => 6.2----------------------------

let student6_2 = {
    name: "Rahul",
    age: 20,
    city: "Delhi"
};

// Using Dot Notation

student6_2.age = 21;

// Using Bracket Notation

student6_2["city"] = "Mumbai";

console.log(student6_2);


//----------------------------Question => 6.3----------------------------

let employee6_3 = {
    name: "Aman",
    salary: 30000,
    department: "IT"
};

console.log(employee6_3);

// Updating Two Properties

employee6_3.salary = 40000;
employee6_3.department = "Development";

console.log(employee6_3);


//----------------------------Question => 6.4----------------------------

let person6_4 = {
    age: 20
};

console.log(person6_4);

person6_4.age = "Twenty";

console.log(person6_4);


//----------------------------Question => 6.5----------------------------

let student6_5 = {
    name: "Adarsh",
    age: 19,
    city: "Bihar"
};

let newName6_5 = "Rahul";
let newAge6_5 = 20;
let newCity6_5 = "Delhi";

// Updating Properties

student6_5.name = newName6_5;
student6_5.age = newAge6_5;
student6_5.city = newCity6_5;

console.log(student6_5);


// ====================================================================================================================================
// Section 7: Deleting Properties
// ====================================================================================================================================


//----------------------------Question => 7.1----------------------------
let student7_1 ={
    name : "Adarsh",
    course : "B.Tech",
    Branch : "CSE",
    Specialization : "AI"
}
delete student7_1.Specialization
console.log(student7_1)

//----------------------------Question => 7.2----------------------------
let object7_2 = {
    property7_2_1 : "Javascript"
};
delete object7_2.property7_2_2
console.log(object7_2)  
// Nothing Happens 

//----------------------------Question => 7.3----------------------------
let object7_3 = {
    property7_3_1 : "Ability to Maintain Silence in a Noisy Class",
    property7_3_2 : "Ability to Watch Anime in Exam Time",
    property7_3_3 : "Ability to Resist Anger even when someone is making fun of You",
    property7_3_4 : "Ability to Seat at any place for Long time"
};
delete object7_3.property7_3_1
delete object7_3.property7_3_2
console.log(object7_3)

//----------------------------Question => 7.4----------------------------
let object7_4 = {
    property7_4_1 : "Hello",
    property7_4_2 : "Javascript"

}
delete object7_4.property7_4_2
console.log(object7_4)

//----------------------------Question => 7.5----------------------------
let object7_5 = {
    property7_5_1 : "Hello",
    property7_5_2 : "Javascript"

}
delete object7_5.property7_5_2
object7_5.property7_5_2 = "Python"
console.log(object7_5)


// ====================================================================================================================================
// Section 8: Objects Can Store Anything
// ====================================================================================================================================


//----------------------------Question => 8.1----------------------------
let object8_1 = {
    array8_1 : ["Hello", "Everyone", 1],
    property8_2 : "Adarsh Anand"
}

//----------------------------Question => 8.2----------------------------
let object8_2 = {
    object8_2_1 : {name : "Adarsh Anand", status : "Student Of B.Tech", age : 18},
    property8_2_2 : "Any Random Property"
}

//----------------------------Question => 8.3----------------------------
const product8_3 = {
    colors : ["Red", "Green", "Blue", "Black", "Voilet", "white"],
    manufacturer8_3_2 : {name : "Adarsh", age : 18}
}

//----------------------------Question => 8.4----------------------------
let object8_4 = {
    name : "Shadow",
    dialogue : "I am Atomic",
    getInfo(){
        return "The Character Name is " + object8_4.name +"And his Famous Dialogue is " + object8_4.dialogue + "."
    }
}
console.log(object8_4.getInfo())

//----------------------------Question => 8.5----------------------------
let object8_5 = {
    string : "Hello World",
    number : 13,
    array : ["I", "Am", "Atomic"],
    object8_5_4 : {name : "Eren Yeager", verse : "Attack On Titan", famousSong : "The Rumbling"},
    method8_5_5(){
        return "My Name is Natsuki Subaru"
    }
}
console.log(object8_5.method8_5_5())
console.log(Object.values(object8_5))


// ====================================================================================================================================
// Section 9: Methods & the this Keyword
// ====================================================================================================================================


//----------------------------Question => 9.1----------------------------
let object9_1 = {
    property9_1_1 : "Hello World",
    method9_1_2(){
        return "God is The Greatest Lie of Human Civilisation"
    }
}
console.log(object9_1.method9_1_2())

//----------------------------Question => 9.2----------------------------
let object9_2 = {
    property9_2_1 : "Hello World",
    method9_2_2(){
        return this.property9_2_1 + " I want You To Say that:-"+"God is The Greatest Lie of Human Civilisation"
    }
}
console.log(object9_2.method9_2_2())

//----------------------------Question => 9.3----------------------------
let object9_3 ={
    name : "Nikhil Sir",
    status : "JavaScript Tutor",
    getDetails(){
        return this.name + " is our " + this.status + "."
    }
}
console.log(object9_3.getDetails())

//----------------------------Question => 9.4----------------------------
let object9_4 ={
    name : "Adarsh Anand",
    marks : 98,
    status : "Learning JavaScript",
    getDetails(){
        if( this.marks > 40){
            return "Passed"
        }
    }
}
console.log(object9_4.getDetails())

//----------------------------Question => 9.5----------------------------
let object9_5 ={
    firstName : "Adarsh ",
    lastName : "Anand",
    age : 18,
    status : "Learning JavaScript",
    checkAge(){
        if( this.age > 18){
            return "Adult"
        }else{
            return "Teenage"
        }
    }
}
console.log(object9_5.getDetails())






