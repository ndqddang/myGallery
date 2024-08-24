var grallery = document.querySelector(".grallery");
let pre = document.querySelector(".pre");
let next = document.querySelector(".next");
grallery.addEventListener("wheel", function (e) {
    e.preventDefault();
    grallery.style.scrollBehavior = "auto";
    grallery.scrollLeft += e.deltaY;
});


pre.addEventListener("click", () => {
    grallery.style.scrollBehavior = "smooth";
    grallery.scrollLeft = 1600;
})
next.addEventListener("click", () => {
    grallery.style.scrollBehavior = "smooth";
    grallery.scrollLeft = 600;
})