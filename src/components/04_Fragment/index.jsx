import React, {Fragment} from 'react'

export default function Demo() {
  return (
    // <Fragment> 只能寫 key 屬性，其他的不行，例如 name='Tom' 會報錯
    <Fragment key={1}>
      <h1>這是 Fragment 的測試說明頁面</h1>
    </Fragment>
    // 也可以用簡寫 <></> 來代替 <Fragment></Fragment>，但是不能寫任何屬性
    // <>
    //   <h1>這是 Fragment 的測試說明頁面</h1>
    // </>
  );
}
