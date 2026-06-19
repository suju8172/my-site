// Ждём, пока вся страница полностью загрузится
document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Эффект плавного появления карточек при старте (как на дорогих сайтах)
    const cards = document.querySelectorAll('.card');
    cards.forEach((card, index) => {
        // Изначально прячем карточки и смещаем вниз
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'all 0.6s ease-out';
        
        // Включаем появление с небольшой задержкой для каждой карточки (эффект волны)
        setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, index * 100); 
    });

    // 2. Интерактив для карточек-ссылок
    const linkCards = document.querySelectorAll('.link-card');
    linkCards.forEach(card => {
        card.addEventListener('click', (e) => {
            // Создаем красивый мимолетный эффект вспышки при клике
            card.style.backgroundColor = '#2c4c35';
            setTimeout(() => {
                card.style.backgroundColor = '#17241b';
            }, 200);
        });
    });

    console.log("SUJU // Script loaded. Готов к работе.");
});
