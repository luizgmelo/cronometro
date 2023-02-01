const timer = document.querySelector("#timer");
let flag = false;
let myInterval;
let seconds = 0;
let minutes = 0;
let hours = 0;

function twoDigits(number) {
    if (number < 10) {
        return '0' + number;
    } else {
        return number;
    }
}

function startTimer() {
    // this flag means that this code it's run only in the first click
    if (!flag){
        myInterval = setInterval(timerConstructor, 1000)
    } 

    flag = true;
}

function timerConstructor() {
    seconds++;

    if (seconds == 60) {
        minutes++;
        seconds = 0;
    }

    if (minutes == 60) {
        hours++;
        minutes = 0;
    }

    timer.innerHTML = `${twoDigits(hours)}:${twoDigits(minutes)}:${twoDigits(seconds)}`;

}

function pauseTimer() {
    clearInterval(myInterval);
    flag = false;
}

function stopTimer() {
    clearInterval(myInterval);
    seconds = 0;
    minutes = 0;
    hours = 0;
    flag = false;
    timer.innerHTML = '00:00:00';
}

