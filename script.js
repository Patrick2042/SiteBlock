// Scroll suave
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if(target){
          target.scrollIntoView({
              behavior: 'smooth'
          });
      }
  });
});

// Animação ao rolar a página
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px"
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
      if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
      }
  });
}, observerOptions);

document.querySelectorAll('.service-card').forEach(card => {
  card.style.transition = 'all 0.6s ease-out';
  observer.observe(card);
});

// Menu Hambúrguer
const hamburger = document.getElementById('hamburger');
const menu = document.getElementById('menu');

hamburger.addEventListener('click', () => {
  menu.classList.toggle('active');
});

// Efeito de digitação no rodapé
const teamMembers = [
  'Líder: Pedro Ewerton',
  'Pablo Costa',
  'Patrick Barros',
  'Kelly Cadete',
  'Gustavo Quaresma',
  'Renan Silva'
];

const teamList = document.getElementById('team-list');
let memberIndex = 0;
let charIndex = 0;

function typeEffect() {
  if (memberIndex < teamMembers.length) {
      if (charIndex < teamMembers[memberIndex].length) {
          teamList.textContent = teamMembers[memberIndex].substring(0, charIndex + 1);
          charIndex++;
          setTimeout(typeEffect, 100);
      } else {
          charIndex = 0;
          memberIndex++;
          setTimeout(typeEffect, 1000);
      }
  } else {
      // Reinicia a animação
      memberIndex = 0;
      setTimeout(typeEffect, 1000);
  }
}

typeEffect();

// Mudança de estilo no scroll do cabeçalho
window.addEventListener('scroll', () => {
  const header = document.querySelector('.header');
  if (window.scrollY > 50) {
      header.classList.add('scrolled');
  } else {
      header.classList.remove('scrolled');
  }
});
