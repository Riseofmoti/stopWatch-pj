const stopWatchTag = document.getElementsByClassName("stopwatch")[0];
const startTag = document.getElementsByClassName("startButton")[0];
const pauseTag = document.getElementsByClassName("pauseButton")[0];
const continueTag = document.getElementsByClassName("continueButton")[0];
const restartTag = document.getElementsByClassName("restartButton")[0];

let second = 0, minute = 0, hour = 0;

const startWatch = () => {
    second += 1;
    if (second === 60) {
        second = 0;
        minute += 1;
    }
    if (minute === 60) {
        minute = 0;
        hour += 1;
    }
const hourTag = hour < 10 ? "0" + hour.toString() : hour;
const minuteTag = minute < 10 ? "0" + minute.toString() : minute;
const secondTag = second < 10 ? "0" + second.toString() : second;
    stopWatchTag.textContent = hourTag + ":" + minuteTag + ":" + secondTag;

}

let intervalId;
startTag.addEventListener("click", () => {
    intervalId = setInterval(startWatch, 1000);
})

pauseTag.addEventListener("click" , () => {
    clearInterval(intervalId);
})

continueTag.addEventListener("click", () => {
    clearInterval(intervalId);
    intervalId = setInterval(startWatch, 1000);
})

restartTag.addEventListener("click", () => {
    clearInterval(intervalId);
    (second = 0),(minute = 0), (hour = 0);
    intervalId = setInterval(startWatch, 1000);
})