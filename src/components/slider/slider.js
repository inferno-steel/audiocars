const slider = document.querySelector(".slider")
const sliderWrap = document.querySelector(".slider__wrap") 
const sliderImage = document.querySelectorAll(".slider__img")
const btnRight = document.querySelector(".slider__btn_right")
const btnLeft = document.querySelector(".slider__btn_left")
let sliderCounter = 0
let sliderWidth;

window.addEventListener("resize", showSlide)

btnLeft.addEventListener("click", nextSlide)
btnRight.addEventListener("click", prevSlide)

function showSlide() {
    sliderWidth = document.querySelector(".slider").offsetWidth;
    console.log(sliderWidth);
    sliderWrap.style.width = sliderWidth * sliderImage.length + "px";
    sliderImage.forEach(item => item.style.width = sliderWidth + "px");
    console.log();
    rollSlider()
}
 showSlide()

function prevSlide() {
    sliderCounter++;
    if (sliderCounter >= sliderImage.length) {
        sliderCounter = 0;
    }
    console.log(sliderCounter);
    rollSlider()
    thisSlide(sliderCounter)
}

function nextSlide() {
    sliderCounter--;
    if (sliderCounter < 0) {
        sliderCounter = sliderImage.length -1;
    }
    console.log(sliderCounter); 
    rollSlider()
    thisSlide(sliderCounter)
}

function rollSlider() {
    sliderWrap.style.transform = `translateX(${-sliderCounter * sliderWidth}px)`;
}

function thisSlide(index) {
    sliderDot.forEach(item => item.classList.remove('active_dot'));
    sliderDot[index].classList.add('active_dot')
}

sliderDot.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        sliderCounter = index;
        rollSlider();
        thisSlide(sliderCounter);
    })
})