document.addEventListener("DOMContentLoaded", () => {
    let form = document.getElementById("form");

    if (form) {
        form.addEventListener("submit", (event) => {
            event.preventDefault();

            let skill_1 = event.target.skill_1.value;
            let desc_1 = event.target.desc_1.value;
            let skill_2 = event.target.skill_2.value;
            let desc_2 = event.target.desc_2.value;
            let skill_3 = event.target.skill_3.value;
            let desc_3 = event.target.desc_3.value;
            let skill_4 = event.target.skill_4.value;
            let desc_4 = event.target.desc_4.value;
            let summary = event.target.summary.value;

            let skillsData = {
                skills: [
                    { name: skill_1, description: desc_1 },
                    { name: skill_2, description: desc_2 },
                    { name: skill_3, description: desc_3 },
                    { name: skill_4, description: desc_4 }
                ],
                summary: summary
            };

            localStorage.setItem("skills_summary", JSON.stringify(skillsData));

            console.log("Skills and summary saved:", skillsData);
            display();
        });
    }

    function display() {
        let storedData = localStorage.getItem("skills_summary");

        if (storedData) {
            let data = JSON.parse(storedData);

            // Display Summary
            document.getElementById("summary-text").textContent = data.summary;

            // Display Skills
            let skillsList = document.getElementById("skills-list");
            skillsList.innerHTML = ""; // Clear existing list items

            data.skills.forEach(skill => {
                if (skill.name.trim()) { // Only add skills that are not empty
                    let li = document.createElement("li");
                    li.innerHTML = `<span><strong>${skill.name}</strong>: ${skill.description}</span>`;
                    skillsList.appendChild(li);
                }
            });
        }
    }

    display();
});
