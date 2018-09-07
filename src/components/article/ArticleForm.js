import React, { Component } from "react"
import "./ArticleForm.css"

export default class ArticleForm extends Component {
    state = {
        articleName: "",
        articleContent: "",
        articleDate: ""
    }

    handleFieldChange = evt => {
        const stateToChange = {}
        stateToChange[evt.target.id] = evt.target.value
        this.setState(stateToChange)
    }

    // Some "if" statements making sure that all fields are filled out. I dind't want to leave any forms empty.
    createNewArticle = evt => {
        evt.preventDefault()
        if (this.state.articleName === "") {
            window.alert("Please make sure to fill out all text fields before submitting!")
        }
        else if (this.state.articleDate === "") {
            window.alert("Please make sure to fill out all text fields before submitting!")
        }
        else if (this.state.articleLink === "") {
            window.alert("Please make sure to fill out all text fields before submitting!")
        }
        else if (this.state.articleContent === "") {
            window.alert("Please make sure to fill out all text fields before submitting!")
        }
        else {
            const article = {
                name: this.state.articleName,
                date: this.state.articleDate,
                link: this.state.articleLink,
                content: this.state.articleContent
            }
            // Create the article and redirect user to article list
            this.props.addArticle(article, "articles").then(() => this.props.history.push("/articles"))
        }
    }

    render() {
        return (
            <React.Fragment>
                <form className="articleForm">
                    <div className="form-group">
                        <label htmlFor="articleName">Article Title:</label>
                        <input type="text" required="true"
                            className="form-control"
                            onChange={this.handleFieldChange}
                            id="articleName"
                            placeholder="Article Title" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="articleDate">Article Date:</label>
                        <input require type="date" required="true"
                            className="form-control"
                            onChange={this.handleFieldChange}
                            id="articleDate"
                            placeholder="Article Date"/>
                    </div>
                    <div className="articleLink">
                        <label htmlFor="articleLink">Article Link:</label>
                        <input type="text" required="true"
                            className="form-control"
                            onChange={this.handleFieldChange}
                            id="articleLink"
                            placeholder="Article Link" />
                    </div>
                    <p></p>
                    <div className="form-group">
                        <label htmlFor="article">Article Description:</label>
                        <input tyoe="text" required="true"
                            className="form-control"
                            onChange={this.handleFieldChange}
                            id="articleContent"
                            placeholder="Article Description" />
                    </div>
                    <button type="submit" onClick={this.createNewArticle}
                        className="btn btn-primary">Submit Article</button>

                </form>
            </React.Fragment>
        )
    }
}