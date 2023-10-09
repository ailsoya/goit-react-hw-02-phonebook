import React from 'react'
import styles from "./Style.module.css"

export const ContactForm = ({ onSubmit }) => {
    return (
        <form onSubmit={evt => onSubmit(evt)} className={styles.Form}>
            <label className={styles.Label}>
                Name
                <input type="text" name="name" required />
            </label>
            <label className={styles.Label}>
                Number
                <input type="tel" name="number" required />
            </label>
            <button type='submit' className={styles.SubmitButton}>Add contact</button>
        </form>
    )
}

export const ContactList = ({ contacts, onClick }) => {
    return (
        <ul>
            {contacts.map(contact => (
                <li key={contact.id} className={styles.ContactLi}>{contact.name}: {contact.number} <button onClick={() => onClick(contact.id)}>Delete</button></li>
            ))}
        </ul>
    )
}

export const Filter = ({ onChange, value }) => {
    return (
        <label className={styles.Filter}>
            Find contacts by name
            <input onChange={evt => onChange(evt)} type="text" name="filter" value={value} />
        </label>
    )
}