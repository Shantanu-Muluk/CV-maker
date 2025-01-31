document.addEventListener("DOMContentLoaded", function () {
    // Identify which page is currently loaded
    const contactForm = document.querySelector(".contact-form"); // Page1 and Page3
    const educationForm = document.querySelector(".education-form"); // Page3
    const skillsForm = document.querySelector(".form-container form"); // Page4
    const nextButton = document.getElementById("education"); // Page3
    const saveAndNextButton = document.getElementById("saveAndNext"); // Page4

    // ==== Contact Information Form (page1.html) ====
    if (contactForm && document.title.includes("Contact Form")) {
        contactForm.addEventListener("submit", function (event) {
            event.preventDefault();

            const userData = {
                firstName: document.getElementById("first-name").value,
                surname: document.getElementById("surname").value,
                profession: document.getElementById("profession").value,
                city: document.getElementById("city").value,
                country: document.getElementById("country").value,
                pinCode: document.getElementById("pin-code").value,
                phone: document.getElementById("phone").value,
                email: document.getElementById("email").value,
            };

            console.log("User Data:", userData);
            localStorage.setItem("resumeData", JSON.stringify(userData));
            window.location.href = "page3.html";
        });
    }

    // ==== Education & Experience Form (page3.html) ====
    if (educationForm && document.title.includes("Education")) {
        educationForm.addEventListener("submit", function (event) {
            event.preventDefault(); // Prevent default form submission

            const educationData = {
                schoolName: document.getElementById("s-name").value,
                schoolLocation: document.getElementById("s-location").value,
                degree: document.getElementById("degree").value,
                fieldOfStudy: document.getElementById("study").value,
                graduationDate: document.getElementById("graduation-date").value,
                experience: document.getElementById("exp").value,
                startDate: document.getElementById("start-date").value,
                endDate: document.getElementById("end-date").value,
            };

            console.log("Education Data:", educationData);
            localStorage.setItem("educationData", JSON.stringify(educationData));
            window.location.href = "page4.html";
        });
    }

    // ==== Skills and Summary Form (page4.html) ====
    if (skillsForm) {
        saveAndNextButton.addEventListener("click", function (event) {
            event.preventDefault();

            const skillsData = {
                skills: [
                    { skill: document.getElementById("skill-1").value, desc: document.getElementById("desc-1").value },
                    { skill: document.getElementById("skill-2").value, desc: document.getElementById("desc-2").value },
                    { skill: document.getElementById("skill-3").value, desc: document.getElementById("desc-3").value },
                    { skill: document.getElementById("skill-4").value, desc: document.getElementById("desc-4").value }
                ],
                summary: document.getElementById("summary").value
            };

            console.log("Skills Data:", skillsData);
            localStorage.setItem("skillsData", JSON.stringify(skillsData));
            window.location.href = "resume.html";
        });
    }

    // ==== Populate Resume Page (resume.html) ====
    if (document.querySelector(".resume-container")) {
        const storedData = JSON.parse(localStorage.getItem("resumeData"));
        const educationData = JSON.parse(localStorage.getItem("educationData"));
        const skillsData = JSON.parse(localStorage.getItem("skillsData"));

        if (storedData) {
            document.getElementById("full-name").textContent = `${storedData.firstName} ${storedData.surname}`;
            document.getElementById("profession-location").textContent = `${storedData.profession}, ${storedData.city}, ${storedData.country}`;
            document.getElementById("contact-info").textContent = `Phone: ${storedData.phone} | Email: ${storedData.email}`;
            document.getElementById("address").textContent = `Address: ${storedData.city}, ${storedData.country} - ${storedData.pinCode}`;
        } else {
            console.error("No resume data found in localStorage.");
        }

        if (educationData) {
            document.getElementById("education-details").innerHTML = `
                <p><strong>School:</strong> ${educationData.schoolName}, ${educationData.schoolLocation}</p>
                <p><strong>Degree:</strong> ${educationData.degree} in ${educationData.fieldOfStudy}</p>
                <p><strong>Graduation:</strong> ${educationData.graduationDate}</p>
                <p><strong>Experience:</strong> ${educationData.experience}</p>
                <p><strong>Start Date:</strong> ${educationData.startDate} | <strong>End Date:</strong> ${educationData.endDate}</p>
            `;
        } else {
            console.error("No education data found in localStorage.");
        }

        if (skillsData) {
            document.getElementById("skills-list").innerHTML = skillsData.skills
                .map(skill => `<li><strong>${skill.skill}:</strong> ${skill.desc}</li>`)
                .join("");
            document.getElementById("summary-text").textContent = skillsData.summary;
        } else {
            console.error("No skills data found in localStorage.");
        }
    }
});
