const overlay = document.getElementById("game-overlay");
const frame = document.getElementById("game-frame");

/* OPEN GAME IN FULL OVERLAY */
function openGame(url) {
  frame.src = url;
  overlay.classList.remove("hidden");
}

/* CLOSE GAME */
function closeGame() {
  frame.src = "";
  overlay.classList.add("hidden");
}

/* FULLSCREEN */
function fullscreenGame() {
  if (frame.requestFullscreen) {
    frame.requestFullscreen();
  }
}

/* SEARCH */
const searchInput = document.getElementById("search");

searchInput.addEventListener("input", () => {
  const query = searchInput.value.toLowerCase();
  const cards = document.querySelectorAll(".game-card");

  cards.forEach(card => {
    const title = card.innerText.toLowerCase();
    card.style.display = title.includes(query) ? "block" : "none";
  });
});
