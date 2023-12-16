import { Link } from "react-router-dom"
import authBgImg from "../../assets/images/authBg.png"
import shoppingCart from "../../assets/images/shoppingCart.svg"
import styles from "./Auth.module.scss"

export const Auth = () => {
  return (
    <div className={styles.auth}>
      <div
        className={styles.authBg}
        style={{ backgroundImage: `url(${authBgImg})` }}
      >
        <Link to={`/`}>
          <img className={styles.img} src={shoppingCart} alt="Shopping cart" />
        </Link>
      </div>
      <div className={styles.authForm}>
        <form className={styles.form}></form>
      </div>
    </div>
  )
}
