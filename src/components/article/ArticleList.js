import React, { Component } from 'react'
import { Link } from "react-router-dom"
import "./ArticleList.css"

// One thing i'm proud of figuring out was the line where the a href link is the article.link. That way the ENTIRE URL isn't shown
// and instead the text "link to article" is displayed. I think this looks much better than a giant, ugly URL being added to a submission.
export default class ArticleList extends Component {
    render() {
        return (
            <React.Fragment>
                <section className="articles">
                    {
                        this.props.articles.map(article =>
                            
                            <div key={article.id} className="card card-article" >
                                <div class="card-header bg-success">
                                <h3 className="card-title" className="article-name">{article.name}</h3>
                                <h5 className="card-title" className="article-date">{article.date}</h5>
                                </div>
                                <div className="card-body">
                                    <section className="card-title" className="article-content">
                                        {article.content}
                                    </section>
                                    <p></p>
                                    <a href={article.link} title="Link to Article" className="article-link">Link to Article</a>
                                    <h6>
                                        <Link className="nav-link edit-button" to={`/articles/edit/${article.id}`}>Edit Article</Link>
                                        <p></p>
                                        <button type="button" className="btn btn-success delete-button"
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
                        className="btn btn-success create-article"
                        onClick={() => {
                            this.props.history.push("/articles/new")
                        }}>Create New Article
                </button>
                </div>
    </React.Fragment>
        )
    }
}