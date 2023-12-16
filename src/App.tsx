import { RouterProvider } from "react-router-dom"
import { router } from "./routes/RoutesData"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

function App() {
  return (
    <>
      <RouterProvider router={router} />
      <ToastContainer autoClose={2000} />
    </>
  )
}

export default App
