document.querySelectorAll('.tabs-triggers_item').forEach((item) =>
  item.addEventListener('click', function (e) {
    e.preventDefault();
    const id = e.target.getAttribute('href').replace('#', '');
    document
      .querySelectorAll('.tabs-triggers_item')
      .forEach((child) => child.classList.remove('tabs-triggers_item--active'));
    document
      .querySelectorAll('.tabs-content_item')
      .forEach((child) => child.classList.remove('tabs-content_item--active'));
    item.classList.add('tabs-triggers_item--active');
    document.getElementById(id).classList.add('tabs-content_item--active');
  }),
);
document.querySelector('.tabs-triggers_item').click();
