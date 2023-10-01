const player = document.querySelector("#player");
const playPauseButton = document.querySelector("#playPauseButton");

import songs from "./song.js";

const textButtonPlay = "<i class='bx bx-caret-right'></i>";
const textButtonPause = "<i class='bx bx-pause'></i>";
let index = 0;
playPauseButton.onclick = () => playPause();

const playPause = () => {
  if (player.paused) {
    player.play();
    playPauseButton.innerHTML = textButtonPause;
  } else {
    player.pause();
    playPauseButton.innerHTML = textButtonPlay;
  }
};