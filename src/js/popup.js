let device = document.getElementById('device')
let popup = document.getElementById('popup')
let e = 0
function popuppop(){
    if (e > 0) {
        e = 0;
    popup.style.visibility = 'hidden'
} else {          
    e++;
    popup.style.visibility = "visible"
    popup.style.animation = "popup 1s 1"
    popup.style.animationFillMode = "forwards"
}}