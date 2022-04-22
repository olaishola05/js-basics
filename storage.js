// localStorage.setItem('data', [])

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


const submitForm = (e)=> {
    e.preventDefault()
    const personInfo = {
        name: name.value,
        age: age.value
    }
    storage.setStorage(personInfo)
    form.reset()
}


formBtn.addEventListener('click', submitForm)
const data = storage.getItemFromStorage();
console.log(data)