/* =========================================
   FRIVAAR PRODUCTIONS — Global Scripts
   ========================================= */

document.addEventListener('DOMContentLoaded', () => {

  // ---- Cinematic brand intro ----
  const intro = document.querySelector('.brand-intro');
  const introSkip = document.querySelector('.intro-skip');
  const introSeenKey = 'frivaar-intro-seen';
  const closeIntro = () => {
    if (!intro || intro.classList.contains('is-done')) return;
    intro.classList.add('is-done');
    try { sessionStorage.setItem(introSeenKey, '1'); } catch (_) {}
  };

  if (intro) {
    let alreadySeen = false;
    try { alreadySeen = sessionStorage.getItem(introSeenKey) === '1'; } catch (_) {}
    if (alreadySeen || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      intro.classList.add('is-done');
    } else {
      window.setTimeout(closeIntro, 4700);
    }
    introSkip?.addEventListener('click', closeIntro);
  }

  // ---- Custom Cursor ----
  const cursor = document.querySelector('.cursor');
  const cursorRing = document.querySelector('.cursor-ring');

  if (cursor && cursorRing) {
    let mouseX = 0, mouseY = 0;
    let ringX = 0, ringY = 0;

    document.addEventListener('mousemove', e => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      cursor.style.left = mouseX + 'px';
      cursor.style.top = mouseY + 'px';
    });

    // Smooth ring follow
    function animateRing() {
      ringX += (mouseX - ringX) * 0.12;
      ringY += (mouseY - ringY) * 0.12;
      cursorRing.style.left = ringX + 'px';
      cursorRing.style.top = ringY + 'px';
      requestAnimationFrame(animateRing);
    }
    animateRing();

    // Cursor grow on hover
    document.querySelectorAll('a, button, [data-hover]').forEach(el => {
      el.addEventListener('mouseenter', () => {
        cursor.style.width = '20px';
        cursor.style.height = '20px';
        cursorRing.style.width = '52px';
        cursorRing.style.height = '52px';
        cursorRing.style.opacity = '1';
      });
      el.addEventListener('mouseleave', () => {
        cursor.style.width = '12px';
        cursor.style.height = '12px';
        cursorRing.style.width = '36px';
        cursorRing.style.height = '36px';
        cursorRing.style.opacity = '0.6';
      });
    });
  }

  // ---- Scroll Reveal ----
  const reveals = document.querySelectorAll('.reveal');
  if (reveals.length) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

    reveals.forEach(el => observer.observe(el));
  }

  // ---- Active Nav Link ----
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPage || (currentPage === '' && href === 'index.html')) {
      link.classList.add('active');
    }
  });

  // ---- Page Transition (out) ----
  document.querySelectorAll('a[href]').forEach(link => {
    const href = link.getAttribute('href');
    if (!href || href.startsWith('#') || href.startsWith('http') || href.startsWith('mailto')) return;

    link.addEventListener('click', e => {
      const transEl = document.querySelector('.page-transition');
      if (!transEl) return;
      e.preventDefault();
      transEl.style.transition = 'transform 0.5s cubic-bezier(0.76, 0, 0.24, 1)';
      transEl.style.transformOrigin = 'bottom';
      transEl.style.transform = 'scaleY(1)';
      setTimeout(() => { window.location.href = href; }, 520);
    });
  });

  // ---- Page Transition (in) ----
  const transEl = document.querySelector('.page-transition');
  if (transEl) {
    transEl.style.transformOrigin = 'top';
    transEl.style.transform = 'scaleY(1)';
    transEl.style.transition = 'none';
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        transEl.style.transition = 'transform 0.6s cubic-bezier(0.76, 0, 0.24, 1) 0.1s';
        transEl.style.transform = 'scaleY(0)';
      });
    });
  }

});
