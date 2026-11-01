/* ============================================
   particles.js — Interactive particle field
   
   Identity element: a live particle system is
   core to game engines (UE Niagara, Unity VFX
   Graph, Godot GPUParticles). This demonstrates
   real-time rendering understanding.
   
   Mouse-reactive: particles connect when near
   the cursor, simulating a basic spatial query
   (game dev fundamental: neighbor search).
   
   Performance: uses requestAnimationFrame,
   respects prefers-reduced-motion.
   ============================================ */

(function () {
  'use strict';

  const canvas = document.getElementById('particle-canvas');
  if (!canvas) return;

  // Respect prefers-reduced-motion: show static dots, no animation
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const ctx = canvas.getContext('2d');
  let width, height;
  let particles = [];
  let mouse = { x: -9999, y: -9999 };
  let animId;

  const CONFIG = {
    count: 60,
    speed: 0.3,
    radius: 1.5,
    connectDist: 140,
    mouseDist: 180,
    color: '200, 205, 215',       // elegant silver-gray particles
    accentColor: '255, 255, 255', // crisp white highlights for cursor proximity
  };

  function resize() {
    const rect = canvas.getBoundingClientRect();
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    width = rect.width;
    height = rect.height;
    canvas.width = width * dpr;
    canvas.height = height * dpr;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  }

  function createParticles() {
    particles = [];
    // Dynamically scale particle count with canvas width for even density
    const calculatedCount = Math.floor(width / 20);
    const count = Math.max(25, Math.min(85, calculatedCount));
    for (let i = 0; i < count; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * CONFIG.speed,
        vy: (Math.random() - 0.5) * CONFIG.speed,
      });
    }
  }

  function draw() {
    ctx.clearRect(0, 0, width, height);

    // Draw connections between nearby particles
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < CONFIG.connectDist) {
          const alpha = (1 - dist / CONFIG.connectDist) * 0.15;
          ctx.beginPath();
          ctx.strokeStyle = `rgba(${CONFIG.color}, ${alpha})`;
          ctx.lineWidth = 0.5;
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.stroke();
        }
      }
    }

    // Draw mouse connections and particles
    for (let i = 0; i < particles.length; i++) {
      const p = particles[i];

      // Mouse connection line
      const mdx = p.x - mouse.x;
      const mdy = p.y - mouse.y;
      const mDist = Math.sqrt(mdx * mdx + mdy * mdy);
      if (mDist < CONFIG.mouseDist) {
        const alpha = (1 - mDist / CONFIG.mouseDist) * 0.4;
        ctx.beginPath();
        ctx.strokeStyle = `rgba(${CONFIG.accentColor}, ${alpha})`;
        ctx.lineWidth = 0.8;
        ctx.moveTo(p.x, p.y);
        ctx.lineTo(mouse.x, mouse.y);
        ctx.stroke();
      }

      // Dot
      const dotAlpha = mDist < CONFIG.mouseDist ? 0.8 : 0.35;
      const dotColor = mDist < CONFIG.mouseDist ? CONFIG.accentColor : CONFIG.color;
      ctx.beginPath();
      ctx.arc(p.x, p.y, CONFIG.radius, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(${dotColor}, ${dotAlpha})`;
      ctx.fill();
    }
  }

  function update() {
    for (let i = 0; i < particles.length; i++) {
      const p = particles[i];
      p.x += p.vx;
      p.y += p.vy;

      if (p.x < 0 || p.x > width) p.vx *= -1;
      if (p.y < 0 || p.y > height) p.vy *= -1;

      // Keep in bounds
      p.x = Math.max(0, Math.min(width, p.x));
      p.y = Math.max(0, Math.min(height, p.y));
    }
  }

  function loop() {
    update();
    draw();
    animId = requestAnimationFrame(loop);
  }

  function init() {
    resize();
    createParticles();

    if (prefersReduced) {
      // Just draw once, no animation
      draw();
      return;
    }

    loop();
  }

  // Enable pointer events on canvas for mouse tracking
  canvas.style.pointerEvents = 'auto';
  canvas.addEventListener('mousemove', (e) => {
    const rect = canvas.getBoundingClientRect();
    mouse.x = e.clientX - rect.left;
    mouse.y = e.clientY - rect.top;
  });
  canvas.addEventListener('mouseleave', () => {
    mouse.x = -9999;
    mouse.y = -9999;
  });

  // Touch support for mobile
  canvas.addEventListener('touchmove', (e) => {
    const rect = canvas.getBoundingClientRect();
    mouse.x = e.touches[0].clientX - rect.left;
    mouse.y = e.touches[0].clientY - rect.top;
  }, { passive: true });
  canvas.addEventListener('touchend', () => {
    mouse.x = -9999;
    mouse.y = -9999;
  });

  let resizeTimeout;
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(() => {
      resize();
      createParticles();
    }, 200);
  });

  // Start when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
