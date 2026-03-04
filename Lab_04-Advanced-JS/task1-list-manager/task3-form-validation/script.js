const form = document.getElementById("myForm");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const successMessage = document.getElementById("successMessage");

function showError(input, message) {
    input.classList.add("error-border");
    input.nextElementSibling.textContent = message;
}

function clearError(input) {
    input.classList.remove("error-border");
    input.nextElementSibling.textContent = "";
}

nameInput.addEventListener("blur", function () {
    if (nameInput.value.trim() === "") {
        showError(nameInput, "Name is required");
    } else {
        clearError(nameInput);
    }
});

emailInput.addEventListener("blur", function () {
    if (!emailInput.value.includes("@")) {
        showError(emailInput, "Enter valid email");
    } else {
        clearError(emailInput);
    }
});

passwordInput.addEventListener("blur", function () {
    if (passwordInput.value.length < 6) {
        showError(passwordInput, "Password must be at least 6 characters");
    } else {
        clearError(passwordInput);
    }
});

form.addEventListener("submit", function (e) {
    e.preventDefault();

    if (
        nameInput.value.trim() !== "" &&
        emailInput.value.includes("@") &&
        passwordInput.value.length >= 6
    ) {
        successMessage.textContent = "Form submitted successfully!";
        form.reset();
    } else {
        successMessage.textContent = "";
    }
});