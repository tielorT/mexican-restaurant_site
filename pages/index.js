import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import mainImg from '../public/burrito.jpg'
import salsaImg from '../public/salsa.jpg'
import inteiorImg from '../public/place.jpg'
import styles from '../styles/Home.module.css'
import {motion} from 'framer-motion'
import Button from '@mui/material/Button'
import Card from '../components/specialsCard'


export default function Home({}) {
  const [menuItems, setMenuItems] = useState([]);


  useEffect(() => {
    (async () => {
      const res = await fetch("/api/menu/menuItems");
      const menuItems = await res.json();
      setMenuItems(menuItems);
    })()
  }, [])

  return (
    <div style={{ width: '100%'}}>
      <Head>
        <title>Mexican restaurant</title>
        <meta name='keywords' content='restaurant, mexican, mexican food'/>
      </Head>
      <div className={styles.header}>
          <Image className={styles.img} src={mainImg} layout='fill' alt='mainImage'/>
              <motion.div className={styles.overlay} initial='hidden' animate='visible' variants={{
                hidden: {
                  scale: .8,
                  opacity: 0
                },
                visible: {
                  scale: 1,
                  opacity: 1,
                  transition: {
                    delay: .6
                  }
                }
              }}>
                <h3 style={{fontSize: '60px', margin:'0px',fontFamily: 'Hurricane, cursive'}}>Best Burritos In Town</h3>
                <p>burritos only made with organic and fresh ingredients</p>
              </motion.div>         
      </div>

      <div className={styles.salsaContainer}>
        <div className={styles.salsaContent}>
          <p style={{color: '#ff8d66', fontFamily: 'Hurricane, cursive',fontWeight: 'bold'}}>FREE CHIPS AND SALSA WITH EVERY ORDER</p>
          <h2 style={{marginTop: '2px'}}>TRY OUR INFAMOULSY SPICY SALSA. NO EXTRA CHARGE</h2>
          <p>Made with fresh tomotaos and spicy peppers. This salsa is known to leave customers happy and THIRSTY for more</p>
          <Button variant='contained' href='/menu' size='large' style={{backgroundColor: '#FFD966', marginTop: '20px'}}>Order Here</Button>
        </div>
        <div className={styles.salsaImg}>
          <Image src={salsaImg} alt='salsa'/>
        </div>
      </div>
      <div className={styles.subContainer}>
       <Image src={inteiorImg} alt='inteior'/>
       <div className={styles.interiorContent}>
           <h2 style={{fontFamily: 'Hurricane, cursive'}}>19th CENTURY DECOR</h2>
           <p>Come eat in and enjoy our welcoming aesthetics inspired by 19th century spanish design.</p>
       </div>
      </div>
      <div className={styles.subSpContainer}>
        <h2>popular menu items</h2>
        <div className={styles.subSpItems}>
          {(menuItems || []).map(item => {
            if(item.type === 'special'){
              return <Card title={item.title} 
                           description={item.description}
                           imgUrl={item.imgUrl}
                           id={item.id}
                           key={item.id}/>
            }
          })}
          <span style={{flexGrow:'2'}}><h2 style={{textAlign:'center'}}>Check these hot items and more!
                                                          <br/> <Link href='/menu'><a>See menu here</a></Link></h2></span>
        </div>
      </div>
    </div>
  )
}


