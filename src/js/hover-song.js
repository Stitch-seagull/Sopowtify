let changebutton1 = document.querySelector('.change1');
let hashtag1 = document.querySelector('#hashtag1');
let buttonplay1 = document.querySelector('#play1');
let buttonpause1 = document.querySelector('#pause1');


let changebutton2 = document.querySelector('.change2');
let hashtag2 = document.querySelector('#hashtag2');
let buttonplay2 = document.querySelector('#play2');
let buttonpause2 = document.querySelector('#pause2');

let changebutton3 = document.querySelector('.change3');
let hashtag3 = document.querySelector('#hashtag3');
let buttonplay3 = document.querySelector('#play3');
let buttonpause3 = document.querySelector('#pause3');

let changebutton4 = document.querySelector('.change4');
let hashtag4 = document.querySelector('#hashtag4');
let buttonplay4 = document.querySelector('#play4');
let buttonpause4 = document.querySelector('#pause4');

let changebutton5 = document.querySelector('.change5');
let hashtag5 = document.querySelector('#hashtag5');
let buttonplay5 = document.querySelector('#play5');
let buttonpause5 = document.querySelector('#pause5');

buttonplay1.style.visibility = "hidden"
buttonplay2.style.visibility = "hidden"
buttonplay3.style.visibility = "hidden"
buttonplay4.style.visibility = "hidden"
buttonplay5.style.visibility = "hidden"

buttonpause1.style.visibility = "hidden"
buttonpause2.style.visibility = "hidden"
buttonpause3.style.visibility = "hidden"
buttonpause4.style.visibility = "hidden"
buttonpause5.style.visibility = "hidden"

function isPlaying(audelem) {
    return !audelem.paused;
}


changebutton1.addEventListener('mouseover', function() {
    if(isPlaying(fixette)) {
        hashtag1.style.visibility = "hidden"
        buttonplay1.style.visibility = "hidden"
        buttonpause1.style.visibility = "visible"
    } else {
    hashtag1.style.visibility = 'hidden'
    buttonplay1.style.visibility = "visible";
    buttonpause1.style.visibility = "hidden"
    }
})
changebutton1.addEventListener('mouseout', function() {
    hashtag1.style.visibility = 'visible'
    buttonplay1.style.visibility = "hidden";
    buttonpause1.style.visibility = "hidden"
})

changebutton2.addEventListener('mouseover', function() {
    if(isPlaying(galerie)) {
        hashtag2.style.visibility = "hidden"
        buttonplay2.style.visibility = "hidden"
        buttonpause2.style.visibility = "visible"
    } else {
    hashtag2.style.visibility = 'hidden'
    buttonplay2.style.visibility = "visible";
    buttonpause2.style.visibility = "hidden"
    }
})
changebutton2.addEventListener('mouseout', function() {
    hashtag2.style.visibility = 'visible'
    buttonplay2.style.visibility = "hidden";
    buttonpause2.style.visibility = "hidden"
})

changebutton3.addEventListener('mouseover', function() {
    if(isPlaying(shonen)) {
        hashtag3.style.visibility = "hidden"
        buttonplay3.style.visibility = "hidden"
        buttonpause3.style.visibility = "visible"
    } else {
    hashtag3.style.visibility = 'hidden'
    buttonplay3.style.visibility = "visible";
    buttonpause3.style.visibility = "hidden"
    }
})
changebutton3.addEventListener('mouseout', function() {
    hashtag3.style.visibility = 'visible'
    buttonplay3.style.visibility = "hidden";
    buttonpause3.style.visibility = "hidden"
})

changebutton4.addEventListener('mouseover', function() {
    if(isPlaying(espace)) {
        hashtag4.style.visibility = "hidden"
        buttonplay4.style.visibility = "hidden"
        buttonpause4.style.visibility = "visible"
    } else {
    hashtag4.style.visibility = 'hidden'
    buttonplay4.style.visibility = "visible";
    buttonpause4.style.visibility = "hidden"
    }
})
changebutton4.addEventListener('mouseout', function() {
    hashtag4.style.visibility = 'visible'
    buttonplay4.style.visibility = "hidden";
    buttonpause4.style.visibility = "hidden"
})

changebutton5.addEventListener('mouseover', function() {
    if(isPlaying(akimbo)) {
        hashtag5.style.visibility = "hidden"
        buttonplay5.style.visibility = "hidden"
        buttonpause5.style.visibility = "visible"
    } else {
    hashtag5.style.visibility = 'hidden'
    buttonplay5.style.visibility = "visible";
    buttonpause5.style.visibility = "hidden"
    }
})
changebutton5.addEventListener('mouseout', function() {
    hashtag5.style.visibility = 'visible'
    buttonplay5.style.visibility = "hidden";
    buttonpause5.style.visibility = "hidden"
})

function jsp(changebutton, hashtag, buttonplay, buttonpause, song) {
    document.querySelector(changebutton).addEventListener('click', function() {
        if(isPlaying(song)) {
            document.querySelector(hashtag).style.visibility = "hidden"
            document.querySelector(buttonplay).style.visibility = "visible"
            document.querySelector(buttonpause).style.visibility = "hidden"
        } else {
        document.querySelector(hashtag).style.visibility = 'visible'
        document.querySelector(buttonplay).style.visibility = "hidden";
        document.querySelector(buttonpause).style.visibility = "hidden"
        }
    })
}