import React, { Component } from 'react'
import { Link } from "react-router-dom"
import "./ArticleList.css"

export default class ArticleList extends Component {
    render() {
        return (
            <React.Fragment>
                <section className="articles">
                    {
                        this.props.articles.map(article =>
                            <div key={article.id} className="card">
                                <div className="card-body">
                                    <div class="card-title">
                                        <h3 className="card-title" className="article-name">{article.name}</h3>
                                        <h5 className="card-title" className="article-date">{article.date}</h5>
                                    </div>
                                    <hr></hr>
                                    <a href={article.link} title="Link to Article" className="article-link">Link to Article</a>
                                    <p></p>
                                    <section className="card-title" className="article-content">
                                        {article.content}
                                    </section>
                                    <h6>
                                        <p></p>
                                        <Link className="nav-link edit-button" to={`/articles/edit/${article.id}`}>Edit Article</Link>
                                        <p></p>
                                        <button type="button" className="btn btn-primary delete-button"
                                            onClick={() => this.props.deleteArticle(article.id, "articles")}>Delete Article</button>
                                    </h6>
                                </div>
                            </div>
                        )
                    }
                </section>
                <p></p>
                <div className="articleButton">
                    <button type="button"
                        className="btn btn-primary create-article"
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