import styles from '../assets/custom-style.css'
import ScreenTimesup from '../components/screen-timesup'


export default function timesup() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
          <ScreenTimesup></ScreenTimesup>
     </div>
    </main>
    
  )
}
