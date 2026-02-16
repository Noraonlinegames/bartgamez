// Load game in iframe
function loadGame(url) {
  document.getElementById("game-area").innerHTML =
    `<iframe src="${url}" width="100%" height="600px" frameborder="0"></iframe>`;
}

// Search games
function searchGames() {
  let input = document.getElementById('search').value.toLowerCase();
  let cards = document.getElementsByClassName('card');
  for (let i = 0; i < cards.length; i++) {
    let title = cards[i].getElementsByTagName('h3')[0].innerText.toLowerCase();
    cards[i].style.display = title.includes(input) ? '' : 'none';
  }
}

// Dark / Light Mode Toggle
function toggleMode() {
  document.body.classList.toggle('light-mode');
}
