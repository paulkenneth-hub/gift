
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
