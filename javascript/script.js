var audio = document.getElementById("myAudio");
  var playButton = document.getElementById("playPauseButton");
  var playIcon = document.getElementById("playIcon");
  var isPlaying = false;

  function togglePlayPause() {
    if (isPlaying) {
      audio.pause();
      playIcon.setAttribute("d", "M8 5v14l11-7z");
    } else {
      audio.play();
      playIcon.setAttribute("d", "M6 6h4v12H6zm8 0h4v12h-4z");
    }
    isPlaying = !isPlaying;
  }