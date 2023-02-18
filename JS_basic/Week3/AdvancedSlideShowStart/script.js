(function(){
    "use strict";

    let currentImage = 0;
    const myPhotos = ["image1.jpg", "image2.jpg", "image3.jpg", "image4.jpg", "image5.jpg"];

    const container = document.getElementById('content');
    const nextBtn = document.getElementById('next');
    const previousBtn = document.getElementById('previous');

    nextBtn.addEventListener('click', (event) => {
        event.preventDefault();

        currentImage++;
        if (currentImage > myPhotos.length - 1) { currentImage = 0; }
        swapImg();
    })

    previousBtn.addEventListener('click', (event) => {
        event.preventDefault();

        currentImage--;
        if (currentImage < 0) { currentImage = myPhotos.length - 1; }
        swapImg();
    })

    function swapImg() {
        const newSlide = document.createElement('img');
        newSlide.src = 'slides/' + myPhotos[currentImage];
        newSlide.className= 'fadeinimg';
        container.appendChild(newSlide);

        if (container.children.length > 2) {
            container.removeChild(container.children[0]);
        }
    } 
})();