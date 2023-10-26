import Image from 'next/image'
// UI Assets
import styles from '../assets/custom-style.css'
import SvgSprite from '../components/SvgSprite';
// UI Components
import ScreenInprogress from '../components/screen-inprogress'




export default function Inprogress() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
          <SvgSprite/>
          
          <ScreenInprogress/>

     </div>
    </main>
    
  )
}
