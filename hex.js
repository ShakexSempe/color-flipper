const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

// 

const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener('click', () => {
    //run loop that generates 6 new vales from array including the # held in a variable
    let hexColor = '#';
    for(let i =0; i < 6; i++) {
        //+= to iterate.. '+' = override hex
        hexColor += hex[getRandomNumber()];
    }

    color.textContent = hexColor;
    document.body.style.backgroundColor = hexColor;
});


//generate random number by * random() with length of hex array
getRandomNumber = () => {
    return Math.floor(Math.random() * hex.length);
}