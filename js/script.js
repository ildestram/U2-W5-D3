let slideContainer = document.querySelector('.container');
let slide = document.querySelector('.slides');
let nextBtn = document.getElementById('next-btn');
let prevBtn = document.getElementById('prev-btn');
let interval = 1000;

let slides = document.querySelectorAll('.slide');
let index = 1;
let slideId 

let firstClone = slides[0].cloneNode(true);
let lastClone = slides[slides.length - 1].cloneNode(true);

firstClone.id = 'first-clone'
lastClone.id = 'last-clone'

slide.append(firstClone);
slide.prepend(lastClone);

let slideWidth = slides[index].clientWidth;

// console.log(slideWidth);

slide.style.transform = `translateX(${-slideWidth * index}px)`;

console.log(slides);
// perchè ha sei elementi la nodelist? quando in realtà ne dovrebbe avere tre

let startSlide = () => {
    slideId = setInterval(() => {
        // index++;
        // slide.style.transform = `translateX(${-slideWidth * index}px)`;
        // slide.style.transition = `.7s`;
        moveToNextImage();
    }, interval)
};

slide.addEventListener('transitionend', () => {
        slides = document.querySelectorAll('.slide');
    if(slides[index].id === firstClone.id) {
        slide.style.transform = 'none';
        index = 1;
        slide.style.transform = `translateX(${-slideWidth * index}px)`;
    }
});

let moveToNextImage = () => {
        if(index >= slides.length -1) 
        return;
    index++;
    slide.style.transform = `translateX(${-slideWidth * index}px)`;
    slide.style.transition = `.7s`;

}

slideContainer.addEventListener('mouseenter', () =>{
    clearInterval(slideId);
})

// slideContainer.addEventListener('mouseleave', startSlide);

nextBtn.addEventListener('click', moveToNextImage)

startSlide();