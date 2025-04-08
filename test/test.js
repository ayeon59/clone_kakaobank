const parent = document.querySelector('.nav-bar');
const child = document.querySelector('.nav-list-items');

child.addEventListener('mouseenter', () => {
  parent.style.backgroundColor = 'red';
});

child.addEventListener('mouseleave', () => {
  parent.style.backgroundColor = '';
});
