const daysEl = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minsEl = document.getElementById('mins');
const secondsEl = document.getElementById('seconds');

// Sets date for timer
const graduation = '6 Apr 2023';

// Used Math.floor to portray time
function countdown() {
    const graduationDate = new Date(graduation);
    const currentDate = new Date ();

    const totalSeconds = (graduationDate - currentDate) / 1000;

    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const mins = Math.floor(totalSeconds / 60) % 60;
    const seconds = Math.floor(totalSeconds) % 60;

    daysEl.innerHTML = days;
    hoursEl.innerHTML = formatTime(hours);
    minsEl.innerHTML = formatTime(mins);
    secondsEl.innerHTML = formatTime(seconds);
}

// Formats time to add a zero infront of single digits
function formatTime(time) {
    return time < 10 ? (`0${time}`) : time;
} 

// initial call
countdown();

setInterval(countdown, 1000);

