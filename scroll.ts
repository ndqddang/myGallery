const grallery = document.querySelector(".grallery");
grallery.addEventListener("wheel", (e) => {
    e.preventDefault();
    grallery.scrollLeft += e.deltaY;
})