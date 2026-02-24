import styles from './Navbar.module.css'

export default function Navbar() {
  return (
    <nav className={styles.nav}>
      <ul className={styles.links}>
        <li><a href="#sobre">SOBRE</a></li>
        <li><a href="#projetos">PROJETOS</a></li>
        <li><a href="#curriculo">CURRÍCULO</a></li>
        <li><a href="#contato">CONTATO</a></li>
      </ul>
    </nav>
  )
}