// import React, { Component } from 'react'
import { useResolvedPath } from 'react-router-dom'

export default function News() {
  console.log("useResolvedPath", useResolvedPath('/user?id=123&name=abc&age=18#welcome'));
  return (
    <ul>
      <li>news001</li>
      <li>news002</li>
      <li>news003</li>
    </ul>
  )
}
