import Image from 'next/image'
// UI Assets
import styles from '../assets/custom-style.css'
import SvgSprite from '../components/SvgSprite';
// UI Components

import ScreenTimesup from '../components/screen-timesup'




export default function Timesup() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
          <SvgSprite/>
          
          <ScreenTimesup/>

     </div>
    </main>
    
  )
}
