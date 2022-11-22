const buttons = document.querySelectorAll('.burger-menu__item');

for (const button of buttons) {
  button.addEventListener('click', () => {
    button.classList.toggle('active');
  });
}
