const lenis = new Lenis()

lenis.on('scroll', (e) => {
    console.log(e)
})

lenis.on('scroll', ScrollTrigger.update)

gsap.ticker.add((time) => {
    lenis.raf(time * 1000)
})

gsap.ticker.lagSmoothing(0)







Fancybox.bind("[data-fancybox]", {});


function homeMousemove() {
    const hero = document.querySelector(".main-banner-sec")
    const mover = document.getElementById("move")
    if (hero && mover) {
        window.addEventListener("DOMContentLoaded", () => {
            hero.classList.add("animate")
        })
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

}


homeMousemove()