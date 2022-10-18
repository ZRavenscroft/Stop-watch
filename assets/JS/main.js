// Timer
const hourEl = document.querySelector(`.hour`)
const minuteEl = document.querySelector(`.minute`)
const secondEl = document.querySelector(`.second`)
const millisecondEl = document.querySelector(`.millisecond`)

// Buttons
let startBtn = document.querySelector(`.start`)
let pauseBtn = document.querySelector(`.pause`)
let stopBtn = document.querySelector(`.stop`)


//StartButton
startBtn.addEventListener(`click`, ()=>{
    clearInterval(interval)
    interval = setInterval(timer, 10)
})


//PauseButton
pauseBtn.addEventListener(`click`, ()=> { 
    clearInterval(interval);
})


//StopButton
stopBtn.addEventListener(`click`, ()=>{
    clearInterval(interval)
    clearTimer()
})


function clearTimer() {
    hour = 00,
    minute = 00,
    second = 00,
    millisecond = 00,
    hourEl.textContent = "00"
    minuteEl.textContent = "00"
    secondEl.textContent = "00"
    millisecondEl.textContent = "00"
}


//===========================================================================
//
//===========================================================================
let hour = 00,
    minute = 00,
    second = 00,
    millisecond = 00,
    interval;


function timer() {
    millisecond++;

    //Milliseconds
    if (millisecond < 9) {
        millisecondEl.innerText = "0" + millisecond;
    }
    if (millisecond > 9) {
        millisecondEl.innerText = millisecond;
    }
    if (millisecond > 99) {
        second++;
        secondEl.innerText = "0" + second;
        millisecond = 0;
        millisecondEl.innerText = "0" + millisecond;
    }

    //Seconds
    if (second < 9) {
        secondEl.innerText = "0" + second;
    }
    if (second > 9) {
        secondEl.innerText = second;
    }
    if (second >59) {
        minute++;
        minuteEl.innerText = "0" + minute;
        second = 0;
        secondEl.innerText = "0" + second;
    }

    //Minute
    if (minute < 9) {
        minuteEl.innerText = "0" + minute;
    }
    if (minute > 9) {
        minuteEl.innerText = minute;
    }
    if (minute > 59) {
        hour++;
        hourEl.innerText = "0" + hour;
        minute = 0;
        minuteEl.innerText = "0" + minute;
    }

    //Hour
    if (hour < 9) {
        hourEl.innerText = "0" + hour;
    }
    if (hour > 9) {
        hourEl.innerText = hour;
    }
    if (hour > 23) {
        clearTimer()
    }
}