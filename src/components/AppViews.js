import { Route, Redirect } from 'react-router-dom'
import React, { Component } from "react"
import Login from './Login'
import DataManager from '../data/DataManager'

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
        chat: [],
        events: [],
        friends: [],
        tasks: []
    }

    addArticle = (article, link) => DataManager.post(article, link)
        .then(() => DataManager.getAll("articles"))
        .then(articles => this.setState({
            articles: articles
        }))
    deleteArticle = (id, link) => DataManager.removeAndList(id, link)
        .then(() => DataManager.getAll("articles"))
        .then(articles => this.setState({
            articles: articles
        }))


    addChat = (chat, link) => DataManager.post(chat, link)
        .then(() => DataManager.getAll("chats"))
        .then(chats => this.setState({
            chats: chats
        }))
    editChat = (chat, id, link) => DataManager.put(chat, id, link)
        .then(() => DataManager.getAll("chats"))
        .then(chats => this.setState({
            chats: chats
        }))
    deleteChat = (id, link) => DataManager.removeAndList(id, link)
        .then(() => DataManager.getAll("chats"))
        .then(chats => this.setState({
            chats: chats
        }))


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
    deletEvent = (id, link) => DataManager.removeAndList(id, link)
        .then(() => DataManager.getAll("events"))
        .then(events => this.setState({
            events: events
        }))

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
        DataManager.getAll("articles").then(allArticles => {
            this.setState({
                articles: allArticles
            })
        })
        DataManager.getAll("chat").then(allChat => {
            this.setState({
                chat: allChat
            })
        })
        DataManager.getAll("events").then(allEvents => {
            this.setState({
                events: allEvents
            })
        })
        DataManager.getAll("tasks").then(allTasks => {
            this.setState({
                tasks: allTasks
            })
        })
        DataManager.getAll("friends").then(allFriends => {
            this.setState({
                friends: allFriends
            })
        })
    }


    render() {
        return (
            <React.Fragment>
                    <Route path="/login" component={Login} />


                    <Route exact path="/articles" render={(props) => {
                        if (this.isAuthenticated()) {
                            return <ArticleList {...props}
                                articles={this.state.articles}
                                deleteArticle={this.deleteArticle} />
                        } else {
                            return <Redirect to="/login" />
                    }} }/>

                    <Route path="/articles/new" render={(props) => {
                        return <ArticleForm {...props}
                            addArticle={this.addArticle}/>
                    }} />
                    <Route path="/articles/edit/:articleId(\d+)" render={(props) => {
                        return <ArticleEdit {...props}
                            editArticle={this.editArticle}
                            articles={this.state.articles}/>
                    }} />


                    <Route exact path="/chats" render={(props) => {
                        if (this.isAuthenticated()) {
                            return <chatList {...props}
                            deletechat={this.deletechat}
                                chats={this.state.chats}
                                />
                        } else {
                            return <Redirect to="/login" />
                        }
                    }} />
                    <Route path="/chats/new" render={(props) => {
                        return <ChatForm {...props}
                            addChat={this.addChat}/>
                    }} />
                    <Route path="/chats/edit/:chatId(\d+)" render={(props) => {
                        return <ChatEdit {...props}
                            editChat={this.editChat}/>
                    }} />


                    <Route exact path="/events" render={(props) => {
                        if (this.isAuthenticated()) {
                            return <EventList {...props}
                                events={this.state.events}
                                deleteEvent={this.deleteEvent} />
                        } else {
                            return <Redirect to="/login" />
                    }} }/>
                    <Route path="/events/new" render={(props) => {
                        return <EventForm {...props}
                            addEvent={this.addEvent}/>
                    }} />
                    <Route path="/events/edit/:eventId(\d+)" render={(props) => {
                        return <EventEdit {...props}
                            editEvent={this.editEvent}/>
                    }} />

                    <Route exact path="/tasks" render={(props) => {
                        if (this.isAuthenticated()) {
                            return <TaskList {...props}
                                tasks={this.state.tasks}
                                deleteTask={this.deleteTask} />
                        } else {
                            return <Redirect to="/login" />
                    }} }/>
                    <Route path="/tasks/new" render={(props) => {
                        return <TaskForm {...props}
                            addTask={this.addTask}/>
                    }} />
                    <Route path="/tasks/edit/:taskId(\d+)" render={(props) => {
                        return <TaskEdit {...props}
                            editTask={this.editTask}/>
                    }} />

                    <Route exact path="/friends" render={(props) => {
                        if (this.isAuthenticated()) {
                            return <FriendList {...props}
                                friends={this.state.friends}
                                deleteFriend={this.deleteFriend} />
                        } else {
                            return <Redirect to="/login" />
                    }} }/>
                    <Route path="/friends/new" render={(props) => {
                        return <FriendForm {...props}
                            addFriend={this.addFriend}/>
                    }} />
                    <Route path="/friends/edit/:friendId(\d+)" render={(props) => {
                        return <FriendEdit {...props}
                            editFriend={this.editFriend}/>
                    }} />
                </React.Fragment>
        )
    }

}