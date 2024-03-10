const movies = document.querySelectorAll('.movie-element');
const landing = document.querySelector('.landing-page');

const init = () => {
    //Store all functions here to initialize
    gsap.registerPlugin(ScrollTrigger);
    runLenis();

    runStartAnimation();
};

const runStartAnimation = () => {
    gsap.set("#title-middle", {scale: 100});
    gsap.set("#title-start", {x: -5000});
    gsap.set("#title-end", {x: 5000});
    gsap.set(".developed", {opacity:0});
    gsap.set(".navbar", {x: 500, opacity: 0});

    const tl = gsap.timeline();
    tl.to(".developed", {opacity: 1, duration: 2});
    tl.to(".developed", {opacity: 0});
    tl.to("#title-middle", {scale: 1, duration: 2});
    tl.to("#title-start", {x: 0, duration: 2}, "title");
    tl.to("#title-end", {x: 0, duration: 2}, "title");
    tl.to(".landing-page",{y:1000, duration: 3, delay: 1, onComplete: () => {
        landing.style.display='none';
        landing.style.opacity = 0;
    }});
    tl.to(".navbar", {x:0, opacity: 1});

};

const runLenis = () => {
    const lenis = new Lenis({
        infinite: true,
    });
      
    function onRaf(time) {
        lenis.raf(time);
        requestAnimationFrame(onRaf);
    }
    
    requestAnimationFrame(onRaf);
};

//When DOM is loaded do the init function
document.addEventListener("DOMContentLoaded", init);

//Video player on hover
movies.forEach((movie) => {
     movies[7].currentTime = movies[0].currentTime;

     // Play is a promise so we need to check we have it
     let playPromise = movie.play();
     if (playPromise !== undefined) {
         playPromise.then((_) => {
             let observer = new IntersectionObserver(
                 (entries) => {
                     entries.forEach((entry) => {
                         if (
                             entry.intersectionRatio !== 1 &&
                             !movie.paused
                         ) {
                             movie.pause();
                             console.log("Stop");
                         } else if (movie.paused) {
                             movie.play();
                             console.log("Play");
                         }
                     });
                 },
                 { threshold: 0.2 }
             );
             observer.observe(movie);
         });
     }
});