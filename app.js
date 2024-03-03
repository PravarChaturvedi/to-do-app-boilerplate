document.addEventListener('DOMContentLoaded', function () {
    const input = document.getElementById('input');
    const button = document.getElementById('button');
    const todoList = document.getElementById('todolist');

    button.addEventListener('click', function () {
        const inputValue = input.value.trim();
        if (inputValue !== '') {
            const li = document.createElement('li');
            li.textContent = inputValue;
            todoList.appendChild(li);
            input.value = '';
        }
    });

    input.addEventListener('keypress', function (e) {
        if (e.key === 'Enter') {
            button.click();
        }
    });
});
