const lenis = new Lenis()

lenis.on('scroll', (e) => {
    console.log(e)
})

lenis.on('scroll', ScrollTrigger.update)

gsap.ticker.add((time) => {
    lenis.raf(time * 1000)
})

gsap.ticker.lagSmoothing(0)







Fancybox.bind("[data-fancybox]", {
    // Your custom options
});


function homeMousemove(params) {
    const hero = document.querySelector(".main-banner-sec")
    const mover = document.getElementById("move")
    if (hero && mover) {
        document.addEventListener("mousemove", (dets) => {
            gsap.to(mover, {
                left: `${dets.x}px`,
                top: `${dets.y}px`
            })
        })
    }

}



homeMousemove()