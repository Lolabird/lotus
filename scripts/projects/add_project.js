const addProj = document.querySelector('.add-project');
const projectDash = document.querySelector('.project-dash');
const projList = document.querySelector('.project-list');
let projId = 1;

addProj.addEventListener('click', () => {
    addNewProject();
    fetchProjects();
});


function addNewProject() {
    //newProject.textContent = `Project ${projId}`;

    // Send a POST request to the server to create a new project
    fetch('/projects', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name: `Project ${projId}` })
    })
    .then(response => {
        if (response.ok) {
            console.log('Project created');
            projId++;
        } else {
            console.error('Error creating project');
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
        projList.innerHTML = ''; // Clear the project list
        
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