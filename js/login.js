const input = document.querySelector('.login_input')
const button = document.querySelector('.login_button')
const form = document.querySelector('.login_form')

function validateInput({ target }) {
    if (target.value.length >= 3) {
        button.removeAttribute('disabled')
    } else {
        button.setAttribute('disabled', '')
    }
}

function clickSubmit(event) {
    event.preventDefault()
    localStorage.setItem('playerUserName', input.value)
    window.location = '/html/game-page.html'
}

input.addEventListener('input', validateInput)
form.addEventListener('submit', clickSubmit)
