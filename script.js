document.getElementById('playButton').addEventListener('click', function() {
  const video = document.getElementById('videoPresentacion');
  if (video.paused) {
    video.play().then(() => {
      video.setAttribute('controls', 'controls');
      this.style.display = 'none';
    }).catch(error => {
      console.log("Error de reproducción: ", error);
    });
  }
});

  $(function () {
    $('[data-toggle="tooltip"]').tooltip(); // Inicializa los tooltips
  });


  document.getElementById('muteButton').addEventListener('click', function() {
    const audio = document.getElementById('audioPodcast');
    
    if (audio.muted) {
      audio.muted = false;
      this.textContent = 'Silenciar';
    } else {
      audio.muted = true;
      this.textContent = 'Activar sonido';
    }
  });
  