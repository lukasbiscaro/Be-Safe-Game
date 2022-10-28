const metamask = document.querySelector('.metamask')
const hacker = document.querySelector('.hacker')
const spanPlayer = document.querySelector('.player-username')

const jump = () => {
    metamask.classList.add('jump')
    setTimeout(() => {
        metamask.classList.remove('jump')
    }, 500)
}

const loop = setInterval(() => {
    const hackerPosition = hacker.offsetLeft
    const metamaskPosition = Number(window.getComputedStyle(metamask).bottom.replace('px', ''))

    if (hackerPosition <= 109 && hackerPosition > 0 && metamaskPosition < 74) {
        hacker.style.animation = 'none'
        hacker.style.left = `${hackerPosition}px`

        metamask.style.animation = 'none'
        metamask.style.bottom = `${metamaskPosition}px`
    }
}, 0);

window.onload = () => {
    const playerUserName = localStorage.getItem('playerUserName')
    spanPlayer.innerHTML = playerUserName.toUpperCase()

}

document.addEventListener('keydown', jump)