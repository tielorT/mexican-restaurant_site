import Nav from './Nav'
import Footer from './Footer'
import styles from '../styles/Layout.module.css';

const Layout = ({children}) => {
    return (
        <>
        <Nav />
        <div className={styles.container}>
          <main className={styles.main}>
             {children}
          </main> 
        </div>
        <Footer />
        <div hidden id="snipcart" 
             data-api-key="MTc5Y2Q2MDMtNDI4My00ZjZmLTg4NjYtYzMxOGM3NThkZDViNjM3MzAxOTQ1MjE4OTcxMTYy"
             data-config-modal-style='side'></div>
        </>
    )
};

export default Layout;
