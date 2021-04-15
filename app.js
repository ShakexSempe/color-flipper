const colors = ["green", "red", "#dc143c", "rgba(133,122,200)", "#f15025"];

const btn = document.getElementById('btn');
const color = document.querySelector(".color");

btn.addEventListener('click', () => {
    //get random number between 0-4 (length of the array)
    const randomNumber = getRandomNumber();
    console.log(randomNumber)
    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];
});

//generate random number with a ()
function getRandomNumber() {
    //
    return Math.floor( Math.random() * colors.length );
}
