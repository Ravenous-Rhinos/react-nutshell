import React, { Component } from 'react'
import { Link } from "react-router-dom"
// import "./article.css"

export default class ArticleList extends Component {
    render() {
        return (
            <React.Fragment>
                <section className="articles">
                    {
                        this.props.articles.map(article =>
                            <div key={article.id} className="card">
                                <div className="card-body">
                                <h4 className="card-title" className="article-name">
                                    {article.name}
                                </h4>
                                <hr></hr>
                                <a href={article.link} title="Link to Article">Link to Article</a>
                                <p></p>
                                <section className="card-title" className="article-content">
                                    {article.content}
                                </section>
                                <h6>
                                <p></p>
                                <button type="button" className="btn btn-primary"
                                onClick={() => this.props.deleteArticle(article.id, "articles")}>Delete Article</button>
                                <p></p>
                                <Link className="nav-link" to={`/articles/edit/${article.id}`}>Edit Article</Link>
                                </h6>
                                </div>
                            </div>
                        )
                    }
                </section>
                <p></p>
                <div className="articleButton">
                    <button type="button"
                        className="btn btn-primary"
                        onClick={() => {
                            this.props.history.push("/articles/new")
                        }
                        }>Create New Article
                </button>
                </div>
            </React.Fragment>
        )
    }
}