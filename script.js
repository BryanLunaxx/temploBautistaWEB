/* Templo Bautista Atenas · script.js (JavaScript vanilla) */
(() => {
  'use strict';

  const toggle = document.querySelector('.nav-toggle');
  const menu = document.getElementById('menu');
  const header = document.querySelector('.header');

  // Menú hamburguesa: abre/cierra y actualiza aria-expanded
  const setMenu = (open) => {
    menu.classList.toggle('is-open', open);
    toggle.setAttribute('aria-expanded', String(open));
    toggle.setAttribute('aria-label', open ? 'Cerrar menú' : 'Abrir menú');
  };
  toggle.addEventListener('click', () => setMenu(!menu.classList.contains('is-open')));
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape') setMenu(false); });

  // Desplazamiento suave con compensación de la navbar fija
  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener('click', (e) => {
      const target = document.querySelector(link.getAttribute('href'));
      if (!target) return;
      e.preventDefault();
      const top = target.getBoundingClientRect().top + window.scrollY - header.offsetHeight;
      window.scrollTo({ top, behavior: 'smooth' });
      setMenu(false); // cierra el menú móvil tras navegar
    });
  });

  // Año automático en el footer
  document.getElementById('year').textContent = new Date().getFullYear();

// Abrir y cerrar modales de servicios
document.querySelectorAll('.btn-more').forEach((btn) => {
  btn.addEventListener('click', () => {
    const modalId = btn.getAttribute('data-modal');
    const modal = document.getElementById(modalId);
    if (modal) modal.showModal();
  });
});

document.querySelectorAll('.modal__close').forEach((closeBtn) => {
  closeBtn.addEventListener('click', () => {
    closeBtn.closest('dialog').close();
  });
});

document.querySelectorAll('.modal').forEach((modal) => {
  modal.addEventListener('click', (e) => {
    if (e.target === modal) modal.close();
  });
});

//modo oscuro
document.addEventListener('DOMContentLoaded', () => {
  const btnTheme = document.getElementById('btn-theme');

  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark') {
    document.body.classList.add('dark-theme');
    if (btnTheme) btnTheme.textContent = '☀️';
  }

  if (btnTheme) {
    btnTheme.addEventListener('click', () => {
      document.body.classList.toggle('dark-theme');
      const isDark = document.body.classList.contains('dark-theme');
      btnTheme.textContent = isDark ? '☀️' : '🌙';
      localStorage.setItem('theme', isDark ? 'dark' : 'light');
    });
  }
});


})();
