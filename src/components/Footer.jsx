import styles from './Footer.module.scss'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.left}>
          <span className={styles.mark}>✦</span>
          <span className={styles.brand}>GRAND ARC</span>
        </div>

        <p className={styles.legal}>
          © {new Date().getFullYear()} Grand Arc Developments. All rights reserved.
          <br />
          This is a confidential sales presentation.
        </p>

        <div className={styles.right}>
          <a href="#hero" className={styles.topLink}>Back to Top ↑</a>
        </div>
      </div>
    </footer>
  )
}
