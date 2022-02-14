const video = document.querySelector("video");
const playBtn = document.getElementById("play");
const muteBtn = document.getElementById("mute");
const time = document.getElementById("time");
const volume = document.getElementById("volume");

const handlePlayClick = (e) => {
  // if 비디오가 재생되면, 멈추기
  if (video.paused) {
    playBtn.innerText = "Pause";
    video.play();
    // else 비디오를 재생하기
  } else {
    playBtn.innerText = "Play";
    video.pause();
  }
};
const handlepause = () => (playBtn.innerText = "Play");
const handleplay = () => (playBtn.innerText = "Pause");

const handleMute = (e) => {};

playBtn.addEventListener("click", handlePlayClick);
muteBtn.addEventListener("click", handleMute);
video.addEventListener("pause", handlepause);
video.addEventListener("play", handleplay);
