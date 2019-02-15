var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var defaultColor1 = "#1696bd";
var defaultColor2 = "#d8b92f";

window.addEventListener("load", startup, false);
function startup() {
    color1.value = defaultColor1;
    color2.value = defaultColor2;
}

function setGradient() {
    body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";

    css.textContent = body.style.background + ";";
}

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

