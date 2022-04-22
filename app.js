function makeCall(number){
    return function(name) {
        return `Call ${name} using this number: ${number}`
    }
}

const ade = makeCall(09023456832)
const jimi = makeCall(0123654869)

// console.log(ade('Jones'))
// console.log(jimi('Banlon'))

function sendMessage(item){

    function postMan(address){
        return `Dispatch ${item} to the following address: ${address}`
    }

    return postMan
}

const mailer = sendMessage('Team Jerseys')
const mailer_2 = sendMessage('Audi A16 Convertible')
const mail = mailer('Lane 5, digital ocean view, ATL')
const mail_2 = mailer_2('HebronHQ road 5, Ontario Canada')

console.log(mail)
console.log(mail_2)