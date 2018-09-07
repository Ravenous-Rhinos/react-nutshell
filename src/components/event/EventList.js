import { Link } from 'react-router-dom'
import React, { Component } from 'react'
// import "./Event.css"


export default class EventList extends Component {
    render() {
        return (

            <React.Fragment>
                <div className="eventButton">
                    <button type="button"
                        className="btn btn-success"
                        onClick={() => {
                            this.props.history.push("/events/new")
                        }
                        }>
                        Add Event
                    </button>
                </div>

                <section className="events">
                    {
                        this.props.events.map(event =>
                            <div key={event.id} className="card">
                                <div className="card-body">
                                    <h5 className="card-title">
                                        <h2>{event.eventName}</h2>
                                        <p>{event.eventDetail}</p>
                                        <p>{event.eventDate}</p>
                                        <Link className="nav-link" to={`/events/edit/${event.id}`}>Edit</Link>
                                        <button type="button" className="btn btn-success"
                                            onClick={() => this.props.deleteEvent(event.id, "events")}
                                            >Delete</button>
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