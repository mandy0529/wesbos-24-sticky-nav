const nav = document.querySelector('#main');
let topOfNav = nav.offsetTop;

function handleScroll() {
  if (window.scrollY >= topOfNav) {
    document.body.style.paddingTop = nav.offsetHeight + 'px';
    document.body.classList.add('fixed-nav');
  }
  document.body.classList.remove('fixed-nav');
  document.body.style.paddingTop = 0;
}

window.addEventListener('scroll', handleScroll);
