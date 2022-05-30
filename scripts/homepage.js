//navbar
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-210px";
  }
  prevScrollpos = currentScrollPos;
}


//background video

var video = document.getElementById("background-video");
var btn = document.getElementById("btnVideo");

function playAndPause () {
if (video.paused) {
video.play();
btn.innerHTML = "Pause II";
} else {
video.pause();
btn.innerHTML = " Play ▶ ";
}}