import { Storage } from "./storage"

const formBtn = document.querySelector('.formBtn')
const name = document.getElementById('name')
const age = document.getElementById('age')
const form = document.querySelector('form')
const storage = new Storage()
const toast = document.querySelector('.toast')


const toastMsg = (msg) => {
    msg = 'New name added to the lists'
    toast.textContent = msg
    toast.classList.toggle('toast-success')
    setTimeout(() => {
        toast.classList.toggle('toast-success')
    }, 3000);
}

const toastError = (err) => {
    err = 'Input boxes can not be empty'
    toast.textContent = err
    toast.classList.toggle('toast-error')
    setTimeout(() => {
        toast.classList.toggle('toast-error')
    }, 3000);
}


const submitForm = (e)=> {
    e.preventDefault()
    if(name.value === '' && age.value === ''){
        toastError()
        return null
    }else{
        const personInfo = {
            name: name.value,
            age: age.value
        }
        storage.setStorage(personInfo)
        toastMsg()
        form.reset()
    }
}


const view = document.querySelector('.result')
const displayContent = (data) => {
    content = '';
    data.forEach((person) =>{
        content += `<div class="items">
        <p>Name: <span id="nameResult">${person.name}</span></p>
        <p>Age: <span id="ageResult">${person.age}</span></p>
    </div>`
    })

    view.innerHTML = content
}

displayContent(storage.getItemFromStorage())
formBtn.addEventListener('click', submitForm)