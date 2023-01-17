const effect = gsap.timeline({ defaults: { ease: 'power1.out' } });

effect.to('.text', { y: '0%', duration: 1, stagger: 0.25 });
effect.to('.slider', { y: '-100%', duration: 1.5, delay: 0.5 })
effect.to('.intro', { y: '-100%', duration: 1 }, '-=1')

effect.fromTo('nav', { opacity: 0 }, { opacity: 1, duration: 1 })
effect.fromTo('.initial-content', { opacity: 0 }, { opacity: 1, duration: 1 })
