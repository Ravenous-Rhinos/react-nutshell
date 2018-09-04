import React, { Component } from "react"
// import "./article.css"

export default class ArticleForm extends Component {
    // Set initial state
    state = {
        animalName: "",
        employee: "",
        owner: ""
    }

    // Update state whenever an input field is edited
    handleFieldChange = evt => {
            const stateToChange = {}
            stateToChange[evt.target.id] = evt.target.value
        this.setState(stateToChange)
    }

    /*
        Local method for validation, creating article object, and
        invoking the function reference passed from parent component
     */
    createNewArticle = evt => {
        evt.preventDefault()
        if (this.state.employee === "") {
            window.alert("Please select a caretaker")
        } else {
            const article = {
                name: this.state.articleName,
            }
            // Create the article and redirect user to article list
            this.props.addArticle(article).then(() => this.props.history.push("/articles"))
        }
    }

    render() {
        return (
            <React.Fragment>
                <form className="articleForm">
                    <div className="form-group">
                        <label htmlFor="articleName">Article name</label>
                        <input type="text" required="true"
                               className="form-control"
                               onChange={this.handleFieldChange}
                               id="articleName"
                               placeholder="Article name" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="employee">Assign to caretaker</label>
                        <select defaultValue="" name="employee" id="employee"
                                onChange={this.handleFieldChange}>
                            <option value="">Select an employee</option>
                        {
                            this.props.employees.map(e => <option key={e.id} id={e.id}>{e.name}</option>)
                        }
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="owner">Assign to owner</label>
                        <select defaultValue="" name="owner" id="owner"
                                onChange={this.handleFieldChange}>
                            <option value="">Select an owner</option>
                        {
                            this.props.owners.map(e => <option key={e.id} id={e.id}>{e.name}</option>)
                        }
                        </select>
                    </div>
                    <button type="submit" onClick={this.createNewArticle} className="btn btn-primary">Submit</button>
                </form>
            </React.Fragment>
        )
    }
}