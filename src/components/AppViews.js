import { Route, Redirect } from 'react-router-dom'
import React, { Component } from "react"
import Login from './Login'
import DataManager from '../data/DataManager'
import "./AppViews.css"

import ArticleForm from './article/ArticleForm'
import ArticleList from './article/ArticleList'
import ArticleEdit from './article/ArticleEdit'

import ChatForm from './chat/ChatForm'
import ChatList from './chat/ChatList'
import ChatEdit from './chat/ChatEdit'

import EventForm from './event/EventForm'
import EventList from './event/EventList'
import EventEdit from './event/EventEdit'

import TaskForm from './task/TaskForm'
import TaskList from './task/TaskList'
import TaskEdit from './task/TaskEdit'

import FriendForm from './friend/FriendForm'
import FriendList from './friend/FriendList'
import FriendEdit from './friend/FriendEdit'





export default class AppViews extends Component {


    isAuthenticated = () => sessionStorage.getItem("credentials") !== null

    state = {
        articles: [],
        chats: [],
        events: [],
        friends: [],
        tasks: [],
        users: []
    }

    addUser = (user, link) => DataManager.post(user, link)
        .then(users => this.setState({
            users: users
        }))

    // ARTICLES
    addArticle = (article, link) => DataManager.post(article, link)
        .then(() => DataManager.getAllArticles("articles"))
        .then(articles => this.setState({
            articles: articles
        }))
    editArticle = (article, id, link) => DataManager.put(article, id, link)
        .then(() => DataManager.getAll("articles"))
        .then(articles => this.setState({
            articles: articles
        }))
    deleteArticle = (id, link) => DataManager.removeAndList(id, link)
        .then(() => DataManager.getAll("articles"))
        .then(articles => this.setState({
            articles: articles
        }))



    // CHATS
    addChat = (chat, link) => DataManager.post(chat, link)
        .then(chats => this.setState({
            chats: chats
        }))
    editChat = (chat, id, link) => DataManager.put(chat, id, link)
        .then(chats => this.setState({
            chats: chats
        }))
    deleteChat = (id, link) => DataManager.removeAndList(id, link)
        .then(chats => this.setState({
            chats: chats
        }))



    // EVENTS
    addEvent = (event, link) => DataManager.post(event, link)
        .then(() => DataManager.getAll("events"))
        .then(events => this.setState({
            events: events
        }))
    editEvent = (event, id, link) => DataManager.put(event, id, link)
        .then(() => DataManager.getAll("events"))
        .then(events => this.setState({
            events: events
        }))
    deleteEvent = (id, link) => DataManager.removeAndList(id, link)
        .then(() => DataManager.getAll("events"))
        .then(events => this.setState({
            events: events
        }))



    // TASKS
    addTask = (task, link) => DataManager.post(task, link)
        .then(() => DataManager.getAll("tasks"))
        .then(tasks => this.setState({
            tasks: tasks
        }))
    editTask = (task, id, link) => DataManager.put(task, id, link)
        .then(() => DataManager.getAll("tasks"))
        .then(tasks => this.setState({
            tasks: tasks
        }))
    deleteTask = (id, link) => DataManager.removeAndList(id, link)
        .then(() => DataManager.getAll("tasks"))
        .then(tasks => this.setState({
            tasks: tasks
        }))


    // FRIENDS
    addFriend = (friend, link) => DataManager.post(friend, link)
        .then(() => DataManager.getAll("friends"))
        .then(friends => this.setState({
            friends: friends
        }))
    editFriend = (friend, id, link) => DataManager.put(friend, id, link)
        .then(() => DataManager.getAll("friends"))
        .then(friends => this.setState({
            friends: friends
        }))
    deleteFriend = (id, link) => DataManager.removeAndList(id, link)
        .then(() => DataManager.getAll("friends"))
        .then(friends => this.setState({
            friends: friends
        }))



    componentDidMount() {
        const _state = {}
        DataManager.getAll("articles").then(articles => _state.articles = articles)
            .then(() => DataManager.getAll("chats").then(chats => _state.chats = chats))
            .then(() => DataManager.getAll("events").then(events => _state.events = events))
            .then(() => DataManager.getAll("tasks").then(tasks => _state.tasks = tasks))
            .then(() => DataManager.getAll("friends").then(friends => _state.friends = friends))
            .then(() => DataManager.getAll("users").then(users => _state.users = users))
            .then(() => { this.setState(_state) })
    }


    render() {
        return (
            <React.Fragment>
                <div className="viewArea">

                    <Route path="/login" render={(props) => {
                        return <Login {...props}
                            addUser={this.addUser} />
                    }} />

                    {/* ARTICLES */}
                    <Route exact path="/articles" render={(props) => {
                        if (this.isAuthenticated()) {
                            return <ArticleList {...props}
                                articles={this.state.articles}
                                deleteArticle={this.deleteArticle} />
                        } else {
                            return <Redirect to="/login" />
                        }
                    }} />

                    <Route path="/articles/new" render={(props) => {
                        return <ArticleForm {...props}
                            addArticle={this.addArticle} />
                    }} />
                    <Route path="/articles/edit/:articleId(\d+)" render={(props) => {
                        return <ArticleEdit {...props}
                            editArticle={this.editArticle}
                            articles={this.state.articles} />
                    }} />


                    {/* CHATS */}
                    <Route exact path="/chats" render={(props) => {
                        if (this.isAuthenticated()) {
                            return <ChatList {...props}
                                deleteChat={this.deleteChat}
                                chats={this.state.chats}
                                addUser={this.addUser}
                                users={this.state.users}
                            />
                        } else {
                            return <Redirect to="/login" />
                        }
                    }} />
                    <Route path="/chats/new" render={(props) => {
                        return <ChatForm {...props}
                        addUser={this.addUser}
                        addChat={this.addChat} />

                    }} />
                    <Route path="/chats/edit/:chatId(\d+)" render={(props) => {
                        return <ChatEdit {...props}
                            chats={this.state.chats}
                            editChat={this.editChat} 
                            addUser={this.addUser}
                            />
                    }} />


                    {/* EVENTS */}
                    <Route exact path="/events" render={(props) => {
                        if (this.isAuthenticated()) {
                            return <EventList {...props}
                                events={this.state.events}
                                deleteEvent={this.deleteEvent} />
                        } else {
                            return <Redirect to="/login" />
                        }
                    }} />
                    <Route path="/events/new" render={(props) => {
                        return <EventForm {...props}
                            addEvent={this.addEvent} />
                    }} />
                    <Route path="/events/edit/:eventId(\d+)" render={(props) => {
                        return <EventEdit {...props}
                            editEvent={this.editEvent} />
                    }} />


                    {/* TASKS */}
                    <Route exact path="/tasks" render={(props) => {
                        if (this.isAuthenticated()) {
                            return <TaskList {...props}
                                tasks={this.state.tasks}
                                deleteTask={this.deleteTask}
                            />
                        } else {
                            return <Redirect to="/login" />
                        }
                    }} />
                    <Route path="/tasks/new" render={(props) => {
                        return <TaskForm {...props}
                            addTask={this.addTask} />
                    }} />
                    <Route path="/tasks/edit/:taskId(\d+)" render={(props) => {
                        return <TaskEdit {...props}
                            editTask={this.editTask} />
                    }} />


                    {/* FRIENDS */}
                    <Route exact path="/friends" render={(props) => {
                        if (this.isAuthenticated()) {
                            return <FriendList {...props}
                                friends={this.state.friends}
                                deleteFriend={this.deleteFriend} />
                        } else {
                            return <Redirect to="/login" />
                        }
                    }} />
                    <Route path="/friends/new" render={(props) => {
                        return <FriendForm {...props}
                            addFriend={this.addFriend} />
                    }} />
                    <Route path="/friends/edit/:friendId(\d+)" render={(props) => {
                        return <FriendEdit {...props}
                            editFriend={this.editFriend} />
                    }} />
                </div>
            </React.Fragment>
        )
    }

}