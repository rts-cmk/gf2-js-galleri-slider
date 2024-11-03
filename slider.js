let slider = document.querySelector(".slider")
let slides = document.querySelectorAll(".slider__slide")
let prevBtn = document.querySelector(".slider__prev")
let nextBtn = document.querySelector(".slider__next")
let dotsContainer = document.querySelector(".slider__dots")
let slideIndex = 0
let changer

slides.forEach(function(_, index) { 
        dotsContainer.innerHTML += `<div class="slider__dot"  data-index="${index}">`
})


function nextSlide() {
    slideIndex++
    if(slideIndex == slides.length) {
        slideIndex = 0
    }
    showSlide(slideIndex)
}

function prevSlide() {
    slideIndex--
    if(slideIndex < 0) {
        slideIndex = slides.length - 1
    }
    showSlide(slideIndex)
}

function changeByDot(event) {
    if(event.target != dotsContainer) {
        showSlide(event.target.dataset.index)    
    }
}

function showSlide(index) {
    let dots = document.querySelectorAll(".slider__dot")

    slides.forEach(function(slide,i){  
        // byt display none med claslist remove for at tilføje overgange 
        slide.style.display = "none"
        //slide.classList.remove("slider__slide--visible")
        dots[i].classList.remove("slider__dot--active")
    })
    
    // byt display block med claslist add for at tilføje overgange     
    slides[index].style.display = "block"
    //slides[index].classList.add("slider__slide--visible")
    dots[index].classList.add("slider__dot--active")
}

function changeAutomatic(timeout) {
    changer = setInterval(function () {
        nextSlide()
    }, timeout);
}

nextBtn.addEventListener("click", nextSlide)
prevBtn.addEventListener("click", prevSlide)
dotsContainer.addEventListener("click", function(event){
    changeByDot(event)
})
// de to næste event-listenere kan udkommenteres hvis der ikke skal skiftes automatisk
slider.addEventListener("mouseenter", function() {
    clearInterval(changer)  
})
slider.addEventListener("mouseleave", function() {
    changeAutomatic("2500")  
})

showSlide(slideIndex)
// dette funktions-kald sætter gang i den automatiske udskiftning af slides
changeAutomatic("2500")