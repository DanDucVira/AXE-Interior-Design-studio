//Sticky Menu background
window.addEventListener('scroll', function () {
    if (window.scrollY > 150) {
        document.querySelector('nav').style.backgroundColor = "#363636";
    } else if (window.scrollY > 50) {
        document.querySelector('nav').style.backgroundColor = "transparent";
    }
});