import React from 'react'
import { useSearchParams, useLocation } from 'react-router-dom'

export default function Detail() {
  const [search, setSearch ] = useSearchParams()
  const id = search.get('id')
  const title = search.get('title')
  const content = search.get('content')
  const x = useLocation()
  console.log('@', x)
  return (
    <ul>
      <li>
        <button onClick={() => setSearch('id=008&title=哈哈&content=西西')}>點我更新一下收到的 search 參數</button>
      </li>
      <li>消息編號：{id}</li>
      <li>消息標題：{title}</li>
      <li>消息內容：{content}</li>
    </ul>
  )
}
