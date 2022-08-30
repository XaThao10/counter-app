//selecting value
const value = document.getElementById("value");

const btnIncrement = document.getElementById("increment");
const btnDecrement = document.getElementById("decrement");
const btnReset = document.getElementById("reset");

let count = 0;

//onclick, increment function
btnIncrement.addEventListener("click", () => {
    count++;
    value.textContent = count;
});

// onclick, decrement function
btnDecrement.addEventListener("click", () => { 
    if(count !== 0)
    {
        count-- ;
        value.textContent = count;
    }
});

// onclick, reset function
btnReset.addEventListener("click", () => {
    count = 0;
    value.textContent = count;
});