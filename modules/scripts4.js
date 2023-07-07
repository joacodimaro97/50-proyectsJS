const search = document.querySelector('.search')
const btn = document.querySelector('.btnsearch')
const input = document.querySelector('.input')

btn.addEventListener('click', () => {
    search.classList.toggle('active')
    input.focus()
})