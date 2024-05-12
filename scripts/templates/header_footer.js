const header = document.createElement('header');
const footer = document.createElement('footer');
const nav = document.createElement('nav');
const settingsMenu = document.createElement('div');
const main = document.querySelector('main');

header.innerHTML = `
    <div class="logo">
        <div><a href="index.html">Lotus</a></div>
        <div class="nav-toggle">
            <div class="nav-bar"></div>
            <div class="nav-bar"></div>
            <div class="nav-bar"></div>
        </div>
    </div>
    <h1>${title}</h1>
    <button class="settings-toggle">User</button>
`;

nav.classList.add('main-menu');
nav.innerHTML = `
    <ul>
        <li><a href="index.html">Dashboard</a></li>
        <li><a href="tasks.html">Tasks</a></li>
        <li><a href="projects.html">Projects</a></li>
        <li><a href="tags.html">Tags</a></li>
    </ul>
`;

settingsMenu.classList.add('settings-menu');
settingsMenu.innerHTML = `
    <ul>
        <li><a href="profile.html">Profile</a></li>
        <li><a href="users.html">Users</a></li>
        <li><a href="groups.html">Groups</a></li>
        <li><a href="docs.html">Docs</a></li>
        <li><a href="help.html">Help</a></li>
        <li><a href="settings.html">Settings</a></li>
    </ul>
`;

footer.innerHTML = `This is the footer.`;

document.body.insertBefore(header, document.body.firstChild);
document.body.appendChild(footer);

main.insertBefore(nav, main.firstChild);
main.appendChild(settingsMenu);