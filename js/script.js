
//MENU BUTTON FIXED ON SCROLL
$(document).on('scroll', function () {
    if ($(this).scrollTop() > $('#drop-menu').position().top) {
        document.getElementById("drop-menu").classList.add("fixed");
        // document.getElementById("drop-menu").classList.add("ms_opacity_5");
    }
});

$(document).on('scroll', function () {
    if ($(this).scrollTop() <= $('#header').position().top) {
        document.getElementById("drop-menu").classList.remove("fixed");
        // document.getElementById("drop-menu").classList.remove("ms_opacity_5");
    }
});


//SCRITTA SCROLL DOWN SCOMPARE
$(document).on('scroll', function () {
    if ($(this).scrollTop() > $('#jq-trigger').position().top) {
        document.getElementById("scroll-down").classList.add("ms_hidden");
        // document.getElementById("drop-menu").classList.add("ms_opacity_5");
    }
});

$(document).on('scroll', function () {
    if ($(this).scrollTop() <= $('#scroll-down').position().top) {
        document.getElementById("scroll-down").classList.remove("ms_hidden");
        // document.getElementById("drop-menu").classList.remove("ms_opacity_5");
    }
});