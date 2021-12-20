let block = document.getElementById('block');
let button = document.querySelector('.button-play-green')

button.style.visibility = 'hidden'

block.addEventListener('mouseover', function() {
    button.style.visibility = "visible"
    button.style.animation = "bottom-to-top 1s 1"
    button.style.animationFillMode = "forwards"
})
block.addEventListener('mouseout', function() {
    button.style.visibility = "hidden"
})