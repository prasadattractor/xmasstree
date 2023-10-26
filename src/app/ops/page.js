import styles from '../assets/custom-style.css'
import SvgSprite from '../components/SvgSprite';
// UI Components
import ScreenOops from '../components/screen-oops'



export default function ops() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
          <SvgSprite/>

          <ScreenOops/>

     </div>
    </main>
    
  )
}
