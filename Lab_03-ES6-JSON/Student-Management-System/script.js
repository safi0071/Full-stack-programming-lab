// ================= Student Class =================

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

// Create Students (Using const properly)
const student1 = new Student(1, "Ali", 3, ["DSA", "OS"]);
const student2 = new Student(2, "Ahmed", 4, ["AI", "Database"]);
const student3 = new Student(3, "Safi", 5, ["Web Dev", "ML"]);

// Store in Array
const students = [student1, student2, student3];

// Display All Students Dynamically
let outputHTML = "";

students.forEach(student => {
    outputHTML += student.getDetails();
});

document.getElementById("studentOutput").innerHTML = outputHTML;