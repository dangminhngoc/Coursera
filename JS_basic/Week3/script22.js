(function(){
    "use strict";

    const btn = document.querySelector('button');
    const paragraph = document.querySelector('p');

    btn.addEventListener('click', () => {
        paragraph.style.backgroundColor = 'green';
    })
}());