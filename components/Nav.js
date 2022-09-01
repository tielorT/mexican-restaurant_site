import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/Nav.module.css'
import logo from '../public/logo.jpg'

const Nav = () => {
    return (
        <nav className={styles.nav}>
          <div className={styles.logo}>
            <Image src={logo} height={120} width={110} alt='logo'/>
          </div>
          <div className={styles.links}>
              <ul>
                  <li>
                    <Link href='/'>Home</Link>
                  </li>
              </ul>
              <ul>
                  <li>
                    <Link href='/menu'>Menu</Link>
                  </li>
              </ul>
          </div>  
        </nav>
    )
}

export default Nav;