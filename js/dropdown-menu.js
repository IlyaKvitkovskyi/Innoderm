const arrow1 = document.querySelectorAll('.arrow1');
const item1 = document.querySelector('.burger-menu__item1');
const list1 = document.querySelector('.burger-submenu__list1');

for (const arrow of arrow1) {
  arrow.addEventListener('click', () => {
    arrow.classList.toggle('active');
    list1.classList.toggle('active');
    item1.classList.toggle('active');
  });
}

const arrow2 = document.querySelectorAll('.arrow2');
const item2 = document.querySelector('.burger-menu__item2');
const list2 = document.querySelector('.burger-submenu__list2');

for (const arrow of arrow2) {
  arrow.addEventListener('click', () => {
    arrow.classList.toggle('active');
    list2.classList.toggle('active');
    item2.classList.toggle('active');
  });
}

const arrow3 = document.querySelectorAll('.arrow3');
const item3 = document.querySelector('.burger-menu__item3');
const list3 = document.querySelector('.burger-submenu__list3');

for (const arrow of arrow3) {
  arrow.addEventListener('click', () => {
    arrow.classList.toggle('active');
    list3.classList.toggle('active');
    item3.classList.toggle('active');
  });
}

const arrow4 = document.querySelectorAll('.arrow4');
const item4 = document.querySelector('.burger-menu__item4');
const list4 = document.querySelector('.burger-submenu__list4');

for (const arrow of arrow4) {
  arrow.addEventListener('click', () => {
    arrow.classList.toggle('active');
    list4.classList.toggle('active');
    item4.classList.toggle('active');
  });
}
