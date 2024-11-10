let boxs = document.querySelectorAll(".box");
let h2 = document.querySelector("h2");
boxs.forEach(box => {
    box.addEventListener("click", _ => {
        box.style.opacity = 1;
        document.body.style.background = `${box.innerHTML}`;
        h2.style.color = `${box.innerHTML}`;
        window.localStorage.setItem("background", box.innerHTML);
        for (let i = 0; i < boxs.length; i++) {
            if (boxs[i].innerHTML !== window.localStorage.getItem("background")) {
                boxs[i].style.opacity = .5;
                window.localStorage.setItem(`opacity-${i}` , .5)
            } else 
                window.localStorage.setItem(`opacity-${i}` , 1)
        }
    })
})
if (window.localStorage.getItem("background")) {
    document.body.style.background = window.localStorage.getItem("background");
    h2.style.color = window.localStorage.getItem("background");
}
boxs.forEach((box, index) => {
    if (window.localStorage.getItem(`opacity-${index}`))
        box.style.opacity = window.localStorage.getItem(`opacity-${index}`);
})