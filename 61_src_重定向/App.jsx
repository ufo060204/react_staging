import React from 'react'
import { Routes, Route, NavLink, Navigate } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'

export default function App() {
  return (
    <div className='container'>
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
            <NavLink className='list-group-item' to="/about">About</NavLink>
            <NavLink className='list-group-item' to="/home">Home</NavLink>
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
                <Route path='/' element={<Navigate to="/about" />}/>
              </Routes>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
