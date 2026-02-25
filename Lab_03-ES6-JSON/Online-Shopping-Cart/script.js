// ================= Asynchronous Data Loader =================

function fetchUsers() {

    const dataSuccess = true;   // change to false to test reject

    return new Promise((resolve, reject) => {

        setTimeout(() => {

            if (dataSuccess) {

                const users = [
                    { id: 1, name: "Ali" },
                    { id: 2, name: "Ahmed" },
                    { id: 3, name: "Safi" }
                ];

                resolve(users);

            } else {
                reject("Error: Failed to fetch user data.");
            }

        }, 3000);   // 3 seconds delay

    });
}


function loadUsers() {

    const output = document.getElementById("userOutput");
    output.innerHTML = "Loading users... Please wait (3 seconds)";

    fetchUsers()
        .then(function(users) {

            let html = "";

            users.forEach(function(user) {
                html += `
                    <strong>ID:</strong> ${user.id} 
                    | <strong>Name:</strong> ${user.name} <br>
                `;
            });

            output.innerHTML = html;

        })
        .catch(function(error) {

            output.innerHTML = error;

        });
}