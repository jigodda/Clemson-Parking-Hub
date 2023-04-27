window.addEventListener('load', () => {
    fetch('https://api.collegefootballdata.com/games?year=2021&team=clemson&home=1')
      .then(response => response.json())
      .then(data => {
        // Check if there is a home game today
        const today = new Date();
        const hasHomeGameToday = data.some(game => {
          const gameDate = new Date(game.start_date);
          return gameDate.toDateString() === today.toDateString();
        });
  
        // Update the page with the game info
        const gameInfoElement = document.getElementById('game-info');
        if (hasHomeGameToday) {
          gameInfoElement.textContent = 'There is a home game today!';
        } else {
          gameInfoElement.textContent = 'There is no home game today.';
        }
      })
      .catch(error => {
        console.error('Error fetching game info:', error);
        document.getElementById('game-info').textContent = 'Error fetching game info. Please try again later.';
      });
  });
  