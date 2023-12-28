import { createBrowserRouter } from "react-router-dom"
import { LoginPage, RegisterPage, Home, Layout, Page404 } from "../pages"

export const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginPage />,
  },
  {
    path: "/sign-up",
    element: <RegisterPage />,
  },
  {
    path: "/",
    element: <Layout />,
    children: [{ path: "home-page", element: <Home /> }],
  },
  {
    path: "*",
    element: <Page404 />,
  },
])
