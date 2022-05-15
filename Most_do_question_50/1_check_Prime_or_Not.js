// Check Prime Or Not
// question link :-https://github.com/ankushchimnani/DSA-Must-Do-Questions/blob/main/02_Check%20for%20prime/Problem%20Statement/Check%20for%20prime.md

let input = 6;

let IsPrime = true;
for (let i = 2; i < input; i++) { 
    if (input % i === 0) {
        IsPrime = false;
        break
    }
}

if (IsPrime === true) {
    console.log(input +" is prime number")
} else {
    console.log(input + " is not a prime number");
}