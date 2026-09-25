
function updateClock() {

const now = new Date();

let hours = now.getHours();
const minutes = now.getMinutes();
const seconds = now.getSeconds();

let period = "AM";

if (hours >= 12) {
    period = "PM";
}

hours = hours % 12;

if (hours === 0) {
    hours = 12;
}

const formattedHours = String(hours).padStart(2, "0");
const formattedMinutes = String(minutes).padStart(2, "0");
const formattedSeconds = String(seconds).padStart(2, "0");

const currentTime =
    `${formattedHours}:${formattedMinutes}:${formattedSeconds} ${period}`;

document.getElementById("liveClock").textContent = currentTime;


}


updateClock();


setInterval(updateClock, 1000);


function updateCountdown() {


const now = new Date();

let birthday = new Date(
    now.getFullYear(),
    0,
    24,
    0,
    0,
    0
);


if (now > birthday) {

    birthday = new Date(
        now.getFullYear() + 1,
        0,
        24,
        0,
        0,
        0
    );

}

const difference = birthday - now;

const days = Math.floor(
    difference / (1000 * 60 * 60 * 24)
);

const hours = Math.floor(
    (difference / (1000 * 60 * 60)) % 24
);

const minutes = Math.floor(
    (difference / (1000 * 60)) % 60
);

const seconds = Math.floor(
    (difference / 1000) % 60
);


document.getElementById("days").textContent =
    String(days).padStart(2, "0");

document.getElementById("hours").textContent =
    String(hours).padStart(2, "0");

document.getElementById("minutes").textContent =
    String(minutes).padStart(2, "0");

document.getElementById("seconds").textContent =
    String(seconds).padStart(2, "0");


}


updateCountdown();

setInterval(updateCountdown, 1000);


const welcomeButton =
document.getElementById("welcomeButton");

const welcomeMessage =
document.getElementById("welcomeMessage");

welcomeButton.addEventListener("click", function () {


if (welcomeMessage.textContent === "") {

    welcomeMessage.textContent =
        "Thank you for visiting my profile! May you follow me all through out my journey and learn with me along the way!!.";

    welcomeButton.textContent =
        "Hide Message";

} else {

    welcomeMessage.textContent = "";

    welcomeButton.textContent =
        "Click Me!";

}


});

