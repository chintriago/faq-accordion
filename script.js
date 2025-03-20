const faqItems = document.querySelectorAll('.faq-item');
const faqAnswers = document.querySelectorAll('.faq-answer');
const toggleIcons = document.querySelectorAll('.toggle-icon');

for (let i = 0; i < faqItems.length; i++) {
    faqItems[i].addEventListener('click', () => {
        faqAnswers[i].classList.toggle('active');
        toggleIcons[i].src = 'assets/images/icon-minus.svg';
        if (!faqAnswers[i].classList.contains('active')) {
            toggleIcons[i].src = 'assets/images/icon-plus.svg';
        }
    });
}