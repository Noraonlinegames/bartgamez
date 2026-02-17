const overlay = document.getElementById("game-overlay");
const frame = document.getElementById("game-frame");

function openGame(url) {
  frame.src = url;
  overlay.classList.remove("hidden");
}

function closeGame() {
  frame.src = "";
  overlay.classList.add("hidden");
}

function fullscreenGame() {
  if (frame.requestFullscreen) {
    frame.requestFullscreen();
  }
}

const searchInput = document.getElementById("search");

searchInput.addEventListener("input", () => {
  const query = searchInput.value.toLowerCase();
  const cards = document.querySelectorAll(".game-card");

  cards.forEach(card => {
    const title = card.innerText.toLowerCase();
    card.style.display = title.includes(query) ? "block" : "none";
  });
});
