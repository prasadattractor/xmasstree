import Image from 'next/image'
// UI Assets
import styles from '../assets/custom-style.css'
import SvgSprite from '../components/SvgSprite';
// UI Components
import ScreenQueue from '../components/screen-queue'



export default function Queue() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
          <SvgSprite/>

          <ScreenQueue/>
     </div>
    </main>
    
  )
}
