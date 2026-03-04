const buttons = document.querySelectorAll(".tab-btn");
const contents = document.querySelectorAll(".tab-content");

buttons.forEach(button => {
    button.addEventListener("click", function () {

        // Remove active from all buttons
        buttons.forEach(btn => btn.classList.remove("active"));

        // Remove active from all content
        contents.forEach(content => content.classList.remove("active"));

        // Add active to clicked button
        this.classList.add("active");

        // Show related content
        const tabId = this.getAttribute("data-tab");
        const activeContent = document.getElementById(tabId);
        activeContent.classList.add("active");

        // Scroll to content smoothly
        activeContent.scrollIntoView({
            behavior: "smooth"
        });
    });
});