document.addEventListener("DOMContentLoaded", function() {
    const profilePicture = document.getElementById("imgP");
    const dropdown = document.getElementById("RightNav");
    const logoutOption = document.getElementById("logoutBar");
    
    // Toggle the dropdown when the profile picture is clicked
    profilePicture.addEventListener("click", function() {
        if (dropdown.style.display === "block") {
            dropdown.style.display = "none";
        } else {
            dropdown.style.display = "block";
        }
    });

    // Log out when the "Log Out" option is clicked
    logoutOption.addEventListener("click", function() {
        localStorage.removeItem("token");
        alert("Logged out successfully");
        window.location.href = "http://127.0.0.1:5500/UiFundooNotes/HTML/SigninPage.html";
    });

    // Close the dropdown when clicking outside of it
    window.addEventListener("click", function(event) {
        if (!event.target.matches("#imgP")) {
            if (dropdown.style.display === "block") {
                dropdown.style.display = "none";
            }
        }
    });
});
