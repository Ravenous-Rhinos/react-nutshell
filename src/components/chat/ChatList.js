import React, { Component } from 'react'
import "./Chat.css"
import { Link } from "react-router-dom"



export default class ChatList extends Component {
    render(username, message) {
        `<p><span class="username">${username}</span>: ${message}</p>`
        return (
            <React.Fragment>
                <div className="chatButton">
                <button type="button"
                    className="btn btn-success"
                    onClick={() => {
                        this.props.history.push("/chats/new")
                    }}>
                    Add Chat
                    </button>
            </div>
            <section className="chats">
                {
                    this.props.chats.map(chat =>
                        <div key={chat.id} className="card">
                            <div className="card-body">
                                <h5 className="card-title">
                                    {chat.name}
                                    <Link className="nav-link" to={`/chats/${chat.id}`}>Details</Link>

                                    <button
                                        onClick={() => this.props.deleteChat(chat.id, "chats")}
                                        className="card-link">Delete</button>
                                </h5>
                            </div>
                        </div>
                    )
                }
            </section>
            </React.Fragment>
        )
    }
}