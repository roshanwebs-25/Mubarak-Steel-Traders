/**
 * script.js — Mubarak Steel Traders
 * Handles: navbar, AOS, counters, use-case hash, WhatsApp form
 * NOTE: Products page uses its own inline openPanel() / closePanel() JS.
 */

/* ═══════════════════════════════════════════
   NAVBAR — scroll shadow + mobile toggle
═══════════════════════════════════════════ */
const navbar    = document.getElementById('navbar');
const hamburger = document.querySelector('.hamburger');
const navLinks  = document.querySelector('.nav-links');

if (navbar) {
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 60);
  });
}

if (hamburger) {
  hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('open');
  });

  // Close menu when a link is clicked (mobile)
  document.querySelectorAll('.nav-links a').forEach(a => {
    a.addEventListener('click', () => navLinks.classList.remove('open'));
  });
}

/* ═══════════════════════════════════════════
   ACTIVE NAV LINK — based on current page
═══════════════════════════════════════════ */
const currentPage = location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('.nav-links a').forEach(a => {
  const href = a.getAttribute('href');
  if (href === currentPage || (currentPage === '' && href === 'index.html')) {
    a.classList.add('active');
  }
});

/* ═══════════════════════════════════════════
   ON DOM READY
═══════════════════════════════════════════ */
document.addEventListener('DOMContentLoaded', () => {

  /* ── AOS Scroll Animations ── */
  if (typeof AOS !== 'undefined') {
    AOS.init({
      duration: 800,
      easing: 'ease-out-cubic',
      once: true,
      offset: 60,
    });
  }

  /* ═══════════════════════════════════════════
     ANIMATED COUNTERS
  ═══════════════════════════════════════════ */
  const counters = document.querySelectorAll('.count-up');

  if (counters.length) {
    const counterObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;

        const el     = entry.target;
        const target = parseInt(el.getAttribute('data-target'), 10);
        const suffix = el.getAttribute('data-suffix') || '';

        const duration  = 1600;
        const startTime = performance.now();

        const tick = (now) => {
          const elapsed  = now - startTime;
          const progress = Math.min(elapsed / duration, 1);
          const eased    = 1 - Math.pow(1 - progress, 3);
          el.textContent = Math.round(eased * target).toLocaleString() + suffix;
          if (progress < 1) requestAnimationFrame(tick);
        };

        requestAnimationFrame(tick);
        counterObserver.unobserve(el);
      });
    }, { threshold: 0.5 });

    counters.forEach(c => counterObserver.observe(c));
  }

  /* ═══════════════════════════════════════════
     USE CASE PAGE — URL hash scroll & highlight
  ═══════════════════════════════════════════ */
  if (document.querySelector('.usecase-section')) {
    const applyHash = () => {
      const hash = location.hash.replace('#', '').trim();
      if (!hash) return;

      const target = document.getElementById('uc-' + hash);
      if (!target) return;

      document.querySelectorAll('.usecase-section.highlighted')
        .forEach(el => el.classList.remove('highlighted'));

      target.classList.add('highlighted');

      setTimeout(() => {
        const offset = navbar ? navbar.offsetHeight + 20 : 80;
        const top    = target.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top, behavior: 'smooth' });
      }, 350);
    };

    applyHash();
    window.addEventListener('hashchange', applyHash);
  }

  /* ═══════════════════════════════════════════
     CONTACT PAGE — WhatsApp redirect form
  ═══════════════════════════════════════════ */
  const waForm = document.getElementById('wa-form');

  if (waForm) {
    waForm.addEventListener('submit', e => {
      e.preventDefault();

      const name    = document.getElementById('f-name').value.trim();
      const phone   = document.getElementById('f-phone').value.trim();
      const product = document.getElementById('f-product').value;
      const message = document.getElementById('f-message').value.trim();

      if (!name) {
        alert('Please enter your name.');
        document.getElementById('f-name').focus();
        return;
      }
      if (!product) {
        alert('Please select a product.');
        document.getElementById('f-product').focus();
        return;
      }

      const additionalNote = message ? '\n\nAdditional note:\n' + message : '';

      const waMessage = encodeURIComponent(
        'Hello Mubarak Steel Traders,\n\n' +
        'My name is ' + name + (phone ? ' and my contact number is ' + phone : '') + '.\n\n' +
        'I am interested in *' + product + '*.\n\n' +
        'Please provide detailed specifications, pricing, and current availability.\n' +
        'I would also like to discuss bulk order options and get an accurate quotation.\n\n' +
        'Kindly let me know a suitable time for a call.\n\n' +
        'Thank you.' + additionalNote
      );

      window.open('https://wa.me/919700623077?text=' + waMessage, '_blank');
    });

    // Live border-color feedback on inputs
    waForm.querySelectorAll('input, select, textarea').forEach(field => {
      field.addEventListener('focus', () => {
        field.style.borderBottomColor = 'var(--gold)';
      });
      field.addEventListener('blur', () => {
        field.style.borderBottomColor = field.value
          ? 'rgba(201,168,76,0.4)'
          : 'rgba(240,234,216,0.18)';
      });
    });
  }

});