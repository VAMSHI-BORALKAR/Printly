const colorCards = document.querySelectorAll('.color-card');
const previewProduct = document.getElementById('previewProduct');

colorCards.forEach(card => {
  card.addEventListener('click', () => {
    const selectedColor = card.getAttribute('data-color');
    previewProduct.style.background = selectedColor;
  });
});

const faqQuestions = document.querySelectorAll('.faq-question');

faqQuestions.forEach(question => {
  question.addEventListener('click', () => {
    const answer = question.nextElementSibling;

    if (answer.style.display === 'block') {
      answer.style.display = 'none';
    } else {
      answer.style.display = 'block';
    }
  });
});

const cursorGlow = document.querySelector('.cursor-glow');

document.addEventListener('mousemove', (e) => {
  cursorGlow.style.left = e.pageX + 'px';
  cursorGlow.style.top = e.pageY + 'px';
});