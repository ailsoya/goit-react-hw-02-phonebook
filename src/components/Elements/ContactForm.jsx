import styles from "../Style.module.css"
import { Component } from 'react'
import { nanoid } from 'nanoid'

class ContactForm extends Component {
    state = {
        name: '',
        number: ''
    }

    handleChange = (evt) => {
        const { name, value } = evt.target
        this.setState({ [name]: value })
    }
  
    render() {
        const id = nanoid()
        const { name, number } = this.state
        
        return (
            <form onChange={evt => this.handleChange(evt)} onSubmit={evt => {
                evt.preventDefault()
                evt.target.reset()
                this.props.onSubmit({ id, name, number })
                this.setState({ name: '', number: '' })
            }} className={styles.Form}>
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
}

export { ContactForm } 