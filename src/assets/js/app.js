const storage = window.localStorage

const renderContacts = () => {
    const contacts = JSON.parse(storage.getItem('contacts'))

    let div = document.querySelector('#contact-list')
    if (contacts) {
        div.innerHTML = ''
        const ul = document.createElement('ul') // Creating unorded list

        contacts.forEach(contact => {
            let li = document.createElement('li') // Creating orded list with name, email and phone

            li.innerHTML = `
                <span>${contact.name}</span> |
                <span>${contact.email}</span> |
                <span>${contact.phone}</span>
            `
            ul.appendChild(li)
        })
            div.appendChild(ul)
        } else {
            div.innerHTML = '<p>You have no contacts in your address book</p>'
        } 
    }

document.addEventListener('DOMContentLoaded', () => { // before we can interact (click button i.e) we must verify they are present in the DOM
    renderContacts()
    const contactForm = document.getElementById('new-contact-form')
    contactForm.addEventListener('submit', event => { // Add event listener to watch DOM and when all is drawn execute callback function
        event.preventDefault()

        // 1. Read all the input fields and get their values. Create a contact object
        const { name, email, phone, company, notes, twitter} = contactForm.elements
        
        const contact = {
            name: name.value,
            email: email.value,
            phone: phone.value,
            company: company.value,
            notes: notes.value,
            twitter: twitter.value,
        }
        console.log(contact)

        let contacts = JSON.parse(storage.getItem('contacts')) || []

        contacts.push(contact)

        // 2. Save them to our storage
        storage.setItem('contacts', JSON.stringify(contacts))
        renderContacts()
        contactForm()
    })
})