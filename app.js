// DARK MODE    
// Grab needed DOM Elements

const container = document.querySelector('#container');
const notiBar = document.querySelector('#noti-bar');
const lightSwitch = document.querySelector('#light-dark');
const light = document.querySelector('.light');
const dark = document.querySelector('.dark');
const screen = document.querySelector('#screen');
const keySection = document.querySelector('#cal-keys-section');
const numberSection = document.querySelector('#numbers-section');
const keyBoxes = document.querySelectorAll('#keys').childNodes;

(function () {
    light.addEventListener('click', () => {
        container.style.backgroundColor = "white";
        notiBar.style.filter = "invert(100)";
        lightSwitch.style.backgroundColor = "#E5E5E5";
        dark.style.opacity = "1.0";
        light.style.opacity = "0.5";
        dark.style.filter = "invert(0)";
        screen.style.color = "black";
        keySection.style.backgroundColor = "#F8F8F8";
    });

    dark.addEventListener('click', () => {
        container.style.backgroundColor = "black";
        notiBar.style.filter = "invert(0)";
        lightSwitch.style.backgroundColor = "#1B1616";
        light.style.opacity = "1.0";
        dark.style.opacity = "0.5";
        dark.style.filter = "invert(100)";
        screen.style.color = "white";
        keySection.style.backgroundColor = "#131212";
    });
})();
