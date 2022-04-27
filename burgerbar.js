function navBurger() {
    var navigation = document.querySelector("nav");
    if (navigation.className === "toggled") {
        navigation.className = "";
    } else {
        navigation.className = "toggled";
    }
}