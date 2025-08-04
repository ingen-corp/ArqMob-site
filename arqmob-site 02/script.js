  
// Controle do envio do formulário
document.getElementById('contactForm').addEventListener('submit', function(event) {
  event.preventDefault();
  
  const nome = document.getElementById('nome').value.trim();
  const email = document.getElementById('email').value.trim();
  const mensagem = document.getElementById('mensagem').value.trim();
  const formMessage = document.getElementById('formMessage');
  
  if (nome && email && mensagem) {
    formMessage.style.color = 'green';
    formMessage.textContent = `Obrigado pelo contato, ${nome}! Responderemos em breve.`;
    this.reset();
  } else {
    formMessage.style.color = 'red';
    formMessage.textContent = 'Por favor, preencha todos os campos.';
  }
});

// Controle do menu responsivo
const menuToggle = document.querySelector('.menu-toggle');
const menu = document.querySelector('.menu');

menuToggle.addEventListener('click', () => {
  menu.classList.toggle('show');
});