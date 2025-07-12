const canvas = document.getElementById("particleCanvas");
const ctx = canvas.getContext("2d");

let width = (canvas.width = window.innerWidth);
let height = (canvas.height = window.innerHeight);

// ──⏬ tentukan jumlah partikel responsif
const isMobile = width < 768; // breakpoint 768 px
const particleCount = isMobile ? 10 : 100; // 40 utk mobile, 100 utk desktop

window.addEventListener("resize", () => {
  width = canvas.width = window.innerWidth;
  height = canvas.height = window.innerHeight;
});

const particles = [];
for (let i = 0; i < particleCount; i++) {
  particles.push({
    x: Math.random() * width,
    y: Math.random() * height,
    radius: Math.random() * 2 + 1,
    dx: (Math.random() - 0.5) * 1.5,
    dy: (Math.random() - 0.5) * 1.5,
  });
}

function draw() {
  ctx.clearRect(0, 0, width, height);

  for (const p of particles) {
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
    ctx.fillStyle = "rgba(255,255,255,0.8)";
    ctx.shadowBlur = 10;
    ctx.shadowColor = "#ffffff";
    ctx.fill();

    p.x += p.dx;
    p.y += p.dy;

    if (p.x < 0 || p.x > width) p.dx *= -1;
    if (p.y < 0 || p.y > height) p.dy *= -1;
  }

  requestAnimationFrame(draw);
}

draw();
