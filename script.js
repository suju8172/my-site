// 1. Находим обе кнопки в документе по их ID
const themeButton = document.getElementById('themeBtn');
const mainActionButton = document.getElementById('mainActionBtn');

// 2. Логика для кнопки в правом верхнем углу (переключение темы)
themeButton.addEventListener('click', function() {
    // Просто включаем или выключаем темный класс у body
    document.body.classList.toggle('dark-theme');
});

// 3. Логика для главной кнопки "Связаться со мной"
mainActionButton.addEventListener('click', function() {
    // Вместо старого спиннера просто перенаправляем человека по ссылке
    // Например, на твой личный ТГ аккаунт для связи:
    window.open('https://t.me/kuku_k_k', '_blank');
});