let maxvalue=10;
let randomnum= Math.floor(Math.random() * 10)+1;
console.log("The random number generated is: ",randomnum);
let guess=false;
let guesses=[2,5,8,9,10,7,1,4,3,6];
let  i=0;
console.log("Guesses has been started");
while(i<=10){
    if (guesses[i]===randomnum){
        guess=true;
        console.log("Your",i+1,"guess is",guess);
        console.log("Random number matches your guess");
        break;
    }
    else if(guesses[i]>randomnum){
    console.log("Your",i+1,"guess is",guess,"Try again")
    console.log("Your guess is too high");
    }
    else{
    console.log("Your",i+1,"guess is",guess,"Try again")
    console.log("Your guess is too low");
    }
    i++;
}