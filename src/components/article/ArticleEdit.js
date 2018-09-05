import React, { Component } from "react"
// import "./Animal.css"

export default class ArticleEdit extends Component {
    state = {
        name: "",
        link: "",
        content: "",
        id: null
    }

    componentDidMount() {
        const article = this.props.articles.find(a => a.id === parseInt(this.props.match.params.articleId))
        this.setState(article);
    }

    // componentWillUnmount() {
    //     const article = this.props.articles.find(a => a.id === parseInt(this.props.match.params.articleId))
    //     this.setState(article);
    // }

    // Update state whenever an input field is edited
    handleFieldChange = evt => {
        const stateToChange = {}
        stateToChange[evt.target.id] = evt.target.value
        this.setState(stateToChange)
    }

    createNewArticle = evt => {
        evt.preventDefault()
        const newArticle = {
            name: this.state.name,
            link: this.state.link,
            content: this.state.content,
            id: this.state.id
        }
        this.props.editArticle(newArticle, this.state.id, "articles").then(() => this.props.history.push("/articles"))
    }
    
    render() {
        return (
            <React.Fragment>
                <h4>Edit Post</h4>
                <form className="articleForm">
                    <div className="form-group">
                        <label htmlFor="articleName">Article Title:</label>
                        <input type="text" required="true"
                            className="form-control"
                            onChange={this.handleFieldChange.bind(this)}
                            id="name"
                            placeholder="Article Title"
                            defaultValue={this.state.name} />
                    </div>
                    <div className="articleLink">
                        <label htmlFor="articleLink">Article Link:</label>
                        <input type="text" required="true"
                            className="form-control"
                            onChange={this.handleFieldChange.bind(this)}
                            id="link"
                            placeholder="Article Link"
                            defaultValue={this.state.link}/>
                    </div>
                    <p></p>
                    <div className="form-group">
                        <label htmlFor="article">Article Content:</label>
                        <input type="text" required="true"
                            className="form-control"
                            onChange={this.handleFieldChange.bind(this)}
                            id="content"
                            placeholder="Article Content"
                            defaultValue={this.state.content}/>
                    </div>
                    <button type="submit" onClick={this.createNewArticle}
                        className="btn btn-primary">Submit Edited Post</button>
                </form>
            </React.Fragment>
        )
    }
}