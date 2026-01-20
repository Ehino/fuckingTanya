const buttonfuck = document.getElementById('fuckBtn');
const buttonclear = document.getElementById('clearBtn');
const floatingContainer = document.getElementById('floatingContainer');
const body = document.body;
    
const myPhotos = [
    'photo/background/photo_1.jpg',
    'photo/background/photo_2.jpg',
    'photo/background/photo_3.jpg',
    'photo/background/photo_4.jpg',
    'photo/background/photo_5.jpg',
    'photo/background/photo_6.jpg',
    'photo/background/photo_7.jpg',
    'photo/background/photo_8.jpg',
    'photo/background/photo_9.jpg',
    'photo/background/photo_10.jpg',
    'photo/background/photo_11.jpg',
    'photo/background/photo_12.jpg',
    'photo/background/photo_13.jpg',
    'photo/background/photo_14.jpg',
    'photo/background/photo_15.jpg',
    'photo/background/photo_16.jpg',
    'photo/background/photo_17.jpg',
    'photo/background/photo_18.jpg',
    'photo/background/photo_19.jpg',
    'photo/background/photo_20.jpg',
    'photo/background/photo_21.jpg',
    'photo/background/photo_22.jpg',
    'photo/background/photo_23.jpg',
    'photo/background/photo_24.jpg',
    'photo/background/photo_25.jpg',
    'photo/background/photo_26.jpg',
    'photo/background/photo_27.jpg',
    'photo/background/photo_28.jpg',
    'photo/background/photo_29.jpg',
    'photo/background/photo_30.jpg',
    'photo/background/photo_31.jpg',
    'photo/background/photo_32.jpg',
    'photo/background/photo_33.jpg',
    'photo/background/photo_34.jpg',
    'photo/background/photo_35.jpg',
    'photo/background/photo_36.jpg',
    'photo/background/photo_37.jpg',
    'photo/background/photo_38.jpg',
    'photo/background/photo_39.jpg',
    'photo/background/photo_40.jpg',
    'photo/background/photo_41.jpg',
    'photo/background/photo_42.jpg',
    'photo/background/photo_43.jpg',
    'photo/background/photo_44.jpg',
    'photo/background/photo_45.jpg',
    'photo/background/photo_46.jpg',
    'photo/background/photo_47.jpg',
    'photo/background/photo_48.jpg',
    'photo/background/photo_49.jpg',
    'photo/background/photo_50.jpg',
    'photo/background/photo_51.jpg',
    'photo/background/photo_52.jpg',
    'photo/background/photo_53.jpg',
    'photo/background/photo_54.jpg'
]; 

const memoryData = [
    /* {
        date: 'Поездка на море',
        text: 'Было круто 🌊',
        gallery: [
            { type: 'video', src: 'photo/sea_video.mp4' }, // Обложка - видео
            { type: 'image', src: 'photo/sea_1.jpg' }
        ]
    } */
    {
        date: 'Неизвестно',
        text: '1. Кама и Аня',
        gallery: [
            {type: 'image', src: 'photo/notphoto.jpg'}
        ]
    },
    {
        date: 'Неизвестно',
        text: '2. Ваня',
        gallery: [
            {type: 'image', src: 'photo/notphoto.jpg'}
        ]
    },
    {
        date: 'Неизвестно',
        text: '3. Вася',
        gallery: [
            {type: 'image', src: 'photo/notphoto.jpg'}
        ]
    },
    {
        date: 'Неизвестно',
        text: '4. Апсент',
        gallery: [
            {type: 'image', src: 'photo/notphoto.jpg'}
        ]
    },
    {
        date: 'Неизвестно',
        text: '5. Вася Ваня',
        gallery: [
            {type: 'image', src: 'photo/notphoto.jpg'}
        ]
    },
    {
        date: 'Неизвестно',
        text: '6. Вася Ваня',
        gallery: [
            {type: 'image', src: 'photo/notphoto.jpg'}
        ]
    },
    {
        date: 'Неизвестно',
        text: '7. Колян',
        gallery: [
            {type: 'image', src: 'photo/notphoto.jpg'}
        ]
    },
    {
        date: 'Неизвестно',
        text: '8. Угон',
        gallery: [
            {type: 'image', src: 'photo/notphoto.jpg'}
        ]
    },
    {
        date: 'Неизвестно',
        text: '9. Проводы Тани',
        gallery: [
            {type: 'image', src: 'photo/notphoto.jpg'}
        ]
    },
    {
        date: 'Неизвестно',
        text: '10. Телефон на беседке',
        gallery: [
            {type: 'image', src: 'photo/notphoto.jpg'}
        ]
    },
    {
        date: 'Неизвестно',
        text: '11. Вася в подъезде',
        gallery: [
            {type: 'image', src: 'photo/notphoto.jpg'}
        ]
    },
    {
        date: 'Неизвестно',
        text: '12. Чеша',
        gallery: [
            {type: 'image', src: 'photo/notphoto.jpg'}
        ]
    },
    {
        date: 'Неизвестно',
        text: '13. Нурик',
        gallery: [
            {type: 'image', src: 'photo/notphoto.jpg'}
        ]
    },
    {
        date: '13.09.25',
        text: '14. Новые приключения с Настей и Абу',
        gallery: [
            {type: 'image', src: 'photo/memory/photo_14_1.jpg'},
            {type: 'image', src: 'photo/memory/photo_14_2.jpg'},
            {type: 'video', src: 'photo/memory/photo_14_3.mp4'}
        ]
    },
    {
        date: '14.09.25',
        text: '15. Без названия',
        gallery: [
            {type: 'image', src: 'photo/notphoto.jpg'}
        ]
    },
    {
        date: '15.09.25',
        text: '16. Без названия',
        gallery: [
            {type: 'image', src: 'photo/notphoto.jpg'}
        ]
    },
    {
        date: '16.09.25',
        text: '17. Без названия',
        gallery: [
            {type: 'image', src: 'photo/memory/photo_17_1.jpg'}
        ]
    },
    {
        date: 'Неизвестно',
        text: '18. Анти-посвят',
        gallery: [
            {type: 'image', src: 'photo/notphoto.jpg'}
        ]
    },
    {
        date: '26.09.25',
        text: '19. Без названия',
        gallery: [
            {type: 'image', src: 'photo/notphoto.jpg'}
        ]
    },
    {
        date: '27.09.25',
        text: '20. Максим приехал',
        gallery: [
            {type: 'video', src: 'photo/memory/photo_20_1.mp4'},
            {type: 'video', src: 'photo/memory/photo_20_2.mp4'},
            {type: 'video', src: 'photo/memory/photo_20_3.mp4'},
            {type: 'video', src: 'photo/memory/photo_20_4.mp4'},
            {type: 'video', src: 'photo/memory/photo_20_5.mp4'}
        ]
    },
    {
        date: 'Неизвестно',
        text: '21. Подвал кальянка',
        gallery: [
            {type: 'image', src: 'photo/notphoto.jpg'}
        ]
    },
    {
        date: '30.09.25',
        text: '22. Елка на крыше',
        gallery: [
            {type: 'image', src: 'photo/memory/photo_22_1.jpg'},
            {type: 'image', src: 'photo/memory/photo_22_2.jpg'}
        ]
    },
    {
        date: 'Неизвестно',
        text: '23. Первый раз с Катей',
        gallery: [
            {type: 'image', src: 'photo/notphoto.jpg'}
        ]
    },
    {
        date: 'Неизвестно',
        text: '24. Крокодил',
        gallery: [
            {type: 'image', src: 'photo/notphoto.jpg'}
        ]
    },
    {
        date: 'Неизвестно',
        text: '25. Ася 7/10',
        gallery: [
            {type: 'image', src: 'photo/notphoto.jpg'}
        ]
    },
    {
        date: 'Неизвестно',
        text: '26. Шоколад в посте',
        gallery: [
            {type: 'image', src: 'photo/notphoto.jpg'}
        ]
    },
    {
        date: '26.10.25',
        text: '27. Пьяный Абу',
        gallery: [
            {type: 'image', src: 'photo/memory/photo_27_1.jpg'},
            {type: 'image', src: 'photo/memory/photo_27_2.jpg'}
        ]
    },
    {
        date: '09.11.25',
        text: '28. Молот тора',
        gallery: [
            {type: 'video', src: 'photo/memory/photo_28_1.mp4'},
            {type: 'video', src: 'photo/memory/photo_28_2.mp4'},
            {type: 'video', src: 'photo/memory/photo_28_3.mp4'},
            {type: 'video', src: 'photo/memory/photo_28_4.mp4'}
        ]
    },
    {
        date: 'Неизвестно',
        text: '29. Размытые тетрадки',
        gallery: [
            {type: 'image', src: 'photo/notphoto.jpg'}
        ]
    },
    {
        date: 'Неизвестно',
        text: '30. Кинотеатр',
        gallery: [
            {type: 'image', src: 'photo/notphoto.jpg'}
        ]
    },
    {
        date: 'Неизвестно',
        text: '31. Кричащая Анастасия',
        gallery: [
            {type: 'image', src: 'photo/notphoto.jpg'}
        ]
    },
    {
        date: '01.01.26',
        text: '32. Новый год',
        gallery: [
            {type: 'image', src: 'photo/notphoto.jpg'}
        ]
    },
    {
        date: '07.01.26',
        text: '33. Пекин на халяву',
        gallery: [
            {type: 'image', src: 'photo/notphoto.jpg'}
        ]
    },
    {
        date: '10.01.26',
        text: '34. С Чешей в махито',
        gallery: [
            {type: 'image', src: 'photo/notphoto.jpg'}
        ]
    }
];

for (let i = 1; i <= 15; i++) {
    myPhotos.push(`photo/background/photo_${i}.jpg`);
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
    if (floatingContainer.children.length >= 10) {
        floatingContainer.innerHTML = ''; 
    }

    // Создаем сообщения
    for (let i = 0; i < 10; i++) { 
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

    if (floatingContainer.children.length >= 15) {
        floatingContainer.removeChild(floatingContainer.firstChild);
    }
    
    // Случайная задержка для естественного эффекта "взрыва"
    messageWrapper.style.animationDelay = `${Math.random() * 0.5}s`;
}

let lastScrollPosition = 0;
const scrollThreshold = 500; // Через сколько пикселей скролла появится новое фото

window.addEventListener('scroll', () => {
    const currentScrollPosition = window.pageYOffset;
    
    // Проверяем, проскроллили ли мы достаточное расстояние
    if (Math.abs(currentScrollPosition - lastScrollPosition) > scrollThreshold) {
        lastScrollPosition = currentScrollPosition;
        
        // Создаем 1-2 случайных фото
        for (let i = 0; i < 2; i++) {
            createFloatingMessage();
        }
    }
});


// Переменные для работы слайдера
let currentMemoryIndex = 0; // Какую карточку смотрим
let currentSlideIndex = 0;  // Какое фото внутри карточки смотрим

/* --- ОТРИСОВКА КАРТОЧЕК --- */
function renderMemories() {
    const grid = document.getElementById('memoryGrid');
    if (!grid) return;

    memoryData.forEach((item, index) => {
        const card = document.createElement('div');
        card.className = 'memory-card';
        
        // Берем ПЕРВЫЙ элемент как обложку
        const coverMedia = item.gallery[0];
        let mediaHtml = '';
        let videoIcon = '';

        if (coverMedia.type === 'video') {
            // Если обложка видео - показываем видео, но без звука
            mediaHtml = `<video src="${coverMedia.src}" muted loop playsinline onmouseover="this.play()" onmouseout="this.pause()"></video>`;
            videoIcon = `<div class="video-indicator">▶</div>`; // Иконка Play
        } else {
            mediaHtml = `<img src="${coverMedia.src}" alt="Memory" loading="lazy">`;
        }

        // Добавляем событие onclick, передавая индекс карточки
        card.onclick = () => openModal(index);

        card.innerHTML = `
            <div class="image-wrapper">
                ${mediaHtml}
                ${videoIcon}
            </div>
            <div class="memory-info">
                <span class="memory-date">${item.date}</span>
                <p class="memory-text">${item.text}</p>
                <span style="font-size:0.8rem; color:#888;">Фотографий: ${item.gallery.length}</span>
            </div>
        `;

        grid.appendChild(card);
    });
}

/* --- ЛОГИКА МОДАЛЬНОГО ОКНА --- */
const modal = document.getElementById('memoryModal');
const modalContainer = document.getElementById('modalMediaContainer');
const captionText = document.getElementById('modalCaption');
const counterText = document.getElementById('slideCounter');
const closeBtn = document.querySelector('.close-modal');

// Открыть окно
function openModal(index) {
    currentMemoryIndex = index;
    currentSlideIndex = 0; // Всегда начинаем с первого фото
    modal.style.display = "flex";
    showSlide(currentSlideIndex);
}

// Закрыть окно
closeBtn.onclick = () => {
    modal.style.display = "none";
    modalContainer.innerHTML = ''; // Очищаем плеер (чтобы остановить видео)
};

// Закрыть по клику вне картинки
window.onclick = (event) => {
    if (event.target == modal) {
        modal.style.display = "none";
        modalContainer.innerHTML = '';
    }
};

// Листать слайды (+1 или -1)
window.changeSlide = function(n) {
    showSlide(currentSlideIndex += n);
}

// Главная функция показа слайда
function showSlide(n) {
    const gallery = memoryData[currentMemoryIndex].gallery;

    // Зацикливание (если конец - идем в начало)
    if (n >= gallery.length) currentSlideIndex = 0;
    if (n < 0) currentSlideIndex = gallery.length - 1;

    const mediaItem = gallery[currentSlideIndex];
    
    // Очистка и создание нового элемента
    modalContainer.innerHTML = '';

    if (mediaItem.type === 'video') {
        // Видео в модалке - с контроллерами и звуком
        modalContainer.innerHTML = `
            <video controls autoplay class="modal-video">
                <source src="${mediaItem.src}" type="video/mp4">
            </video>`;
    } else {
        // Картинка
        modalContainer.innerHTML = `<img src="${mediaItem.src}" class="modal-image">`;
    }

    // Обновляем текст
    captionText.innerHTML = memoryData[currentMemoryIndex].text;
    counterText.innerHTML = `${currentSlideIndex + 1} из ${gallery.length}`;
}

// Запуск
document.addEventListener('DOMContentLoaded', renderMemories);

// Переменные для отслеживания касаний
let touchstartX = 0;
let touchendX = 0;
let touchstartY = 0;
let touchendY = 0;

// Функция определения жеста
function handleGesture() {
    const swipeThreshold = 50; // Минимальная дистанция для свайпа в пикселях
    const xDiff = touchendX - touchstartX;
    const yDiff = touchendY - touchstartY;

    // Проверяем, был ли свайп горизонтальным или вертикальным
    if (Math.abs(xDiff) > Math.abs(yDiff)) {
        // Горизонтальный свайп
        if (Math.abs(xDiff) > swipeThreshold) {
            if (xDiff < 0) {
                // Свайп влево — следующее фото
                changeSlide(1);
            } else {
                // Свайп вправо — предыдущее фото
                changeSlide(-1);
            }
        }
    } else {
        // Вертикальный свайп
        if (Math.abs(yDiff) > swipeThreshold && yDiff > 50) {
            // Свайп вниз — закрыть модалку (вернуться назад)
            const modal = document.getElementById('memoryModal');
            const modalContainer = document.getElementById('modalMediaContainer');
            modal.style.display = "none";
            modalContainer.innerHTML = '';
        }
    }
}

// Слушатели событий для модального окна
const modalElement = document.getElementById('memoryModal');

modalElement.addEventListener('touchstart', e => {
    touchstartX = e.changedTouches[0].screenX;
    touchstartY = e.changedTouches[0].screenY;
}, {passive: true});

modalElement.addEventListener('touchend', e => {
    touchendX = e.changedTouches[0].screenX;
    touchendY = e.changedTouches[0].screenY;
    handleGesture();
}, {passive: true});

// Блокировка прокрутки страницы при свайпах внутри модалки
modalElement.addEventListener('touchmove', e => {
    if (modalElement.style.display === "flex") {
        e.preventDefault();
    }
}, {passive: false});