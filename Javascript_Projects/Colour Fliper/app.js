let c = ['red', 'orange', 'green', 'purple']

// We need the stuff that needs to be maniculated
const header = document.querySelector('.header');

const colour = document.querySelector('.color');

const btn = document.querySelector('.btn')


// we need to add events
btn.addEventListener("click", colourchanger)

// we need to perform some actions on event call


function colourchanger() {

    const i = Math.round(Math.random() * c.length);

    header.style.backgroundColor = `${c[i]}`;
    colour.textContent = `${c[i]}`;
}