const colorCards = document.querySelectorAll('.premium-color-card');
const previewBox = document.getElementById('liveColorPreview');
const colorName = document.getElementById('colorName');
const colorDescription = document.getElementById('colorDescription');
const previewProduct = document.getElementById('previewProduct');

colorCards.forEach(card => {
  card.addEventListener('click', () => {
    const color = card.getAttribute('data-color');
    const title = card.querySelector('h3').innerText;
    const finish = card.querySelector('p').innerText;
    const tag = card.querySelector('.tag').innerText;

    previewBox.style.background = color;
    previewBox.style.background = color;
    colorName.innerText = title;
    colorDescription.innerText = `${finish} • ${tag}`;

    colorCards.forEach(item => {
      item.style.border = '1px solid rgba(255,255,255,0.08)';
      item.style.transform = 'scale(1)';
    });

    card.style.border = `2px solid ${color}`;
    card.style.transform = 'translateY(-10px) scale(1.02)';
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

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    const targetId = this.getAttribute('href');
    const targetSection = document.querySelector(targetId);

    if (targetSection) {
      window.scrollTo({
        top: targetSection.offsetTop - 40,
        behavior: 'smooth'
      });
    }
  });
});