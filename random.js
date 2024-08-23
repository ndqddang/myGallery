const result = document.getElementById("result");
result.addEventListener("click", () => {
    const rotate = document.createElement("div");
    rotate.id = "rotate"
    const content = document.querySelector(".content");
    content.appendChild(rotate)

    setTimeout(() => {
        rotate.remove()
    }, 2000)
    setTimeout(returnResult, 2280)
    const p = document.createElement("p");
    content.appendChild(p)
})
function returnResult() {
    const randomMe = Math.floor(Math.random() * 100);
    console.log(randomMe)
    const p = document.createElement("p");

    if (randomMe >= 50) {
        p.innerHTML = "Let's do it";
    }
    else {
        p.innerHTML = "should not do it";
    }
}
