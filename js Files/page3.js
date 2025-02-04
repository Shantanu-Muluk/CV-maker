document.addEventListener("DOMContentLoaded", () => {
    let form = document.getElementById("form");

    form.addEventListener("submit", (event) => {
        event.preventDefault();

        let school_Name = event.target.sname.value;
        let school_location = event.target.slocation.value;
        let degree = event.target.degree.value;
        let field_of_study = event.target.field_of_study.value;
        let gdate = event.target.gdate.value;
        let experience = event.target.experience.value;
        let startDate = event.target.startDate.value;
        let endDate = event.target.endDate.value;

        let data = {
            school_Name,
            school_location,
            degree,
            field_of_study,
            gdate,
            experience,
            startDate,
            endDate
        };

        console.log(data);

        localStorage.setItem("educationDetails", JSON.stringify(data));

        display(); // Call display function after saving data
    });

    function display() {
        let storedData = localStorage.getItem("educationDetails");

        if (storedData) {
            let details = JSON.parse(storedData);

            document.getElementById("education-details").innerHTML = `
                <strong>School Name:</strong> ${details.school_Name} <br>
                <strong>Location:</strong> ${details.school_location} <br>
                <strong>Degree:</strong> ${details.degree} <br>
                <strong>Field of Study:</strong> ${details.field_of_study} <br>
                <strong>Graduation Date:</strong> ${details.gdate}
            `;

            document.getElementById("experience-details").innerHTML = `
                <strong>Experience:</strong> ${details.experience} <br>
                <strong>Start Date:</strong> ${details.startDate} <br>
                <strong>End Date:</strong> ${details.endDate}
            `;

            let skillsList = document.getElementById("exp-list");
            skillsList.innerHTML = ""; // Clear existing list items

            let skills = details.experience.split(","); // Assuming skills are comma-separated
            skills.forEach(skill => {
                let li = document.createElement("li");
                li.textContent = skill.trim();
                skillsList.appendChild(li);
            });
        }
    }

    display(); // Display data on page load if available
});
