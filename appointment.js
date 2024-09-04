function sendEmail() {
    // Prevent default form submission
    event.preventDefault();

    // Capture form data
    const form = document.getElementById('appointmentForm');
    const data = {
        fullName: form.querySelector('#fullName').value,
        email: form.querySelector('#email').value,
        phone: form.querySelector('#phone').value,
        date: form.querySelector('#date').value,
        time: form.querySelector('#time').value,
        reason: form.querySelector('#reason').value,
        notes: form.querySelector('#notes').value
    };

    // Construct the email body
    const emailBody = `
        <h3>Appointment Booking Details</h3>
        <p><strong>Full Name:</strong> ${data.fullName || 'Not provided'}</p>
        <p><strong>Email:</strong> ${data.email || 'Not provided'}</p>
        <p><strong>Phone Number:</strong> ${data.phone || 'Not provided'}</p>
        <p><strong>Preferred Date:</strong> ${data.date || 'Not provided'}</p>
        <p><strong>Preferred Time:</strong> ${data.time || 'Not provided'}</p>
        <p><strong>Reason for Visit:</strong> ${data.reason || 'Not provided'}</p>
        <p><strong>Additional Notes:</strong> ${data.notes || 'Not provided'}</p>
    `;

    // Send the email using SMTP.js
    Email.send({
        Host: "smtp.elasticemail.com",
        Port: 2525, // Change to 587 if using TLS
        Username: "dsfdsf@gmail.com", // Replace with your Elastic Email username
        Password: "fasdf", // Replace with your Elastic Email password
        To: 'fasdf@outlook.com', // Replace with the recipient's email address
        From: "asdfa@gmail.com", // Replace with your email address
        Subject: "New Appointment Booking Request",
        Body: emailBody
    })
    .then(function(response) {
        console.log('Email sent successfully:', response);
        alert('Your appointment request has been sent successfully.');
        document.getElementById('appointmentModal').style.display = 'none'; // Close the modal
    })
    .catch(function(error) {
        console.error('Error sending email:', error);
        alert('There was an error sending your request. Please try again.');
    });
}    // Send the email using SMTP.js

        // Host: "smtp.elasticemail.com",
        // Port: 2525, // Change to 587 if using TLS
        // Username: "mohitmohanty549@gmail.com", // Replace with your Gmail address
        // Password: "B7877432649A484C569A405C810DD18F6FD9", // Replace with your Gmail password or App Password
        // To: 'mohitmohanty549@gmail.com', // Replace with the recipient's email address
        // From: "mohitmohanty549@gmail.com", // Replace with your Gmail address
        // Subject: "New Appointment Booking Request",
        // Body: emailBody
   