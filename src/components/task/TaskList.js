import React, { Component } from 'react'
import { Link } from 'react-router-dom'


class TaskList extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="taskButton">
                    <button type="button"
                        className="btn btn-success"
                        onClick={() => {
                            this.props.history.push("/tasks/new")
                        }
                        }>
                       Add Task
                </button>
                </div>
                <section className="tasks">
                    {
                        this.props.tasks.map(task =>
                            <div key={task.id} className="card">
                            <div className="card-body">
                                <h5 className="card-title">
                                    {task.name}
                                {task.date}
                                <Link className="nav-link" to={`/tasks/${task.id}`}>Details</Link>
                                    <a href="#"
                                        onClick={() => this.props.deleteTask(task.id)}
                                        className="card-link">Delete</a>
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
        
export default TaskList