import Image from 'next/image'
// UI Assets
import styles from './assets/custom-style.css'
import SvgSprite from './components/SvgSprite';
// UI Components
import ScreenSessionFull from './components/screen-session-full'




export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
          <SvgSprite/>
          
          <ScreenSessionFull/>

     </div>
    </main>
    
  )
}
