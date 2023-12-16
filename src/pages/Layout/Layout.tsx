import { Outlet } from "react-router-dom"
import { Sidebar } from "../../components"
import styles from "./Layout.module.scss"

export const Layout = () => {
  return (
    <div>
      <Sidebar />
      <div className={styles.container}>
        <Outlet />
      </div>
    </div>
  )
}
