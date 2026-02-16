// Load game into the game area
function loadGame(url) {
  const area = document.getElementById('game-area');
  area.innerHTML = `<iframe src="${url}" width="100%" height="100%" style="border:none;"></iframe>`;
}

// Dark/light mode toggle
const modeButton = document.getElementById('modeToggle');
modeButton.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  modeButton.textContent = document.body.classList.contains('dark-mode') ? '☀️ Light Mode' : '🌙 Dark Mode';
});

// Search functionality
const searchInput = document.getElementById('search');
searchInput.addEventListener('input', () => {
  const cards = document.querySelectorAll('.card');
  const query = searchInput.value.toLowerCase();
  cards.forEach(card => {
    const title = card.querySelector('h3').textContent.toLowerCase();
    card.style.display = title.includes(query) ? 'flex' : 'none';
  });
});
