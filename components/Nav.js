import Link from 'next/link'
import styles from './Nav.module.scss'

function Nav(props) {
  function getStyle(page){
    if (page==props.page){
      return styles.active
    } else {
      return null;
    }
  }

    return (
      <nav className={styles.nav}>
        <ul>
            <li>
                <Link href="/">
                    <a className={getStyle("home")}>Home</a>
                </Link>
            </li>
            <li>
                <Link href="/about">
                    <a className={getStyle("about")}>About Us</a>
                </Link>
            </li>
        </ul>
      </nav>
    )
}

export default Nav