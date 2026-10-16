//Matrix Element Printing
let mat=[
    [10,20,30],
    [40,50,60],
    [70,80,90],
]
console.log(mat[1][2]) //first indexing for row and second indexing for column
console.log(mat[2][1])

for(let i=0;i<=mat.length-1;i++){
    console.log(mat[i])
}

//Array Stored Numbers Printing
bag=""
let array=[12,334,65,44,353,456,48,564,5,454,844,48,44,4,4,46,4,54,8,44,44,4,48,4,48,44,84,4,54,87,57,779];
for(let j=1;j<=array.length-1;j++){
    if(j<=array.length-2){
        bag=array+","
    }else{
        bag=array+" "
    }
}
console.log(bag)


for (let i = 0; i <= 3; i++) {
  let rw ="";
  for (let j = 1; j <= 4; j++) {
    rw = rw +(i+j) +" ";
  }
  console.log(rw);
}

let num=1;
for(let i=0;i<=3;i++){
    row=""
    for(let j=0;j<=i;j++){
        row+=num+" "
        num++
    }console.log(row)
}

for(let i=1; i<=5;i++){
    let row=""
    for(let j=0;j<i;j++){
        row+=String.fromCharCode(65+j)+" "
    }
    console.log(row);
}


for (let i=1;i<=5;i++){
    let Row="";
    for (let j=1;j<=i;j++){
        if(i==4 && j==2 || i==3 && j==2 || i==4 && j==3){
            Row=Row+"  "
        }else{
            Row=Row+"* "
        }
    }console.log(Row)
}

for (let i=1;i<=5;i++){
    let row="";
    for(let j=5;j>=i;j--){
        row=row+"*"
    }console.log(row)
}

for (let i=5;i>=1;i--){
    let row=""
    for (let j=1;j<=i;j++){
        row=row+i+" "
    }console.log(row)
}

for (let i=5;i>=1;i--){
    let row=""
    for (let j=1;j<=i;j++){
        row=row+j+" "
    }console.log(row)
}

sum=15
for (let i=1;i<=5;i++){
    let row=""
    for (let j=5;j>=i;j--){
        row=sum+i+" "
        sum--
    }console.log(row)
}