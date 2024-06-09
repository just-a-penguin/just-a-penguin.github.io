const imageContainer = document.querySelector('.image-container');
const projectsContainers = document.querySelectorAll('.projects-container');
const leftArrow = document.querySelector('.left-arrow');
const rightArrow = document.querySelector('.right-arrow');
const projectSetNumber = document.getElementById('project-set-number');
const projectList = document.getElementById('project-list');
let currentIndex = 0;

const projectSets = [
    [
        { name: 'act responsable', image: 'act_responsable.png' },
        { name: 'sharlee', image: 'sharlee.png' },
        { name: 'dua lipa', image: 'dua_lipa.png' },
        { name: 'cocolyze', image: 'cocolyze.png' }
    ],
    [
        { name: 'project 5', image: 'project5.png' },
        { name: 'project 6', image: 'project6.png' },
        { name: 'project 7', image: 'project7.png' },
        { name: 'project 8', image: 'project8.png' }
    ]
    // Add more project sets as needed
];

function updateProjectList() {
    const projects = projectSets[currentIndex];
    projectList.innerHTML = '';
    projects.forEach(project => {
        const li = document.createElement('li');
        li.textContent = project.name;
        li.dataset.image = project.image;
        li.addEventListener('mouseover', () => {
            const projectsContainer = projectsContainers[currentIndex];
            const images = projectsContainer.querySelectorAll('img');
            images.forEach(img => {
                img.classList.remove('active');
            });
            const img = projectsContainer.querySelector(`#${project.image.split('.')[0]}`);
            if (img) {
                img.classList.add('active');
            }
        });
        li.addEventListener('mouseout', clearProjectScreen);
        projectList.appendChild(li);
    });
}

updateProjectList();

leftArrow.addEventListener('click', () => {
    projectsContainers[currentIndex].classList.remove('active');
    currentIndex = (currentIndex - 1 + projectsContainers.length) % projectsContainers.length;
    projectsContainers[currentIndex].classList.add('active');
    projectSetNumber.textContent = currentIndex + 1;
    updateProjectList();
    clearProjectScreen();
});

rightArrow.addEventListener('click', () => {
    projectsContainers[currentIndex].classList.remove('active');
    currentIndex = (currentIndex + 1) % projectsContainers.length;
    projectsContainers[currentIndex].classList.add('active');
    projectSetNumber.textContent = currentIndex + 1;
    updateProjectList();
    clearProjectScreen();
});

function clearProjectScreen() {
    const images = document.querySelectorAll('.image-container img');
    images.forEach(img => {
        img.classList.remove('active');
    });
    imageContainer.style.backgroundColor = 'transparent';
}

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
