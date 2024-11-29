// Função para mover os cards para a direita
document.getElementById('next-btn').addEventListener('click', function() {
    const container = document.querySelector('.cards-container');
    const cardWidth = document.querySelector('.card').offsetWidth + 20; // Largura do card + gap
    container.scrollBy({ left: cardWidth, behavior: 'smooth' }); // Suaviza a rolagem para a direita
  });
  
  // Função para mover os cards para a esquerda
  document.getElementById('prev-btn').addEventListener('click', function() {
    const container = document.querySelector('.cards-container');
    const cardWidth = document.querySelector('.card').offsetWidth + 20; // Largura do card + gap
    container.scrollBy({ left: -cardWidth, behavior: 'smooth' }); // Suaviza a rolagem para a esquerda
  });