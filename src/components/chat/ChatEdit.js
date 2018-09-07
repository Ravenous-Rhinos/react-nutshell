import React, { Component } from "react"
import "./Chat.css"

export default class ChatForm extends Component {
    // Set initial state
    state = {
        message: "",
        date: null
    }

    componentDidMount() {
        const message = this.props.chats.find(a => a.id === parseInt(this.props.match.params.chatId, 0))
        this.setState(message);
        const date = this.props.chats.find(a => a.id === parseInt(this.props.match.params.chatId))
        this.setState(date);
    }

    // Update state whenever an input field is edited
    handleFieldChange = evt => {
        const stateToChange = {}
        stateToChange[evt.target.id] = evt.target.value
        this.setState(stateToChange)
    }

    /*
        Local method for validation, creating chat object, and
        invoking the function reference passed from parent component
     */
    editChat = evt => {
        evt.preventDefault()
<<<<<<< HEAD
            const chat = {
                message: this.state.message
            }
            const chatEditId = parseInt(this.props.match.params.chatId, 0)
=======
        const chat = {
            message: this.state.message,
            date: this.state.date,
            userId: JSON.parse(sessionStorage.getItem("credentials")).id
>>>>>>> master

        }
        const chatEditId = parseInt(this.props.match.params.chatId)

        // Create the chat and redirect user to chat list
        this.props.editChat(chat, chatEditId, "chats").then(() => this.props.history.push("/chats"))
    }

    render() {
        return (
            <React.Fragment>
                
                { this.state.message.userId === JSON.parse(sessionStorage.getItem("credentials")).id &&

                <form className="chatForm">
                    <div className="form-group">
                        <label htmlFor="message">Message</label>
                        <input type="text" required="true"
                            className="form-control"
                            onChange={this.handleFieldChange}
                            id="message"
                            placeholder="Message"
                            defaultValue={this.state.message} />
                        <label htmlFor="date">Date</label>
                        <input type="date" required="true"
                            className="form-control"
                            onChange={this.handleFieldChange}
                            id="date"
                            placeholder="Date" 
                            defaultValue={this.state.date}/>
                    </div>
                    <button type="submit" onClick={this.editChat} className="btn btn-primary">Submit</button>
                </form>
            } 
            {<h1>Not your message</h1>}
            </React.Fragment>
        )
    }
}