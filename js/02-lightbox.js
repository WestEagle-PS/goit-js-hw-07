import { galleryItems } from './gallery-items.js';

const galleryEl = document.querySelector('.gallery');

const markupGallery = galleryItems
  .map(
    image => `<a class="gallery__item" href="${image.original}">
  <img class="gallery__image" src="${image.preview}" alt="${image.description}" />
</a>`,
  )
  .join('');

galleryEl.insertAdjacentHTML('afterbegin', markupGallery);

const lightbox = new SimpleLightbox('.gallery a', {
  captionDelay: 250,
  scrollZoom: false,
  navText: ['←', '→'],
  close: false,
  showCounter: false,
  swipeTolerance: 120,
  widthRatio: 0.8,
  heightRatio: 0.9,
  fadeSpeed: 200,
});
