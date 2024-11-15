document.addEventListener("DOMContentLoaded", function () {
    const userRole = localStorage.getItem("userRole"); // Retrieve user role from storage (e.g., 'patient' or 'doctor')

    if (userRole === "doctor") {
        // Show doctor-specific content
        document.getElementById("profileSection").style.display = "block";
        document.getElementById("appointmentsSection").style.display = "block";
    } else if (userRole === "patient") {
        // Show patient-specific content
        document.getElementById("profileSection").style.display = "block";
        document.getElementById("appointmentsSection").style.display = "block";
    } else {
        // Redirect to login if role is not recognized
        window.location.href = "login.html";
    }

    // Handle profile form submission
    document.getElementById("profileForm").addEventListener("submit", function (event) {
        event.preventDefault();
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;

        // Save updated profile information (this can be sent to the server if needed)
        console.log("Profile updated:", { name, email });
        alert("Profile updated successfully!");
    });

    // Load appointment history (this would typically be fetched from the server)
    const appointmentList = document.getElementById("appointmentList");
    const appointments = [
        { date: "2023-05-01", time: "10:00 AM", doctor: "Dr. Smith", reason: "Check-up" },
        { date: "2023-06-15", time: "2:00 PM", doctor: "Dr. Johnson", reason: "Follow-up" }
    ];

    appointments.forEach(appointment => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${appointment.date}</td>
            <td>${appointment.time}</td>
            <td>${appointment.doctor}</td>
            <td>${appointment.reason}</td>
        `;
        appointmentList.appendChild(row);
    });
});
