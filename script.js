let submit = document.querySelectorAll('.submitform')

let inputemail = document.querySelector('#inputemail')
let inputpassword = document.querySelector('#inputpassword')

submit.forEach(elem => elem.addEventListener("click", fn))

function fn(e){
    e.preventDefault()
    console.log(`${inputemail.value}:${inputpassword.value}`)
    inputemail.value = ''
    inputpassword.value = ''
}