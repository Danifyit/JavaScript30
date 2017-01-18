
const panels = document.querySelectorAll('.panel');

function toggleOpen () {
  this.classList.toggle('open');
}

function transitionEnd (e) {
  if (e.propertyName.includes('flex')) {
    // e.target.classList.toggle('is-open-active');
  this.classList.toggle('is-open-active');
  }

  this.classList.toggle('is-open-active');
}

panels.forEach(panel => {
  panel.addEventListener('click', toggleOpen);
});

panels.forEach(panel => {
  panel.addEventListener('transitionend', transitionEnd);
});
