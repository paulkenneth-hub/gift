
let current = 0;
const pages = document.querySelectorAll(".page");

function correct() {
    pages[current].classList.remove("active");
    current++;

    if (current < pages.length) {
        pages[current].classList.add("active");
    }
}

function wrong(btn) {
    const msg = btn.parentElement.querySelector(".msg");
    msg.innerText = "Oops 😘 Try again… my heart knows the right answer ❤️";
}

function checkPassword() {
    const correctPassword = "46291529072002";
    const input = document.getElementById("phonePassword").value.trim();
    const msg = document.getElementById("passMsg");

    if (input === correctPassword) {
        msg.innerText = "Unlocked 💖 You know me too well 😘";
        setTimeout(correct, 800);
    } else {
        msg.innerText = "Hmm… that’s not it 😅 Try again, love ❤️";
    }
}
const heartsContainer = document.getElementById("hearts-container");

function createHeart() {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.innerHTML = "❤️";

    // Random position & size
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize = (Math.random() * 20 + 15) + "px";

    // Random fall speed
    const duration = Math.random() * 3 + 4;
    heart.style.animationDuration = duration + "s";

    heartsContainer.appendChild(heart);

    // Burst before removing
    setTimeout(() => {
        heart.classList.add("burst");
    }, (duration - 0.6) * 1000);

    // Remove completely
    setTimeout(() => {
        heart.remove();
    }, duration * 1000);
}

// Create hearts continuously
setInterval(createHeart, 300);
