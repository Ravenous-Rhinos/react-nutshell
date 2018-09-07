import React, { Component } from 'react'
import "./Chat.css"
// import { Link } from "react-router-dom"



export default class ChatList extends Component {
    render() {
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

                                        {chat.message}
                                    </h5>
                                    <p>
                                        {chat.date}
                                    </p>
                                    <div className="card-link">
                                        <button type="button" className="separate-link"
                                            onClick={() => {
                                                this.props.history.push(`/chats/edit/${chat.id}`)
                                            }}>
                                            Edit
                                      </button>
                                        <button
                                            onClick={() => this.props.deleteChat(chat.id, "chats")} className="separate-link"
                                        >Delete</button>
                                    </div>

                                </div>
                            </div>
                        )
                    }
                </section>
            </React.Fragment>
        )
    }
}