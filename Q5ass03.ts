let myArray=[];
let count=0;
for(let i=0;i<10;i++){
    count=count+i;
    myArray[i]=count;
}
console.log(myArray);
console.log("Values of the array with its index using forloop is as follows");
for(let i=0;i<10;i++){
    console.log(i+1,"Value has a element of",myArray[i]);
}
console.log("Values of the array with its index using for..of is as follows");
for(let x of myArray){
    console.log("The value of the element is:",x);
}