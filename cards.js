let technologies = [];
let searchWeights = {
    "title": 100,
    "technologies": 10
};
let buttonColors = ['primary', 'success', 'warning', 'info', 'danger', 'dark'];
let projectSearchTechnologiesRegion = document.getElementById("searchTechnologiesArea");
var projectCardObjects = [];
function addTechnologies(techArr) {
    for(tech of techArr) {
        if(!technologies.includes(tech)) {
            technologies.push(tech);
            addTechnologyButton(tech);
        }
    }
}

// adds technology to search area
let colorIndex = 0;
function addTechnologyButton(buttonName) {
    let techButton = document.createElement('a');
    techButton.classList = `btn btn-outline-${buttonColors[colorIndex]} fw-bold rounded-pill vm-1 mx-1 active`;
    techButton.innerHTML = buttonName;
    techButton.onclick = toggleClick.bind(
        null, techButton
    );
    colorIndex = (colorIndex + 1)%buttonColors.length;
    projectSearchTechnologiesRegion.appendChild(techButton);
}

function toggleClick(s) {
    s.classList.toggle('active');
    s.classList.remove('hover');
    cancelSearch();
    initiateSearch();
}

class projectCard {
    constructor(title = "Title", technologies = new Array(), description = "Description", buttonText = "button text", imagePath = "Picture-of-Myself-4.PNG", 
        projectHTML = "", backgroundColor = "blue-gradient-bg", projectSettings) {
        this.title = title;
        this.technologies = technologies;
        this.description = description;
        this.buttonText = buttonText;
        this.imagePath = imagePath;
        this.projectHTML = projectHTML;
        this.backgroundColor = backgroundColor;
        this.projectSettings = projectSettings;

        addTechnologies(this.technologies);
        this.element = this.#constructElement();
        this.hidden = false;
    }

    #constructElement() {
        let projectContainer = document.createElement('div');
        projectContainer.classList = "col-xl-3 col-lg-4 col-sm-6 col-12";

        let projectPhoto = document.createElement('div');
        projectPhoto.classList = 'project-card-2-photo position-relative';
        projectPhoto.style.backgroundImage = `url('img/${this.imagePath}')`;

        if(this.projectSettings) {
            if(this.projectSettings.demo) {
                let projectPhotoBanner = document.createElement('div');
                projectPhotoBanner.classList = 'position-absolute ms-2 mt-1 p-1 fw-bold white-text green-gradient-bg';
                projectPhotoBanner.innerHTML = 'DEMO AVAILABLE';
                projectPhoto.appendChild(projectPhotoBanner);
            }
        }

        let projectInfoContainer = document.createElement('div');
        projectInfoContainer.classList = `project-card-2 ${this.backgroundColor}`;

        let projectTitle = document.createElement('p');
        projectTitle.classList = 'fs-3 bold no-margin white-text';
        projectTitle.innerHTML = this.title;

        let projectTechnologies = document.createElement('p');
        projectTechnologies.classList = 'fs-6 no-margin white-text';
        projectTechnologies.innerHTML = this.technologiesToString();
        
        let projectDescription = document.createElement('p');
        projectDescription.classList = 'fs-5 no-margin white-text';
        projectDescription.innerHTML = this.description;

        
        let buttonContainer = document.createElement('div');
        buttonContainer.classList = 'max-width content-left';
        
        let projectButton = document.createElement('a');
        projectButton.classList = 'btn btn-outline-light fw-bold rounded-pill mt-2';
        projectButton.innerHTML = this.buttonText;
        projectButton.href = `./projects/${this.projectHTML}`;

        buttonContainer.appendChild(projectButton);

        projectInfoContainer.appendChild(projectTitle);
        projectInfoContainer.appendChild(projectTechnologies);
        projectInfoContainer.appendChild(projectDescription);
        projectInfoContainer.appendChild(buttonContainer);

        projectContainer.appendChild(projectPhoto);
        projectContainer.appendChild(projectInfoContainer);
        
        return projectContainer;
    }

    hasTechnology(tech) {
        return this.technologies.includes(tech);
    }

    hide() {
        if (!this.hidden) {
            project_item_containter.removeChild(this.element);
            this.hidden = true;
        }
    }

    show() {
        if (this.hidden) {
            project_item_containter.appendChild(this.element);
            this.hidden = false;
        }
    }

    technologiesToString() {
        let s = "<i>"
        for(let technology of this.technologies) {
            s += `${technology}, `
        }
        return s.substring(0, s.length-2)+"</i>";
    }


}



