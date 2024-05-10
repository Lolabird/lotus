const navToggle = document.querySelector('.nav-toggle');
const settingsToggle = document.querySelector('.settings-toggle');
const addTask = document.querySelector('.add-task');
const addProj = document.querySelector('.add-project');


navToggle.addEventListener('click', () => {
    let menu = document.querySelector('.main-menu');
    displayMenu(menu);
});

settingsToggle.addEventListener('click', () => {
    let menu = document.querySelector('.settings-menu')
    displayMenu(menu);
});

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

addProj.addEventListener('click', () => {
    addNewProject();
    
});


function displayMenu(menuClass) {
    const newDisplay = menuClass.style.display === 'none' ? 
        menuClass.style.display = 'block' : menuClass.style.display = 'none';
}

function addNewTask(newTask) {
    const taskList = document.querySelector('.task-list');
    const taskItem = document.createElement('li');
    const span = document.createElement('span');

    span.textContent = newTask;
    taskItem.appendChild(span);
    taskList.appendChild(taskItem);
    newTask.value = '';
    //newTask.focus();
}

function addNewProject() {

}