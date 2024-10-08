// import React, { Component } from 'react'
// import Demo from "./components/03_hooks";

// export default class App extends Component {
//   render() {
//     return (
//       <div>
//         <Demo />
//       </div>
//     )
//   }
// }

import React, { useState, Fragment } from "react";
import Demo from "./components/04_Fragment";
import SetState from "./components/01_setState";
import LazyLoad from "./components/02_lazyLoad";

export default function App() {
  const [showDemo, setShowDemo] = useState(true);

  const handleUnmount = () => {
    setShowDemo(false);
  };

  return (
    <Fragment>
      <SetState />
      <hr />
      <LazyLoad />
      <hr />
      {showDemo ? (
        <Demo onUnmount={handleUnmount} />
      ) : (
        <button onClick={() => setShowDemo(true)}>重新掛載 Demo</button>
      )}
    </Fragment>
  );
}