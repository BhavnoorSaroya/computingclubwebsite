// Wait for the DOM to fully load
document.addEventListener("DOMContentLoaded", () => {
  // --- Turn all text white ---
  document.body.style.color = "#fff";

  // Optional: make background black if you want contrast
  document.body.style.backgroundColor = "#36393e";

  // --- Create and append canvas ---
  const canvas = document.createElement("canvas");
  canvas.id = "matrix-rain-canvas";
  canvas.style.position = "fixed";
  canvas.style.top = "0";
  canvas.style.left = "0";
  canvas.style.width = "100%";
  canvas.style.height = "100%";
  canvas.style.zIndex = "-1";
  canvas.style.pointerEvents = "none"; // allow clicking through
  canvas.style.filter = "blur(1px)";
  canvas.style.opacity = "0.6"; // Optional

  document.body.appendChild(canvas);

  const ctx = canvas.getContext("2d");

  // Set canvas size
  function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    columns = Math.floor(canvas.width / fontSize);
    drops = Array(columns).fill(Math.random() * -100);
  }

  let fontSize = 16;
  let columns;
  let drops;

  // Character set
  const katakana = "アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン";
  const latin = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const nums = "0123456789";
  const alphabet = katakana + latin + nums;

  function getRandomChar() {
    return alphabet[Math.floor(Math.random() * alphabet.length)];
  }

  function draw() {
    // Fade effect
    ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Green characters
    ctx.fillStyle = "#0F0";
    ctx.font = `${fontSize}px monospace`;

    for (let i = 0; i < drops.length; i++) {
      const text = getRandomChar();
      const x = i * fontSize;
      const y = drops[i] * fontSize;

      ctx.fillText(text, x, y);

      // Glow effect
      if (Math.random() > 0.975) {
        ctx.fillStyle = "#FFF";
        ctx.fillText(text, x, y);
        ctx.fillStyle = "#0F0";
      }

      if (y > canvas.height && Math.random() > 0.975) {
        drops[i] = 0;
      }

      drops[i]++;
    }

    requestAnimationFrame(draw);
  }

  window.addEventListener("resize", resizeCanvas);

  resizeCanvas(); // Initial setup
  draw();         // Start animation
});
