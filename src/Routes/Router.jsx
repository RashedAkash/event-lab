import { createBrowserRouter } from "react-router-dom";
import MainLayouts from "../Layouts/MainLayouts";
import Home from "../Pages/Home/Home";
import About from "../Pages/About/About";
import Blog from "../Pages/Blog/Blog";
import Login from "../components/Login/Login";
import SignUp from "../components/SignUp/SignUp";
import Contact from "../Pages/Contact/Contact";

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayouts />,
    children: [
      {
        path: '/',
        element:<Home />
      },
      {
        path: '/about',
        element:<About />
      },
      {
        path: '/blog',
        element:<Blog />
      },
      {
        path: '/contact',
        element:<Contact />
      },
      {
        path: '/login',
        element:<Login />
      },
      {
        path: '/signUp',
        element:<SignUp />
      },
    ]
  }
])