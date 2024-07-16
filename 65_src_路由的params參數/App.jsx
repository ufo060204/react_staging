import React from 'react'
import { NavLink, useRoutes } from 'react-router-dom'
import routes from './routes'

export default function App() {
  // 跟據路油表生成對應的路由組件
  const element = useRoutes(routes)
  return (
    <div className='container'>
      <div className='row'>
        <div className='col-offset-2 col-8'>
          <div className='page-header'>
            <h2>React Router Demo</h2>
          </div>
        </div>
      </div>
      <div className='row'>
        <div className='col-offset-2 col-2'>
          <div className='list-group'>
            <NavLink className='list-group-item' to="/about">About</NavLink>
            <NavLink className='list-group-item' end to="/home">Home</NavLink>
          </div>
        </div>
        <div className='col-6'>
          <div className='panel'>
            <div className='panel-body'>
              {/* 註冊路由 */}
              {element}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
