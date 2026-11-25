
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
// 2Section 2: Why Do We Need Objects?
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
// 3Section 3: Creating Objects
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
// 4Section 4: Accessing Object Properties
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
// 5Section 5: Adding New Properties
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
// 6Section 6: Updating Property Values
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
