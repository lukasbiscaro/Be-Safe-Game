const metamask = document.querySelector('.metamask')
const hacker = document.querySelector('.hacker')
const span = document.querySelector('.player-username')
const cloud = document.querySelector('.cloud')

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

        counter = -1

        // game-over class começa com atributo disabled, conforme o if de batida é executado, "removeAttribute" retira o atributo disable mostrando o css game-over
    }
}, 0);

let counter = 0

const score = () => {
    counter++ 
    console.log(counter)
}

document.addEventListener('keydown', score)
document.addEventListener('keydown', jump)