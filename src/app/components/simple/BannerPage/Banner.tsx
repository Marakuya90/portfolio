'use client'
import styles from './Banner.module.css'
import {usePathname} from "next/navigation";

const Banner = ({className}: {className?: string}) => {
  const pathname = usePathname();
  const pageName = pathname.substring(pathname.lastIndexOf('/') + 1)

  const title = pageName === '' ? 'PORTFOLIO'
    : pageName === 'cv' ? 'Curriculum vitae ' : pageName.toUpperCase()

  return (
    <div className={`${styles.banner} ${className}`}>
      <h1 className={'font-mono text-lg uppercase tracking-[0.4em] font-semibold'}>ЩËГОЛЕВА ЮЛИЯ &bull; FRONTEND DEVELOPER</h1>
      <p
        className={`font-mono text-sm uppercase tracking-[0.6em] ${styles.glow}`}>{title}</p>
    </div>
  )
}

export default Banner