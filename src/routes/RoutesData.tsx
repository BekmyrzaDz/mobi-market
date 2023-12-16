import { createBrowserRouter } from "react-router-dom"
import { AuthPage, Home, Layout, Page404 } from "../pages"

export const router = createBrowserRouter([
  {
    path: "/",
    element: <AuthPage />,
    children: [
      // { path: "forgot-password", element: <AuthPage /> },
      // { path: 'verification', element: <AuthPage /> },
      // { path: 'reset-password', element: <AuthPage /> },
    ],
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
