function counter(){

    let count = 0;


    function increase(){

        count++;

        console.log(count);

    }


    return increase;

}


const myCounter = counter();


myCounter();
myCounter();
myCounter();