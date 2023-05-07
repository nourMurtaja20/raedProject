var typed = new Typed(".multi_text", {
    strings: ["DREAM BIG", "CREATE IMPACT", "CHANGE THE WORLD"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
})

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry);
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
        // else {
        //     entry.target.classList.remove('show');
        // }
    })
})
const hiddenElements = document.querySelectorAll('.offers');
hiddenElements.forEach((el) => observer.observe(el));

let btnmenu = document.getElementById("btn");
let headerMobile = document.getElementById("header_mobile");

btnmenu.addEventListener("click", function () {
    headerMobile.style.display = "flex";
});

let btncancel = document.getElementById("cancel");
btncancel.addEventListener("click", function () {
    headerMobile.style.display = "none";
});