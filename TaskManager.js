let tasks = [];

function renderTasks() {
    const taskList = document.getElementById('task-list');
    taskList.innerHTML = '';

    tasks.forEach((task, index) => {
        const li = document.createElement('li');
        const span = document.createElement('span');
        span.textContent = task;
        li.appendChild(span);

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.onclick = () => deleteTask(index);
        li.appendChild(deleteButton);

        taskList.appendChild(li);
    });
}

function addTask() {
    const taskInput = document.getElementById('task-input');
    const task = taskInput.value.trim();

    if (task) {
        tasks.push(task);
        taskInput.value = '';
        renderTasks();
    }
}

function deleteTask(index) {
    tasks.splice(index, 1);
    renderTasks();
}

document.addEventListener('DOMContentLoaded', renderTasks);
