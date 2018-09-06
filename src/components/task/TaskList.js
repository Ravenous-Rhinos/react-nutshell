import React, { Component } from 'react'



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
                                    <div className="card-title">
                                    
                                        <div className='task-name'>
                                            {task.task}
                                        </div>
                                        <div className='task-date'>
                                            {task.date}
                                        </div>

                                        <div className='edit-button'>
                                            <a href="#"
                                                onClick={() => { this.props.history.push(`/tasks/edit/${task.id}`) }}
                                                className="card-link">Edit</a>
                                        </div>

                                        <div className='delete-button'>
                                            <a href="#"
                                                onClick={() => this.props.deleteTask(task.id, 'tasks')}
                                                className="card-link">Delete</a>
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