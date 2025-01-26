document.getElementById("registrationForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the form from submitting and refreshing the page

    // Get form data
    const name = document.getElementById("name").value;
    const age = document.getElementById("age").value;
    const phone = document.getElementById("phone").value;
    const address = document.getElementById("address").value;
    const email = document.getElementById("email").value;
    const gender = document.querySelector('input[name="gender"]:checked') ? document.querySelector('input[name="gender"]:checked').value : "";
    const course = document.getElementById("course").value;

    // Simple validation to ensure all fields are filled
    if (name === "" || age === "" || phone === "" || address === "" || email === "" || gender === "" || course === "") {
        alert("Please fill all the fields.");
    } else {
        // Show success alert message with name
        alert(name + ", you are registered successfully!");
    }
});
