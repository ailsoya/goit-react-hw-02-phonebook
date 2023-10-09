import { Component } from 'react'
import { ContactForm, ContactList, Filter } from './Elements'
import { nanoid } from 'nanoid'

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
    name: '',
    number: ''
  }

  handleChange = evt => {
    const { name, value } = evt.target
    this.setState({ [name]: value })
  }

  handleSubmit = evt => {
    evt.preventDefault()

    const contacts = [...this.state.contacts]
    const { name, number } = this.state
    const id = nanoid()

    contacts.push({
      id: id,
      name: name,
      number: number
    })

    this.setState({
      contacts,
      name: '',
      number: ''
    })
  
    evt.currentTarget.reset()
  }

  render() {
    const { contacts } = this.state
    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.handleSubmit} onChange={this.handleChange}/>

        <h2>Contacts</h2>
        <Filter onChange={this.handleChange}/>
        <ContactList contacts={contacts}/>
      </div>
    )
  }
}
