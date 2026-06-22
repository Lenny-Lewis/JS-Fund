var functionVar = "I am a global variable";

let blockVar = "I am a block variable";

{
    console.log(blockVar); // Output: I am a block variable
}

function Global(){
    console.log(functionVar); // Output: I am a global variable
}

Global();