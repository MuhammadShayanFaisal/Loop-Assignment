let myObject={
    item1:"Car",
    item2:"Bike",
    item3:"Truck"
}
console.log("Providing names of the property and thier corresponding values");
console.log("-------------------------------------------------------------");
for (let x in myObject){
    console.log("The name of property is:",x);
    console.log("The corresponding value of the property is:",myObject[x]);
}