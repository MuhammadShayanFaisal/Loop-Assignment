var myArray = [];
var count = 0;
for (var i = 0; i < 10; i++) {
    count = count + i;
    myArray[i] = count;
}
console.log(myArray);
console.log("Values of the array with its index using forloop is as follows");
for (var i = 0; i < 10; i++) {
    console.log(i + 1, "Value has a element of", myArray[i]);
}
console.log("Values of the array with its index using for..of is as follows");
for (var _i = 0, myArray_1 = myArray; _i < myArray_1.length; _i++) {
    var x = myArray_1[_i];
    console.log("The value of the element is:", x);
}
