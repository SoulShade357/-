// Простая анимация появления ячеек
document.addEventListener('DOMContentLoaded', () => {
    const cells = document.querySelectorAll('.cell');
    
// При клике на ячейку — показываем личный ответ
cells.forEach(cell => {
    cell.addEventListener('click', () => {
        const answer = cell.dataset.answer;
        alert(answer); // или более красивый способ вывода
    });
});
        
        setTimeout(() => {
            cell.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            cell.style.opacity = '1';
            cell.style.transform = 'translateY(0)';
        }, index * 50);
    });

cell.addEventListener('click', (e) => {
    const tooltip = document.createElement('div');
    tooltip.textContent = cell.dataset.category;
    tooltip.style.cssText = `
        position: fixed;
        top: ${e.clientY}px;
        left: ${e.clientX}px;
        background: rgba(0,0,0,0.8);
        color: white;
        padding: 6px 10px;
        border-radius: 5px;
        font-size: 0.9rem;
        pointer-events: none;
        z-index: 1000;
        animation: fadeIn 0.3s;
    `;
    document.body.appendChild(tooltip);
    setTimeout(() => tooltip.remove(), 1500);
    });

    // Кнопка "Наверх"
const backToTopButton = document.getElementById('back-to-top');

window.addEventListener('scroll', () => {
    // Показываем кнопку, если прокрутили больше чем на 600px
    if (window.scrollY > 600) {
        backToTopButton.classList.add('show');
    } else {
        backToTopButton.classList.remove('show');
    }
});

backToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});
// Получаем элементы модального окна
const modal = document.getElementById('modal');
const modalImg = document.getElementById('modal-image');
const modalCaption = document.getElementById('modal-caption');
const closeModal = document.querySelector('.close');

// Функция для открытия модального окна
function openModal(imgSrc, captionText) {
    modalImg.src = imgSrc;
    modalCaption.textContent = captionText || '';
    modal.classList.add('show');
    document.body.style.overflow = 'hidden'; // Запрещаем прокрутку страницы
}

// Функция для закрытия модального окна
function closeModalWindow() {
    modal.classList.remove('show');
    document.body.style.overflow = 'auto'; // Возвращаем прокрутку
}

// Обработчик клика по кнопке закрытия
closeModal.addEventListener('click', closeModalWindow);

// Обработчик клика по фону (закрытие при клике вне изображения)
modal.addEventListener('click', function(e) {
    if (e.target === modal) {
        closeModalWindow();
    }
});

// Обработчик нажатия клавиши Esc
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        closeModalWindow();
    }
});

// Добавляем обработчики кликов ко всем карточкам в галерее
document.querySelectorAll('.cell').forEach(cell => {
    cell.addEventListener('click', function(e) {
        // Предотвращаем действие по умолчанию (например, если бы была ссылка)
        e.preventDefault();

        // Получаем изображение и подпись из текущей карточки
        const imgElement = cell.querySelector('img');
        const captionElement = cell.querySelector('span');
        
        if (imgElement && captionElement) {
            const imgSrc = imgElement.src;
            const captionText = captionElement.textContent;

            openModal(imgSrc, captionText);
        }
    });
});
