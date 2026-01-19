const buttonfuck = document.getElementById('fuckBtn');
const buttonclear = document.getElementById('clearBtn');
const floatingContainer = document.getElementById('floatingContainer');
const body = document.body;
    
const myPhotos = [
    'photo/photo_1.jpg',
    'photo/photo_2.jpg',
    'photo/photo_3.jpg',
    'photo/photo_4.jpg',
    'photo/photo_5.jpg',
    'photo/photo_6.jpg',
    'photo/photo_7.jpg',
    'photo/photo_8.jpg',
    'photo/photo_9.jpg',
    'photo/photo_10.jpg',
    'photo/photo_11.jpg',
    'photo/photo_12.jpg',
    'photo/photo_13.jpg',
    'photo/photo_14.jpg',
    'photo/photo_15.jpg',
    'photo/photo_16.jpg',
    'photo/photo_17.jpg',
    'photo/photo_18.jpg',
    'photo/photo_19.jpg',
    'photo/photo_20.jpg',
    'photo/photo_21.jpg',
    'photo/photo_22.jpg',
    'photo/photo_23.jpg',
    'photo/photo_24.jpg',
    'photo/photo_25.jpg',
    'photo/photo_26.jpg',
    'photo/photo_27.jpg',
    'photo/photo_28.jpg',
    'photo/photo_29.jpg',
    'photo/photo_30.jpg',
    'photo/photo_31.jpg',
    'photo/photo_32.jpg',
    'photo/photo_33.jpg',
    'photo/photo_34.jpg',
    'photo/photo_35.jpg',
    'photo/photo_36.jpg',
    'photo/photo_37.jpg',
    'photo/photo_38.jpg',
    'photo/photo_39.jpg',
    'photo/photo_40.jpg',
    'photo/photo_41.jpg',
    'photo/photo_42.jpg',
    'photo/photo_43.jpg',
    'photo/photo_44.jpg',
    'photo/photo_45.jpg',
    'photo/photo_46.jpg',
    'photo/photo_47.jpg',
    'photo/photo_48.jpg',
    'photo/photo_49.jpg',
    'photo/photo_50.jpg',
    'photo/photo_51.jpg',
    'photo/photo_52.jpg',
    'photo/photo_53.jpg',
    'photo/photo_54.jpg'
];

for (let i = 1; i <= 54; i++) {
    myPhotos.push(`photo/photo_${i}.jpg`);
}

buttonclear.addEventListener('click', () => {
    floatingContainer.innerHTML = '';
    body.classList.remove('body-with-pattern');
});

buttonfuck.addEventListener('click', () => {
    // Включаем паттерн
    body.classList.add('body-with-pattern');

    // Ограничиваем количество, чтобы телефон не завис
    // Если нажать много раз, очищаем предыдущие, чтобы не крашнуть браузер
    if (floatingContainer.children.length > 100) {
        floatingContainer.innerHTML = ''; 
    }

    // Создаем сообщения
    for (let i = 0; i < 25; i++) { 
        createFloatingMessage(i);
    }
});

function createFloatingMessage(index) {
    const messageWrapper = document.createElement('div');
    messageWrapper.className = 'floating-message';
    
    // Текст
    const textNode = document.createTextNode('Пошла нахуй🖕');
    messageWrapper.appendChild(textNode);

    // Картинка
    const img = document.createElement('img');
    const randomPhotoUrl = myPhotos[Math.floor(Math.random() * myPhotos.length)];
    img.src = randomPhotoUrl;
    img.className = 'floating-image';
    
    // Если картинка не найдена, скрываем иконку ошибки
    img.onerror = function() {
        this.style.display = 'none';
    };

    messageWrapper.appendChild(img);

    // Добавляем временно в контейнер, чтобы узнать реальные размеры
    floatingContainer.appendChild(messageWrapper);

    // ВЫЧИСЛЕНИЕ КООРДИНАТ ДЛЯ ЛЮБОГО ЭКРАНА
    // Ширина экрана минус ширина самой карточки (примерно 140px)
    const maxWidth = window.innerWidth - 150; 
    const maxHeight = window.innerHeight - 150;

    // Защита от отрицательных значений на очень узких экранах
    const safeWidth = maxWidth > 0 ? maxWidth : 10;
    const safeHeight = maxHeight > 0 ? maxHeight : 10;

    const randomX = Math.random() * safeWidth;
    const randomY = Math.random() * safeHeight;

    messageWrapper.style.left = `${randomX}px`;
    messageWrapper.style.top = `${randomY}px`;
    
    // Случайная задержка для естественного эффекта "взрыва"
    messageWrapper.style.animationDelay = `${Math.random() * 0.5}s`;
}