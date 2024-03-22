// This file is so I don't have to repeat this code in every JS file

// Register ScrollTrigger plugin
// Typically done automatically but best practice to manually register it
gsap.registerPlugin(ScrollTrigger);


const isReduced = window.matchMedia(`(prefers-reduced-motion: reduce)`) === true || window.matchMedia(`(prefers-reduced-motion: reduce)`).matches === true;
// For respecting prefers reduced motion preference; from here: https://natclark.com/tutorials/javascript-reduced-motion/

// Only apply Lenis smooth scrolling if the user has not set prefers reduced motion to reduce
if (isReduced === false){
    
    // From lenis docs: https://github.com/darkroomengineering/lenis?tab=readme-ov-file#gsap-scrolltrigger
    // Initializes a Lenis object that makes scrolling smoother
    const lenis = new Lenis({
        duration:1.5,// How long it takes to catch up with the actual scroll position
        wheelMultiplier: 1.3,// Makes the user scroll faster
        smooth: true,
    });

    lenis.on('scroll', (e) => {
    //   console.log(e) // Shows information about the current scrolling state
    });

    lenis.on('scroll', ScrollTrigger.update);

    gsap.ticker.add((time)=>{
    lenis.raf(time * 1000)
    });

}