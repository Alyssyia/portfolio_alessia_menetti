//PAGINA INIZIA SEMPRE DALLA CIMA
setTimeout(() => window.scrollTo(0, 0), 100); //scrolla e va verso X = 0 e Y = 0 cioè in cima

//SCRITTA SCROLL DOWN SCOMPARE
document.addEventListener("scroll", function () {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    document.getElementById("scroll-down").classList.add("ms_hidden_100");
  } else {
    document.getElementById("scroll-down").classList.remove("ms_hidden_100");
  }
});

const videoboxArray = document.querySelectorAll(".ms_video_box");
const iframeArray = document.querySelectorAll("iframe");

videoboxArray.forEach((el, i) => {
  el.addEventListener("click", () => {
    const myFrame = iframeArray[i];
    const video = myFrame.contentWindow.document.getElementsByTagName("video")[0];
    if (video.paused == true) {
      video.play();
    }
    // else {
    //   video.pause();
    // }
  });
});
