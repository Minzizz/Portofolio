/* ============================================
   main.js — Portfolio interactions
   
   - Scroll reveal (MOTION 2)
   - Mobile nav toggle
   - Discord copy-to-clipboard
   
   All interactive elements have real behavior.
   No dead controls. (R-26)
   ============================================ */

(function () {
  'use strict';

  // ==========================================
  // Scroll reveal (MOTION 2)
  // Purpose: entrance cue for sections.
  // ==========================================
  const revealEls = document.querySelectorAll('.reveal');
  if (revealEls.length > 0) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -30px 0px' }
    );
    revealEls.forEach((el) => observer.observe(el));
  }

  // ==========================================
  // Mobile nav toggle (R-26)
  // ==========================================
  const navToggle = document.getElementById('nav-toggle');
  const navMenu = document.getElementById('nav-menu');

  if (navToggle && navMenu) {
    navToggle.addEventListener('click', () => {
      const isOpen = navMenu.classList.toggle('open');
      navToggle.setAttribute('aria-expanded', String(isOpen));
      navToggle.setAttribute(
        'aria-label',
        isOpen ? 'Tutup menu navigasi' : 'Buka menu navigasi'
      );
    });

    // Close when a nav link is clicked
    navMenu.addEventListener('click', (e) => {
      if (e.target.tagName === 'A') {
        navMenu.classList.remove('open');
        navToggle.setAttribute('aria-expanded', 'false');
        navToggle.setAttribute('aria-label', 'Buka menu navigasi');
      }
    });

    // Close with Escape (R-32)
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && navMenu.classList.contains('open')) {
        navMenu.classList.remove('open');
        navToggle.setAttribute('aria-expanded', 'false');
        navToggle.setAttribute('aria-label', 'Buka menu navigasi');
        navToggle.focus();
      }
    });
  }

  // ==========================================
  // Discord copy-to-clipboard (R-26)
  // ==========================================
  const discordBtn = document.getElementById('discord-copy');
  const copyFeedback = document.getElementById('copy-feedback');

  if (discordBtn && copyFeedback) {
    discordBtn.addEventListener('click', async () => {
      const username = discordBtn.getAttribute('data-username');
      try {
        await navigator.clipboard.writeText(username);
      } catch {
        // Fallback for older browsers / non-HTTPS
        const ta = document.createElement('textarea');
        ta.value = username;
        ta.style.cssText = 'position:fixed;opacity:0;pointer-events:none';
        document.body.appendChild(ta);
        ta.select();
        document.execCommand('copy');
        document.body.removeChild(ta);
      }
      copyFeedback.classList.add('show');
      setTimeout(() => copyFeedback.classList.remove('show'), 1500);
    });
  }

  // ==========================================
  // Contact Form (Direct email to azizsudjud@gmail.com)
  // ==========================================
  const contactForm = document.getElementById('contact-form');
  const formFeedback = document.getElementById('form-feedback');

  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const nameInput = document.getElementById('contact-name');
      const emailInput = document.getElementById('contact-sender-email');
      const subjectInput = document.getElementById('contact-subject');
      const messageInput = document.getElementById('contact-message');

      const name = nameInput ? nameInput.value.trim() : '';
      const email = emailInput ? emailInput.value.trim() : '';
      const subject = subjectInput ? subjectInput.value.trim() : '';
      const message = messageInput ? messageInput.value.trim() : '';

      if (!name || !email || !message) {
        if (formFeedback) {
          formFeedback.textContent = 'Mohon lengkapi nama, email, dan pesan Anda.';
          formFeedback.classList.add('show');
          setTimeout(() => formFeedback.classList.remove('show'), 3500);
        }
        return;
      }

      const emailSubject = subject || `Pesan Portofolio dari ${name}`;
      const emailBody = `Halo Aziz,\n\nNama: ${name}\nEmail Pengirim: ${email}\n\nPesan:\n${message}\n\n---\nDikirim melalui website portofolio`;
      
      const mailtoUrl = `mailto:azizsudjud@gmail.com?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;

      if (formFeedback) {
        formFeedback.textContent = 'Membuka aplikasi email Anda untuk mengirim pesan ke azizsudjud@gmail.com...';
        formFeedback.classList.add('show');
      }

      // Trigger user's mail client with pre-filled details
      window.location.href = mailtoUrl;

      setTimeout(() => {
        if (formFeedback) formFeedback.classList.remove('show');
      }, 5000);
    });
  }
})();
