import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
      <p>Welcome! Start editing your code in the src/app folder and don{"'"}t forget to write a README!</p>
      </div>
    </main>
  )
}
