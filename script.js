document.addEventListener("DOMContentLoaded", function () {
    function saveToLocalStorage(formSelector, storageKey) {
        const form = document.querySelector(formSelector);
        if (!form) return;

        function storeData() {
            const formData = {};
            form.querySelectorAll("input, textarea").forEach(input => {
                formData[input.id] = input.value;
            });
            localStorage.setItem(storageKey, JSON.stringify(formData));
        }

        form.addEventListener("submit", function (event) {
            event.preventDefault();
            storeData();
        });

        const nextButton = document.getElementById("saveAndNext");
        if (nextButton) {
            nextButton.addEventListener("click", function () {
                storeData();
                window.location.href = "resume.html"; // Navigate to resume
            });
        }
    }

    ["contactInfo", "educationInfo", "skillsSummaryInfo"].forEach(key => {
        saveToLocalStorage("form", key);
    });

    function loadResumeData() {
        ["contactInfo", "educationInfo", "skillsSummaryInfo"].forEach(key => {
            const data = JSON.parse(localStorage.getItem(key)) || {};
            Object.keys(data).forEach(id => {
                const element = document.getElementById(id);
                if (element) element.textContent = data[id];
            });
        });
    }

    if (document.body.classList.contains("resume-page")) {
        loadResumeData();
    }
});
