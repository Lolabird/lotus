const navToggle = document.querySelector('.nav-toggle');
const settingsToggle = document.querySelector('.settings-toggle');


navToggle.addEventListener('click', () => {
    let menu = document.querySelector('.main-menu');
    displayMenu(menu);
});


settingsToggle.addEventListener('click', () => {
    let menu = document.querySelector('.settings-menu')
    displayMenu(menu);
});


function displayMenu(menuClass) {
    const newDisplay = menuClass.style.display === 'none' ? 
        menuClass.style.display = 'block' : menuClass.style.display = 'none';
}