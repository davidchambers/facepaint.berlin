if (!('ontouchstart' in window)) {
  const IMAGES = document.querySelectorAll('#gallery img');
  const LIGHTBOX = document.createElement('div');
  const IMAGE = document.createElement('img');

  LIGHTBOX.classList.add('fixed', 'inset-0', 'hidden', 'bg-black/75', 'p-8');
  IMAGE.classList.add('mx-auto', 'h-full', 'rounded-3xl', 'bg-white', 'object-cover', 'p-4');
  LIGHTBOX.appendChild(IMAGE);
  document.body.appendChild(LIGHTBOX);

  let $index = -1;

  const hide = () => {
    $index = -1;
    LIGHTBOX.classList.add('hidden');
  };

  const show = idx => {
    IMAGE.src = IMAGES[$index = idx].src;
    LIGHTBOX.classList.remove('hidden');
  };

  LIGHTBOX.onclick = hide;

  IMAGES.forEach((image, index) => image.onclick = () => show(index));

  document.onkeydown = event => {
    if ($index >= 0 && event.code === 'Escape') {
      hide();
    }
    if ($index >= 0 && event.code === 'ArrowLeft') {
      show(($index - 1 + IMAGES.length) % IMAGES.length);
    }
    if ($index >= 0 && event.code === 'ArrowRight') {
      show(($index + 1) % IMAGES.length);
    }
  };
}
