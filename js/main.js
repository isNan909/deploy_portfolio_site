window.onload = (_e) => {
  const openMenu = document.getElementById('open-menu');
  const closeMenu = document.getElementById('close-menu');
  const overlayDiv = document.querySelector('.overlaymenu');
  openMenu.onclick = function () {
    overlayDiv.classList.add('show');
  };
  closeMenu.onclick = function () {
    overlayDiv.classList.remove('show');
  };
};
