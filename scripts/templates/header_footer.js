const header = document.createElement('header');
const footer = document.createElement('footer');
const nav = document.createElement('nav');
const settingsMenu = document.createElement('div')

header.innerHTML = `
    <div class="logo">
        <div><a href="#">Lotus</a></div>
        <div class="nav-toggle">
            <div class="nav-bar"></div>
            <div class="nav-bar"></div>
            <div class="nav-bar"></div>
        </div>
    </div>
`;

nav.classList.add = 'main-menu';
nav.innerHTML = `
    <ul>
        <li><a href="#">Dashboard</a></li>
        <li><a href="#">Tasks</a></li>
        <li><a href="#">Projects</a></li>
        <li><a href="#">Tags</a></li>
    </ul>
`;

settingsMenu.classList.add = 'setting-menu';
settingsMenu.innerHTML = `
    <ul>
        <li><a href="#">Profile</a></li>
        <li><a href="#">Users</a></li>e
        <li><a href="#">Groups</a></li>
        <li><a href="#">Docs</a></li>
        <li><a href="#">Help</a></li>
        <li><a href="#">Settings</a></li>
    </ul>
`;

footer.innerHTML = ``;