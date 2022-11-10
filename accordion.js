const servicesItems = document.querySelectorAll('[data-services-item]');

servicesItems.forEach((item) => {
  const button = item.querySelector('[data-services-button]');
  const icon = item.querySelector('[data-services-button-icon]');
  const content = item.querySelector('[data-services-content]');

  window.addEventListener('resize', () => {
    if (content.getAttribute('data-services-content') === 'open') {
      content.style.height = 'auto';

      const contentHeight = content.scrollHeight;
      content.style.height = `${contentHeight}px`;
    }
  });

  button.addEventListener('click', () => {
    if (content.getAttribute('data-services-content') !== 'open') {
      const contentHeight = content.scrollHeight;

      icon.setAttribute('data-services-button-icon', 'open');
      content.setAttribute('data-services-content', 'open');
      content.style.height = `${contentHeight}px`;
    } else {
      icon.setAttribute('data-services-button-icon', 'closed');
      content.setAttribute('data-services-content', 'closed');
      content.style.height = '0';
    }
  });
});
