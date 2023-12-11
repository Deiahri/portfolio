my_email = "junda.yin1@gmail.com"

projects_data = [
    [
        "TicTacToe AI",
        ["JavaScript", "Python"],
        "Using concepts of Artificial Intelligence, we created a formidable TicTacToe Bot!",
        "View Project",
        "TicTacToe.png",
        "tictactoe.html",
        "red-gradient-bg"
    ],
    [
        "BTTL",
        ["Python"],
        "Travelling? Determine the best time to leave to avoid the most traffic.",
        "View Project",
        "popular-times.png",
        "bttl.html",
        "blue-gradient-bg"
    ],
    [
        "Bank Application",
        ["Java", "Python"],
        "A mock bank application that makes use of a Flask-powered REST-API to store data",
        "View Project",
        "bank_application.png",
        "bank-application.html",
        "green-gradient-bg"
    ],
    [
        "Study Tool",
        ["Java"],
        "A database oriented tool I used to study quiz and test questions",
        "View Project",
        "study-tool.png",
        "study-tool.html",
        "orange-gradient-bg"
    ],
    [
        "Digital Portfolio",
        ["Bootstrap", "JavaScript"],
        "A place where you can see all the projects I have done!",
        "View Project",
        "Picture-of-Myself-4.PNG",
        "digital-portfolio.html",
        "yellow-gradient-bg"
    ]
];

let project_item_containter = document.getElementById('project_item_container');
let searchBarResultsTextElement = document.getElementById('search-results-text');

let soj = null;
for (project_data_index in projects_data) {
    current_project_data = projects_data[project_data_index] 
    project_header_text = current_project_data[0];
    project_technologies = current_project_data[1];
    project_description_text = current_project_data[2];
    project_button_text = current_project_data[3];
    project_image_name = current_project_data[4];
    project_url = current_project_data[5];
    card_bg_color = ""+current_project_data[6];

    let projectElement = new projectCard(
        project_header_text, project_technologies, project_description_text, 
        project_button_text, project_image_name, project_url,
        card_bg_color
    );

    project_item_containter.appendChild(projectElement.element);
    projectCardObjects.push(projectElement);
}

email_time_out = null;

function copy_email() {
    clearTimeout(email_time_out);
    navigator.clipboard.writeText(my_email);
    email_time_out = setTimeout(() => {
        email_button.textContent = "Email Copied!";
        email_time_out = setTimeout(() => {
            email_button.textContent = "Email";
        }, 2000);
    }, 50);
}    


call_time_out = null;

function call_phone() {
    clearTimeout(call_time_out);
    setTimeout(() => {
        call_button.textContent = "Nah";
        call_time_out = setTimeout(() => {
            call_button.textContent = "Call";
        }, 2000);
    }, 50);
}

email_button = document.getElementById("email-button");
email_button.onclick = copy_email;

call_button = document.getElementById("call-button");
call_button.onclick = call_phone;


function specialScroll() {
    window.scrollTo(0, document.getElementById('projects_projects').offsetTop - 50);
}
abt_me_section = document.getElementById("about_me_section");
project_section = document.getElementById("projects_projects");


abt_me_btn = document.getElementById("about_me_button");
projects_btn = document.getElementById("projects_button");

abt_me_btn.onclick = abt_me_section.scrollIntoView;
projects_btn.onclick = specialScroll;

// search bar functionality
let searching = null;

function cancelSearch() {
    if (searching != null) {
        clearTimeout(searching);
    }
}

function initiateSearch() {
    searching = setTimeout(
        () => {
            search();
        }, 
        250
    );
}

function search() {
    let searchText = searchBarElement.value.trim().toLowerCase();
    let activeTech = [];
    for(techButton of projectSearchTechnologiesRegion.children) {
        if (techButton.classList.contains('active')) {
            activeTech.push(techButton.innerHTML);
        }
    }
    let projectCardSearchValues = []
    let currentScore = 0;
    for(let projectCard of projectCardObjects) {
        currentScore = 0;
        if(projectCard.title.toLowerCase().includes(searchText) && searchText != "")
        {
            currentScore += searchWeights.title;
        }

        for(let tech of activeTech) {
            if(projectCard.hasTechnology(tech)) { 
                currentScore += searchWeights.technologies;
            }
        }

        if(searchText != "") {
            currentScore -= searchWeights.title;
        }
        projectCardSearchValues.push(currentScore);
        projectCard.hide();
    }

    insertionSort(projectCardSearchValues, projectCardObjects);
    let hasResults = false;
    for(let scoreIndex in projectCardSearchValues) {
        if(projectCardSearchValues[scoreIndex] <= 0) {
            projectCardObjects[scoreIndex].hide();
        }
        else {
            projectCardObjects[scoreIndex].show();
            hasResults = true;
        }
    }
    if (!hasResults) {
        searchBarResultsTextElement.innerHTML = "No Results!";
    }
    else {
        searchBarResultsTextElement.innerHTML = "";
    }
}

let searchBarElement = document.getElementById("searchBar");
searchBarElement.onkeydown = cancelSearch;
searchBarElement.onkeyup = initiateSearch;
searchBarResultsTextElement.innerHTML = "";
