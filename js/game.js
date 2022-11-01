const metamask = document.querySelector('.metamask')
const hacker = document.querySelector('.hacker')
const span = document.querySelector('.player-username')
const cloud = document.querySelector('.cloud')
const gameOver = document.querySelector('.game-over')
const score = document.querySelector('.score')
const buttonRestart = document.querySelector('.restart-button')
const time = document.querySelector('.time-running')

let points = 0
let seconds = 0

window.onload = () => {
    const playerUserName = localStorage.getItem('playerUserName')
    span.innerHTML = playerUserName.toUpperCase()
}

const jump = () => {
    metamask.classList.add('jump')
    setTimeout(() => {
        metamask.classList.remove('jump')
    }, 500)
}

const timeRunning = setInterval(() => {
    seconds++
    time.innerHTML = seconds 
}, 1000  );

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
        gameOver.classList.remove('display')
        clearInterval(timeRunning)
    }
}, 0);

buttonRestart.onclick = function restartPage() {
    window.location.reload()
}

document.addEventListener('keydown', jump)
