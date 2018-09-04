import React, { Component } from "react"
import "./Chat.css"

export default class ChatForm extends Component {
    // Set initial state
    state = {
        chatName: ""
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
                name: this.state.chatName
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
                        <label htmlFor="chatName">chat name</label>
                        <input type="text" required="true"
                               className="form-control"
                               onChange={this.handleFieldChange}
                               id="chatName"
                               placeholder="chat name" />
                    </div>
                    <button type="submit" onClick={this.editChat} className="btn btn-primary">Submit</button>
                </form>
            </React.Fragment>
        )
    }
}