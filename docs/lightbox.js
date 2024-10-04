if (!('ontouchstart' in window)) {
  const IMAGES = document.querySelectorAll('#gallery img');
  const LIGHTBOX = document.getElementById('lightbox');
  const IMAGE = LIGHTBOX.querySelector('img');

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
