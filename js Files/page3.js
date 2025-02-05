document.addEventListener("DOMContentLoaded", () => {
    let form = document.getElementById("form");

    form.addEventListener("submit", (event) => {
        event.preventDefault()
        let school_name = event.target.sname.value;
        let school_location = event.target.slocation.value;
        let degree = event.target.degree.value;
        let field_of_study = event.target.field_of_study.value;
        let gdate = event.target.gdate.value || "NA"
        let experience = event.target.experience.value;
        let startDate = event.target.startDate.value || "NA"
        let endDate = event.target.endDate.value || "NA"

        let data = {
            school_name, school_location, degree, field_of_study, gdate, experience, startDate, endDate
        }

        localStorage.setItem("Education_Details", JSON.stringify(data))
        display()
        window.location.href="resume.html"
    })

    function display() {
        let education = document.getElementById("education-details");
        let experience = document.getElementById("experience-details");

        let displayData = localStorage.getItem("Education_Details");
        console.log(displayData)
        if (displayData) {
            let data = JSON.parse(displayData)
            education.innerText = `College Name: ${data.school_name}
        College Location: ${data.school_location}, Qualification: ${data.degree},  Field_of_Study: ${data.field_of_study}, Graduation_Date:${data.gdate}
        `
            experience.innerText = `Ecperience: ${data.experience}, Start Date: ${data.startDate}, End Date: ${data.endDate}`
        }

        
    }
    display();
})