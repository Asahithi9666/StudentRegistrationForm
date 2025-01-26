document.getElementById("registrationForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the form from submitting

    // Get form data
    const name = document.getElementById("name").value;
    const age = document.getElementById("age").value;
    const gender = document.querySelector('input[name="gender"]:checked') ? document.querySelector('input[name="gender"]:checked').value : "";
    const course = document.getElementById("course").value;

    // Simple form validation
    if (name === "" || age === "" || gender === "" || course === "") {
        document.getElementById("message").innerHTML = "<p style='color:red;'>Please fill all the fields.</p>";
    } else {
        document.getElementById("message").innerHTML = `
            <p style="color:green;">Registration Successful!</p>
            <p>Name: ${name}</p>
            <p>Age: ${age}</p>
            <p>Gender: ${gender}</p>
            <p>Course: ${course}</p>
        `;
    }
});
