import { Link } from 'react-router-dom'
import styles from './Header.module.css'

const Header = () => {
  return (
    <header className={styles.headerWrap}>
        <div className={styles.headerWrapInner}>
            <Link className={styles.headerTitle} to={"/"}>베이스 치는 개발자</Link>
        </div>
    </header>
  )
}

export default Header