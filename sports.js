// Set your API key
const apiKey = '7bcv2jcmes583skphda7q3a9';

// Set the endpoint for NCAA Football Schedule API
const endpoint = 'https://api.sportradar.us/ncaafb-ot2/games/2023/REG/schedule.json';

// Function to check if Clemson has a home game
function checkHomeGame() {
  fetch(`${endpoint}?api_key=${apiKey}`)
    .then(response => response.json())
    .then(data => {
      const games = data.games;
      for (let i = 0; i < games.length; i++) {
        const game = games[i];
        if (game.home.alias === 'CLEM') {
          if (game.status === 'closed') {
            console.log('Clemson had a home game on ' + game.scheduled);
          } else {
            console.log('Clemson has a home game scheduled for ' + game.scheduled);
          }
          return;
        }
      }
      console.log('Clemson does not have a home game scheduled.');
    })
    .catch(error => console.error(error));
}

// Call the checkHomeGame function
checkHomeGame();

const gameStatusElement = document.getElementById("game-status");
if (gameStatus === "home") {
  gameStatusElement.textContent = "Clemson has a home football game today!";
} else {
  gameStatusElement.textContent = "Clemson does not have a home football game today.";
}
