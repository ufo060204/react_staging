import React, { Component, lazy, Suspense } from "react";
import { Routes, Route, NavLink } from "react-router-dom";

// import Home from "./Home";
// import About from "./About";
import Loading from "./Loading";

// 使用 lazyLoad
// const Home = lazy(() => {import("./Home")});
// const About = lazy(() => {import("./About")});
// 函數右側只有一個表達式，可以省略 return 和大括號
const Home = lazy(() => import("./Home"));
const About = lazy(() => import("./About"));

export default class LazyLoad extends Component {
  render() {
    return (
      <div>
        <div className="row">
          <div className="col-xs-offset-2 col-xs-8">
            <div className="page-header">
              <h2>React Router Demo</h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-offset-2 col-xs-2">
            <div className="list-group">
              <NavLink className="list-group-item" to="/about">
                About
              </NavLink>
              <NavLink className="list-group-item" to="/home">
                Home
              </NavLink>
            </div>
          </div>
          <div className="col-xs-6 col-xs-offset-2">
            <div className="panel">
              <div className="panel-body">
                {/* 註冊路由 */}
                {/* <Route path="/about" component={About}/>
                  <Route path="/home" component={Home}/> */}
                <Suspense fallback={<Loading />}>
                  <Routes>
                    <Route path="/about" element={<About />} />
                    <Route path="/home" element={<Home />} />
                  </Routes>
                </Suspense>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
