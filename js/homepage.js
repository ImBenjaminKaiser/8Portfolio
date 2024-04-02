document.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector(".hero-header-text");
    const text = new SplitType(header, { types: 'words' });
    // console.log(text.words);
    gsap.from(text.words,{
        y:1000,
        stagger:.1,
        ease: "expo.out",
        duration:.7,
    })
    // gsap.from(".hero-header-wrapper",{backgroundSize: (i, e) => bgSize(150%)})
});