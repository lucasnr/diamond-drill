(() => {
  const carousel = document.querySelector('#banner #banner-carousel');
  const items = carousel.querySelectorAll('.carousel-item');
  const total = items.length;

  carousel.style.width = total + '00%';

  const totals = carousel.querySelectorAll('.carousel-item-controls .total');
  totals.forEach((item) => (item.textContent = total));

  items.forEach((item, index) => {
    item.querySelector('.current').textContent = index + 1;
  });

  let current = 0;

  const prev = () => {
    if (current === 0) return;
    carousel.style.transform =
      'translateX(' + (-100 / total) * --current + '%)';
  };

  const next = () => {
    if (current === total - 1) return;
    carousel.style.transform =
      'translateX(' + (-100 / total) * ++current + '%)';
  };

  const prevButtons = carousel.querySelectorAll(
    '.carousel-item-controls button:first-of-type'
  );
  const nextButtons = carousel.querySelectorAll(
    '.carousel-item-controls button:last-of-type'
  );
  prevButtons.forEach((button) => (button.onclick = prev));
  nextButtons.forEach((button) => (button.onclick = next));
})();
