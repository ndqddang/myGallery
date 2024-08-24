var indexImg = 0;
var slides = document.querySelectorAll(".slides img");
var pre = document.querySelector(".pre");
var next = document.querySelector(".next");

document.addEventListener("DOMContentLoaded", () => {
    if (slides.length > 0) {
        slides[indexImg].classList.add("displayImg");
        pre.style.display = "none"; // Ẩn nút pre khi trang được tải lần đầu tiên
    }
});

pre.addEventListener("click", () => {
    if (indexImg > 0) {
        slides[indexImg].classList.remove("displayImg");
        indexImg--;
        slides[indexImg].classList.add("displayImg");

        // Kiểm tra trạng thái của nút pre
        if (indexImg === 0) {
            pre.style.display = "none"; // Ẩn nút pre khi ở hình đầu tiên
        } else {

            next.style.display = "block"; // Hiển thị nút next nếu không ở hình cuối cùng
        }
        if (indexImg > 0) {
            pre.style.display = "block"; // Hiển thị nút pre khi không ở hình đầu tiên
        }
    }
});

next.addEventListener("click", () => {
    if (indexImg < slides.length - 1) {
        slides[indexImg].classList.remove("displayImg");
        indexImg++;
        slides[indexImg].classList.add("displayImg");

        // Kiểm tra trạng thái của nút pre

        if (indexImg > 0) {
            pre.style.display = "block"; // Hiển thị nút pre khi không ở hình đầu tiên
        }
        // Kiểm tra trạng thái của nút next
        if (indexImg === slides.length - 1) {
            next.style.display = "none"; // Ẩn nút next khi ở hình cuối cùng
        }
    }
});
