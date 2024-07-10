import React, { useState }from 'react'
import { Navigate } from 'react-router-dom'


export default function Home() {
  const [sum, setSum] = useState()
  return (
    <div>
      <h3>我是 home 內容</h3>
      {/* <h4>當前 sum 的值是: {sum}</h4> */}
      {/* replace 會將 history 上一頁替換而不是堆疊 默認是 false */}
      {sum === 2 ? <Navigate to='/about' replace={true} /> : <h4>當前 sum 的值是: {sum}</h4>}
      <button type='button' className='btn btn-primary' onClick={() => setSum(2)}>點我將 sum 變為 </button>
    </div>
  )
}
