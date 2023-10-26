import Image from 'next/image'
import Link from 'next/link';
// UI Assets
import styles from './assets/custom-style.css'
import SvgSprite from './components/SvgSprite';
// UI Components
import ScreenWelcome from './components/screen-welcome'



export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
          <SvgSprite/>
          
          <ScreenWelcome/>
     </div>
    </main>
    
  )
}
