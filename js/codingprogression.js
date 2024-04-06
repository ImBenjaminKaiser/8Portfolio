document.addEventListener('DOMContentLoaded', () => {
    hljs.highlightAll()
    const wave1dur = (gsap.utils.random(27,30)/(window.innerWidth/(window.innerWidth/2)))
    const wave2dur = (gsap.utils.random(24,27)/(window.innerWidth/(window.innerWidth/2)))
    const wave3dur = (gsap.utils.random(19,21)/(window.innerWidth/(window.innerWidth/2)))
    const wave4dur = (gsap.utils.random(16,19)/(window.innerWidth/(window.innerWidth/2)))
    const wave5dur = (gsap.utils.random(13,16)/(window.innerWidth/(window.innerWidth/2)))

    gsap.set(".wave1",{x:(2500-(window.innerWidth/2))})
    gsap.set(".wave2",{x:(2500-(window.innerWidth/2))})
    gsap.set(".wave3",{x:(2500-(window.innerWidth/2))})
    gsap.set(".wave4",{x:(2500-(window.innerWidth/2))})
    gsap.set(".wave5",{x:(2500-(window.innerWidth/2))})
    // If the screen width times 2.5 minus 5000 is not a negative number, then make x 0
    var xAmount = -(5000-(window.innerWidth*2.5));
    if (xAmount > 0){
    xAmount = 0;
    }


gsap.to(".wave1",{x:xAmount,duration:wave1dur,repeat:-1,yoyo:true,ease:'none'})
gsap.to(".wave2",{x:xAmount,duration:wave2dur,repeat:-1,yoyo:true,ease:'none'})
gsap.to(".wave3",{x:xAmount,duration:wave3dur,repeat:-1,yoyo:true,ease:'none'})
gsap.to(".wave4",{x:xAmount,duration:wave4dur,repeat:-1,yoyo:true,ease:'none'})
gsap.to(".wave5",{x:xAmount,duration:wave5dur,repeat:-1,yoyo:true,ease:'none'})
})
