import React from 'react'
import { useLocation } from 'react-router-dom'

export default function Detail() {
  // 連續解構賦值
  const { state:{ id, title, content} } = useLocation()
  return (
    <ul>
      <li>消息編號：{id}</li>
      <li>消息標題：{title}</li>
      <li>消息內容：{content}</li>
    </ul>
  )
}
