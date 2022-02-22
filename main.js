let menuSwitch = document.querySelector(".fa-bars");
let hamMenu = document.querySelector(".hamburger-menu");
let closeSwitch = document.querySelector(".fa-times");

console.log(menuSwitch);
console.log(hamMenu);
console.log(closeSwitch);

menuSwitch.addEventListener('click', function() {
    hamMenu.style.display = "block";
});

closeSwitch.addEventListener('click', function() {
    hamMenu.style.display = "none";
});
