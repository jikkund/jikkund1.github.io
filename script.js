function calculateAge() {

    // Get input value
    let dob = document.getElementById("dob").value;

    // Check if empty
    if (dob === "") {
        document.getElementById("result").innerText = "Please select a date!";
        return;
    }

    // Convert to Date object
    let birthDate = new Date(dob);
    let today = new Date();

    // Calculate differences
    let years = today.getFullYear() - birthDate.getFullYear();
    let months = today.getMonth() - birthDate.getMonth();
    let days = today.getDate() - birthDate.getDate();

    // Adjust if days negative
    if (days < 0) {
        months--;
        days += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
    }

    // Adjust if months negative
    if (months < 0) {
        years--;
        months += 12;
    }

    // Display result
    document.getElementById("result").innerText =
        "Your Age: " + years + " Years, " + months + " Months, " + days + " Days";
}