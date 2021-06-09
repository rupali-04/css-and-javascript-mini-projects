const animatenavbars = () => {
    const bars = document.querySelector('.bars');
    const lists = document.querySelector('.lists');
    const links = document.querySelectorAll('.lists li');
    bars.addEventListener('click', () => {
        lists.classList.toggle('nav_active');

        links.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            }
            else {
                link.style.animation = `blink 0.5s ease forwards ${index / 7 + 0.2}s `
            }
        })
        bars.classList.toggle('td');
    })
}

animatenavbars();