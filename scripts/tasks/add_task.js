const addTask = document.querySelector('.add-task');
const taskList = document.querySelector('.task-list');


fetchTasks();


addTask.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        e.preventDefault();
        let task = this.value.trim();

        if (task !== ''){
            addNewTask(task, 1);
            fetchTasks();
            this.value = '';
        }
        //add error message
    }

});


function addNewTask(taskName, projectId) {
    fetch('/tasks', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ 
            name: `${taskName}`, 
            project_id: projectId
        })
    })
    .then(response => {
        if (response.ok) {
            console.log(`${taskName} created.`);
        } else {
            console.error(`Error creating ${taskName}.`);
        }
    })
    .catch(error => {
        console.error('Error:', error);
    });
}


function fetchTasks() {
    fetch('/tasks')
    .then(response => response.json())
    .then(tasks => {
        taskList.innerHTML = '';

        tasks.forEach(task => {
            const taskItem = document.createElement('li');
            const span = document.createElement('span');

            span.textContent = task.name;
            taskItem.appendChild(span);
            taskList.appendChild(taskItem);
        });
    })
    .catch(error => {
        console.error('Error:', error);
    });
}