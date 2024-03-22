// const header = document.querySelector("#hero-header-text")
// const text = new SplitType(header, { types: 'letters' });

// console.log(text.words)

document.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector(".hero-header-text");
    const text = new SplitType(header, { types: 'words' });
    console.log(text.words);
    gsap.from(text.words,{
        y:1000,
        stagger:.1,
        ease: "power4.out",
    })
   });