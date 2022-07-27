let acc = document.getElementsByClassName("accordion");
let i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    let panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  });
}


//Slider
let swiper = new Swiper(".mySwiper", {
  pagination: {
    el: ".swiper-pagination",
  },
});

// Nav icon
const navBtn = document.querySelector('.nav-toggle');
const nav = document.querySelector('.nav')
const menuIcon = document.querySelector('.menu-icon');


navBtn.onclick = function () {
	nav.classList.toggle('nav-mobile')
	menuIcon.classList.toggle('menu-icon-active');
	document.body.classList.toggle('no-scroll');
};
/* My GitHub https://github.com/IvanGostev */