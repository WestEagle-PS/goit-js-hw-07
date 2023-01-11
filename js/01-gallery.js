import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryEl = document.querySelector('.gallery');
const markupGallery = galleryItems
  .map(
    image => `<div class="gallery__item"><a class="gallery__link" href="${image.original}"><img
      class="gallery__image"
      src="${image.preview}"
      data-source="${image.original}"
      alt="${image.description}"
    />
  </a>
</div>`,
  )
  .join('');

galleryEl.insertAdjacentHTML('afterbegin', markupGallery);

galleryEl.addEventListener('click', onImageClick);

function onImageClick(event) {
  event.preventDefault();

  if (event.target.nodeName !== 'IMG') {
    return;
  }

  const instance = basicLightbox.create(
    `<img src=${event.target.dataset.source} width=100% height=100%>
`,
    {
      onClose: () => {
        galleryEl.removeEventListener('keydown', onEscImageClose);
      },
    },
  );

  instance.show();

  galleryEl.addEventListener('keydown', onEscImageClose);

  function onEscImageClose(event) {
    if (event.key === 'Escape') {
      instance.close();
    }
  }
}
