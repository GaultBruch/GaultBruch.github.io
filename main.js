const navigation = document.querySelector("nav");

function navBurger() {
    if (navigation.className === "toggled") {
        navigation.className = "";
    } else {
        navigation.className = "toggled";
    }
}

(function typer(){
    let cont = '';
    let index = 0;
    const elem = document.querySelector('.type')
    currentText = elem.getAttribute('texCon');
    cont = currentText.slice(0,++index);
    elem.textContent = cont;

    setTimeout(typer, 400);
    
}());