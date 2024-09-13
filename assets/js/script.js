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





homeAnimations();
contactAnimations();