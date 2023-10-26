"use client";
import Image from 'next/image'
// UI Assets
import styles from '../assets/custom-style.css'
import SvgSprite from '../components/SvgSprite';
// UI Components
import ScreenControls from '../components/screen-controls'




export default function Controlls() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
          <SvgSprite/>
          
          <ScreenControls/>
         

     </div>
    </main>
    
  )
}
