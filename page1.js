document.addEventListener("DOMContentLoaded", function () {
    console.log("JavaScript Loaded");

    // Identify which page is currently loaded
    const contactForm = document.querySelector(".contact-form"); // Page1
    const educationForm = document.querySelector(".education-form"); // Page3
    const skillsForm = document.querySelector(".skills-form"); // Page4
    const saveAndNextButton = document.getElementById("saveAndNext"); // Page4

    // ==== Contact Information Form (page1.html) ====
    if (contactForm) {
        console.log("Contact Form Detected");

        contactForm.addEventListener("submit", function (event) {
            event.preventDefault();

            const userData = {
                firstName: document.getElementById("first-name").value.trim(),
                surname: document.getElementById("surname").value.trim(),
                profession: document.getElementById("profession").value.trim(),
                city: document.getElementById("city").value.trim(),
                country: document.getElementById("country").value.trim(),
                pinCode: document.getElementById("pin-code").value.trim(),
                phone: document.getElementById("phone").value.trim(),
                email: document.getElementById("email").value.trim(),
            };

            console.log("Saving Contact Data:", userData);
            localStorage.setItem("resumeData", JSON.stringify(userData));
            window.location.href = "page3.html";
        });
    }

    // ==== Education & Experience Form (page3.html) ====
    if (educationForm) {
        console.log("Education Form Detected");

        educationForm.addEventListener("submit", function (event) {
            event.preventDefault();

            const educationData = {
                schoolName: document.getElementById("s-name").value.trim(),
                schoolLocation: document.getElementById("s-location").value.trim(),
                degree: document.getElementById("degree").value.trim() || "N/A",
                fieldOfStudy: document.getElementById("study").value.trim() || "N/A",
                graduationDate: document.getElementById("graduation-date").value || "N/A",
                experience: document.getElementById("exp").value.trim() || "N/A",
                startDate: document.getElementById("start-date").value || "N/A",
                endDate: document.getElementById("end-date").value || "N/A",
            };

            console.log("Saving Education Data:", educationData);
            localStorage.setItem("educationData", JSON.stringify(educationData));
            window.location.href = "page4.html";
        });
    }

    // ==== Skills and Summary Form (page4.html) ====
    if (skillsForm && saveAndNextButton) {
        console.log("Skills Form Detected");

        saveAndNextButton.addEventListener("click", function (event) {
            event.preventDefault();

            const skillsData = {
                skills: [
                    { skill: document.getElementById("skill-1").value.trim(), desc: document.getElementById("desc-1").value.trim() },
                    { skill: document.getElementById("skill-2").value.trim(), desc: document.getElementById("desc-2").value.trim() },
                    { skill: document.getElementById("skill-3").value.trim(), desc: document.getElementById("desc-3").value.trim() },
                    { skill: document.getElementById("skill-4").value.trim(), desc: document.getElementById("desc-4").value.trim() }
                ].filter(skill => skill.skill !== "" && skill.desc !== ""), // Remove empty skills
                summary: document.getElementById("summary").value || "No summary provided."
            };

            console.log("Saving Skills Data:", skillsData);
            localStorage.setItem("skillsData", JSON.stringify(skillsData));

            if (localStorage.getItem("skillsData")) {
                console.log("Skills data successfully saved!");
                window.location.href = "resume.html"; // Redirect after saving
            } else {
                console.error("Failed to save skills data.");
            }
        });
    }

    // ==== Populate Resume Page (resume.html) ====
    if (document.querySelector(".resume-container")) {
        console.log("Resume Page Detected");

        const storedData = JSON.parse(localStorage.getItem("resumeData")) || {};
        const educationData = JSON.parse(localStorage.getItem("educationData")) || {};
        const skillsData = JSON.parse(localStorage.getItem("skillsData")) || { skills: [], summary: "No summary provided." };

        if (storedData.firstName) {
            document.getElementById("full-name").textContent = `${storedData.firstName} ${storedData.surname}`;
            document.getElementById("profession-location").textContent = `${storedData.profession}, ${storedData.city}, ${storedData.country}`;
            document.getElementById("contact-info").textContent = `Phone: ${storedData.phone} | Email: ${storedData.email}`;
            document.getElementById("address").textContent = `Address: ${storedData.city}, ${storedData.country} - ${storedData.pinCode}`;
        } else {
            console.error("No resume data found in localStorage.");
        }

        if (educationData.schoolName) {
            let experienceSection = educationData.experience !== "N/A"
                ? `<p><strong>Experience:</strong> ${educationData.experience}</p>
                   <p><strong>Start Date:</strong> ${educationData.startDate} | <strong>End Date:</strong> ${educationData.endDate}</p>`
                : "<p>No work experience provided.</p>";

            document.getElementById("education-details").innerHTML = `
                <p><strong>School:</strong> ${educationData.schoolName}, ${educationData.schoolLocation}</p>
                <p><strong>Degree:</strong> ${educationData.degree} in ${educationData.fieldOfStudy}</p>
                <p><strong>Graduation:</strong> ${educationData.graduationDate}</p>
                ${experienceSection}
            `;
        } else {
            console.error("No education data found in localStorage.");
        }

        if (skillsData.skills.length > 0) {
            document.getElementById("skills-list").innerHTML = skillsData.skills
                .map(skill => `<li><strong>${skill.skill}:</strong> ${skill.desc}</li>`)
                .join("");
            document.getElementById("summary-text").textContent = skillsData.summary;
        } else {
            console.error("No skills data found in localStorage.");
            document.getElementById("skills-list").innerHTML = "<li>No skills added.</li>";
        }
    }
});
