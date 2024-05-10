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

addTask.addEventListener('click', () => {
    newTask();
});

addProj.addEventListener('click', () => {
    newProject();
});


function displayMenu(menuClass) {
    const newDisplay = menuClass.style.display === 'none' ? menuClass.style.display = 'block' : menuClass.style.display = 'none';
}

function newTask() {

}

function newProject() {

}