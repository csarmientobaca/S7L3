
const timer = document.getElementById("timer")

let timeradd = parseInt(sessionStorage.getItem("timerRunning")) || 0

const asssing = function () {
    // qua la definisco
    timer.innerText = timeradd
}

asssing()


setInterval(function () {

    timeradd += 1
    asssing()
    console.log(sessionStorage.getItem("timerRunning"))

    sessionStorage.setItem("timerRunning", timeradd)
    // timer.innerHTML = timeradd



}, 1000);


