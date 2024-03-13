const movies = document.querySelectorAll('.movie-element');
const landing = document.querySelector('.landing-page');
const exitBtn = document.querySelector('.details-exit');

const poster = document.querySelector('.details-poster');
const title = document.querySelector('.details-title');
const detailsInf = document.querySelector('.details-inf');
const sinopsis = document.querySelector('.details-sinopsis');

//For Custom Cursor
const cursor = document.querySelector('.cursor');
const innerCursor = document.querySelector('.int');
const cursorClick = document.querySelector('.cursor--click');

let lenis;

const movieData = [
    {
        movieName: 'About Time',
        movieDate: 2013,
        moviePoster: '/media/img/about-time.jpg',
        movieSinopsis: 'At the age of 21, Tim discovers he can travel in time and change what happens and has happened in his own life. His decision to make his world a better place by getting a girlfriend turns out not to be as easy as you might think.',
        movieDuration: 123,
        movieCalification: 7.8
    },
    {
        movieName: 'Aftersun',
        movieDate: 2022,
        moviePoster: '/media/img/aftersun.jpg',
        movieSinopsis: "Sophie reflects on the shared joy and private melancholy of a holiday she took with her father twenty years earlier. Memories real and imagined fill the gaps between as she tries to reconcile the father she knew with the man she didn't...",
        movieDuration: 102,
        movieCalification: 7.6
    },
    {
        movieName: 'Atonement',
        movieDate: 2007,
        moviePoster: '/media/img/atonement.jpeg',
        movieSinopsis: "Thirteen-year-old fledgling writer Briony Tallis irrevocably changes the course of several lives when she accuses her older sister's lover of a crime he did not commit.",
        movieDuration: 123,
        movieCalification: 7.8
    },
    {
        movieName: 'Babylon',
        movieDate: 2022,
        moviePoster: '/media/img/babylon.jpeg',
        movieSinopsis: 'A tale of outsized ambition and outrageous excess, it traces the rise and fall of multiple characters during an era of unbridled decadence and depravity in early Hollywood.',
        movieDuration: 189,
        movieCalification: 7.1
    },
    {
        movieName: 'Cold War',
        movieDate: 2018,
        moviePoster: '/media/img/coldwar.jpeg',
        movieSinopsis: 'In the 1950s, a music director falls in love with a singer and tries to persuade her to flee communist Poland for France.',
        movieDuration: 89,
        movieCalification: 7.5
    },
    {
        movieName: 'Princess Mononoke',
        movieDate: 1997,
        moviePoster: '/media/img/mononoke.jpeg',
        movieSinopsis: "On a journey to find the cure for a Tatarigami's curse, Ashitaka finds himself in the middle of a war between the forest gods and Tatara, a mining colony. In this quest he also meets San, the Mononoke Hime.",
        movieDuration: 134,
        movieCalification: 8.3
    },
    {
        movieName: 'The Thing',
        movieDate: 1982,
        moviePoster: '/media/img/thething.jpeg',
        movieSinopsis: 'A research team in Antarctica is hunted by a shape-shifting alien that assumes the appearance of its victims.',
        movieDuration: 109,
        movieCalification: 8.2
    },
    {
        movieName: 'The Worst Person in the World',
        movieDate: 2021,
        moviePoster: '/media/img/worstperson.jpeg',
        movieSinopsis: 'The chronicles of four years in the life of Julie, a young woman who navigates the troubled waters of her love life and struggles to find her career path, leading her to take a realistic look at who she really is.',
        movieDuration: 128,
        movieCalification: 7.7
    },
    {
        movieName: 'About Time',
        movieDate: 2013,
        moviePoster: '/media/img/about-time.jpg',
        movieSinopsis: 'At the age of 21, Tim discovers he can travel in time and change what happens and has happened in his own life. His decision to make his world a better place by getting a girlfriend turns out not to be as easy as you might think.',
        movieDuration: 123,
        movieCalification: 7.8
    },
];

//Display the movie details
const displayMovieDetail = (index) => {
    title.textContent = movieData[index].movieName;
    detailsInf.textContent = `${movieData[index].movieDate} ${movieData[index].movieDuration}minutes ${movieData[index].movieCalification}/10`;
    sinopsis.textContent = movieData[index].movieSinopsis;
    poster.style.backgroundImage = `url("${movieData[index].moviePoster}")`;
};

const init = () => {
    gsap.registerPlugin(ScrollTrigger);
    //Store all functions here to initialize
    runLenis();

    lenis.stop();
    runStartAnimation();
};

//GSAP Starting animation
const runStartAnimation = () => {
    gsap.set("#title-middle", {scale: 100});
    gsap.set("#title-start", {x: -5000});
    gsap.set("#title-end", {x: 5000});
    gsap.set(".developed", {opacity:0});
    gsap.set(".navbar", {x: 500, opacity: 0});
    gsap.set(".movie-container", {opacity: 0});
    gsap.set(".landing-page", {x:-8, y:-8});

    const tl = gsap.timeline();
    tl.to(".developed", {opacity: 1, duration: 2});
    tl.to(".developed", {opacity: 0});
    tl.to("#title-middle", {scale: 1, duration: 2});
    tl.to("#title-start", {x: 0, duration: 2}, "title");
    tl.to("#title-end", {x: 0, duration: 2}, "title");
    tl.to(".landing-page",{x: 1500, duration: 2});
    tl.to(".navbar", {x:0, opacity: 1, duration: 2, onComplete: () => {
        landing.remove();
        lenis.start();
    }});
    tl.to(".movie-container", {opacity: 1});

};

//Lenis Smooth Scrolling
const runLenis = () => {
    lenis = new Lenis({
        infinite: true,
    });
      
    function onRaf(time) {
        lenis.raf(time);
        requestAnimationFrame(onRaf);
    }
    
    requestAnimationFrame(onRaf);
};

const hoverAnimationOn = () => {
    cursor.classList.add('cursor--hover');
    innerCursor.classList.add('int--hover');
    cursorClick.classList.add('cursor--click--hover');
};

const hoverAnimationOff = () => {
    cursor.classList.remove('cursor--hover');
    innerCursor.classList.remove('int--hover');
    cursorClick.classList.remove('cursor--click--hover');
};

const hoverAnimation = (el) => {
    //Custom cursor hovers
    el.addEventListener('mouseover', e => {
        hoverAnimationOn();
    });

    el.addEventListener('mouseenter', e => {
        hoverAnimationOn();
    });

    el.addEventListener('mouseleave', e => {
        hoverAnimationOff();
    });

    el.addEventListener('mouseout', e => {
        hoverAnimationOff();
    });
};

//When DOM is loaded do the init function
document.addEventListener("DOMContentLoaded", init);

if(window.innerWidth > 1000){
    hoverAnimation(exitBtn);
}

gsap.set(".details-container", {x:1500})

//Video player on hover and cursor hover over video
movies.forEach((movie, index) => {
    ScrollTrigger.create({
        trigger: movie,
        onEnter: () => movie.play(),
        onEnterBack: () => movie.play(),
        onLeave: () => movie.pause(),
        onLeaveBack: () => movie.pause(),
    });

    
    if(window.innerWidth > 1000){
        hoverAnimation(movie);
    }

    movie.addEventListener('click', () => {
        displayMovieDetail(index);

        gsap.to('.details-container', {x:0, duration: 1});
        gsap.to('.details-exit', {opacity:1, pointerEvents: 'all'});
        lenis.stop();
    })
});

//Details exit button
exitBtn.addEventListener('click', () => {
    gsap.to('.details-container', {x:1500, duration:1});
    gsap.to('.details-exit', {opacity:0, pointerEvents: 'none'});
    lenis.start();
})

if(window.innerWidth > 1000){
    //Custom Cursor Function
    document.body.addEventListener('mousemove', e => {
    cursor.setAttribute("style", "top: "+(e.clientY - 10)+"px; left: "+(e.clientX - 10)+"px;")
})
}

//Scroll to top on reload
window.onbeforeunload = function () {
    window.scrollTo(0, 0);
}