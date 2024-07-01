## 一、 todoList 案例相關知識點
1. 拆分組件、實現靜態組件，注意：className、style 的寫法
2. 動態初始化列表，如何確定將數據放在哪個組件的 state 中？
  --某個組件使用：放在自身 state 中
  --某些組件使用：放在他們共通的父組件 state 中(官方稱此操作為：狀態提升)
3. 關於父子之間通信
  1. 父組件 給 子組件 傳遞數據：通過 props 傳遞
  2. 子組件 給 父組件 傳遞數據：通過 props 傳遞，要求父提前給子傳遞一個函數
4. 注意 defaultChecked 和 checked 的區別，類似的還有： defaultValue 和 value
5. 狀態在哪裡，操作狀態的方法就在哪裡

## 二、 github 搜索案例相關知識點
1. 設計狀態時要考慮全面, 例如帶有網路請求的組件, 要考慮失敗怎麼辦
2. ES6 小知識點: 解構賦值 + 重命名
  let obj = {a: {b: 1}}
  const {a} = obj; //傳統解構賦值
  const {a:{b}} = obj //連續解構賦值
  const {a: {b:value}} = obj //連續解構賦值 + 重命名
3. 消息訂閱與發佈
  1. 先訂閱, 再發布(理解: 有一種隔空對話的感覺)
  2. 適用於任意組件通信
  3. 要在組件 componentWillUnmount 中取消訂閱
4. fetch 發送請求 (關注分離的設計思想)
  try {
    const response = await fetch(`/api1/search/user2?q=${keyword}`)
    const data = await response.json()
    console.log(data);
  } catch(error) {
    console.log('請求出錯', error)
  }

## 五、NavLink 與封裝 NavLink
1. NavLink 可以實現路由連接的高亮，通過 activeClassName 指定樣式名(已無效)
2. 標籤內容可以是一個特殊的標籤屬性
3. 通過 this.props.children 可以獲取標籤體內容

## 六、Switch 的使用 (已被 Routes 取代 )
React Router v5 升級到 v6 時。在 React Router v6 中，'Switch' 組件被 'Routes' 組件取代了。
1. 通常情況下，path 和 component 是一一對應的關係
2. Switch 可以提高路由匹配效率(單一匹配)
## 七、解決多級路徑刷新頁面樣式丟失的問題
1. public/index.html 中引入樣式時不寫 ./ 寫 / (常用)
2. public/index.html 中引入樣式時不寫 ./ 寫 %PUBLIC_URL% (常用)
3. 使用 HashRouter
## 八、路由的嚴格匹配和模糊匹配
在 React Router v6 中，嚴格匹配和模糊匹配的概念有所改變。v6 的設計理念更加簡化和直觀。讓我解釋一下 v6 中的匹配機制：

1. 默認行為變化：
*在 v6 中，所有路由默認都是"模糊匹配"的。
 - 不再需要使用 exact 屬性來指定嚴格匹配。
2. 新的匹配規則：
 - 路徑末尾的斜槓 / 會被忽略，不影響匹配。
 - 父路由不需要結尾的 /* 來匹配子路由。
3. 如何實現"嚴格匹配"：
 - 如果你想要路徑完全匹配，可以在路徑末尾添加 *。
例如：<Route path="/users/*" element={<Users />} />
4. 新的 * 語法：
 - * 可以用來匹配任何未匹配的路徑。
例如：<Route path="*" element={<NotFound />} />
5. 使用 end 屬性：
 - 在 NavLink 組件中，可以使用 end 屬性來指定僅在完全匹配時激活鏈接。
jsxCopy<NavLink to="/" end>
  Home
</NavLink>
5.嵌套路由的變化：
-父路由不再需要 exact，子路由會自動相對於父路由匹配。
總的來說，React Router v6 簡化了路由匹配的邏輯，使其更加直觀和易於使用。大多數情況下，你不需要顯式地指定嚴格或模糊匹配，路由系統會自動處理這些細節。
