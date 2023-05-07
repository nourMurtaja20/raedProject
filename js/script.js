const ProgressBar = document.getElementsByClassName('ProgressBar')[0]
setInterval(() => {
    const computerStyle = getComputedStyle(ProgressBar)
    const width = parseFloat(computerStyle.getPropertyValue('--width')) || 0
    if (ProgressBar.style.getPropertyValue('--width') == 100) {
        ProgressBar.style.setProperty('--width', 0)
        plusSlides(1);
    } else {
        ProgressBar.style.setProperty('--width', width + .1)
    }

}, 5)

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let cards = document.getElementsByClassName("project_active");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
        cards[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";
    cards[slideIndex - 1].style.display = "block";

}


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
