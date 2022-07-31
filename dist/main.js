const navigation = document.querySelector("nav");
const menuNav = document.querySelector("nav ul")
const timer = ms => new Promise(res => setTimeout(res, ms));

const menuBtn = document.querySelector('.menu-btn');
const burger = document.querySelector('.menu-btn__burger');

let showMenu = false;

menuBtn.addEventListener('click', toggleMenu);

function toggleMenu() {
    if(!showMenu) {
        burger.classList.add('toggled');
        navigation.classList.add('toggled');
        menuNav.classList.add('toggled');
        showMenu = true;   
    } else {
        burger.classList.remove('toggled');
        navigation.classList.remove('toggled');
        menuNav.classList.remove('toggled');
        showMenu = false;
    }
}

( async function typer() {
    await timer(1000);

    let cont = ''
    let index = 0;
    const typers = document.querySelectorAll('.type');
    for (let j = 0; j < typers.length; j++) {
        elem = typers[j]
        currentText = elem.getAttribute('texCon');
        elem.classList.add('typing');
        for (let i = 0; i < currentText.length; i++) {
            cont = currentText.slice(0,++index);
            elem.textContent = cont + "|";
            await timer(Math.random() * 150);
        }
        elem.textContent = cont
        index = 0;
        elem.classList.remove('typing');
        if (j == typers.length-1) {
            elem.classList.add('typedone');
            console.log(j);
        }
    }
}());