const hamburguer = document.getElementById('Burguer');
const navMenu = document.querySelector('.navbar-menu');

// Escutando ações de click
hamburguer.addEventListener('click', () => {
  hamburguer.classList.toggle('active');
  navMenu.classList.toggle('active');
});

document.querySelectorAll('.navbar-link').forEach((n) =>
  n.addEventListener('click', () => {
    hamburguer.classList.remove('active');
    navMenu.classList.remove('active');
  })
);
