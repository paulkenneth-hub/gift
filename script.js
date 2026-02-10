let score = 0;
let answered = 0;

function scrollToSection(id) {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
}

function checkAnswer(button, correct) {
    if (button.classList.contains("done")) return;

    if (correct) {
        score++;
        button.style.background = "#4caf50";
    } else {
        button.style.background = "#999";
    }

    button.classList.add("done");
    answered++;

    if (answered === 3) {
        document.getElementById("score").innerText =
            "You scored " + score + "/3 ❤️ – You know us perfectly!";
        scrollToSection("final");
    }
}
