// ============================================================
// E] Switch Case Statement
// ============================================================
// 1. Number of days in A Month
let month=7;
switch(month){
    case 1:
        console.log(`Number of Days in January is 31 Days`);
        break;
    case 2:
        console.log(`Number of Days in February is 28 Days`);
        break;
    case 3:
        console.log(`Number of Days in March is 31 Days`);
        break;
    case 4:
        console.log(`Number of Days in April is 30 Days`);
        break;
    case 5:
        console.log(`Number of Days in May is 31 Days`);
        break;
    case 6:
        console.log(`Number of Days in June is 30 Days`);
        break;
    case 7:
        console.log(`Number of Days in July is 31 Days`);
        break;
    case 8:
        console.log(`Number of Days in August is 31 Days`);
        break;
    case 9:
        console.log(`Number of Days in September is 30 Days`);
        break;
    case 10:
        console.log(`Number of Days in October is 31 Days`);
        break;
    case 11:
        console.log(`Number of Days in November is 30 Days`);
        break;
    case 12:
        console.log(`Number of Days in December is 31 Days`);
        break;
    default:
        console.log("Invalid Input")
}
// 2. To Check A Character Is Either Vowel or Consonant
let character = "A"
switch(character){
    case "A":
        console.log("Vowel");
        break;
    case "E":
        console.log("Vowel");
        break;
    case "I":
        console.log("Vowel");
        break;
    case "O":
        console.log("Vowel");
        break;
    case "U":
        console.log("Vowel")
    default:
        console.log("Consonant")
}

// 3. Season printing from number 1 to 4
let num=2;
switch(true){
    case num==1 || num==2:
        console.log("Winter");
        break;
    case num==3 || num==4:
        console.log("Summer");
        break;
    default:
        console.log("Invalid Input");
}

// 4. Grade Based on Marks
let marks=85;
switch(true){
    case marks>=75 && marks<=100:
        console.log("Distinction");
        break;
    case marks>=60 && marks<75:
        console.log("1st Class");
        break;
    case marks>=50 && marks<60:
        console.log("2nd Class");
        break;
    case marks>=35 && marks<50:
        console.log("3rd class");
        break;
    case marks>=0 && marks<35:
        console.log("Failed")
    
}



