const navScript = document.createElement('script');
const hfScript = document.createElement('script');
const addProjScript = document.createElement('script');
const addTaskScript = document.createElement('script');
const genericStyle = document.createElement('link');

let docTitle = document.title;
let wordsInTitle = docTitle.split(' ');
let title = wordsInTitle[0];

hfScript.src = './scripts/templates/header_footer.js';
navScript.src = './scripts/templates/nav.js';
addProjScript.src = './scripts/projects/add_project.js';
addTaskScript.src = './scripts/tasks/add_task.js';

genericStyle.rel = 'stylesheet';
genericStyle.href = './styles/style.css';

document.body.appendChild(hfScript);
document.body.appendChild(navScript);
document.head.append(genericStyle);


if (title === 'Dashboard') {
    document.body.appendChild(addProjScript);
    document.body.appendChild(addTaskScript);
}