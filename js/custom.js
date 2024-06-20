// for header Sticky
document.addEventListener("DOMContentLoaded", function () {
    window.addEventListener("scroll", function () {
        if (window.pageYOffset > 50) {
            document.querySelector("header").classList.add("active");
        } else {
            document.querySelector("header").classList.remove("active");
        }
    });
});


//Nav Toggle
function myFunction() {
    let element = document.querySelector("nav");
    element.classList.toggle("nav-show");

    let element2 = document.querySelector(".toggle-btn");
    element2.classList.toggle("toggle-open");
}
document.querySelector(".toggle-btn").addEventListener("click", myFunction)

// Banner Slider
$('.banner-slider').slick({
    arrows: true,
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed:1000,
    prevArrow: `<button type="button" class="previous-slick"><img src="./images/leftArrow.png" alt=""></button>`,
    nextArrow: `<button type="button" class="next-slick"><img src="./images/rightArrow.png" alt=""></button>`
});


//Review Section
$('.review-section-row').slick({
    arrows: true,
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: `<button type="button" class="previous-slick"><img src="./images/releft.png" alt=""></button>`,
    nextArrow: `<button type="button" class="next-slick"><img src="./images/reright.png" alt=""></button>`,
    responsive: [
        {
          breakpoint: 1439,
          settings: {
            appendArrows: $(".review-append-arrow")
          }
        },
    ]
});

