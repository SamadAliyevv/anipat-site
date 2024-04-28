const navbar = document.getElementById('sticky-header');
let top1 = navbar.offsetTop;
function stickynavbar() {
  if (window.scrollY > top1) {    
    navbar.classList.add('sticky');
  } else {
    navbar.classList.remove('sticky');    
  }
}
window.addEventListener('scroll', stickynavbar);