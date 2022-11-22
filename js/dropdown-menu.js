const buttons = document.querySelectorAll('.arrow');
const item = document.querySelector('.burger-menu__item');
const list = document.querySelector('.burger-submenu__list');

for (const button of buttons) {
  button.addEventListener('click', () => {
    button.classList.toggle('active');
    list.classList.toggle('active');
    item.classList.toggle('active');
  });
}
