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

## 九、redirect 重新導向
在 React Router v6 中，`Redirect` 組件確實被移除了，但 `redirect` 功能仍然存在，只是以不同的形式提供。在 v6 中，你有幾種方式可以實現重定向：

1. 使用 `Navigate` 組件：
   這是在 JSX 中實現重定向的主要方式。

   ```jsx
   import { Navigate } from 'react-router-dom';

   // 在路由定義中
   <Route path="/old-path" element={<Navigate to="/new-path" replace />} />

   // 或在組件內
   function SomeComponent() {
     return <Navigate to="/new-path" replace />;
   }
   ```

2. 使用 `useNavigate` hook：
   這適用於在事件處理器或效果中進行編程式導航。

   ```jsx
   import { useNavigate } from 'react-router-dom';

   function SomeComponent() {
     const navigate = useNavigate();

     useEffect(() => {
       navigate('/new-path', { replace: true });
     }, []);

     return null;
   }
   ```

3. 使用 `redirect` 函數：
   在 v6.4 及以後版本中，你可以在 loader 或 action 函數中使用 `redirect` 函數。

   ```jsx
   import { redirect } from 'react-router-dom';

   const loader = async () => {
     const user = await getUser();
     if (!user) {
       return redirect('/login');
     }
     return null;
   };

   // 在路由定義中
   <Route path="/dashboard" loader={loader} element={<Dashboard />} />
   ```

4. 在路由配置中使用 `Navigate`：
   如果你使用物件形式的路由配置，你可以這樣做：

   ```jsx
   import { Navigate } from 'react-router-dom';

   const routes = [
     { path: '/old-path', element: <Navigate to="/new-path" replace /> },
     // 其他路由...
   ];
   ```

總的來說，雖然 `Redirect` 組件不再存在，但 React Router v6 提供了更靈活和強大的方式來處理重定向。這些新方法更好地整合了 React 的聲明式風格和 React Router 的新特性。

## Effect Hook 
1. Effect Hook 可以讓你在函數元件中執行副作用操作，用於模擬類別元件式中的生命週期勾子
2. React 中的互動操作：
   發送 Ajax 請求資料獲取
   設定訂閱 / 啟動計時器
   手動更改真實 DOM
3. 語法和說明：
  useEffect(()=>{
    // 在此可以執行任何帶副作用操作
    return () =>{ // 在元件卸載前執行
      // 在此做一些收尾工作，比如清除定時器 / 取消訂閱等
    }
  },[stateValue]) // 如果指定的是 []，回調函數只會在第一次 render() 後執行
4. 可以把 useEffect Hook 看做如下三個函式的組合
componentDidMount()
componentDidUpdate()
componentWillUnmount()

## Ref Hook 
1. Ref Hook 可以在函數源建中存儲/查找元件內或任意其他數據
2. 語法：const refContainer = useRef()
3. 作用：保存標籤對象，功能與 React.createRef() 一樣

## 1.總和案例_redux 精簡版
1. 去除 Count 元件自身狀態
2. .src 下建立：
    -redux
      -store.js
      -count_reducer.js

3. .store.js
  1). 引入 redux 中的 createStore 函數，創建一個 store
  2). .createStore 調用時要傳入一個為其服務的 reducer
  3). 記得匯出 store 對象

4. .count_reducer.js：
  1). .reducer 的本質是一個函數，接收： preState, action. 回傳加工後的狀態
  2). .reducer 有兩個作用，初始化狀態、加工狀態
  3). .reducer 被第一次調用時，是 store 自動觸發的，
    傳遞的 preState 是 undefined,
    傳遞的 action：{type: '@@REDUX/INIT_a.2.b.4'}

5. 在 index.js 中監測 store 中狀態的改變，一旦發生改變重新渲染 <App/>
  備註： redux 只負責管理狀態，至於狀態的改變驅動著頁面的展示，要靠我們自己寫

## 2.總和案例_redux 完整版
新增文件：
1. count_action.js 專門用於創建 action 對象
2. constant.js 放置容易寫錯 的 type 值

## 3.總和案例_redux 非同步 action 版
1. 明確：延遲的動作不想交給組件自身，想交給 action 
2. 何時需要非同步 action：想要對狀態進行操作，而是一個函式，該函式中寫非同步任務
3. 非同步任務有結果後，分發一個同步的 action 去真正操作數據
4. 備註：非同步 action 不是必要寫的，完全可以自己等待非同步任務的結果再去分發同步 action

## 4.總和案例_react-redux 基本使用
(1). 明確兩個概念
  1. UI組件：不能使用任何 redux 的 api，只負責頁面的呈現、交互等
  2. 容器組件：負責和 redux 通信，將結果交給 UI 組件
(2). 如何創建一個容器組件 - 靠 react-redux 的 connect 函數
  connect(mapStateToProps, mapDispatchToProps)(UI 組件)
    mapStateToProps：映射狀態，返回值是一個物件
    mapDispatchToProps：映射操作狀態的方法，返回值是一個物件
(3). 備註 1：容器組件中的 store 是靠 props 傳進去的，而不是在容器中直接引入
(4). 備註 2：mapDispatchToProps 也可以是一個物件

## 5.總和案例_react-redux 優化
(1). 容器組件和 UI 組件整合成一個文件
(2). 無須自己給容器組件傳遞 store. 給 <App/> 包裹一個 <Provider store={store}> 即可
(3). 使用了 react-redux 後再也不用自己檢測 redux 中狀態的改變了，容器組件可以自動完成這個工作
(4). mpaDispatchToProps 也可以簡單的寫成一個物件
(5). 一個組件要和 redux 打交道要經過哪幾個步驟？
  (1). 定義好 UI 組件 -- 不匯出
  (2). 引入 connect 生成一個容器組件，並匯出，寫法如下：
    connect(
      state => ({key: value}) // 映射狀態
      {key: xxxxAction} // 映射操作狀態的方法
    )(UI 組件)
  (3). 在 UI 組件中通過 this.props.xxxxx 讀取操作狀態