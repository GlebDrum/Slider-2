 const upBtn = document.querySelector ('.up-button')

 const downBtn = document.querySelector ('.down-button')

 const sidebar = document.querySelector('.sidebar')

 const mainSlide = document.querySelector('.main-slide')

 const slidesCount = mainSlide.querySelectorAll('div').length

 const container = document.querySelector('.container');

 const height = container.clientHeight;

 let activeSlideIndex = 0

 sidebar.style.top = `-${(slidesCount - 1) * 100} vh`

 upBtn.addEventListener('click', () => {
    changeSlide('up')
 })

 downBtn.addEventListener('click', () => {
    changeSlide('down')
})

function changeSlide(direction) {
    if (direction === 'up') {        
        if (activeSlideIndex === 0) activeSlideIndex = slidesCount - 1; else  activeSlideIndex--;
    } else {
        if (activeSlideIndex >= slidesCount - 1) activeSlideIndex = 0; else activeSlideIndex++;
    }

    mainSlide.style.transform = `translateY(-${activeSlideIndex * height}px)`;    
    sidebar.style.transform = `translateY(-${activeSlideIndex * height}px)`
}