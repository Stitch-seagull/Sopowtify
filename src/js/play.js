let i = 0;

function play(song) {
  if (i > 0) {
    i = 0;
    document.getElementById(song).pause();
  } else {
    i++;
    document.getElementById(song).play();
  }
}

            document.getElementById('fixette').addEventListener('ended', function() {
              document.getElementById('galerie').play()
            })
            document.getElementById('galerie').addEventListener('ended', function() {
              document.getElementById('shonen').play()
            })
            document.getElementById('shonen').addEventListener('ended', function() {
              document.getElementById('espace').play()
            })
            document.getElementById('espace').addEventListener('ended', function() {
              document.getElementById('akimbo').play()
            })
            document.getElementById('akimbo').addEventListener('ended', function() {
              document.getElementById('fixette').play()
            })