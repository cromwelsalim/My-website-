document.addEventListener('DOMContentLoaded', () => {
    // Retrieve user data from local storage or query parameters
    const userEmail = localStorage.getItem('userEmail'); // Assuming email is stored in local storage
    const userRole = localStorage.getItem('userRole'); // Assuming role is stored in local storage
    const userName = 'User'; // Placeholder for name (can be retrieved from server-side)

    // Update placeholders in the dashboard
    const usernameSpan = document.getElementById('username');
    const userRoleSpan = document.getElementById('userRole');
    const userEmailSpan = document.getElementById('userEmail');

    if (userEmail) {
        usernameSpan.textContent = userName; // Update user's name
        userRoleSpan.textContent = userRole || 'User'; // Update user's role or set to default if not available
        userEmailSpan.textContent = userEmail; // Update user's email
    }

    // Add event listener for logout button
    const logoutBtn = document.getElementById('logoutBtn');
    if (logoutBtn) {
        logoutBtn.addEventListener('click', () => {
            // Clear user data from local storage or perform logout operation
            localStorage.clear(); // Clearing local storage for demonstration
            // Redirect to home page
            window.location.href = 'index.html';
        });
    }

    // Back button functionality
    document.getElementById('backButton').addEventListener('click', function(event) {
        event.preventDefault(); // Prevent default behavior of the link
        // Show pop-up message
        alert("Back");
        // Redirect to index.html
        window.location.href = 'index.html';
    });

    // Form submission functionality
    document.getElementById('orderForm').addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent form submission
        // Show confirmation message
        alert("You will be contacted via WhatsApp in 5 minutes.");

        // Get form data
        const formData = new FormData(this);
        const taskDescription = formData.get('taskDescription');
        const budget = formData.get('budget');
        const message = `New Assignment Help Order:\nTask Description: ${taskDescription}\nBudget: $${budget}`;

        // Construct WhatsApp message
        const phoneNumber = '+254710372230'; // Your WhatsApp number
        const whatsappLink = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;
        // Redirect to WhatsApp
        window.location.href = whatsappLink;
    });
});
