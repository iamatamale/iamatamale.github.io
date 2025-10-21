document.addEventListener("DOMContentLoaded", function() {
    const aboutMeButton = document.getElementById("aboutMeButton");
    const aboutMeParagraph = document.getElementById("aboutMeParagraph");

    aboutMeButton.addEventListener("click", function() {
        if(aboutMeParagraph.style.display === "none" || !aboutMeParagraph.style.display) {
            aboutMeParagraph.style.display = "block";
            aboutMeParagraph.classList.add("visible");
        } else {
            aboutMeParagraph.classList.remove("visible");
            setTimeout(() => {
                aboutMeParagraph.style.display = "none";
            }, 500);
        }
    })
})