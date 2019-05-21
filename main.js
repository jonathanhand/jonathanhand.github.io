const resumeBtn = document.getElementById('resumeBtn');
const projectBtn = document.getElementById('projectBtn');
const projContent = document.getElementById('projContent');
const resumeContent = document.getElementById('resumeContent')

resumeBtn.addEventListener("click", resume);

function resume() {
    resumeBtn.style.display = '';
    resumeContent.style.display = '';
    projContent.style.display = 'none';
    projectBtn.style.disply = '';
}

projectBtn.addEventListener("click", project);

function project() {
    resumeBtn.style.display = '';
    resumeContent.style.display = 'none';
    projContent.style.display = '';
    projectBtn.style.disply = 'none';
}
