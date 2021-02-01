(() => {
  const navbar = document.querySelector('#navbar');

  const nav = navbar.querySelector('#nav');
  const navButton = navbar.querySelector('#menu-button');

  let height = nav.offsetHeight;

  if (window.innerWidth < 576) nav.style.height = 0;

  let shown = false;
  navButton.onclick = () => {
    if (shown) nav.style.height = 0;
    else nav.style.height = height + 'px';

    shown = !shown;
  };

  window.onresize = () => {
    nav.style.height = 'auto';
    height = nav.offsetHeight;

    if (!shown && window.innerWidth < 576) nav.style.height = 0;
  };

  const dropdown = navbar.querySelector('#dropdown');
  const dropdownButton = navbar.querySelector('#dropdown-button');
  dropdownButton.onclick = () => {
    dropdown.classList.toggle('show');
  };
})();
