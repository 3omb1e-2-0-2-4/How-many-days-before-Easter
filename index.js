function EasterCountdown() {
    const Easter = new Date("April 20, 2025 00:00");
    const now = new Date();
    const diff = Easter - now;

    const msInSecond = 1000;
    const msInMinute = 60 * 1000;
    const msInHour = 60 * 60 * 1000;
    const msInDay = 24 * 60 * 60 * 1000;

    const displayDay = Math.floor(diff/msInDay);
    document.querySelector('.DAYS').textContent = displayDay;

    const displayHour = Math.floor((diff%msInDay) / msInHour);
    document.querySelector('.HOURS').textContent = displayHour;

    const displayMinute = Math.floor((diff%msInHour) / msInMinute);
    document.querySelector('.MINUTES').textContent = displayMinute;
    
    const displaySecond = Math.floor((diff%msInMinute) / msInSecond);
    document.querySelector('.SECONDS').textContent = displaySecond;



    if (diff <= 0) {
        document.querySelector(".DAYS").textContent = 0;
        document.querySelector(".HOURS").textContent = 0;
        document.querySelector(".MINUTES").textContent = 0;
        document.querySelector(".SECONDS").textContent = 0;
        clearInterval(timerId);
        HappyEaster()
    }
}




let timerId = setInterval(EasterCountdown, 1000);



function HappyEaster() {
    const heading = document.querySelector("h1");
    heading.textContent = "Happy Easter!!!"
    heading.classList.add("red")
}

const button = document.querySelector("#MyButton");
button.addEventListener('click', function() {
    document.querySelector("#MyAudio").play();
})