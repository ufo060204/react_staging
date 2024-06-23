import React, { Component } from 'react'
// import Add from './components/Add'
import List from './components/List'
import Footer from './components/Footer'
import Header from './components/Header'
import './App.css'

export default class App extends Component {
  render() {
    return (
      <div className="todo-container">
        <div className="todo-wrap">
          <Header />
          {/* <Add /> */}
          <List />
          <Footer />
        </div>
      </div>
    )
  }
}
