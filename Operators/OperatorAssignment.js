
// JavaScript Operators Assignment
//=============================\\
// Part A: Arithmetic Operators
//=============================\\


// ==========================================
// 1. Addition (+)
// ==========================================

// Question 1.1
let firstClassCollection = 15000;
let secondClassCollection = 12500;
let totalCollection = firstClassCollection + secondClassCollection;

console.log("Total collection:", totalCollection);


// Question 1.2
let morningPages = 18;
let eveningPages = 25;
let totalPages = morningPages + eveningPages;

console.log("Total pages read:", totalPages);


// Question 1.3
let mondayItems = 125;
let tuesdayItems = 178;
let totalItemsSold = mondayItems + tuesdayItems;

console.log("Total items sold:", totalItemsSold);


// ==========================================
// 2. Subtraction (-)
// ==========================================

// Question 2.1
let totalSeats = 80;
let occupiedSeats = 53;
let emptySeats = totalSeats - occupiedSeats;

console.log("Empty seats:", emptySeats);


// Question 2.2
let originalMarks = 500;
let lostMarks = 35;
let finalMarks = originalMarks - lostMarks;

console.log("Final marks:", finalMarks);


// Question 2.3
let totalBoxes = 2500;
let sentBoxes = 875;
let remainingBoxes = totalBoxes - sentBoxes;

console.log("Remaining boxes:", remainingBoxes);


// ==========================================
// 3. Multiplication (*)
// ==========================================

// Question 3.1
let notebookCost = 45;
let numberOfNotebooks = 8;
let totalNotebookCost = notebookCost * numberOfNotebooks;

console.log("Total cost of notebooks:", totalNotebookCost);


// Question 3.2
let bottlesPerHour = 120;
let numberOfHours = 6;
let totalBottles = bottlesPerHour * numberOfHours;

console.log("Total bottles produced:", totalBottles);


// Question 3.3
let numberOfRows = 7;
let plantsPerRow = 15;
let totalPlants = numberOfRows * plantsPerRow;

console.log("Total number of plants:", totalPlants);


// ==========================================
// 4. Division (/)
// ==========================================

// Question 4.1
let totalPencils = 144;
let numberOfStudents = 12;
let pencilsPerStudent = totalPencils / numberOfStudents;

console.log("Pencils per student:", pencilsPerStudent);


// Question 4.2
let totalDistance = 360;
let travelTime = 6;
let averageDistancePerHour = totalDistance / travelTime;

console.log("Average distance per hour:", averageDistancePerHour, "km");


// Question 4.3
let totalAmount = 72000;
let numberOfDepartments = 9;
let amountPerDepartment = totalAmount / numberOfDepartments;

console.log("Amount received by each department:", amountPerDepartment);


// ==========================================
// 5. Modulus (%)
// ==========================================

// Question 5.1
let totalStudents = 53;
let groupSize = 5;
let studentsLeft = totalStudents % groupSize;

console.log("Students left over:", studentsLeft);


// Question 5.2
let totalCandies = 128;
let candiesPerBox = 10;
let candiesLeft = totalCandies % candiesPerBox;

console.log("Candies left unpacked:", candiesLeft);


// Question 5.3
let number = 17;

// Check whether the number is even or odd
let remainder = number % 2;

console.log("Remainder:", remainder);

// Question 5.4
let numberOfToys=237;
let noOfBoxes=6;
let noOfToysWhoAreNotInBoxes=numberOfToys%noOfBoxes;
console.log(noOfToysWhoAreNotInBoxes);

// Question 5.5 
let capacityOfPassengerInBus=40;
let noOfWaitingPassengers=185;
let extraPassengerThanSeats=185%40;
console.log(extraPassengerThanSeats);


// ==========================================
// 6. Exponentiation (**)
// ==========================================

// Question 6.1
let sideOfcube = 6;
let cubeVolume = sideOfcube ** 3;

console.log("Volume of cube:", cubeVolume, "cm³");


// Question 6.2
let initialBacteria = 1;
let hours = 4;
let bacteriaAfterFourHours = initialBacteria * (2 ** hours);

console.log("Bacteria after 4 hours:", bacteriaAfterFourHours);


// Question 6.3
let cellsPerSide = 9;
let totalCells = cellsPerSide ** 2;

console.log("Total number of cells:", totalCells);

// Question 6.4
let firstNumber=5;
let secondNumber=4;
console.log(firstNumber**secondNumber);

// Question 6.5
let pixelOfOneImage=1024;
let numBer=2;
console.log(`The total number of pixels for using pixels**2 is${pixelOfOneImage**numBer}`);


