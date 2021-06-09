let content = ["Java", "Python", "Javascript"];
let typer = document.querySelector('.typing')
let word = 0;
let letter = 0;

let wordWritten = "";
let letterWritten = "";

function typingcontent() {
    if (word === content.length) {
        word = 0;
        letter = 0;
    }
    wordWritten = content[word];
    letterWritten = wordWritten.slice(0, ++letter);
    typer.textContent = letterWritten;

    if (letter === wordWritten.length) {
        letter = 0;
        word++;
    }
    setTimeout(typingcontent, 400)
}



typingcontent();