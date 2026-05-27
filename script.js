// Mobile menu toggle
const burger = document.querySelector('.burger');
const mobile = document.querySelector('#mobileMenu');

if (burger && mobile) {
  burger.addEventListener('click', () => {
    const isOpen = burger.getAttribute('aria-expanded') === 'true';
    burger.setAttribute('aria-expanded', String(!isOpen));
    mobile.hidden = isOpen;
  });

  // Close menu after click
  mobile.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      burger.setAttribute('aria-expanded', 'false');
      mobile.hidden = true;
    });
  });
}

// Simple lightbox for gallery
const lightbox = document.querySelector('#lightbox');
const lightboxImg = document.querySelector('#lightboxImg');
const lightboxClose = document.querySelector('#lightboxClose');

document.querySelectorAll('[data-lightbox]').forEach(el => {
  el.addEventListener('click', () => {
    const src = el.getAttribute('data-lightbox');
    if (!src) return;
    lightboxImg.src = src;
    lightbox.hidden = false;
    document.body.style.overflow = 'hidden';
  });
});

function closeLightbox() {
  lightbox.hidden = true;
  lightboxImg.src = '';
  document.body.style.overflow = '';
}

if (lightboxClose) lightboxClose.addEventListener('click', closeLightbox);
if (lightbox) lightbox.addEventListener('click', (e) => {
  if (e.target === lightbox) closeLightbox();
});
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && lightbox && !lightbox.hidden) closeLightbox();
});
// ---- Auto gallery (40 images) ----
const galleryGrid = document.getElementById('galleryGrid');

if (galleryGrid) {
  const TOTAL_IMAGES = 41; // <— HIER die Anzahl

  for (let i = 1; i <= TOTAL_IMAGES; i++) {
    const num = String(i).padStart(2, '0'); // 01, 02, 03 ...
    const src = `assets/img/gallery-${num}.jpg`;

    const item = document.createElement('div');
    item.className = 'gitem';
    item.setAttribute('data-lightbox', src);

    const img = document.createElement('img');
    img.src = src;
    img.alt = `Villa Aura – photo ${i}`;

    item.appendChild(img);
    galleryGrid.appendChild(item);
  }
}
