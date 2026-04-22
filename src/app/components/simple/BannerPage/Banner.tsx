'use client'
import styles from './Banner.module.css'
import {usePathname} from "next/navigation";

const Banner = () => {
  const pathname = usePathname();
  const pageName = pathname.substring(pathname.lastIndexOf('/') + 1)

  const title = pageName === '' ? 'PORTFOLIO' : pageName.toUpperCase()
  return (
    <div className={styles.banner}>
      <h1 className={'font-mono text-xs uppercase tracking-[0.4em] font-semibold'}>ЩËГОЛЕВА ЮЛИЯ &bull; FRONTEND DEVELOPER</h1>
      <p
        className={`font-mono text-xs uppercase tracking-[0.6em] ${styles.glow}`}>{title}</p>
    </div>
  )
}

export default Banner