const addProj = document.querySelector('.add-project');
let projId = 1;


addProj.addEventListener('click', () => {
    addNewProject();
});


function addNewProject() {
    const projectDash = document.querySelector('.project-dash');
    const newProject = document.createElement('button');

    newProject.textContent = `Project ${projId}`;
    projectDash.appendChild(newProject);
    projId++;
}