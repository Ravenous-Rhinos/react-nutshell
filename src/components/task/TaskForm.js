import React, { Component } from "react"

export default class TaskForm extends Component {
    // Set initial state
    state = {
        task: "",
        details: "",
        due: "",
    }

    // Update state whenever an input field is edited
    handleFieldChange = evt => {
        const stateToChange = {}
        stateToChange[evt.target.id] = evt.target.value
        this.setState(stateToChange)
    }

    /*
        Local method for validation, creating animal object, and
        invoking the function reference passed from parent component
     */
    constructNewTask = evt => {
        evt.preventDefault()
        if (this.state.task === "") {
            window.alert("Please add a new task")
        } else {
            const newTask = {
                name: this.state.task,
            }

            // Create the employee and redirect user to employee list
            this.props.addTask(newTask, 'tasks').then(() => this.props.history.push("/tasks"))
        }
    }

    render() {
        return (
            <React.Fragment>
                <form className="TaskForm">
                    <div className="form-group">
                        <label htmlFor="newTask">I Need To...</label>
                        <input type="text" required="true"
                            className="form-control"
                            onChange={this.handleFieldChange}
                            id="task"
                            placeholder="ummmm...." />
                            
                            <input type="date" required="true"
                            className="form-control"
                            onChange={this.handleFieldChange}
                            id="task"
                            placeholder="By" />
                    </div>

                    <button type="submit" onClick={this.constructNewTask} className="btn btn-primary">Submit</button>
                </form>
            </React.Fragment>
        )
    }
}