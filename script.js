gsap.from(".header", {
    opacity: 0,
    y: -20,
    duration: 0.3,
    delay: 1,
    stagger: 1
})

gsap.from(".headline h1", {
    opacity: 0,
    y: 20,
    duration: 0.3,
    delay: 1,
    stagger: 0.2
})

gsap.from(".headline p", {
    opacity: 0,
    y: 20,
    duration: 0.3,
    delay: 1.5,
})


gsap.to(".revel", {

    backgroundSize: "100% 100%",
    duration: 10,
    delay: 1.5,
    scrollTrigger: {
        trigger: ".about",
        scroller: "body",
        start: "top 0%",
        end: "top -100%",
        scrub: 2,
        pin: true,
    }

})

