import React from 'react'

export const ContactForm = ({ onSubmit }) => {
    return (
        <form onSubmit={evt => onSubmit(evt)}>
            <label>
                Name
                <input type="text" name="name" required />
            </label>
            <label>
                Number
                <input type="tel" name="number" required />
            </label>
            <button type='submit'>Add contact</button>
        </form>
    )
}

export const ContactList = ({ contacts, onClick }) => {
    return (
        <ul>
            {contacts.map(contact => (
                <li key={contact.id}>{contact.name}: {contact.number} <button onClick={() => onClick(contact.id)}>Delete</button></li>
            ))}
        </ul>
    )
}

export const Filter = ({ onChange, value }) => {
    return (
        <label>
            Find contacts by name
            <input onChange={evt => onChange(evt)} type="text" name="filter" value={value} />
        </label>
    )
}