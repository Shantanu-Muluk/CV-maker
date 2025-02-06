document.addEventListener("DOMContentLoaded", () => {
    console.log("dom fully loded")
    let form = document.getElementById("form");
    console.log("form",form)
    form.addEventListener("submit", (event) => {
        event.preventDefault();

        let school_name = event.target.sname.value;
        let school_location = event.target.slocation.value;
        let degree = event.target.degree.value || "NA";
        let field_of_study = event.target.field_of_study.value || "NA";
        let gdate = event.target.gdate.value || "NA";
        let experience = event.target.experience.value || "NA";
        let startDate = event.target.startDate.value || "NA";
        let endDate = event.target.endDate.value || "NA";

        let data = {
            school_name, 
            school_location, 
            degree, 
            field_of_study, 
            gdate, 
            experience, 
            startDate, 
            endDate
        };

        localStorage.setItem("Education_Details", JSON.stringify(data));
        window.location.href = "resume.html"; 
    });

    displaypage3();
});
