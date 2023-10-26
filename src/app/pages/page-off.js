import Image from 'next/image'
// UI Assets
import styles from './assets/custom-style.css'
import SvgSprite from './components/SvgSprite';
// UI Components
import ScreenOff from './components/screen-off'



export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
          <SvgSprite/>

          <ScreenOff/>
     </div>
    </main>
    
  )
}
