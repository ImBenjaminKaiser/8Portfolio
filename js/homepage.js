document.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector(".hero-header-text");
    const introText = document.querySelector(".intro-text")
    const headerText = new SplitType(header, { types: 'words' });
    const text = new SplitType(introText, {types: 'words'})
    const introTextHeight = introText.getBoundingClientRect()
    var tl = gsap.timeline({})

    gsap.from(headerText.words,{
        y:1000,
        stagger:.1,
        ease: "expo.out",
        duration:.7,
    })

    gsap.to(header,{
        y:3400,
        x:-3000,
        scale: 175,
        color:'#283244',
        scrollTrigger: {
            trigger: ".hero-header-wrapper",
            pin: true,
            scrub: true,
            start: 'top top',
            end: window.innerHeight*2,
            // markers: true,
            // onLeave() {header.classList.add('display-none')},
            // onEnterBack() {btn.classList.remove('display-none')},
        },
    })
    gsap.to(".hero-subheader",{
        opacity:0,
        scrollTrigger: {
            trigger: ".hero-header-wrapper",
            // pin: true,
            scrub: true,
            start: 'bottom top',
            end: '.content',
            
            // markers: true,
        },
    }, console.log("Subheader animating"))
    // function setHeaderBig(){
    // console.log("Header set big")
    // gsap.to(header,{
    //     scale:175,
    //     scrollTrigger:{
    //         trigger:'.hero-header-wrapper',
    //         start:"top top"
    //     }
    // })
    // }

    // gsap.set(header,{
    //     scale:1,
    //     scrollTrigger: {
    //         trigger: ".hero-header-wrapper",
    //         scrub: true,
    //         start:"top center",
    //         end: "top bottom",
    //         onReEnter: setHeaderBig(),
    //         markers: true
    //     }
    // })
    
    gsap.from(text.words,{
        color:"#727272",
        ease:'none',
        stagger:1,
        scrollTrigger:{
            trigger:".content",
            pin:true,
            scrub:true,
            // start: () => `top+=${(introTextHeight.height - window.innerHeight)/2} top`,
            end: () => `+=${window.innerHeight*1.5}px`,
            markers: true
        },
    }
    );})