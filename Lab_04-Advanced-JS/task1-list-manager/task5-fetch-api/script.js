const container = document.getElementById("cardContainer");
const loadingText = document.getElementById("loading");

async function fetchUsers() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");

        if (!response.ok) {
            throw new Error("Network response was not ok");
        }

        const users = await response.json();

        loadingText.remove();

        users.forEach(user => {
            const card = document.createElement("div");
            card.classList.add("card");

            card.innerHTML = `
                <h3>${user.name}</h3>
                <p><strong>Email:</strong> ${user.email}</p>
                <p><strong>Phone:</strong> ${user.phone}</p>
                <p><strong>Company:</strong> ${user.company.name}</p>
            `;

            container.appendChild(card);
        });

    } catch (error) {
        loadingText.textContent = "";
        const errorMsg = document.createElement("p");
        errorMsg.id = "error";
        errorMsg.textContent = "Failed to load users.";
        container.appendChild(errorMsg);
    }
}

fetchUsers();