import React, { Component } from "react"
// import "./article.css"

export default class ArticleForm extends Component {
    state = {
        articleName: "",
        articleContent: ""
    }

    handleFieldChange = evt => {
            const stateToChange = {}
            stateToChange[evt.target.id] = evt.target.value
        this.setState(stateToChange)
    }

    createNewArticle = evt => {
        evt.preventDefault()
        if (this.state.article === "") {
            window.alert("Please submit article information")
        } else {
            const article = {
                name: this.state.articleName,
                content: this.state.articleContent
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
                        <label htmlFor="articleName">Article Title:</label>
                        <input type="text" required="true"
                               className="form-control"
                               onChange={this.handleFieldChange}
                               id="articleName"
                               placeholder="Article Title" />
                    </div>
                    <div className="articleLink">
                        <label htmlFor="articleLink">Article Link:</label>
                        ​<input type="text" required="true"
                               className="form-control"
                               onChange={this.handleFieldChange}
                               id="articleLink"
                               placeholder="Article Link" />
                    </div>
                    <p></p>
                    <div className="form-group">
                        <label htmlFor="article">Article Content:</label>
                        ​<textarea id="txtArea" rows="5" cols="5"
                               className="form-control"
                               onChange={this.handleFieldChange}
                               id="articleContent"
                               placeholder="Article Content" />
                    </div>
                    <button type="submit" onClick={this.createNewArticle} className="btn btn-primary">Submit Article</button>
                </form>
            </React.Fragment>
        )
    }
}