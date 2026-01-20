/* =========================================
   1. ДАННЫЕ (DATA)
   ========================================= */
const notphoto = 'photo/notphoto.jpg';

// Массив фото для фона и эффектов
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
// Заполняем массив myPhotos остальными фото (автоматически)
for (let i = 1; i <= 15; i++) {
    myPhotos.push(`photo/background/photo_${i}.jpg`);
}

// Данные для галереи (Карточки)

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
            {type: 'image', src: notphoto}
        ]
    },
    {
        date: 'Неизвестно',
        text: '2. Ваня',
        gallery: [
            {type: 'image', src: notphoto}
        ]
    },
    {
        date: 'Неизвестно',
        text: '3. Вася',
        gallery: [
            {type: 'image', src: notphoto}
        ]
    },
    {
        date: 'Неизвестно',
        text: '4. Апсент',
        gallery: [
            {type: 'image', src: notphoto}
        ]
    },
    {
        date: 'Неизвестно',
        text: '5. Вася Ваня',
        gallery: [
            {type: 'image', src: notphoto}
        ]
    },
    {
        date: 'Неизвестно',
        text: '6. Вася Ваня',
        gallery: [
            {type: 'image', src: notphoto}
        ]
    },
    {
        date: 'Неизвестно',
        text: '7. Колян',
        gallery: [
            {type: 'image', src: notphoto}
        ]
    },
    {
        date: 'Неизвестно',
        text: '8. Угон',
        gallery: [
            {type: 'image', src: notphoto}
        ]
    },
    {
        date: 'Неизвестно',
        text: '9. Проводы Тани',
        gallery: [
            {type: 'image', src: notphoto}
        ]
    },
    {
        date: 'Неизвестно',
        text: '10. Телефон на беседке',
        gallery: [
            {type: 'image', src: notphoto}
        ]
    },
    {
        date: 'Неизвестно',
        text: '11. Вася в подъезде',
        gallery: [
            {type: 'image', src: notphoto}
        ]
    },
    {
        date: 'Неизвестно',
        text: '12. Чеша',
        gallery: [
            {type: 'image', src: notphoto}
        ]
    },
    {
        date: 'Неизвестно',
        text: '13. Нурик',
        gallery: [
            {type: 'image', src: notphoto}
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
            {type: 'image', src: notphoto}
        ]
    },
    {
        date: '15.09.25',
        text: '16. Без названия',
        gallery: [
            {type: 'image', src: notphoto}
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
            {type: 'image', src: notphoto}
        ]
    },
    {
        date: '26.09.25',
        text: '19. Без названия',
        gallery: [
            {type: 'image', src: notphoto}
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
            {type: 'image', src: notphoto}
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
            {type: 'image', src: notphoto}
        ]
    },
    {
        date: 'Неизвестно',
        text: '24. Крокодил',
        gallery: [
            {type: 'image', src: notphoto}
        ]
    },
    {
        date: 'Неизвестно',
        text: '25. Ася 7/10',
        gallery: [
            {type: 'image', src: notphoto}
        ]
    },
    {
        date: 'Неизвестно',
        text: '26. Шоколад в посте',
        gallery: [
            {type: 'image', src: notphoto}
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
            {type: 'image', src: notphoto}
        ]
    },
    {
        date: 'Неизвестно',
        text: '30. Кинотеатр',
        gallery: [
            {type: 'image', src: notphoto}
        ]
    },
    {
        date: 'Неизвестно',
        text: '31. Кричащая Анастасия',
        gallery: [
            {type: 'image', src: notphoto}
        ]
    },
    {
        date: '01.01.26',
        text: '32. Новый год',
        gallery: [
            {type: 'image', src: notphoto}
        ]
    },
    {
        date: '07.01.26',
        text: '33. Пекин на халяву',
        gallery: [
            {type: 'image', src: notphoto}
        ]
    },
    {
        date: '10.01.26',
        text: '34. С Чешей в махито',
        gallery: [
            {type: 'image', src: notphoto}
        ]
    },
    {
        date: '11.01.26',
        text: '35. Между братом',
        gallery: [
            {type: 'image', src: notphoto}
        ]
    }
];

/* =========================================
   2. DOM ЭЛЕМЕНТЫ
   ========================================= */
const buttonfuck = document.getElementById('fuckBtn');
const buttonclear = document.getElementById('clearBtn');
const floatingContainer = document.getElementById('floatingContainer');
const body = document.body;
const topBtn = document.getElementById("scrollToTopBtn");
const modal = document.getElementById('memoryModal');
const modalContainer = document.getElementById('modalMediaContainer');
const captionText = document.getElementById('modalCaption');
const counterText = document.getElementById('slideCounter');


/* =========================================
   3. СОСТОЯНИЕ (STATE)
   ========================================= */
let lastScrollPosition = 0;
const scrollThreshold = 300; // Порог скролла для появления фото
let currentMemoryIndex = 0;  // Индекс текущей открытой карточки
let currentSlideIndex = 0;   // Индекс слайда в модалке

// Для свайпов
let touchstartX = 0;
let touchendX = 0;
let touchstartY = 0;
let touchendY = 0;


/* =========================================
   4. ФУНКЦИИ (LOGIC)
   ========================================= */

// --- Анимация "Послать Таню" (текст + фото) ---
buttonfuck.addEventListener('click', () => {
    body.classList.add('body-with-pattern');
    
    // Очистка если слишком много элементов
    if (floatingContainer.children.length >= 20) {
        floatingContainer.innerHTML = ''; 
    }
    // Создаем 10 карточек
    for (let i = 0; i < 10; i++) { 
        createFloatingMessage();
    }
});

// --- Очистка экрана ---
buttonclear.addEventListener('click', () => {
    floatingContainer.innerHTML = '';
    body.classList.remove('body-with-pattern');
});

// Создание элемента "Сообщение"
function createFloatingMessage() {
    const messageWrapper = document.createElement('div');
    messageWrapper.className = 'floating-message';

    // Выбираем случайную анимацию
    const animationName = Math.random() > 0.5 ? 'flyAndSpinRight' : 'flyAndSpinLeft';
    // Назначаем анимацию через стили: название, длительность (4с), тип плавности, фиксация финала
    messageWrapper.style.animation = `${animationName} 4s ease-in-out forwards`;
    
    const textNode = document.createTextNode('Пошла нахуй🖕');
    messageWrapper.appendChild(textNode);

    const img = document.createElement('img');
    const randomPhotoUrl = myPhotos[Math.floor(Math.random() * myPhotos.length)];
    img.src = randomPhotoUrl;
    img.className = 'floating-image';
    
    img.onerror = function() { this.style.display = 'none'; };
    messageWrapper.appendChild(img);
    floatingContainer.appendChild(messageWrapper);

    // Позиционирование
    setRandomPosition(messageWrapper);
    
    if (floatingContainer.children.length >= 15) {
        floatingContainer.removeChild(floatingContainer.firstChild);
    }

    setTimeout(() => {
        messageWrapper.remove();
    }, 4000);

    // Анимация задержки
    messageWrapper.style.animationDelay = `${Math.random() * 0.5}s`;
}


// Хелпер для случайных координат
function setRandomPosition(element) {
    const maxWidth = window.innerWidth - 150; 
    const maxHeight = window.innerHeight - 150;
    const safeWidth = maxWidth > 0 ? maxWidth : 10;
    const safeHeight = maxHeight > 0 ? maxHeight : 10;

    element.style.left = `${Math.random() * safeWidth}px`;
    element.style.top = `${Math.random() * safeHeight}px`;
}


/* =========================================
   5. ОБРАБОТЧИКИ СОБЫТИЙ (EVENT LISTENERS)
   ========================================= */

// --- Единый обработчик скролла (Производительность) ---
window.addEventListener('scroll', () => {
    const currentScrollPosition = window.pageYOffset || document.documentElement.scrollTop;

    // 1. Логика появления кнопки "Наверх"
    if (currentScrollPosition > 500) {
        topBtn.style.display = "block";
    } else {
        topBtn.style.display = "none";
    }

    // 2. Логика появления фоновых фото
    if (Math.abs(currentScrollPosition - lastScrollPosition) > scrollThreshold) {
        lastScrollPosition = currentScrollPosition;
        createFloatingMessage(); // Создаем 1 фото
    }
});

// Кнопка наверх
topBtn.onclick = function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
};


/* =========================================
   6. ГАЛЕРЕЯ И МОДАЛЬНОЕ ОКНО
   ========================================= */

// Отрисовка карточек при загрузке
document.addEventListener('DOMContentLoaded', renderMemories);

function renderMemories() {
    const grid = document.getElementById('memoryGrid');
    if (!grid) return;

    memoryData.forEach((item, index) => {
        const card = document.createElement('div');
        card.className = 'memory-card';
        
        const coverMedia = item.gallery[0];
        let mediaHtml = coverMedia.type === 'video' 
            ? `<video src="${coverMedia.src}" muted loop playsinline></video><div class="video-indicator">▶</div>`
            : `<img src="${coverMedia.src}" loading="lazy">`;

        card.onclick = () => openModal(index);
        
        card.innerHTML = `
            <div class="image-wrapper">${mediaHtml}</div>
            <div class="memory-info">
                <span class="memory-date">${item.date}</span>
                <p class="memory-text">${item.text}</p>
                <span style="font-size:0.8rem; color:#888;">Фото: ${item.gallery.length}</span>
            </div>
        `;
        grid.appendChild(card);
    });
}

// Открытие модалки
function openModal(index) {
    currentMemoryIndex = index;
    currentSlideIndex = 0;
    modal.style.display = "flex";
    showSlide(currentSlideIndex);
}

// Закрытие модалки
document.querySelector('.close-modal').onclick = closeModal;
function closeModal() {
    modal.style.display = "none";
    modalContainer.innerHTML = '';
}

// Навигация слайдера
window.changeSlide = function(n) {
    showSlide(currentSlideIndex += n);
}

function showSlide(n) {
    const gallery = memoryData[currentMemoryIndex].gallery;
    if (n >= gallery.length) currentSlideIndex = 0;
    if (n < 0) currentSlideIndex = gallery.length - 1;

    const mediaItem = gallery[currentSlideIndex];
    
    // Если видео - создаем плеер, если фото - img
    if (mediaItem.type === 'video') {
        modalContainer.innerHTML = `
            <video controls autoplay class="modal-video" style="max-width:100%; max-height:70vh;">
                <source src="${mediaItem.src}" type="video/mp4">
            </video>`;
    } else {
        modalContainer.innerHTML = `<img src="${mediaItem.src}" class="modal-image">`;
    }

    captionText.innerHTML = memoryData[currentMemoryIndex].text;
    counterText.innerHTML = `${currentSlideIndex + 1} из ${gallery.length}`;
}

// Закрытие по клику вне фото
window.onclick = (event) => {
    if (event.target == modal) closeModal();
};


/* =========================================
   7. ЖЕСТЫ (SWIPES)
   ========================================= */
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

// Блокируем скролл страницы, пока открыта модалка
modalElement.addEventListener('touchmove', e => {
    if (modalElement.style.display === "flex") e.preventDefault();
}, {passive: false});

function handleGesture() {
    const xDiff = touchendX - touchstartX;
    const yDiff = touchendY - touchstartY;
    
    // Горизонтальный свайп (листать фото)
    if (Math.abs(xDiff) > Math.abs(yDiff) && Math.abs(xDiff) > 50) {
        if (xDiff < 0) changeSlide(1); // Влево -> Вперед
        else changeSlide(-1);          // Вправо -> Назад
    } 
    // Вертикальный свайп (закрыть)
    else if (Math.abs(yDiff) > 50 && yDiff > 50) {
        closeModal();
    }
}