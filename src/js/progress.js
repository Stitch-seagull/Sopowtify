let fixette = document.getElementById("fixette");
var timer;
var percent = 0;

fixette.addEventListener("playing", function (_event) {
    var duration = _event.target.duration;
    advance(duration, fixette);
});
fixette.addEventListener("pause", function (_event) {
    clearTimeout(timer);
});
var advance = function (duration, element) {
    let progress = document.getElementById("progress");
    increment = 8 / duration
    percent = Math.min(increment * element.currentTime * 4, 80);
    progress.style.width = percent + '%'
    startTimer(duration, element);
}
var startTimer = function (duration, element) {
    if (percent < 80) {
        timer = setTimeout(function () {
            advance(duration, element)
        }, 100);
    }
}


function togglePlay(e) {
    e = e || window.event;
    var btn = e.target;
    if (!fixette.paused) {
        btn.classList.remove('active');
        fixette.pause();
        isPlaying = false;
    } else {
        btn.classList.add('active');
        fixette.play();
        isPlaying = true;
    }
}

let soundbar = document.getElementById("modify-sound");

soundbar.onchange = function (e) {
    fixette.volume = e.target.value / 100;
}