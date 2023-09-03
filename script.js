const navbar = document.querySelector('.navbar-nav');
const overlay = document.getElementById('overlay');
const hm = document.querySelector('#hamburger-menu');

window.addEventListener('load', () => {
  const loading = document.querySelector('.loading');

  setTimeout(() => {
    loading.style.display = 'none';}, 1600);
  })

function activeBar() {
  if (navbar.style.top === '6%') {
    navbar.style.top = '-100%';
    overlay.style.display = 'none';
  } else {
    navbar.style.top = '6%';
    overlay.style.display = 'block';
  }
}

function closeBar() {
  navbar.style.top = '-100%';
  overlay.style.display = 'none';
}

document.getElementById('hamburger-menu').addEventListener('click', activeBar);

document.addEventListener('click', function (e) {
  if (!hm.contains(e.target) && !navbar.contains(e.target)) {
    closeBar();
  }
})