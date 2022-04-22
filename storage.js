class Storage {

    constructor(){
        this.data = []
    }

    setStorage(user){
        this.data = JSON.parse(localStorage['data'] || '[]'); 
        this.data.push(user)
        localStorage.setItem('data', JSON.stringify(this.data))
    }

    getItemFromStorage(){
        const item = JSON.parse(localStorage.getItem('data'))
        return item
    }

}

const formBtn = document.querySelector('.formBtn')
const name = document.getElementById('name')
const age = document.getElementById('age')
const form = document.querySelector('form')
const storage = new Storage()

const toastMsg = () => {
    const toast = document.querySelector('.toast')
    toast.style.visibility = 'visible'
    toast.style.marginBottom = '10px'
    setTimeout(() => {
        toast.style.visibility = 'hidden'
        toast.style.marginBottom = '0'
    }, 3000);
}


const submitForm = (e)=> {
    e.preventDefault()
    const personInfo = {
        name: name.value,
        age: age.value
    }
    storage.setStorage(personInfo)
    toastMsg()
    form.reset()
}


formBtn.addEventListener('click', submitForm)


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

const data = storage.getItemFromStorage();
displayContent(data)