// ================= TASK 1 =================
class Student {
    constructor(id, name, semester, courses) {
        this.id = id;
        this.name = name;
        this.semester = semester;
        this.courses = courses;
    }

    getDetails() {
        return `
            <div class="student-card">
                <strong>ID:</strong> ${this.id} <br>
                <strong>Name:</strong> ${this.name} <br>
                <strong>Semester:</strong> ${this.semester} <br>
                <strong>Courses:</strong> ${this.courses.join(", ")}
            </div>
        `;
    }
}

const student1 = new Student(1, "Ali", 3, ["DSA", "OS"]);
const student2 = new Student(2, "Ahmed", 4, ["AI", "Database"]);
const student3 = new Student(3, "Safi", 5, ["Web Dev", "ML"]);

const students = [student1, student2, student3];

let studentHTML = "";
students.forEach(student => {
    studentHTML += student.getDetails();
});

document.getElementById("studentOutput").innerHTML = studentHTML;


// ================= TASK 2 =================
function addToCart(...items) {
    return items;
}

function runCart() {

    const products = addToCart("Laptop", "Mouse", "Keyboard", "Headphones");

    const updatedCart = [...products];

    const [firstProduct, ...remainingProducts] = updatedCart;

    document.getElementById("cartOutput").innerHTML = `
        <strong>Total Items:</strong> ${updatedCart.length} <br>
        <strong>First Product:</strong> ${firstProduct} <br>
        <strong>Remaining Products:</strong> ${remainingProducts.join(", ")}
    `;
}


// ================= TASK 3 =================
function fetchUsers() {

    const dataSuccess = true;

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
                reject("Failed to load users.");
            }

        }, 3000);

    });
}

function loadUsers() {

    const output = document.getElementById("userOutput");
    output.innerHTML = "Loading users... (3 seconds delay)";

    fetchUsers()
        .then(users => {
            let html = "";
            users.forEach(user => {
                html += `ID: ${user.id} | Name: ${user.name} <br>`;
            });
            output.innerHTML = html;
        })
        .catch(error => {
            output.innerHTML = error;
        });
}