const metamask = document.querySelector('.metamask')
const hacker = document.querySelector('.hacker')
const span = document.querySelector('.player-username')
const cloud = document.querySelector('.cloud')
const gameOver = document.querySelector('.game-over')
const meters = document.querySelector('.meters')
const buttonRestart = document.querySelector('.restart-button')
const textGameOver = document.querySelector('.game-over-text')

window.onload = () => {
    const playerUserName = localStorage.getItem('playerUserName')
    span.innerHTML = playerUserName.toUpperCase()
}

let counterMeters = 0

const timeRunning = setInterval(() => {
    counterMeters++
    meters.innerHTML = counterMeters
}, 1500);

const jump = () => {
    metamask.classList.add('jump')
    setTimeout(() => {
        metamask.classList.remove('jump')
    }, 500)
}

document.addEventListener('keydown', jump)

const loop = setInterval(() => {

    const hackerPosition = hacker.offsetLeft
    const metamaskPosition = Number(window.getComputedStyle(metamask).bottom.replace('px', ''))
    const cloudPosition = cloud.offsetLeft

    if (hackerPosition <= 109 && hackerPosition > 0 && metamaskPosition < 74) {

        hacker.style.animation = 'none'
        hacker.style.left = `${hackerPosition}px`
        metamask.style.animation = 'none'
        metamask.style.bottom = `${metamaskPosition}px`
        cloud.style.animation = 'none'
        cloud.style.left = `${cloudPosition}px`

        clearInterval(timeRunning)

        gameOver.classList.remove('display')
        textGameOver.innerHTML = `You run for ${counterMeters} meters, but you got caught...good luck next time!`

    }
}, 0);

buttonRestart.onclick = () => {
    window.location.reload()
}
