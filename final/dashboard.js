 // Function to handle logout
    function logout() {
    // Perform logout actions here (e.g., clear session, redirect to login page)
    alert("You have been logged out");
    // For demonstration, let's redirect to the login page
    window.location.href = "index.html";
}

// Add event listener to the logout button
document.getElementById("logoutBtn").addEventListener("click", logout);