import styles from "../Style.module.css"
import { Component } from 'react'
import { nanoid } from 'nanoid'

class ContactForm extends Component {
    state = {
        newContact: []
    }

    handleSubmit = (evt, onSubmit) => {
        evt.preventDefault()

        const name = evt.target.name.value
        const number = evt.target.number.value
        const id = nanoid()

        const newContact = {
            id: id,
            name: name,
            number: number
        }

        this.setState({ newContact: newContact })
        onSubmit(this.state.newContact)
        //абсолютно без поняття що робити

        evt.target.reset()
      
    }
  
    render() {
        
        return (
            <form onSubmit={evt => this.handleSubmit(evt)}
                className={styles.Form}>
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