const sectionsWithCarousel = document.querySelectorAll(
    ".section-with-carousel"
);

createOffsets();
window.addEventListener("resize", createOffsets);

function createOffsets() {
    const sectionWithLeftOffset = document.querySelector(
        ".section-with-left-offset"
    );
    const sectionWithLeftOffsetCarouselWrapper = sectionWithLeftOffset.querySelector(
        ".carousel-wrapper"
    );

    const offset = (window.innerWidth - 1200) / 2;
    const mqLarge = window.matchMedia("(min-width: 1200px)");

    if (sectionWithLeftOffset && mqLarge.matches) {
        sectionWithLeftOffsetCarouselWrapper.style.marginLeft = offset + "px";
    } else {
        sectionWithLeftOffsetCarouselWrapper.style.marginLeft = 0;
    }


}

for (const section of sectionsWithCarousel) {
    const swiper = section.querySelector(".swiper");
    new Swiper(swiper, {
        slidesPerView: 1,
        spaceBetween: 10,
        loop: false,
        lazyLoading: true,
        keyboard: {
            enabled: true
        },
        pagination: {
            el: section.querySelector(".swiper-pagination"),
            clickable: true,
            renderBullet: function (index, className) {
                return `<div class=${className}>
            <span class="line"></span>
        </div>`;
            }
        },
        breakpoints: {
            1200: {
                slidesPerView: 3.5
            },
            1023: {
                slidesPerView: 3
            },
            900: {
                slidesPerView: 3
            },
            800: {
                slidesPerView: 2.5
            },
            700: {
                slidesPerView: 2.5
            },
            600: {
                slidesPerView: 2.3
            },
            500: {
                slidesPerView: 2
            }
        }
    });
}


let btnteam = document.getElementById("team");
let btnadvisors = document.getElementById("advisors");
let t = document.getElementById("t");
let t1 = document.getElementById("t1");
let tS = document.getElementById("team_slider");
let a = document.getElementById("a");
let a1 = document.getElementById("a1");
let aS = document.getElementById("Advisors_slider");
btnteam.onclick = function () {
    t.style.opacity = 1;
    t.style.borderBottom = "1px solid";
    t1.style.opacity = 1;
    a.style.opacity = 0.4;
    a.style.border = "none";
    a1.style.opacity = 0.4;
    tS.style.display = "block";
    aS.style.display = "none";

};
btnadvisors.onclick = function () {
    a.style.opacity = 1;
    a.style.borderBottom = "1px solid";
    a1.style.opacity = 1;
    t.style.opacity = 0.4;
    t.style.border = "none";
    t1.style.opacity = 0.4;
    tS.style.display = "none";
    aS.style.display = "block";
};