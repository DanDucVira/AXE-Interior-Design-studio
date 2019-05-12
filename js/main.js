function classToggle() {
    const navs = document.querySelectorAll('.navbar-items')

    navs.forEach(nav => nav.classList.toggle('Navbar__ToggleShow'));
}

document.querySelector('.navbar-link-toggle')
    .addEventListener('click', classToggle);




//Sticky Menu background
window.addEventListener('scroll', function () {
    if (window.scrollY > 150) {
        document.querySelector('.navbar').style.backgroundColor = "#363636";
    } else if (window.scrollY > 50) {
        document.querySelector('.navbar').style.backgroundColor = "transparent";
    }
});
//Smooth Scrolling
$('.navbar .navbar-items .navbar-link a').on('click', function (event) {
    if (this.hash !== '') {
        event.preventDefault();
        const hash = this.hash;
        $('html, body').animate({
                scrollTop: $(hash).offset().top - 100
            },
            800
        );
    }
});