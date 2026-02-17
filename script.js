<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>BartGamez</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>

<header>
  <h1>BartGamez</h1>
  <div class="header-controls">
    <input type="text" id="search" placeholder="Search games...">
    <button id="modeToggle">🌙</button>
  </div>
</header>

<main>

  <div class="game-list">
    <div class="card" onclick="loadGame('https://example.com/2048')">
      <h3>2048</h3>
    </div>

    <div class="card" onclick="loadGame('https://example.com/slope')">
      <h3>Slope</h3>
    </div>

    <div class="card" onclick="loadGame('https://example.com/tetris')">
      <h3>Tetris</h3>
    </div>

    <div class="card" onclick="loadGame('https://example.com/run3')">
      <h3>Run 3</h3>
    </div>

    <div class="card" onclick="loadGame('https://example.com/motox3m')">
      <h3>Moto X3M</h3>
    </div>
  </div>

  <!-- GAME AREA -->
  <div id="game-container" class="hidden">
    <div id="game-controls" class="game-topbar">
      <button onclick="closeGame()">✖ Close</button>
      <button onclick="fullscreenGame()">⛶ Fullscreen</button>
    </div>
    <iframe id="game-frame"></iframe>
  </div>

</main>

<script src="script.js"></script>
</body>
</html>
