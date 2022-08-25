import Link from 'next/link'
import Image from 'next/image'
import logo from '../public/logo.jpg'
import styles from '../styles/Footer.module.css'

const Footer = () => {

    return (
        <div className={styles.container}>
            <div style={{ width: '15%'}}>
            <Image src={logo} layout='responsive' />
            </div>
            <div className={styles.footerLinks}>
               <div className={styles.links}>
                    <ul>
                        <li>
                            <Link href='/'>Email</Link>
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <Link href='/'>Linkdin</Link>
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <Link href='/'>Contact</Link>
                        </li>
                    </ul>
               </div>
               <p style={{ alignSelf: 'flex-end'}}>Example Restaurent site made by Tielor Tomlinson using Nextjs</p>
            </div>
        </div>
    )
}

export default Footer;