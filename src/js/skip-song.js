function plus15(song) {
    document.getElementById(song).currentTime += 15.0;
}

function moins15(song) {
    document.getElementById(song).currentTime -= 15.0;
}

function volume() {
    let fixette = document.getElementById('fixette');
    let range = document.getElementById('modify-sound');
    range.addEventListener("change", function() {
        fixette.volume = range.value;
        })
}