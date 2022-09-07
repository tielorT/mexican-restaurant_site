import Image from 'next/image'
import { useEffect, useState } from 'react'
import styles from '../styles/Menu.module.css'
import Head from 'next/head'
import Script from 'next/script'
import img from '../public/menuImage.jpg'
import {motion} from 'framer-motion'
import Card from '../components/menuCard'


export default function Menu({}) {
    const [menuItems, setMenuItems] = useState(['gg']);

    useEffect(() => {
        (async () => {
          const res = await fetch("/api/menu/menuItems");
          const menuItems = await res.json();
          setMenuItems(menuItems);
        })()
      }, [])

    return (
        <div style={{width: '100%'}}>
            
            <div className={styles.header}>
                <div className={styles.imgHeader}>
                <div style={{ width: '100%', height:'100%', }}>   
                  <Image src={img} layout='fill' alt='alt'/>
                </div>
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
                    <h3>authentic mexican cruisine</h3>
                </motion.div>
                </div>
                <div className={styles.headerContent}>
                    <h2 style={{margin: '0px', borderBottom: '2px solid #FFD966'}}>EXPERIENCE OUR FULL MENU</h2>
                    <p style={{fontFamily: 'Hurricane, cursive',fontSize: '28px',color:'#ff8d66'}}>place Order Below</p>
                </div>
            </div>
            <div className={styles.menuContent}>
                <h1 style={{borderBottom: '2px solid #FFD966'}}>OUR FULL MENU</h1>
                <div>
                    <div className={styles.menuSubContent}>
                        <h3>COMBOS</h3>
                        <p>Each combo comes with two sides</p>
                        <div className={styles.menuCard}>
                            {(menuItems.data || []).map(item => {
                                if(item.type === 'special'){
                                    return <span key={item._id}><Card title={item.title} 
                                                 description={item.description} 
                                                 price={item.price} 
                                                 imgUrl={item.imgUrl}
                                                 key={item._id}/></span>
                                }
                            })}
                        </div>
                    </div>
                    <div className={styles.menuSubContent}>
                        <h3>BURRITOS</h3>
                        <p>Individual burritos</p>
                        <div className={styles.menuCard}>
                            {(menuItems.data || []).map(item => {
                                if(item.type === 'burrito'){
                                    return <span key={item._id}><Card title={item.title} 
                                                 description={item.description} 
                                                 price={item.price} 
                                                 imgUrl={item.imgUrl}
                                                 key={item._id}/></span> 
                                }
                            })}
                        </div>
                    </div>
                    <div className={styles.menuSubContent}>
                        <h3>SALADS</h3>
                        <p>Salads prepared witn fresh ingredients</p>
                        <div className={styles.menuCard}>
                            {(menuItems.data || []).map(item => {
                                if(item.type === 'salad'){
                                    return <span key={item._id}><Card title={item.title} 
                                                 description={item.description} 
                                                 price={item.price} 
                                                 imgUrl={item.imgUrl}
                                                 key={item._id}/></span>
                                }
                            })}
                        </div>
                    </div>
                </div>
            </div>
            <Script id='script-Id' src="https://cdn.snipcart.com/themes/v3.2.0/default/snipcart.js">
            </Script>
        </div>
    )
}

