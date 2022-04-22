export class Storage {

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
