const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F']


const header = document.querySelector('.header');

const colour = document.querySelector('.color');

const btn = document.querySelector('.btn')


btn.addEventListener("click", colourchanger)


function colourchanger() {

    var SetColor = "#"
    for (let i = 0; i < 6; i++) {
        randomnumber = randomValue();
        SetColor += randomnumber;
    }
    header.style.backgroundColor = `${SetColor}`;
    colour.textContent = `${SetColor}`;

}

function randomValue() {
    return Math.round(Math.random() * hex.length / 2);
}