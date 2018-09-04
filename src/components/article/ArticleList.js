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
                                <h6>
                                    <a href="#" onClick={() => this.props.deleteArticle(article.id)} className="card-link">Delete</a>
                                </h6>
                                </div>
                            </div>
                        )
                    }
                </section>
                <div className="articleButton">
                    <button type="button"
                        className="btn btn-primary"
                        onClick={() => {
                            this.props.history.push("/articles/new")
                        }
                        }> Create New Article
                </button>
                </div>
            </React.Fragment>
        )
    }
}