import Image from 'next/image'
// UI Assets
import styles from '../assets/custom-style.css'
import SvgSprite from '../components/SvgSprite';
// UI Components
import ScreenBye from '../components/screen-bye'



export default function bye() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
          <SvgSprite/>

          <ScreenBye/>
     </div>
    </main>
    
  )
}
