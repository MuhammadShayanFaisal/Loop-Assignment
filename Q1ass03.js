var myWork = [];
for (var i = 1; i <= 10; i++) {
    var obj = {
        name: "Lesson ".concat(i),
        status: (i % 2 === 0) ? false : true
    };
    myWork.push(obj);
}
console.log("My work array to the console is listed in the following way");
console.log(myWork);
