import React, { Component } from "react"
import "./ArticleEdit.css"

export default class ArticleEdit extends Component {
    state = {
        name: "",
        date: "",
        link: "",
        content: "",
        id: null
    }

    componentDidMount() {
        const article = this.props.articles.find(a => a.id === parseInt(this.props.match.params.articleId))
        this.setState(article);
    }

    handleFieldChange = evt => {
        const stateToChange = {}
        stateToChange[evt.target.id] = evt.target.value
        this.setState(stateToChange)
    }

    createNewArticle = evt => {
        evt.preventDefault()
        const newArticle = {
            name: this.state.name,
            date: this.state.date,
            link: this.state.link,
            content: this.state.content,
            id: this.state.id
        }
        this.props.editArticle(newArticle, this.state.id, "articles").then(() => this.props.history.push("/articles"))
    }
    
    render() {
        return (
            <React.Fragment>
                <h4 className="edit-post">Edit Post</h4>
                <form className="articleForm">
                    <div className="form-group">
                        <label htmlFor="articleName" className="article-title">Article Title:</label>
                        <input type="text" required="true"
                            className="form-control title-field"
                            onChange={this.handleFieldChange.bind(this)}
                            id="name"
                            placeholder="Article Title"
                            defaultValue={this.state.name} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="articleDate" className="article-date">Article Date:</label>
                        <input require type="date" required="true"
                            className="form-control date-field"
                            onChange={this.handleFieldChange.bind(this)}
                            id="date"
                            placeholder="Article Date"
                            defaultValue={this.state.date} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="articleLink" className="articlelink">Article Link:</label>
                        <input type="text" required="true"
                            className="form-control link-field"
                            onChange={this.handleFieldChange.bind(this)}
                            id="link"
                            placeholder="Article Link"
                            defaultValue={this.state.link}/>
                    </div>
                    <p></p>
                    <div className="form-group">
                        <label htmlFor="articleContent" className="article-content">Article Content:</label>
                        <input type="text" required="true"
                            className="form-control content-field"
                            onChange={this.handleFieldChange.bind(this)}
                            id="content"
                            placeholder="Article Content"
                            defaultValue={this.state.content}/>
                    </div>
                    <button type="submit" onClick={this.createNewArticle}
                        className="btn btn-primary edited-post">Submit Edited Post</button>
                </form>
            </React.Fragment>
        )
    }
}