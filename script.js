
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
    // const correctPassword = "46291529072002";
    const correctPassword = "46";
    const input = document.getElementById("phonePassword").value.trim();
    const msg = document.getElementById("passMsg");
    const gif = document.getElementById("mainGif");

    if (input === correctPassword) {
        msg.innerText = "Unlocked 💖 You know me too well 😘";
        gif.src = "pix/firstpagegif.gif"; 
        setTimeout(correct, 800);
    } else {
        msg.innerText = "Hmm… that’s not it 😅 Try again, love ❤️";
        gif.src = "pix/shootcat.gif"; 
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

function showEmoji(type) {
    const emojiBox = document.getElementById("emoji-feedback");

    emojiBox.innerHTML = type === "correct" ? "💖💖💖" : "😭";
    emojiBox.style.display = "block";

    setTimeout(() => {
        emojiBox.style.display = "none";
    }, 1200);
}
function checkMessage(answer) {
    const msg = document.querySelector("#quiz-message .quiz-msg");

    if (answer === "paul") {
        showEmoji("correct");
        document.getElementById("quiz-message").style.display = "none";
        document.getElementById("messageContent").style.display = "block";
    } else {
        showEmoji("wrong");
        msg.innerHTML = "Try again 😅";
    }
}
function checkProposal(answer) {
    const msg = document.querySelector("#quiz-propose .quiz-msg");

    if (answer === "me") {
        showEmoji("correct");
        document.getElementById("quiz-propose").style.display = "none";
        document.getElementById("proposalContent").style.display = "block";
    } else {
        showEmoji("wrong");
        msg.innerHTML = "Nope 😭 love knows";
    }
}
function checkMeetDate(answer) {
    const msg = document.querySelector("#quiz-meet .quiz-msg");

    if (answer === "11-12-2022") {
        showEmoji("correct");
        document.getElementById("quiz-meet").style.display = "none";
        document.getElementById("meetContent").style.display = "block";
    } else {
        showEmoji("wrong");
        msg.innerHTML = "Almost 😭";
    }
}

function checkTrip(answer) {
    const msg = document.querySelector("#quiz-trip .quiz-msg");

    if (answer === "kodaikanal") {
        showEmoji("correct");
        document.getElementById("quiz-trip").style.display = "none";
        document.getElementById("tripContent").style.display = "block";
    } else {
        showEmoji("wrong");
        msg.innerHTML = "Try again 😭";
    }
}

function nextPage2() {
    pages[current].classList.remove("active");
    current++;

    if (current < pages.length) {
        pages[current].classList.add("active");

        // 👉 START GAME ONLY ON PAGE 3 (index 2)
        if (current === 2) {
            startGame();
        }
    }
}

//game logic
let score = 0;
let gameInterval;
//SCORE TO WIN CAN BE ADJUSTED FOR MORE FUN
const WIN_SCORE = 1;

const goodEmojis = ["💖", "💘", "💝", "💕", "😍"];
const badEmojis = ["😭", "💔", "😈", "🥺", "😵", "💣"];

function startGame() {
    score = 0;
    document.getElementById("score").innerText = "Score: 0";
    document.getElementById("gameMsg").innerHTML = "";
    document.getElementById("nextBtn").style.display = "none";

    gameInterval = setInterval(dropItem, 700);
}

function dropItem() {
    const item = document.createElement("div");
    item.classList.add("falling");

    const isGood = Math.random() > 0.4;
    const emoji = isGood
        ? goodEmojis[Math.floor(Math.random() * goodEmojis.length)]
        : badEmojis[Math.floor(Math.random() * badEmojis.length)];

    item.textContent = emoji;
    item.style.left = Math.random() * 90 + "%";

    item.onclick = () => {
        if (goodEmojis.includes(emoji)) {
            score++;
            document.getElementById("score").innerText = "Score: " + score;
            item.remove();

            if (score >= WIN_SCORE) {
                winGame();
            }
        } else if (emoji === "💣") {
            score = Math.max(0, score - 1);
            document.getElementById("score").innerText = "Score: " + score;
            item.remove();
        } else {
            loseGame();
        }
    };

    document.getElementById("gameArea").appendChild(item);
    setTimeout(() => item.remove(), 2500);
}

function winGame() {
    clearInterval(gameInterval);
    document.getElementById("gameMsg").innerHTML =
        "You proved your love 💞 Scored 10 points! 🥰";

    setTimeout(() => {
        pages[current].classList.remove("active");
        current++;
        pages[current].classList.add("active");

        // show Next button after 10 seconds
        setTimeout(() => {
            document.getElementById("nextBtnVideo").style.display = "block";
        }, 5000);

    }, 1200);
}


function loseGame() {
    clearInterval(gameInterval);
    document.getElementById("gameMsg").innerHTML =
        "Oops 💔 Love needs patience 😅 Try again ❤️";
}
// function nextPage3() {
//     document.querySelector(".page").style.display = "none";

// }


// function showVideoPage() {
//     document.querySelector(".page").style.display = "none";

//     const videoPage = document.getElementById("videoPage");
//     videoPage.style.display = "block";

//     setTimeout(() => {
//         document.getElementById("nextBtnVideo").style.display = "block";
//     }, 10000); 
// }
function nextPage4() {
    pages[current].classList.remove("active");
    current++;

    if (current < pages.length) {
        pages[current].classList.add("active");
    }
}

