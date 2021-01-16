window.addEventListener('load', () => {
    const sounds = document.querySelectorAll('.sounds');
    const pads = document.querySelectorAll('.pads div');

    //play sound on click
    pads.forEach((pad, index) => {
        pad.addEventListener('click', function () {
            //rest to start
            sounds[index].currentTime = 0;
            sounds[index].play();
        });
    });
});