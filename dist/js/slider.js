class Slider {
    constructor() {
        this.slides = document.querySelectorAll('.slide');
        this.nextBtn = document.querySelector('.next');
        this.prevBtn = document.querySelector('.prev');
        this.numberSlide = 0;
        this.pagCircles = document.querySelectorAll('.pag');
    }

    reset = () => {
        this.slides.forEach(slide => {
            slide.classList.remove('slide-active');
        })

        this.pagCircles.forEach(pagCircle => {
            pagCircle.classList.remove('pag-active');
        })
    }

    pagination = (prev,next) => {
        if(next) {
            this.pagCircles[this.numberSlide].classList.add('pag-active')

        }else if(prev) {
            this.pagCircles[this.numberSlide].classList.add('pag-active')
        }
    }

    changeSlide = (e) => {
        this.reset();

        const clickedPag = e.target;
        clickedPag.classList.add('pag-active');

        // Return index clicked circle-pag
        const indexActivePag = [...this.pagCircles].findIndex((pag) => {
            return pag.classList.contains('pag-active');
        })

        this.numberSlide = indexActivePag;

        this.displaySlide(this.numberSlide);
    }

    displaySlide = (slideNum) => {
        this.slides[slideNum].classList.add('slide-active');
    }

    nextSlide = () => {
        this.reset();

        if(this.numberSlide === (this.slides.length - 1)) {
            this.numberSlide = -1;
        }
        // Inc slide number 
         this.numberSlide++;
        // Display next slide
        this.pagination(false,true); 
        this.slides[this.numberSlide].classList.add('slide-active');
       
    }

    prevSlide = () => {
        this.reset();
        if(this.numberSlide <= 0) {
            this.numberSlide = this.slides.length
        }
        // Dec slide number
        this.numberSlide--;
        // Display prev slide
        this.pagination(true, null);
        this.slides[this.numberSlide].classList.add('slide-active');

    }

    animeSlider = () => {
        setInterval(this.nextSlide, 4000);
    }
}

// Initialization slider
const init = () => {
const slider = new Slider();
slider.slides[0].classList.add('slide-active')
slider.pagCircles[0].classList.add('pag-active');

slider.nextBtn.addEventListener('click',slider.nextSlide);
slider.prevBtn.addEventListener('click',slider.prevSlide);

slider.pagCircles.forEach(pag => {
    pag.addEventListener('click', slider.changeSlide);
})

slider.animeSlider();
}

init();
