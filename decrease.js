function counter () {
    let count = 0;

    function decrease () {
        count--;
        console.log(count);
    }

    return decrease;
}

const myCounter = counter();

myCounter();
myCounter();
myCounter();
