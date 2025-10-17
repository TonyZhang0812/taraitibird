(function() {
  const sections = Array.from(document.querySelectorAll('.container > section'));
  let current = 0;
  const duration = 600; 
  let isAnimating = false;

  function updateLayout() {
    sections.forEach((sec, i) => {
      sec.classList.remove('active', 'left', 'right');
      if (i === current) {
        sec.classList.add('active');
      } else if (i < current) {
        sec.classList.add('left');
      } else {
        sec.classList.add('right');
      }
    });
  }

  function showPage(newIndex) {
    if (isAnimating) return;
    if (newIndex < 0 || newIndex >= sections.length || newIndex === current) return;
    isAnimating = true;
    current = newIndex; 
    updateLayout();
    setTimeout(() => { isAnimating = false; }, duration + 50);
  }

  window.addEventListener('wheel', (e) => {
    e.preventDefault();
    if (isAnimating) return;

    if (e.deltaY > 0) {
      showPage(current + 1);
    } else if (e.deltaY < 0) {
      showPage(current - 1);
    }
  }, { passive: false });

  window.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowRight' || e.key === 'ArrowDown') showPage(current + 1);
    if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') showPage(current - 1);
  });

  let touchStartX = 0;
  window.addEventListener('touchstart', (e) => {
    touchStartX = e.touches[0].clientX;
  }, { passive: true });

  window.addEventListener('touchend', (e) => {
    const diff = e.changedTouches[0].clientX - touchStartX;
    if (diff > 50) showPage(current - 1); 
    if (diff < -50) showPage(current + 1); 
  }, { passive: true });

  document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const index = parseInt(link.dataset.section);
      showPage(index);
    });
  });

  updateLayout();
})();