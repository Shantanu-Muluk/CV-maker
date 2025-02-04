document.addEventListener("DOMContentLoaded", () => {
    let form = document.getElementById("form");
    displayData();

    if (form) {
        form.addEventListener("submit", (event) => {
            event.preventDefault();

            let firstName = event.target.first_name.value;
            let surname = event.target.surname.value;
            let profession = event.target.profession.value;
            let city = event.target.city.value;
            let country = event.target.country.value;
            let pin = event.target.pin.value;
            let phone = event.target.phone.value;
            let email = event.target.email.value;

            let data = { firstName, surname, profession, city, country, pin, phone, email };

            console.log(data);

            // Store data in localStorage
            localStorage.setItem("personal_info", JSON.stringify(data));

            // Update displayed data after saving
            displayData();

            window.location.replace("page3.html");
        });
    }
    
    // Function to display stored data
    function displayData() {
        let storedData = localStorage.getItem("personal_info");

        if (storedData) {
            let data = JSON.parse(storedData);

            document.getElementById("full-name").textContent = `${data.firstName} ${data.surname}`;
            document.getElementById("profession-location").textContent = `${data.profession}, ${data.city}, ${data.country}`;
            document.getElementById("contact-info").textContent = `Phone: ${data.phone}, Email: ${data.email}`;
            document.getElementById("address").textContent = `Address: ${data.city}, ${data.country} - ${data.pin}`;
        }
    }
});
