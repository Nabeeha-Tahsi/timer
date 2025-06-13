let countDown = document.querySelector('.countDown')
let stop = document.querySelector('.stop')
let countNumber = 10
let colors = ['red', 'blue', 'pink', 'orange', 'white', 'green', 'blueviolet']

function countDownFunction(){
    countNumber--
    countDown.innerHTML = countNumber
    countDown.style.color = colors[Math.floor(Math.random() * 7)]
    if (countNumber == 0){
        clearInterval(stopInterval)
        countDown.style.display = 'none'
        stop.style.display = 'block'
    }
     
}

let stopInterval = setInterval(countDownFunction, 1000)
