import Image from 'next/image'
// UI Assets
import styles from '../assets/custom-style.css'
import SvgSprite from '../components/SvgSprite';
// UI Components
import ScreenUp from '../components/screen-up'



export default function timesup() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
          <SvgSprite/>

          <ScreenUp/>
     </div>
    </main>
    
  )
}
