document.addEventListener("DOMContentLoaded", () => {
    const addUserBtn = document.getElementById("add-user-btn");
    const listUsersBtn = document.getElementById("list-users-btn");
    const addUserSection = document.getElementById("add-user-section");
    const listUsersSection = document.getElementById("list-users-section");
    const addUserForm = document.getElementById("add-user-form");
    const usersList = document.getElementById("users-list");
    const addUserMessage = document.getElementById("add-user-message");

    let users = []; // Mock users array

    // Show Add User Form
    addUserBtn.addEventListener("click", () => {
        addUserSection.classList.remove("hidden");
        listUsersSection.classList.add("hidden");
    });

    // Show List Users Section
    listUsersBtn.addEventListener("click", () => {
        addUserSection.classList.add("hidden");
        listUsersSection.classList.remove("hidden");
        displayUsers();
    });

    // Add User Form Submission
    addUserForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;
        const role = document.getElementById("role").value;

        // Validate inputs
        if (!name || !email || !password || !role) {
            addUserMessage.textContent = "All fields are required.";
            addUserMessage.classList.add("error");
            return;
        }

        // Add user to the list
        const newUser = { id: users.length + 1, name, email, role };
        users.push(newUser);

        // Display success message
        addUserMessage.textContent = "User added successfully!";
        addUserMessage.classList.remove("error");
        addUserMessage.classList.add("success");

        // Reset form
        addUserForm.reset();
    });

    // Display Users
    function displayUsers() {
        usersList.innerHTML = ""; // Clear the list

        if (users.length === 0) {
            usersList.innerHTML = `<p class="text-center">No users found.</p>`;
            return;
        }

        users.forEach((user) => {
            const userItem = document.createElement("div");
            userItem.classList.add("list-group-item");
            userItem.innerHTML = `
                <p><strong>ID:</strong> ${user.id}</p>
                <p><strong>Name:</strong> ${user.name}</p>
                <p><strong>Email:</strong> ${user.email}</p>
                <p><strong>Role:</strong> ${user.role}</p>
            `;
            usersList.appendChild(userItem);
        });
    }
});
