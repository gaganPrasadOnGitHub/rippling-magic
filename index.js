const rippleContainer = document.querySelector('.ripple-container');

rippleContainer.addEventListener('click', function (e) {
  const ripple = document.createElement('div');
  ripple.classList.add('ripple');

  const x = e.clientX - rippleContainer.offsetLeft;
  const y = e.clientY - rippleContainer.offsetTop;

  ripple.style.left = `${x}px`;
  ripple.style.top = `${y}px`;

  rippleContainer.appendChild(ripple);

  setTimeout(() => {
    ripple.remove();
  }, 600);
});
