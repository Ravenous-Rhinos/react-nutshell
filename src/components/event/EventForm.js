import React, { Component } from "react"
import "./Event.css"


export default class EventForm extends Component {
    // Set initial state
    
    state = {
        name: "",
        detail: "",
        date: ""
    }

    // Update state whenever an input field is edited
    handleFieldChange = evt => {
        const stateToChange = {}
        stateToChange[evt.target.id] = evt.target.value
        this.setState(stateToChange)
    }

    /*
        Local method for validation, creating event object, and
        invoking the function reference passed from parent component
     */
    constructNewEvent = evt => {
        evt.preventDefault()
            const event = {
                eventName: this.state.name,
                eventDetail: this.state.detail,
                eventDate: this.state.date
            }

            // Create the event and redirect user to event list
            this.props.addEvent(event, "events").then(() => this.props.history.push("/events"))
        }
    

    render() {
        return (
            <React.Fragment>
                <form className="eventForm">
                    <div className="form-group">
                        <label htmlFor="eventName">Event Name</label>
                        <input type="text" required="true"
                               className="form-control"
                               onChange={this.handleFieldChange}
                               id="name"
                               placeholder="Event Name" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="eventDetail">Details</label>
                        <input type="text" required="true"
                               className="form-control"
                               onChange={this.handleFieldChange}
                               id="detail" 
                               placeholder="Details" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="eventDate">Event Date</label>
                        <input type="date" required="true"
                            className="form-control"
                            onChange={this.handleFieldChange}
                            id="date"
                            placeholder="Event Date"/>
                    </div>
                    <button type="submit" onClick={this.constructNewEvent} className="btn btn-primary">Submit</button>
                </form>
            </React.Fragment>
        )
    }
}