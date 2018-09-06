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
                                        {event.eventName}
                                        {event.eventDetail}
                                        <Link className="nav-link" to={`/events/edit/${event.id}`}>Edit</Link>
                                        <button><a
                                            onClick={() => this.props.deleteEvent(event.id, "events")}
                                            className="card-link">Delete</a></button>
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