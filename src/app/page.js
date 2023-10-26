import Image from 'next/image'
import Link from 'next/link';
// UI Assets
import styles from './assets/custom-style.css'
// import SvgSprite from './components/SvgSprite';
// UI Components
// import ScreenWelcome from './components/screen-welcome'
// import ScreenControls from './components/screen-controls'
// import ScreenTimesup from './components/screen-timesup'
// import ScreenInprogress from './components/screen-inprogress'
// import ScreenSessionFull from './components/screen-session-full'
// import ScreenOops from './components/screen-oops'
// import ScreenOff from './components/screen-off'
// import ScreenQueue from './components/screen-queue'
// import ScreenUp from './components/screen-up'
// import ScreenBye from './components/screen-bye'



export default function Home() {
  return (
    <main className={styles.main}>
      <div className="page-links">
          <Link href="pages/page-welcome">welcome</Link>
          <Link href="pages/page-controls">controls</Link>
          <Link href="pages/page-timesup">timesup</Link>
          <Link href="pages/page-inprogress">inprogress</Link>
          <Link href="pages/page-session-full">session full</Link>
          <Link href="pages/page-oops">oops</Link>
          <Link href="pages/page-off">off</Link>
          <Link href="pages/page-queue">queue</Link>
          <Link href="pages/page-up">up</Link>
          <Link href="pages/page-bye">bye</Link>
     </div>
    </main>
    
  )
}
