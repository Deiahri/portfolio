my_email = "junda.yin1@gmail.com"

projects_data = [
    [
        "TicTacToe AI",
        "JavaScript, Python",
        "Using concepts of Artificial Intelligence, we created a formidable TicTacToe Bot!",
        "View Project",
        "tictactoe.png",
        "tictactoe.html",
        "red-gradient-bg"
    ],
    [
        "BTTL",
        "Python, GitHub",
        "Travelling? Determine the best time to leave to avoid the most traffic.",
        "View Project",
        "popular-times.png",
        "bttl.html",
        "blue-gradient-bg"
    ],
    [
        "Bank Application",
        "Java, Python",
        "A mock bank application that makes use of a Flask-powered REST-API to store data",
        "View Project",
        "bank_application.png",
        "bank-application.html",
        "green-gradient-bg"
    ],
    [
        "Study Tool",
        "Java",
        "A database oriented tool I used to study quiz and test questions",
        "View Project",
        "study-tool.png",
        "study-tool.html",
        "orange-gradient-bg"
    ],
    [
        "Digital Portfolio",
        "Bootstrap, JavaScript",
        "A place where you can see all the projects I have done!",
        "View Project",
        "Picture-of-Myself-4.png",
        "digital-portfolio.html",
        "yellow-gradient-bg"
    ]
]

for (project_data_index in projects_data) {
    current_project_data = projects_data[project_data_index] 
    project_header_text = current_project_data[0];
    project_subheader_text = current_project_data[1];
    project_description_text = current_project_data[2];
    project_button_text = current_project_data[3];
    project_image_name = current_project_data[4];
    project_url = current_project_data[5];
    card_bg_color = ""+current_project_data[6];

    // row-item container
    project_item_containter = document.getElementById("project_item_container");
    row_element = document.createElement('div');
    row_element.classList = "col-xl-3 col-md-4 col-sm-6 col-12";

    // project-card
    project_card = document.createElement('div');
    project_card.classList = 'project-card '+card_bg_color;

    // project header
    project_header = document.createElement('h3');
    project_header.classList = "heading-4 no-margin white-text";
    project_header.innerHTML = project_header_text;

    // project sub header
    project_subheader = document.createElement("h4");
    project_subheader.classList = "margin-right-1 heading-5 white-text";
    project_subheader.innerHTML = project_subheader_text;

    // project sub header div
    project_subheader_div = document.createElement("div");
    project_subheader_div.classList = "horizontal bold inline italic";
    project_subheader_div.appendChild(project_subheader);

    // project image thing
    project_image = document.createElement("div");
    project_image.classList = "project-card-photo";
    project_image.style.backgroundImage = 'url("img/'+project_image_name+'")';

    // project description
    project_description = document.createElement("p");
    project_description.classList = "fs-5 no-margin white-text";
    project_description.innerHTML = project_description_text;

    // project button
    project_button = document.createElement("a");
    project_button.href = "./projects/"+project_url;
    project_button.classList = "btn btn-outline-light fw-bold rounded-pill mt-2";
    project_button.innerHTML = project_button_text;

    // project button container
    project_button_container = document.createElement("div");
    project_button_container.classList = "max-width content-left";
    project_button_container.appendChild(project_button);

    // project desc-button div
    project_desc_button_div = document.createElement("div");
    project_desc_button_div.appendChild(project_description);
    project_desc_button_div.appendChild(project_button_container);

    // project div vertical
    project_div_vertical = document.createElement("div");
    project_div_vertical.classList = "vertical";

    project_div_vertical.appendChild(project_image);
    project_div_vertical.appendChild(project_desc_button_div);

    //appending elements into project card
    project_card.appendChild(project_header);
    project_card.appendChild(project_subheader_div);
    project_card.appendChild(project_div_vertical);

    //appending elements into row-item container
    row_element.appendChild(project_card);

    project_item_containter.appendChild(row_element);
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
