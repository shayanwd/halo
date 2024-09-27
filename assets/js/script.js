function checkScrollPosition() {
    const header = document.querySelector('.site-header');
    const scrollPosition = window.scrollY || window.pageYOffset;

    if (scrollPosition > 20) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
}

const lenis = new Lenis()

lenis.on('scroll', () => {
    ScrollTrigger.update();
    checkScrollPosition();
});

lenis.on('scroll', ScrollTrigger.update)

gsap.ticker.add((time) => {
    lenis.raf(time * 1000)
})

gsap.ticker.lagSmoothing(0)







Fancybox.bind("[data-fancybox]", {});


function headerAnimations() {

    const showAnim = gsap.from('.site-header', {
        top: -100,
        paused: true,
        duration: 0.2
    }).progress(1);


    ScrollTrigger.create({
        start: "top top",
        end: "max",
        onUpdate: (self) => {
            self.direction === -1 ? showAnim.play() : showAnim.reverse();
        }
    });


    gsap.matchMedia().add({
        isMobile: "(max-width: 1024px)"
    }, (context) => {

        const headNav = document.querySelector(".head-nav");
        const menuBtn = document.querySelector(".menu-toggle");

        let nvTl = gsap.timeline({ paused: true, reversed: true })
            .to(headNav, {
                opacity: 1,
                pointerEvents: "all",
                duration: 0.3,
            })
            .from(".head-nav ul li", {
                yPercent: 100,
                opacity: 0,
                stagger: 0.06,
                duration: 0.2,
            }, "b")
            .to(".abs", {
                stagger: 0.16,
                opacity: 1,
                pointerEvents: "all",
            }, "b");

        nvTl.pause();
        menuBtn.addEventListener("click", () => {
            menuBtn.classList.toggle("active");
            if (nvTl.reversed()) {
                nvTl.play();
            } else {
                nvTl.reverse();
            }
        });
        document.addEventListener('keydown', function (event) {
            if (event.key === 'Escape' || event.key === 'Esc') {
                menuBtn.classList.remove("active");
                nvTl.reverse();
            }
        });
        return () => {
            menuBtn.removeEventListener("click");
        };
    });

    // const headNav = document.querySelector(".head-nav")
    // const menuBtn = document.querySelector(".menu-toggle")

    // let nvTl = gsap.timeline({ paused: true, reversed: true })
    //     .to(headNav, {
    //         opacity: 1,
    //         pointerEvents: "all",
    //         duration: 0.3,
    //     })
    //     .from(".head-nav ul li", {
    //         yPercent: 100,
    //         opacity: 0,
    //         stagger: 0.06,
    //         duration: 0.2,
    //     }, "b")
    //     .to(".abs", {
    //         stagger: 0.16,
    //         opacity: 1,
    //         pointerEvents: "all",
    //     }, "b")
    // nvTl.pause()
    // menuBtn.addEventListener("click", () => {
    //     menuBtn.classList.toggle("active")
    //     if (nvTl.reversed()) {
    //         nvTl.play();
    //     } else {
    //         nvTl.reverse();
    //     }
    // })
}

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

function sequence() {

    const lighting = document.querySelector('.lighting-sec')

    if (lighting) {
        gsap.utils.toArray(".lt-cell").forEach((element) => {
            gsap.fromTo(element,
                { opacity: 0 },
                {
                    opacity: 1,
                    scrollTrigger: {
                        trigger: element,
                        start: "top center",
                        end: "bottom center",
                        scrub: true,
                    }
                }
            );
        });




        const canvas = document.querySelector("canvas");
        const context = canvas.getContext("2d");
        const frames = {
            currentIndex: 0,
            maxIndex: 130
        }

        let imagesLoaded = 0;
        const images = [];

        function preloadImages() {
            for (var i = 1; i <= frames.maxIndex; i++) {
                const imageUrl = `assets/sequence/sec-${i.toString().padStart(4, "0")}.jpeg`
                const img = new Image()
                img.src = imageUrl
                img.onload = () => {
                    imagesLoaded++
                    if (imagesLoaded === frames.maxIndex) {
                        loadImage(frames.currentIndex)
                        startAnimation()
                    }
                }
                images.push(img)
            }
        }

        function loadImage(index) {
            if (index >= 0 && index <= frames.maxIndex) {
                const img = images[index];

                canvas.width = window.innerWidth;
                canvas.height = window.innerHeight;

                const scaleX = canvas.width / img.width;
                const scaleY = canvas.height / img.height;
                const scale = Math.max(scaleX, scaleY);

                const newWidth = img.width * scale;
                const newHeight = img.height * scale;


                const offsetX = (canvas.width - newWidth) / 2;
                const offsetY = (canvas.height - newHeight) / 2;


                context.clearRect(0, 0, canvas.width, canvas.height);
                context.imageSmoothingQuality = true;
                context.imageSmoothingQuality = "high";
                context.drawImage(img, offsetX, offsetY, newWidth, newHeight);
                frames.currentIndex = index;
            }

        }

        function startAnimation() {
            var tl = gsap.timeline({
                scrollTrigger: {
                    trigger: ".lt-timeline",
                    start: "top top",
                    end: "center end",
                    // pin: true,
                    scrub: 1,
                }
            })
            tl.to(frames, {
                currentIndex: frames.maxIndex,
                snap: 1,
                onUpdate: function () {
                    loadImage(Math.floor(frames.currentIndex))
                }
            })
        }


        preloadImages()

        document.addEventListener("DOMContentLoaded", () => {
            lenis.scrollTo(0, { immediate: true });

            ScrollTrigger.refresh();
        });
    }

}

function loadAnimations() {
    const loaderr = document.querySelector(".load-layer")
    if (loaderr) {
        document.addEventListener("DOMContentLoaded", () => {
            loaderr.classList.add("hide")
        })

    }
    let visibleElements = [];

    const revealOnScroll = (entries, observer) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                if (!visibleElements.includes(entry.target)) {
                    visibleElements.push(entry.target);
                }
            }
        });

        if (visibleElements.length > 1) {
            visibleElements.forEach((element, index) => {
                setTimeout(() => {
                    element.classList.add('reveal');
                    observer.unobserve(element);

                    visibleElements = visibleElements.filter(el => el !== element);
                }, index * 200);
            });
        } else if (visibleElements.length === 1) {

            const element = visibleElements[0];
            element.classList.add('reveal');
            observer.unobserve(element);
            visibleElements = [];
        }
    };

    const observer = new IntersectionObserver(revealOnScroll, {
        root: null,
        threshold: 0.2
    });

    // Observe all h1, h2, h3, h4, and .bcr-col1 svg elements
    document.querySelectorAll('h1, h2, h3, h4, .bcr-col1 svg, .masker, .main-banner-sec, .foot-wrap, li').forEach((element) => {
        observer.observe(element);
    });
}




headerAnimations();
homeAnimations();
contactAnimations();
accordions();
scrollSpy();
sequence();
loadAnimations();