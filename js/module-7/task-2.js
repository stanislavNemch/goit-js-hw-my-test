const myTextInput = document.getElementById("myTextInput");
const outputChange = document.getElementById("outputChange");
const outputInput = document.getElementById("outputInput");

// Обработчик для события 'change'
myTextInput.addEventListener("change", function () {
    outputChange.textContent =
        'Сработало событие "change". Новое значение: ' + this.value;
    console.log("Событие change:", this.value);
});

// Обработчик для события 'input' (для сравнения)
myTextInput.addEventListener("input", function () {
    outputInput.textContent =
        'Событие "input" срабатывает сразу. Текущее значение: ' + this.value;
    // console.log('Событие input:', this.value); // Если раскомментировать, увидите, как оно срабатывает с каждым символом
});
