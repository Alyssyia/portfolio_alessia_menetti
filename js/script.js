
//SCRITTA SCROLL DOWN SCOMPARE
document.addEventListener('scroll', function () {

    if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
        document.getElementById("scroll-down").className = "ms_hidden_0";
    }

    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        document.getElementById("scroll-down").className = "ms_hidden_25";
    }

    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        document.getElementById("scroll-down").className = "ms_hidden_50";
    }

    if (document.body.scrollTop > 150 || document.documentElement.scrollTop > 150) {
        document.getElementById("scroll-down").className = "ms_hidden_75";
    }

    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        document.getElementById("scroll-down").className = "ms_hidden_100";
    }
});