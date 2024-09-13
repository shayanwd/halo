const lenis = new Lenis()

lenis.on('scroll', (e) => {
    // console.log(e)
})

lenis.on('scroll', ScrollTrigger.update)

gsap.ticker.add((time) => {
    lenis.raf(time * 1000)
})

gsap.ticker.lagSmoothing(0)







Fancybox.bind("[data-fancybox]", {});


function homeAnimations() {
    const hero = document.querySelector(".main-banner-sec")
    const mover = document.getElementById("move")
    if (hero) {
        window.addEventListener("DOMContentLoaded", () => {
            hero.classList.add("animate")
        })
    }
    if (hero && mover) {
        document.addEventListener("mousemove", (dets) => {
            gsap.set(mover, {
                left: `50%`,
                top: `50%`,
            })
            gsap.to(mover, {
                left: `${dets.x}px`,
                top: `${dets.y}px`,
                x: "-19px",
                yPercent: -50, duration: 1,
            })
        })
        hero.addEventListener("mousemove", () => {
            gsap.to(mover, {
                opacity: 1,
                scale: 1,
                duration: 0.3,
            })
        })
        hero.addEventListener("mouseleave", () => {
            gsap.to(mover, {
                opacity: 0,
                scale: 0.9,
                duration: 0.3,
            })
        })
    }



    const bannerVidPlayer = document.querySelector(".vid-toggle")
    const bannerVideo = document.querySelector(".banner-media video")

    if (bannerVidPlayer && bannerVideo) {
        bannerVidPlayer.addEventListener("click", () => {
            if (bannerVideo.paused) {
                bannerVideo.play()
                bannerVidPlayer.classList.add("playin")
            } else {
                bannerVideo.pause()
                bannerVidPlayer.classList.remove("playin")
            }
        })
    }



    var sliderThumbnail = new Swiper('.slider-thumbnail', {
        direction: "vertical",
        // slidesPerView: 3,
        initialSlide: 1,
        slidesPerView: "auto",
        spaceBetween: 10,
        centeredSlides: "true",
        freeMode: false,
        watchSlidesVisibility: true,
        watchSlidesProgress: false,
        allowTouchMove: false,
    });

    var slider = new Swiper('.slider', {
        effect: "fade",
        thumbs: {
            swiper: sliderThumbnail
        }
    });
}

function contactAnimations() {
    var swiper = new Swiper(".meetSwiper", {
        slidesPerView: "auto",
        spaceBetween: 18,
        slideVisibleClass: 'swiper-slide-visible',
        navigation: {
            nextEl: ".meet-button-next",
            prevEl: ".meet-button-prev",
        },
    });
}


function accordions() {
    jQuery(function ($) {
        $(".accordions-wrap .accordion-content").css("display", "none");

        $(".accordions-wrap .accordion h4").click(function () {
            $(".accordions-wrap .accordion h4").not(this).removeClass("open");
            $(".accordions-wrap .accordion h4").not(this).next().slideUp(300);
            $(this).toggleClass("open");
            $(this).next().slideToggle(300);
        });
    });
    jQuery(function ($) {
        $(".accordions-wrap-op :not(.accordion:first-child) .accordion-content").css("display", "none");
        $(".accordions-wrap-op .accordion:first-child h4").addClass("open")

        $(".accordions-wrap-op .accordion h4").click(function () {
            $(".accordions-wrap-op .accordion h4").not(this).removeClass("open");
            $(".accordions-wrap-op .accordion h4").not(this).next().slideUp(300);
            $(this).toggleClass("open");
            $(this).next().slideToggle(300);
        });
    });
}


function scrollSpy() {

    const sspy = document.querySelector(".sspy-wrap")
    if (sspy) {
        $(document).ready(function () {
            var sectionIds = $('.sspy-col1 ul a');
            $(document).scroll(function () {
                sectionIds.each(function () {

                    var container = $(this).attr('href');
                    var containerOffset = $(container).offset().top;
                    var containerHeight = $(container).outerHeight();
                    var containerBottom = containerOffset + containerHeight;
                    var scrollPosition = $(document).scrollTop();

                    if (scrollPosition < containerBottom - 20 && scrollPosition >= containerOffset - 20) {
                        $(this).addClass('active');
                    } else {
                        $(this).removeClass('active');
                    }
                });
            });
        });
    }

    let tl = gsap.timeline()
    gsap.set(".sspy-wrap", {
        y: "200%"
    })
    tl.to(".sspy-wrap", {
        scrollTrigger: {
            trigger: ".package-sec",
            start: "10% bottom",
            end: "10% bottom",
            scrub: 1,
            // markers: true,
        },
        y: 0,
        x: 0,
    })
    tl.to(".sspy-wrap", {
        scrollTrigger: {
            trigger: ".frequent-sec",
            start: "bottom bottom",
            end: "bottom 95%",
            scrub: 1,
            // markers: true,
        },
        immediateRender: false,
        yPercent: 200,
        duration: 0.1,
    })
}


homeAnimations();
contactAnimations();
accordions();
scrollSpy();