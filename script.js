const gameContainer = document.getElementById("game-container");
const gameFrame = document.getElementById("game-frame");

/* LOAD GAME ONLY WHEN CLICKED */
function loadGame(url) {
  gameFrame.src = url;
  gameContainer.classList.remove("hidden");
  window.scrollTo({ top: gameContainer.offsetTop - 20, behavior: "smooth" });
}

/* CLOSE GAME */
function closeGame() {
  gameFrame.src = "";
  gameContainer.classList.add("hidden");
}

/* FULLSCREEN FUNCTION */
function fullscreenGame() {
  if (gameFrame.requestFullscreen) {
    gameFrame.requestFullscreen();
  }
}

/* DARK MODE */
const modeToggle = document.getElementById("modeToggle");

modeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

/* SEARCH */
const searchInput = document.getElementById("search");

searchInput.addEventListener("input", () => {
  const query = searchInput.value.toLowerCase();
  const cards = document.querySelectorAll(".card");

  cards.forEach(card => {
    const title = card.innerText.toLowerCase();
    card.style.display = title.includes(query) ? "flex" : "none";
  });
});
