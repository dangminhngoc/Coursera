(function(){
    "use strict";

    let convertType = "miles";
    const heading = document.querySelector('h1');
    const intro = document.querySelector('p');
    const answer =document.getElementById('answer');
    const form = document.getElementById('convert');

    document.addEventListener('keydown', function(evt) {
        const key = evt.code;
        if (key === 'KeyK') {
            convertType = 'kilometers';
            heading.innerHTML = 'Kilometers to Miles Converter';
            intro.innerHTML = 'Type in a number of kilometers and clck the button to convert the distance to miles.';
        } else if (key === 'KeyM') { 
            convertType = 'miles';
            heading.innerHTML = 'Miles to Kilometers Converter';
            intro.innerHTML = 'Type in a number of miles and clck the button to convert the distance to kilometers.';
        }
    });

    form.addEventListener('submit', function(evt) {
        evt.preventDefault();

        const distance = parseFloat(document.getElementById('distance').value);

        if (distance) {
            if (convertType === 'miles') {
                const converted = (distance * 1.609344).toFixed(3);
                answer.innerHTML = `<h2>${distance} miles converts to ${converted} kilometers</h2>`
            } else {
                const converted = (distance * 0.621371192).toFixed(3);
                answer.innerHTML = `<h2>${distance} kilometers converts to ${converted} miles</h2>`
            }
        } else {
            answer.innerHTML= "<h2>Please provide a number!</h2>"
        }
    })
})();