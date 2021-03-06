/* Abriri e fechar menu ao clicar no icone: hamburger e X*/
const nav = document.querySelector('.menu-mobile')
const navdois = document.querySelector('.menu-x')
const toggle = document.querySelectorAll('nav .toggle')

for (const element of toggle) {
  element.addEventListener('click', function () {
    nav.classList.toggle('show');
    navdois.classList.toggle('show')
  })
}

/* Quando clicar em um item do menu, esconder o menu*/
const links = document.querySelectorAll('nav ul li a')

for (const link of links) {
  link.addEventListener('click', function () {
    nav.classList.remove('show')
    navdois.classList.remove('show')
  })
}