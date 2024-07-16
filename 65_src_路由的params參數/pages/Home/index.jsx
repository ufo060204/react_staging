import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

export default function Home() {
  return (
    <div>
      <h3>我是 home 內容</h3>
      <div>
        <ul className='nav nav-tabs'>
          <li className='nav-item'>
            <NavLink className='nav-link' to="news">News</NavLink>
          </li>
          <li className='nav-item'>
            <NavLink className='nav-link' to="message">Message</NavLink>
          </li>
        </ul>
        {/* 指定路由組件呈現的位置 */}
        <Outlet />
        {/* 下面是 React 5 的寫法 */}
        {/* <Routes>
          <Route path='/home/news' element={<News />}/>
          <Route path='/home/message' element={<Message />}/>
        </Routes> */}
      </div>
    </div>
  )
}
