// CONTACT FORM SUCCESS MESSAGE

document.getElementById("contactForm").addEventListener("submit", function(event) {

    event.preventDefault(); // stops page refresh

    document.getElementById("successMessage").innerText =
        "Thank you! We will contact you soon 💄";

    this.reset(); // clears form after submit
});



// FAQ TOGGLE FUNCTION

let questions = document.querySelectorAll(".question");

questions.forEach(function(question) {

    question.addEventListener("click", function() {

        let answer = this.nextElementSibling;

        if (answer.style.display === "block") {
            answer.style.display = "none";
        } else {
            answer.style.display = "block";
        }

    });

});
