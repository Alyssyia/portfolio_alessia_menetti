//PAGINA INIZIA SEMPRE DALLA CIMA
setTimeout(() => window.scrollTo(0, 0), 100); //scrolla e va verso X = 0 e Y = 0 cioè in cima

//SCRITTA SCROLL DOWN SCOMPARE
document.addEventListener('scroll', function () {

    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        document.getElementById("scroll-down").classList.add("ms_hidden_100");
    } else {
        document.getElementById("scroll-down").classList.remove("ms_hidden_100");
    }
});