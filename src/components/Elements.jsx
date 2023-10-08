import React from 'react'

export const ContactForm = ({ onSubmit, onChange }) => {
    return (
        <form onSubmit={event => onSubmit(event)}>
            <label>
                Name
                <input onChange={event => onChange(event)} type="text" name="name" required />
            </label>
            <label>
                Number
                <input onChange={event => onChange(event)} type="tel" name="number" required />
            </label>
            <button type='submit'>Add contact</button>
        </form>
    )
}

export const ContactList = ({ contacts }) => {
    return (
        <ul>
            {contacts.map(contact => (
                <li key={contact.id}>{contact.name}: {contact.number}</li>
            ))}
        </ul>
    )
}

export const Filter = ({ onToggle }) => {
    return (
        <input onChange={event => onToggle(event)} type="text" name="filter" />
    )
}