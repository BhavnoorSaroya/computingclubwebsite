// welcome.js

(function () {
  // Create the banner
  const banner = document.createElement("div");
  banner.className = "welcome-banner";
  banner.innerHTML = `
    <p>
      🎉 <strong>Welcome new CST students!</strong>
      Join our <a href="https://discord.gg/vvf3s2zZYK" target="_blank" rel="noopener noreferrer">Discord</a> to connect with peers, get support, and join events!
    </p>
    <div class="glow-circles"></div>
  `;

  // Add banner to top of page
  document.body.prepend(banner);

  // Push page down so content isn't covered
  document.body.style.paddingTop = "5rem";

  // Inject styles
  const style = document.createElement("style");
  style.textContent = `
    .welcome-banner {
      background: linear-gradient(to right, #00ff00, #007700);
      color: #000;
      padding: 1.2rem 1rem;
      text-align: center;
      font-family: 'Orbitron', sans-serif;
      font-size: 1rem;
      font-weight: bold;
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      z-index: 9999;
      box-shadow: 0 2px 8px rgba(0, 255, 0, 0.3);
      overflow: hidden;
    }

    .welcome-banner a {
      color: #000;
      text-decoration: underline;
    }

    .glow-circles {
      position: absolute;
      top: 50%;
      left: 50%;
      width: 140%;
      height: 300%;
      transform: translate(-50%, -50%);
      pointer-events: none;
    }

    .glow-circles::before,
    .glow-circles::after {
      content: "";
      position: absolute;
      border: 2px solid rgba(0, 255, 0, 0.4);
      border-radius: 50%;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      box-shadow: 0 0 20px 5px rgba(0, 255, 0, 0.4);
      animation: rotate 8s linear infinite;
    }

    .glow-circles::after {
      animation-direction: reverse;
      border-color: rgba(0, 255, 0, 0.2);
      box-shadow: 0 0 30px 10px rgba(0, 255, 0, 0.2);
    }

    @keyframes rotate {
      0% {
        transform: rotate(0deg) scale(1);
      }
      100% {
        transform: rotate(360deg) scale(1);
      }
    }
  `;
  document.head.appendChild(style);
})();
