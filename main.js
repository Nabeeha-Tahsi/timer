let countDown = document.querySelector('.countDown')
let stop = document.querySelector('.stop')
let countNumber = 10

function countDownFunction(){
    countNumber--
    console.log(countNumber)
    if (countNumber == 0)
        clearInterval(stop)
}

setInterval(countDownFunction, 1000)