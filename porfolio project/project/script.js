function addProject(title, description, link) {
    const projectsSection = document.querySelector('.projects');

    const projectDiv = document.createElement('div');
    projectDiv.classList.add('project');

    const titleElement = document.createElement('h3');
    titleElement.textContent = title;

    const descriptionElement = document.createElement('p');
    descriptionElement.textContent = description;

    const linkElement = document.createElement('a');
    linkElement.classList.add('btn');
    linkElement.href = link;
    linkElement.textContent = 'View Project';

    projectDiv.appendChild(titleElement);
    projectDiv.appendChild(descriptionElement);
    projectDiv.appendChild(linkElement);

    projectsSection.appendChild(projectDiv);
}

// Example usage
addProject('Project 1', 'Description of Project 1', '#');

