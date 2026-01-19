const buttonfuck = document.getElementById('fuckBtn');
const buttondontfuck = document.getElementById('dontfuckBtn');
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

buttonclear.addEventListener('click', () =>{
    floatingContainer.innerHTML = '';
})

buttonfuck.addEventListener('click', () => {

    // 2. Добавляем паттерн на задний фон (если его еще нет)
    body.classList.add('body-with-pattern');

    // (Больше не меняем основную фоновую картинку body)

    // 3. Создаем 10 летающих сообщений
    for (let i = 0; i < 100; i++) {
        createFloatingMessage(i);
    }
});

/* buttondontfuck.addEventListener('click' () => {
    const randomX = Math.random() * (window.innerWidth - 140);
    const randomY = Math.random() * (window.innerHeight - 140);

    messageWrapper.style.left = `${randomX}px`;
    messageWrapper.style.top = `${randomY}px`;
})  */


// Функция для создания одного сообщения
function createFloatingMessage(index) {
    const messageWrapper = document.createElement('div');
    messageWrapper.className = 'floating-message';
    
    // Текст
    const textNode = document.createTextNode('Пошла нахуй🖕');
    messageWrapper.appendChild(textNode);

    // Картинка
    const img = document.createElement('img');
    // ВЫБИРАЕМ СЛУЧАЙНУЮ КАРТИНКУ ЗДЕСЬ:
    const randomPhotoUrl = myPhotos[Math.floor(Math.random() * myPhotos.length)];
    img.src = randomPhotoUrl;
    img.className = 'floating-image';
    messageWrapper.appendChild(img);

    // Позиция
    // (немного уменьшили границы, чтобы карточки не обрезались)
    const randomX = Math.random() * (window.innerWidth - 140);
    const randomY = Math.random() * (window.innerHeight - 140);

    messageWrapper.style.left = `${randomX}px`;
    messageWrapper.style.top = `${randomY}px`;
    
    // Задержка появления
    messageWrapper.style.animationDelay = `${index * 0.01}s`;

    floatingContainer.appendChild(messageWrapper);
}