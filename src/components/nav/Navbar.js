import React, { Component } from "react"
import { Link } from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css"
import "./NavBar.css"


class NavBar extends Component {
    render() {
        return (
            
            <nav className=".navbar.navbar-default.navbar-static-top light-blue flex-md-nowrap p-0 shadow navbar">
                <ul className="nav nav-pills">
                    <li className="nav-item">
                        <Link className="nav-link" to="/articles">Articles</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/chats">Chat</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/events">Event</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/tasks">Tasks</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/friends">Friends</Link>
                    </li>
                </ul>
            </nav>
        )
    }
}

export default NavBar