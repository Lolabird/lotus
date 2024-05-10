const navToggle = document.querySelector('.nav-toggle');
const settingsToggle = document.querySelector('settings-toggle')
const addTask = document.querySelector('.add-task');
const addProj = document.querySelector('.add-project')


navToggle.addEventListener('click', () => {
    displayMenu();
});

settingsToggle.addEventListener('click', () => {
    displayMenu();
});

addTask.addEventListener('click', () => {
    newTask();
});

addProj.addEventListener('click', () => {
    newProject();
});

function displayMenu() {

}

function newTask() {

}

function newProject() {

}