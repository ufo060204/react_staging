import React from 'react'
import { NavLink, Routes, Route, Outlet } from 'react-router-dom'
// import MyNavLink from '../../components/MyNavLink'
import News from './News'
import Message from './Message'

export default function Home() {
  return (
    <div>
      <h3>我是 home 內容</h3>
      <div>
        <ul className='nav nav-tabs'>
          <li className='nav-item'>
            <NavLink className='nav-link' to="/home/news">News</NavLink>
          </li>
          <li className='nav-item'>
            <NavLink className='nav-link' to="/home/message">Message</NavLink>
          </li>
        </ul>
        <Outlet />
        {/* 註冊路由 */}
        <Routes>
          <Route path='/home/news' element={<News />}/>
          <Route path='/home/message' element={<Message />}/>
        </Routes>
      </div>
    </div>
  )
}
