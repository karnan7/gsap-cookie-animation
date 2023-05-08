const tl = gsap.timeline({default: {duration: 0.75, ease: "power1.out"}})

tl.fromTo('.cookie-container', {scale: 0}, {scale: 1, duration:1.5, ease: "elastic.out(1, 0.4)"})
tl.fromTo('.cookie', {opacity: 0, x:-50, rotation:'-45deg'}, {opacity: 1, x:0, rotation:0}, '<50%')
tl.fromTo('.text', {opacity: 0, x: 30}, {opacity:1,x:0}, '<')

tl.fromTo('.cookie', {y:0, rotation: '0deg'}, {y:-20,rotation: '-20deg', yoyo:true, repeat:-1})
tl.fromTo('#crumbs', {x:0}, {x:10, yoyo:true, repeat:-1},'<')

const button = document.querySelector('button')
button.addEventListener('click', () => {
    gsap.to('.cookie-container',{opacity:0, y:100, duration: 0.5, ease: "power1.out"} )
})