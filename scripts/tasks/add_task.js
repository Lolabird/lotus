const addTask = document.querySelector('.add-task');


addTask.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        e.preventDefault();
        task = this.value.trim();

        if (task !== ''){
            addNewTask(task);
            this.value = '';
        }
        //add error message
    }

});


function addNewTask(newTask) {
    const taskList = document.querySelector('.task-list');
    const taskItem = document.createElement('li');
    const span = document.createElement('span');

    span.textContent = newTask;
    taskItem.appendChild(span);
    taskList.appendChild(taskItem);
}