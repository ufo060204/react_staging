import React, { Component } from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'

export default class App extends Component {
  render() {
    return (
      <div>
        <div className='row'>
          <div className='col-xs-offset-2 col-xs-8'>
            <div className='page-header'>
              <h2>React Router Demo</h2>
            </div>
          </div>
        </div>
          <div className='row'>
            <div className='col-xs-offset-2 col-xs-2'>
              <div className='list-group'>
                {/* 原生 html 中，靠 <a> 跳轉不同頁面 */}
                {/* <a className='list-group-item' href="./about.html">About</a>
                <a className='list-group-item active' href="./home.html">Home</a> */}

                {/* 在 React 中靠路由連結切換組件 --- 編寫路由連結 */}
                <Link className='list-group-item' to="/about">About</Link>
                <Link className='list-group-item' to="/home">Home</Link>
              </div>
            </div>
            <div className='col-xs-6 col-xs-offset-2'>
              <div className='panel'>
                <div className='panel-body'>
                  {/* 註冊路由 */}
                  {/* <Route path="/about" component={About}/>
                  <Route path="/home" component={Home}/> */}
                  <Routes>
                    <Route path='/about' element={<About />}/>
                    <Route path='/home' element={<Home />}/>
                  </Routes>
                </div>
              </div>
            </div>
          </div>
      </div>
    )
  }
}
