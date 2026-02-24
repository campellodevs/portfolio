// components/Footer/Footer.tsx
import styles from './Footer.module.css'

export default function Footer() {
  const currentYear = new Date().getFullYear()
  
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <p className={styles.copyright}>
          © {currentYear} • Todos os direitos reservados
        </p>
        <p className={styles.developed}>
          Desenvolvido por <span className={styles.name}>Lucca Campello</span>
        </p>
      </div>
    </footer>
  )
}