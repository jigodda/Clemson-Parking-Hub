const sportsradar = new SportsRadar({
    apiKey: '7bcv2jcmes583skphda7q3a9',
  });
  
  const getGameStatus = async () => {
    // Get the current date and time
    const now = new Date();
  
    // Get the list of upcoming Clemson football games
    const games = await sportsradar.getUpcomingEvents('ncaa', 'football', 'Clemson');
  
    // Loop through the games and find the first one that is on today
    for (const game of games) {
      if (game.date === now.toISOString()) {
        // The first game on today is a Clemson home football game
        return true;
      }
    }
  
    // There is no Clemson home football game today
    return false;
  };
  
  // Call the getGameStatus() function and display the result
  getGameStatus().then(function(gameStatus) {
    if (gameStatus) {
      document.getElementById('game-status').innerText = 'There is a Clemson home football game today!';
    } else {
      document.getElementById('game-status').innerText = 'There is no Clemson home football game today.';
    }
  });