//MENU BUTTON FIXED ON SCROLL
$(document).on('scroll', function () {
    if ($(window).scrollTop() > $('#header').position().top) {
        document.getElementById("drop-menu-box").classList.add("position-fixed");
    }
});

$(document).on('scroll', function () {
    if ($(window).scrollTop() < $('#header').position().top) {
        document.getElementById("drop-menu-box").classList.remove("position-fixed");
    }
});


//SCRITTA SCROLL DOWN SCOMPARE
$(document).on('scroll', function () {
    if ($(window).scrollTop() > $('#landing-page').position().top) {
        document.getElementById("scroll-down").classList.add("ms_hidden");
    }
});

$(document).on('scroll', function () {
    if ($(window).scrollTop() <= $('#scroll-down').position().top) {
        document.getElementById("scroll-down").classList.remove("ms_hidden");
    }
});