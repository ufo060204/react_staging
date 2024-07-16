import { Navigate } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import News from "../pages/Home/News";
import Message from "../pages/Home/Message";

const routes = [
  {
    path: "/about",
    element: <About />
  },
  {
    path: "/home",
    element: <Home />,
    children: [
      {
        path: "news",
        element : <News />
      },
      {
        path: "message",
        element: <Message />
      },
    ]
  },
  {
    path: "/",
    element: <Navigate to="/about" />,
  }
];

export default routes;