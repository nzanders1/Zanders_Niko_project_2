// List of games that the Game Finder can recommend
const games = [
  {
    title: "Cadillacs and Dinosaurs",
    genre: "beat-em-up",
    moods: ["energetic", "cooperative"],
    image: "Images/Cadillacs and Dinosaurs.jpg",
    description:
      "A colorful arcade beat 'em up with fast action, dinosaurs, and cooperative gameplay."
  },
  {
    title: "Alien vs. Predator",
    genre: "beat-em-up",
    moods: ["energetic", "cooperative", "dark"],
    image: "Images/Alien_Predator_arcade.jpg",
    description:
      "A science-fiction arcade beat 'em up featuring humans, Predators, and waves of aliens."
  },
  {
    title: "Captain Commando",
    genre: "beat-em-up",
    moods: ["energetic", "cooperative"],
    image: "Images/Captain Commando.webp",
    description:
      "A futuristic Capcom beat 'em up with four unusual playable heroes."
  },
  {
    title: "The Punisher",
    genre: "beat-em-up",
    moods: ["energetic", "cooperative", "dark"],
    image: "Images/The Punisher.jpg",
    description:
      "A gritty arcade beat 'em up featuring the Punisher and Nick Fury."
  },
  {
    title: "Battletoads",
    genre: "beat-em-up",
    moods: ["energetic", "cooperative", "lighthearted"],
    image: "Images/Battletoads.jpg",
    description:
      "A challenging and humorous action game starring a team of mutant toads."
  },
  {
    title: "Shin Megami Tensei",
    genre: "jrpg",
    moods: ["dark", "story", "supernatural"],
    image: "Images/Shin_Megami_Tensei.webp",
    description:
      "A dark role-playing game about demons, difficult decisions, and the future of humanity."
  },
  {
    title: "Advanced Variable Geo 2",
    genre: "fighting",
    moods: ["competitive", "stylish"],
    image: "Images/Advanced VG 2.jpg",
    description:
      "A colorful PlayStation fighting game featuring an all-female cast."
  },
  {
    title: "Touki Denshou: Angel Eyes",
    genre: "fighting",
    moods: ["competitive", "stylish", "supernatural"],
    image: "Images/Touki_Denshou_Angel_Eyes_29.webp",
    description:
      "A fast and unusual fighting game combining anime artwork with digitized characters."
  },
  {
    title: "Asuka 120% Final",
    genre: "fighting",
    moods: ["competitive", "energetic", "stylish"],
    image: "Images/Asuka 120 Final.jpg",
    description:
      "A fast-paced fighting game with colorful characters and an unusual school competition."
  },
  {
    title: "Saturday Night Slam Masters 2",
    genre: "fighting",
    moods: ["competitive", "energetic"],
    image: "Images/Saturday Night Slam Masters 2.jpg",
    description:
      "A wrestling-themed fighting game filled with large personalities and powerful special moves."
  },
  {
    title: "Bust a Groove",
    genre: "rhythm",
    moods: ["energetic", "stylish", "lighthearted"],
    image: "Images/Bust a Groove.webp",
    description:
      "A PlayStation rhythm game that combines dancing, music, and colorful character designs."
  },
  {
    title: "Ghost Sweeper Mikami",
    genre: "platformer",
    moods: ["lighthearted", "supernatural"],
    image: "Images/Ghost Sweeper Mikami.jpg",
    description:
      "A supernatural action platformer based on the Japanese manga and anime series."
  },
  {
    title: "Rolling Thunder 2",
    genre: "platformer",
    moods: ["dark", "stylish", "energetic"],
    image: "Images/Rolling Thunder 2.jpg",
    description:
      "A stylish spy-action game featuring secret agents, careful movement, and intense gunfights."
  },
  {
    title: "Ridge Racer Type 4",
    genre: "racing",
    moods: ["energetic", "stylish"],
    image: "Images/Ridge Racer 4.jpg",
    description:
      "A stylish PlayStation racing game known for its music, atmosphere, and colorful visual design."
  },
  {
    title: "Elevator Action Returns",
    genre: "platformer",
    moods: ["dark", "energetic", "cooperative"],
    image: "Images/Elevator Action.png",
    description:
      "A cinematic arcade action game about agents stopping a dangerous terrorist organization."
  },
  {
    title: "Parodius",
    genre: "shooter",
    moods: ["lighthearted", "energetic"],
    image: "Images/parodius.png",
    description:
      "A humorous side-scrolling shooter filled with strange enemies and colorful environments."
  }
];

// Find the elements from game finder.html
const genreSelect = document.querySelector("#genre");
const moodSelect = document.querySelector("#mood");
const findButton = document.querySelector("#find-game");

const recommendation = document.querySelector("#recommendation");
const resultImage = document.querySelector("#result-image");
const resultTitle = document.querySelector("#result-title");
const resultDescription = document.querySelector("#result-description");

// This function finds a game using the selected preferences
function findGame() {
  const selectedGenre = genreSelect.value;
  const selectedMood = moodSelect.value;

  // Only keep games that match the selected genre and mood
  let matchingGames = games.filter(function (game) {
    const genreMatches =
      selectedGenre === "any" || game.genre === selectedGenre;

    const moodMatches =
      selectedMood === "any" || game.moods.includes(selectedMood);

    return genreMatches && moodMatches;
  });

  // If nothing matches both choices, try matching only the genre
  if (matchingGames.length === 0 && selectedGenre !== "any") {
    matchingGames = games.filter(function (game) {
      return game.genre === selectedGenre;
    });
  }

  // If there is still no match, allow any game
  if (matchingGames.length === 0) {
    matchingGames = games;
  }

  // Pick one random game from the matching games
  const randomNumber = Math.floor(Math.random() * matchingGames.length);
  const chosenGame = matchingGames[randomNumber];

  // Display the chosen game's information
  resultTitle.textContent = chosenGame.title;
  resultDescription.textContent = chosenGame.description;
  resultImage.src = chosenGame.image;
  resultImage.alt = chosenGame.title + " game artwork";

  // Reveal the result card
  recommendation.hidden = false;

  // Move the page down to show the result
  recommendation.scrollIntoView({
    behavior: "smooth",
    block: "start"
  });
}

// Run findGame when the visitor clicks the button
findButton.addEventListener("click", findGame);