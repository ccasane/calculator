const displayBefore = document.querySelector('.operand-0');
const displayNow = document.querySelector('.operand-1');
const btnNumbers = document.querySelectorAll('.number');
const btnOperators = document.querySelectorAll('.operator');
const btnDelete = document.querySelector('.delete')
const btnDeleteAll = document.querySelector('.delete-all')
const dateSpan = document.querySelector('.date')

const display = new Display(displayBefore, displayNow);
dateSpan.innerHTML= `${ new Date().getFullYear()}`


btnNumbers.forEach(button => {
    button.addEventListener('click', () => {
        display.addNumber(button.innerHTML);
    });
});

btnOperators.forEach(button => {
    button.addEventListener('click', () => display.computar(button.value));
});

btnDelete.addEventListener('click', () => {
    display.delete(); 
});

btnDeleteAll.addEventListener('click', () => {
    display.deleteAll();
});
