const currentTime = document.querySelector('.para');
const buttonParrent = document.querySelector('.btn-container');

let seconds = 0;
let minutes = 0;
let hours = 0;

function displayTime(seconds, minutes, hours) {
    currentTime.innerText = `${hours < 10 ? `0${hours}` : hours} :${minutes < 10 ? `0${minutes}` : minutes}: ${seconds < 10 ? `0${seconds}` : seconds}`;

}


function handleButtonClick(event) {
    let button = event.target.name;

    if (button === "Start") {
        timerId = setInterval(() => {
            seconds++;

            if (seconds > 58) {
                seconds = 0;
                minutes++;

                if (minutes > 58) {
                    minutes = 0;
                    hours++;

                }
            }

            displayTime(seconds, minutes, hours);
        }, 100);

    }
    if (button === "Stop") {
        clearInterval(timerId);

    }

    if (button === "Reset") {
        clearInterval(timerId);
        seconds = minutes = hours = 0;

        displayTime(seconds, minutes, hours);


    }


}

buttonParrent.addEventListener("click", handleButtonClick);
