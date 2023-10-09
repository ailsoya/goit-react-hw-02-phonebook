import { Component } from 'react'
import { ContactForm, ContactList, Filter } from './Elements'
import { nanoid } from 'nanoid'

export class App extends Component {
  state = {
    contacts: [
      {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
      {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
      {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
      {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
    ],
    filter: '',
  }

  handleChange = evt => {
    const { name, value } = evt.target
    this.setState({ [name]: value })
  }

  handleSubmit = evt => {
    evt.preventDefault()

    const { contacts } = this.state
    const name = evt.target.name.value
    const number = evt.target.number.value
    const id = nanoid()

    const nameInContacs = contacts.some(contact =>
      contact.name.toLocaleLowerCase() === name.toLocaleLowerCase()
    )

    if(nameInContacs) {
      alert(`${name} is already in contacts`)
    } else {
      contacts.push({
        id: id,
        name: name,
        number: number
      })
  
      this.setState({ contacts: contacts })
    
      evt.target.reset()
    }
  }

  contactDelete = id => {
    const { contacts } = this.state

    const index = contacts.findIndex(n => n.id === id)
    if (index !== -1) {
      contacts.splice(index, 1)
    }

    this.setState({ contacts: contacts })
  }

  render() {
    const { contacts, filter } = this.state
    const normFilter = filter.toLowerCase()
    const filteredContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(normFilter)
    )

    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.handleSubmit} />

        <h2>Contacts</h2>
        <Filter onChange={this.handleChange} value={filter} />
        <ContactList contacts={filteredContacts} onClick={this.contactDelete} />
      </div>
    )
  }
}
