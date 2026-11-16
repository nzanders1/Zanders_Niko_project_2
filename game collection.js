const gameCovers = document.querySelectorAll(".game-cover");
const enableButton = document.querySelector("#enable-music");
const musicStatus = document.querySelector("#music-status");

const hoverMusic = new Audio();

hoverMusic.loop = true;
hoverMusic.volume = 0.35;

let musicEnabled = false;
let activeCover = null;


// The visitor must click this before the browser permits sound
enableButton.addEventListener("click", function () {
  musicEnabled = true;

  enableButton.textContent = "Hover Music Enabled";
  musicStatus.textContent =
    "Hover over a game cover to hear music. Move away to stop it.";
});


// Add hover controls to every large game cover
gameCovers.forEach(function (cover) {

  cover.addEventListener("mouseenter", function () {
    if (!musicEnabled) {
      return;
    }

    const musicFile = cover.dataset.music;

    if (!musicFile) {
      return;
    }

    activeCover = cover;

    hoverMusic.pause();
    hoverMusic.currentTime = 0;
    hoverMusic.src = musicFile;

    hoverMusic.play().catch(function (error) {
      console.log("The music could not play:", error);
    });
  });


  cover.addEventListener("mouseleave", function () {
    if (activeCover !== cover) {
      return;
    }

    hoverMusic.pause();
    hoverMusic.currentTime = 0;
    activeCover = null;
  });

});


// Stop music if the visitor switches browser tabs
document.addEventListener("visibilitychange", function () {
  if (document.hidden) {
    hoverMusic.pause();
    hoverMusic.currentTime = 0;
    activeCover = null;
  }
});