const menulist = document.querySelector(".menu-list");
const menuicon = document.querySelector(".menu-icon");
const c1 = document.querySelector(".cross-1");
const c2 = document.querySelector(".cross-2");
const c3 = document.querySelector(".cross-3");

menuicon.addEventListener("click", () => {
    menulist.classList.toggle("show-list");
    c1.classList.toggle("c-1");    
    c2.classList.toggle("c-2");    
    c3.classList.toggle("c-3");
})

$('.slider').slick({
    dots: true,
    infinite: true,
    arrows: false,
    speed: 300,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 769,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        }
    ]
});

const scrollicon = document.querySelector(".scroll-icon");
window.addEventListener("scroll", () => {
    if (document.documentElement.scrollTop > 700) {
        scrollicon.style.display = "grid";
    }
    else {
        scrollicon.style.display = "none";
    }
});

scrollicon.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior:"smooth",
    })
})