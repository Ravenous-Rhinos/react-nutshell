import React, { Component } from "react"
import "./Event.css"



export default class EventEdit extends Component {
    // componentWillMount() {
    //     const event = this.props.events.find(a => a.id === parseInt(this.props.match.params.event.id, 0))
    //     this.setState(event);
    // }
    // componentWillUnmount() {
    //     const event = this.props.events.find(a => a.id === parseInt(this.props.match.params.event.id, 0))
    //     this.setState(event);
    // }

    state = {
        name: "",
        detail: ""
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
        }
        const eventEditId = parseInt(this.props.match.params.eventId, 0)
        // Create the event and redirect user to event list
        this.props.editEvent(event, eventEditId, "events").then(() => this.props.history.push("/events"))
    }
    render() {
        return (
            <React.Fragment>
                <form className="EventForm">
                    <div className="form-group">
                        <label htmlFor="eventName">Event name</label>
                        <input type="text" required="true"
                               className="form-control"
                               onChange={this.handleFieldChange.bind(this)}
                               id="name"
                               placeholder="Event Name"
                               defaultValue={this.state.eventName} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="eventDetail">Event Detail</label>
                        <input type="text" required="true"
                               className="form-control"
                               onChange={this.handleFieldChange.bind(this)}
                               id="detail" placeholder="Event Detail"
                               defaultValue={this.state.eventDetail}/>
                    </div>
                    <button type="submit" onClick={this.constructNewEvent} className="btn btn-primary">Submit</button>
                </form>
            </React.Fragment>
        )
    }
}