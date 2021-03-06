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
                        <Link className="nav-link text-success" to="/articles">Articles</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link text-success" to="/chats">Chat</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link text-success" to="/events">Event</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link text-success" to="/tasks">Tasks</Link>
                    </li>
                </ul>
            </nav>
        )
    }
}

export default NavBar