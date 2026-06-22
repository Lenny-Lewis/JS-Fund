function test() { // function scope showing how variables can be scoped to a function
    let message = 'Arsenal won the league';
    console.log(message);
}

test();

{ // block scope showing how variables can be scoped to a block
    let scopedVariable = true;
    console.log(scopedVariable);
}

const scopedVariable = false; // this variable is scoped to the block above and cannot be accessed outside of it
console.log(scopedVariable); // this will throw an error because scopedVariable is not defined in this scope

