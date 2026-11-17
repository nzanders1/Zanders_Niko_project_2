// List of games that the Game Finder can recommend
document.addEventListener("DOMContentLoaded", function () {

  const games = [
    {
      title: "Cadillacs and Dinosaurs",
      genre: "beat-em-up",
      moods: ["energetic", "cooperative", "lighthearted"],
      image: "Images/Cadillacs and Dinosaurs.jpg",
      description:
        "A colorful arcade beat 'em up featuring dinosaurs, cooperative action, and a post-apocalyptic setting."
    },
    {
      title: "Alien vs. Predator",
      genre: "beat-em-up",
      moods: ["energetic", "cooperative", "dark"],
      image: "Images/Alien_Predator_arcade.jpg",
      description:
        "A science-fiction arcade beat 'em up in which humans and Predators battle waves of Xenomorphs."
    },
    {
      title: "Captain Commando",
      genre: "beat-em-up",
      moods: ["energetic", "cooperative", "lighthearted"],
      image: "Images/Captain Commando.webp",
      description:
        "A futuristic Capcom beat 'em up featuring four unusual heroes fighting an army of super criminals."
    },
    {
      title: "Shin Megami Tensei",
      genre: "jrpg",
      moods: ["dark", "story", "supernatural"],
      image: "Images/Shin_Megami_Tensei.webp",
      description:
        "A dark role-playing game about demons, difficult choices, and the destruction of Tokyo."
    },
    {
      title: "Advanced Variable Geo 2",
      genre: "fighting",
      moods: ["competitive", "energetic", "stylish"],
      image: "Images/Advanced VG 2.jpg",
      description:
        "A colorful PlayStation fighting game featuring an all-female cast and fast-paced battles."
    },
    {
      title: "Touki Denshou: Angel Eyes",
      genre: "fighting",
      moods: ["competitive", "stylish", "supernatural"],
      image: "Images/Touki_Denshou_Angel_Eyes_29.webp",
      description:
        "An unusual fighting game that combines anime-style characters with digitized fighters."
    },
    {
      title: "Bust a Groove",
      genre: "rhythm",
      moods: ["energetic", "stylish", "lighthearted"],
      image: "Images/Bust a Groove 2.jpg",
      description:
        "A PlayStation rhythm game that combines dancing, music, colorful characters, and competitive battles."
    },
    {
      title: "Ghost Sweeper Mikami",
      genre: "platformer",
      moods: ["lighthearted", "supernatural", "energetic"],
      image: "Images/Ghost Sweeper Mikami.jpg",
      description:
        "A Super Famicom action-platformer about a supernatural investigator battling ghosts and monsters."
    },
    {
      title: "Ridge Racer Type 4",
      genre: "racing",
      moods: ["energetic", "stylish"],
      image: "Images/Ridge Racer 4.jpg",
      description:
        "A stylish PlayStation racing game remembered for its visual presentation, atmosphere, and soundtrack."
    },
    {
      title: "Elevator Action Returns",
      genre: "platformer",
      moods: ["dark", "energetic", "cooperative"],
      image: "Images/Elevator Action.png",
      description:
        "A cinematic arcade action game about a team of agents attempting to stop a terrorist organization."
    },
    {
      title: "Parodius",
      genre: "shooter",
      moods: ["lighthearted", "energetic", "stylish"],
      image: "Images/parodius.png",
      description:
        "A humorous side-scrolling shooter filled with colorful environments, strange enemies, and visual jokes."
    },
    {
      title: "The Punisher",
      genre: "beat-em-up",
      moods: ["dark", "energetic", "cooperative"],
      image: "Images/Punisher_game_flyer.png",
      description:
        "A gritty Capcom beat 'em up starring the Punisher and Nick Fury as they battle a criminal organization."
    },
    {
      title: "Battletoads",
      genre: "beat-em-up",
      moods: ["energetic", "cooperative", "lighthearted"],
      image: "Images/Battletoads.jpg",
      description:
        "A challenging and humorous action game starring a team of powerful mutant toads."
    },
    {
      title: "Saturday Night Slam Masters 2",
      genre: "fighting",
      moods: ["competitive", "energetic", "lighthearted"],
      image: "Images/SM2Flyer.webp",
      description:
        "A wrestling-themed fighting game featuring exaggerated characters, grappling attacks, and special moves."
    },
    {
      title: "Asuka 120% Final",
      genre: "fighting",
      moods: ["competitive", "energetic", "stylish"],
      image: "Images/Asuka.jpg",
      description:
        "A fast-paced fighting game centered on a school competition and an energetic cast of characters."
    },
    {
      title: "Rolling Thunder 2",
      genre: "shooter",
      moods: ["dark", "stylish", "cooperative"],
      image: "Images/Rolling Thunder 2.jpg",
      description:
        "A stylish side-scrolling spy shooter featuring secret agents, gunfights, and cooperative gameplay."
    },
    {
      title: "Pretty Soldier Sailor Moon",
      genre: "beat-em-up",
      moods: ["energetic", "cooperative", "lighthearted"],
      image: "Images/pretty-soldier-sailor-moon-arcade-flyer-1.jpg",
      description:
        "An arcade beat 'em up featuring the Sailor Guardians fighting enemies from the popular series."
    },
    {
      title: "Teenage Mutant Ninja Turtles: Tournament Fighters",
      genre: "fighting",
      moods: ["competitive", "energetic", "lighthearted"],
      image: "Images/tmnt.jpg",
      description:
        "A competitive fighting game featuring the Teenage Mutant Ninja Turtles and other characters from their universe."
    },
    {
      title: "Yuu Yuu Hakusho FINAL: Makai Saikyou Retsuden",
      genre: "fighting",
      moods: ["competitive", "energetic", "supernatural"],
      image: "Images/Yu Yu Hakusho.jpg",
      description:
        "A Super Famicom fighting game featuring supernatural characters and battles from Yu Yu Hakusho."
    },
    {
      title: "Clock Tower",
      genre: "survival-horror",
      moods: ["dark", "story", "supernatural"],
      image: "Images/Clock_Tower_(video_game_box_art).jpg",
      description:
        "A suspenseful survival-horror adventure focused on exploration, hiding, puzzles, and escaping a relentless pursuer."
    },
    {
      title: "Asura Blade",
      genre: "fighting",
      moods: ["competitive", "energetic", "supernatural"],
      image: "Images/Asura Blade.webp",
      description:
        "A fantasy arcade fighting game featuring sword-wielding warriors, monsters, and colorful special attacks."
    },
    {
      title: "Kendo Rage",
      genre: "platformer",
      moods: ["lighthearted", "energetic", "supernatural"],
      image: "Images/Kendo Rage.png",
      description:
        "A colorful Super Nintendo action-platformer about a student battling supernatural enemies with a kendo sword."
    },
    {
      title: "Slap Happy Rhythm Busters",
      genre: "fighting",
      moods: ["competitive", "energetic", "stylish"],
      image: "Images/Slap Happy.webp",
      description:
        "A highly stylized PlayStation fighting game that combines colorful graffiti-inspired visuals with rhythm elements."
    },
    {
      title: "Valis: The Fantasm Soldier",
      genre: "platformer",
      moods: ["story", "supernatural", "energetic"],
      image: "Images/Valis.jpg",
      description:
        "A fantasy action-platformer about a young heroine who receives a magical sword and travels between worlds."
    },
    {
      title: "Ridge Racer",
      genre: "racing",
      moods: ["energetic", "competitive", "stylish"],
      image: "Images/Ridge Racer 1.jpg",
      description:
        "A fast arcade racing game known for drifting, colorful tracks, upbeat music, and accessible gameplay."
    },
    {
      title: "Shin Megami Tensei 2",
      genre: "jrpg",
      moods: ["dark", "story", "supernatural"],
      image: "Images/Shin_Megami_Tensei_II.webp",
      description:
        "A dark science-fiction role-playing game about demons, religion, identity, and a controlled future society."
    },
    {
      title: "Ghost in the Shell",
      genre: "action",
      moods: ["energetic", "stylish", "dark"],
      image: "Images/Ghost_in_the_Shell_PSone_cover_art.webp",
      description:
        "A PlayStation action game in which players control a mobile armored vehicle through fast 3D missions."
    },
    {
      title: "El Viento",
      genre: "platformer",
      moods: ["energetic", "supernatural", "stylish"],
      image: "Images/El_Viento.png",
      description:
        "A fast action-platformer featuring magic, ancient supernatural forces, and an adventurous heroine."
    },
    {
      title: "Karnov's Revenge / Fighter's History Dynamite",
      genre: "fighting",
      moods: ["competitive", "energetic", "lighthearted"],
      image: "Images/Karnov.webp",
      description:
        "An arcade fighting game featuring an unusual cast, colorful special attacks, and competitive one-on-one battles."
    }
  ];


  // Find the HTML elements
  const genreSelect = document.querySelector("#genre");
  const moodSelect = document.querySelector("#mood");
  const findButton = document.querySelector("#find-game");

  const recommendation = document.querySelector("#recommendation");
  const resultImage = document.querySelector("#result-image");
  const resultTitle = document.querySelector("#result-title");
  const resultDescription = document.querySelector("#result-description");


  function findGame() {
    const selectedGenre = genreSelect.value;
    const selectedMood = moodSelect.value;

    let matchingGames = games.filter(function (game) {
      const genreMatches =
        selectedGenre === "any" ||
        game.genre === selectedGenre;

      const moodMatches =
        selectedMood === "any" ||
        game.moods.includes(selectedMood);

      return genreMatches && moodMatches;
    });


    // If no game matches both choices, try matching the genre
    if (matchingGames.length === 0 && selectedGenre !== "any") {
      matchingGames = games.filter(function (game) {
        return game.genre === selectedGenre;
      });
    }


    // If there are still no matches, allow every game
    if (matchingGames.length === 0) {
      matchingGames = games;
    }


    // Choose one random game from the matching games
    const randomNumber =
      Math.floor(Math.random() * matchingGames.length);

    const chosenGame = matchingGames[randomNumber];


    // Display the recommendation
    resultTitle.textContent = chosenGame.title;
    resultDescription.textContent = chosenGame.description;

    resultImage.src = chosenGame.image;
    resultImage.alt = chosenGame.title + " game artwork";

    recommendation.hidden = false;


    // Move the screen down to the recommendation
    recommendation.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  }


  // Run the function when the button is clicked
  findButton.addEventListener("click", findGame);

});