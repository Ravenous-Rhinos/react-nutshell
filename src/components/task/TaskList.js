import React, { Component } from 'react'
import './Task.css'


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
                       Add New Task
                </button>
                </div>
                <section className="tasks">
                    {
                        this.props.tasks.map(task =>
                            <div key={task.id} className="card">
                                <div className="card-body">
                                    <div className="card-title">
                                    
                                        <div className='task-name'>
                                          <h2>  {task.task} </h2>
                                        </div>
                                        <div className='task-date'>
                                        <h5> Finish it by... </h5>
                                           <h6> <b>{task.date}</b> </h6>
                                        </div>

                                        <div className='edit-button'>
                                            <a href="#"
                                                onClick={() => { this.props.history.push(`/tasks/edit/${task.id}`) }}
                                                className="card-link">Edit</a>
                                        </div>

                                        <div className='delete-button'>
                                            <a href="#"
                                                onClick={() => this.props.deleteTask(task.id, 'tasks')}
                                                className="card-link"><em>Done</em></a>
                                        </div>

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

export default TaskList