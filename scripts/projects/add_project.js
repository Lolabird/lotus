const addProj = document.querySelector('.add-project');
const projectDash = document.querySelector('.project-dash');
const projList = document.querySelector('.project-list');
let projId = 1;

addProj.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        e.preventDefault();
        let project = this.value.trim();

        if (project !== ''){
            addNewProject(project);
            fetchProjects();
            this.value = '';
        }
        //add error message
    }
});


function addNewProject(projectName) {
    fetch('/projects', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name: `${projectName}` })
    })
    .then(response => {
        if (response.ok) {
            console.log(`${projectName} created.`);
        } else {
            console.error(`Error creating ${projectName}.`);
        }
    })
    .catch(error => {
        console.error('Error:', error);
    });
}


function fetchProjects() {
    fetch('/projects')
    .then(response => response.json())
    .then(projects => {
        projList.innerHTML = '';

        projects.forEach(project => {
            const newProject = document.createElement('button');
            newProject.textContent = project.name;
            projList.appendChild(newProject);
        });
    })
    .catch(error => {
        console.error('Error:', error);
    });
}

window.addEventListener('DOMContentLoaded', fetchProjects);