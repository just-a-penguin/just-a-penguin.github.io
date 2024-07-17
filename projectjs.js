const imageContainer = document.querySelector('.image-container');
const projectsContainers = document.querySelectorAll('.projects-container');
const leftArrow = document.querySelector('.left-arrow');
const rightArrow = document.querySelector('.right-arrow');
const projectSetNumber = document.getElementById('project-set-number');
const projectList = document.getElementById('project-list');
let currentIndex = 0;

const projectSets = [
    [
        { name: 'RAG Based Medical Chatbot', image: 'sharlee.jpg' },
        { name: 'AI Resume Builder', image: 'sharlee.pneg' },
        { name: 'Slappy Bird', image: 'sharlee.jpg' },
        { name: 'Dawki', image: 'cocolyze.png' }
    ],
    [
        { name: 'Distillation Architechture implementation on Translation Models', image: 'project5.png' },
        { name: 'Custom Architechtures for ERC and EFR tasks on MELD dataset ', image: 'project6.png' },
        { name: 'Machine Translation German-English', image: 'project7.png' },
        { name: 'NER Task on Leglal data', image: 'project8.png' },
        { name: 'Bigram Language model from scratch', image: 'project8.png' }
    ]
    [
        { name: 'Product Recommendation System using Amazon review data', image: 'project5.png' },
        { name: 'GPT 2 Fine tuning  for Summarization Task', image: 'project6.png' },
        { name: 'Multimodal Retrieval System using VG16 and TF-IDF', image: 'project7.png' },
        { name: 'Retrieval System using Inverted Indexes', image: 'project8.png' }

    ]
    [
        { name: 'EDA on GEO(Gene Expression Omnibus) data in R ', image: 'project5.png' },
        { name: 'Hypothesis Testing on Auto-Immune Diseases', image: 'project6.png' },
        { name: 'Drug recommendation System using sentimental and temporal analysis', image: 'project7.png' },
        { name: 'NSFW text calssifier on reddit data', image: 'project8.png' }

    ]
    [
        { name: 'Neural Network Implementation from scratch on MNIST dataset ', image: 'project5.png' },
        { name: 'Multi-Layer Perceptron Implementation on SVHN dataset', image: 'project6.png' },
        { name: 'Decision Tree and Random Forest Implementation from scratch', image: 'project7.png' },
        { name: 'Linear and Logistic Regression models from scratch', image: 'project8.png' }
    ]
    [
        { name: 'Tanks Stars game using Java', image: 'project5.png' },
        { name: 'Low Fidelity and Hi-FIdelity (Figma) Prototyping ', image: 'project6.png' },
        { name: 'MENANCE (Machine Educable Noughts And Crosses Engine)', image: 'project7.png' },
        { name: 'developing a custom virtual network using the mininet network emulation software.', image: 'project8.png' }
    ]
    // BTP
    [
        { name: 'Thesis Project on Accurate Coresets', image: 'project5.png' }
   
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
