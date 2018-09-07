import React, { Component } from "react"
import "./Chat.css"

export default class ChatForm extends Component {
    // Set initial state
    state = {
        message: ""
    }

    componentDidMount() {
        const message = this.props.chats.find(a => a.id === parseInt(this.props.match.params.chatId))
        this.setState(message);
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
            const chat = {
                message: this.state.message
            }
            const chatEditId = parseInt(this.props.match.params.chatId)

            // Create the chat and redirect user to chat list
            this.props.editChat(chat, chatEditId, "chats").then(() => this.props.history.push("/chats"))
    }

    render() {
        return (
            <React.Fragment>
                <form className="chatForm">
                    <div className="form-group">
                        <label htmlFor="message">chat name</label>
                        <input type="text" required="true"
                               className="form-control"
                               onChange={this.handleFieldChange}
                               id="message"
                               placeholder="Message"
                               defaultValue={this.state.message} />
                    </div>
                    <button type="submit" onClick={this.editChat} className="btn btn-primary">Submit</button>
                </form>
            </React.Fragment>
        )
    }
}