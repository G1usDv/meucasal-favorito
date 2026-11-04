const setupButtons = document.querySelectorAll('[data-setup]');
const setupPanels = document.querySelectorAll('.setup-panel');
const toast = document.querySelector('#toast');

function showToast(message) {
  toast.textContent = message;
  toast.classList.add('show');
  window.clearTimeout(showToast.timer);
  showToast.timer = window.setTimeout(() => toast.classList.remove('show'), 1900);
}

setupButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const selectedId = button.dataset.setup;

    setupButtons.forEach((item) => {
      const active = item === button;
      item.classList.toggle('is-active', active);
      item.setAttribute('aria-selected', String(active));
    });

    setupPanels.forEach((panel) => panel.classList.toggle('is-hidden', panel.id !== selectedId));
    showToast(`setup da ${selectedId === 'pedro' ? 'Pedro' : 'Letícia'} carregado ✦`);
  });
});

document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener('click', () => {
    const target = document.querySelector(link.getAttribute('href'));
    if (target) target.focus({ preventScroll: true });
  });
});
