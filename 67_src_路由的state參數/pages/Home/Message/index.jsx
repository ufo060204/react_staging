import React, { useState } from 'react'
import { Link, Outlet } from 'react-router-dom'

export default function Message () {
  const [messages] = useState([
    { id: '001', title: '消息1', content: '天氣很熱' },
    { id: '002', title: '消息2', content: '水很冷' },
    { id: '003', title: '消息3', content: '風很大' },
    { id: '004', title: '消息4', content: '船中有人' },
  ])
  return (
    <div>
      <ul>
        {
          messages.map((m) => {
            return (
              // 路由連結
              <li key={m.id}>
                <Link 
                  to="detail" 
                  state={{
                    id: m.id,
                    title: m.title,
                    content: m.content
                  }}
                >{m.content}</Link>
              </li>
            )
          })
        }
      </ul>
      <hr />
      {/* 指定路由組件呈現的位置 */}
      <Outlet />
    </div>
  )
}
