// display.js - A separate file for all display methods

// Function to display education details
function displaypage3() {
    let education = document.getElementById("education_details");
    let experience = document.getElementById("experience_details");
    let displayData = localStorage.getItem("Education_Details");

    if (displayData) {
        let data = JSON.parse(displayData);
        if (education && experience) {
            education.innerText = `College Name: ${data.school_name}\nCollege Location: ${data.school_location}, Qualification: ${data.degree},\nField of Study: ${data.field_of_study}, Graduation Date: ${data.gdate}`;
            
            experience.innerText = `Experience: ${data.experience}, Start Date: ${data.startDate}, End Date: ${data.endDate}`;
        }
    }
}

// Function to display skills and summary
function displaypage2() {
    let storedData = localStorage.getItem("skills_summary");

    if (storedData) {
        let data = JSON.parse(storedData);
        document.getElementById("summary-text").textContent = data.summary;
        
        let skillsList = document.getElementById("skills-list");
        skillsList.innerHTML = ""; // Clear existing list items

        data.skills.forEach(skill => {
            if (skill.name.trim()) {
                let li = document.createElement("li");
                li.innerHTML = `<span><strong>${skill.name}</strong>: ${skill.description}</span>`;
                skillsList.appendChild(li);
            }
        });
    }
}

// Function to display personal information
function displaypage1() {
    let storedData = localStorage.getItem("personal_info");

    if (storedData) {
        let data = JSON.parse(storedData);
        document.getElementById("full-name").textContent = `${data.firstName} ${data.surname}`;
        document.getElementById("profession-location").textContent = `${data.profession}, ${data.city}, ${data.country}`;
        document.getElementById("contact-info").textContent = `Phone: ${data.phone}, Email: ${data.email}`;
        document.getElementById("address").textContent = `Address: ${data.city}, ${data.country} - ${data.pin}`;
    }
}

window.displaypage1 = displaypage1
window.displaypage2 = displaypage2
window.displaypage3 = displaypage3

// Call display functions on page load
document.addEventListener("DOMContentLoaded", () => {
    displaypage3();
    displaypage2();
    displaypage1();
});
