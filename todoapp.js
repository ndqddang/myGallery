var indexImg = 0;
var slides = document.querySelectorAll(".slides img");
document.addEventListener("DOMContentLoaded", conditionShow);
function conditionShow() {
    if (slides.length > indexImg) {
        slides[indexImg].classList.add("displayImg");
    }
}
var myInterval = setInterval(function () {
    indexImg++;
    showRequest(indexImg);
}, 1800);
function showRequest(index) {
    if (index >= slides.length) {
        indexImg = 0
    }

    else if (index < 0) {
        indexImg = slides.length - 1;
    }
    slides.forEach(function (slide) {
        slide.classList.remove("displayImg");
    });
    slides[indexImg].classList.add("displayImg");
}
var pre = document.querySelector(".pre");
pre.addEventListener("click", function () {
    indexImg--;
    showRequest(indexImg);
});
var next = document.querySelector(".next");
next.addEventListener("click", function () {
    indexImg++;
    showRequest(indexImg);
    clearInterval(myInterval)
});
