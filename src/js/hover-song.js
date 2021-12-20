let changebutton1 = document.querySelector('.change1');
let hashtag1 = document.querySelector('#hashtag1');
let buttonplay1 = document.querySelector('#play1');


let changebutton2 = document.querySelector('.change2');
let hashtag2 = document.querySelector('#hashtag2');
let buttonplay2 = document.querySelector('#play2');

let changebutton3 = document.querySelector('.change3');
let hashtag3 = document.querySelector('#hashtag3');
let buttonplay3 = document.querySelector('#play3');

let changebutton4 = document.querySelector('.change4');
let hashtag4 = document.querySelector('#hashtag4');
let buttonplay4 = document.querySelector('#play4');

let changebutton5 = document.querySelector('.change5');
let hashtag5 = document.querySelector('#hashtag5');
let buttonplay5 = document.querySelector('#play5');

buttonplay1.style.visibility = "hidden"
buttonplay2.style.visibility = "hidden"
buttonplay3.style.visibility = "hidden"
buttonplay4.style.visibility = "hidden"
buttonplay5.style.visibility = "hidden"

changebutton1.addEventListener('mouseover', function() {
    hashtag1.style.visibility = 'hidden'
    buttonplay1.style.visibility = "visible";
})
changebutton1.addEventListener('mouseout', function() {
    hashtag1.style.visibility = 'visible'
    buttonplay1.style.visibility = "hidden";
})


changebutton2.addEventListener('mouseover', function() {
    hashtag2.style.visibility = 'hidden'
    buttonplay2.style.visibility = "visible";
})
changebutton2.addEventListener('mouseout', function() {
    hashtag2.style.visibility = 'visible'
    buttonplay2.style.visibility = "hidden";
})

changebutton3.addEventListener('mouseover', function() {
    hashtag3.style.visibility = 'hidden'
    buttonplay3.style.visibility = "visible";
})
changebutton3.addEventListener('mouseout', function() {
    hashtag3.style.visibility = 'visible'
    buttonplay3.style.visibility = "hidden";
})

changebutton4.addEventListener('mouseover', function() {
    hashtag4.style.visibility = 'hidden'
    buttonplay4.style.visibility = "visible";
})
changebutton4.addEventListener('mouseout', function() {
    hashtag4.style.visibility = 'visible'
    buttonplay4.style.visibility = "hidden";
})

changebutton5.addEventListener('mouseover', function() {
    hashtag5.style.visibility = 'hidden'
    buttonplay5.style.visibility = "visible";
})
changebutton5.addEventListener('mouseout', function() {
    hashtag5.style.visibility = 'visible'
    buttonplay5.style.visibility = "hidden";
})