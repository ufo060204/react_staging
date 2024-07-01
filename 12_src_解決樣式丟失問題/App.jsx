import React, { Component } from 'react'
// React Router v5 升級到 v6 時。在 React Router v6 中，'Switch' 組件被 'Routes' 組件取代了。
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home' // Home 是路由組件
import About from './pages/About' // About 是路由組件
import Header from './components/Header' // Header 是一般組件
import MyNavLink from './components/MyNavLink'

export default class App extends Component {
  render() {
    return (
      <div>
        <div className="container">
          <div className='row'>
            <div className='col-xs-offset-2 col-xs-8'>
              <Header a={1} />
            </div>
          </div>
          <div className='row'>
            <div className='col-offset-2 col-4'>
              <div className='list-group'>
                {/* 原生 html 中，靠 <a> 跳轉不同頁面 */}
                {/* <a className='list-group-item' href="./about.html">About</a>
                <a className='list-group-item active' href="./home.html">Home</a> */}

                {/* 在 React 中靠路由連結切換組件 --- 編寫路由連結 */}
                {/* <NavLink to="/about" className={({isActive}) => [
                      'list-group-item',
                      isActive ? 'router-link-active' : null
                    ].join(' ')
                  }
                >
                  About
                </NavLink>
                <NavLink to="/home" className={({isActive}) => [
                      'list-group-item',
                      isActive ? 'router-link-active' : null
                    ].join(' ')
                  }
                >
                  Home
                </NavLink> */}
                <MyNavLink to="MyWeb/about">About</MyNavLink>
                <MyNavLink to="MyWeb/home">Home</MyNavLink>
              </div>
            </div>
            <div className='col-offset-2 col-8'>
              <div className='panel'>
                <div className='panel-body'>
                  {/* 註冊路由 */}
                  {/* <Route path="/about" component={About}/>
                  <Route path="/home" component={Home}/> */}
                  <Routes>
                    <Route path='MyWeb/about' element={<About />}/>
                    <Route path='MyWeb/home' element={<Home />}/>
                  </Routes>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
