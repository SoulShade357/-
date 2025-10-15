// Простая анимация появления ячеек
document.addEventListener('DOMContentLoaded', () => {
    const cells = document.querySelectorAll('.cell');
    
    cells.forEach((cell, index) => {
        cell.style.opacity = '0';
        cell.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
            cell.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            cell.style.opacity = '1';
            cell.style.transform = 'translateY(0)';
        }, index * 50);
    });

    // При клике на ячейку — показываем подсказку (можно расширить)
    cells.forEach(cell => {
        cell.addEventListener('click', () => {
            const category = cell.dataset.category;
            alert(`Ты выбрал категорию: ${category}`);
            // Здесь можно добавить модальное окно с описанием!
        });
    });
});