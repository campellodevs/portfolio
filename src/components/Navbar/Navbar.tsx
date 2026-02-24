// components/Navbar/Navbar.tsx
import { useState, useEffect } from 'react' 
import styles from './Navbar.module.css'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const controlNavbar = () => {
      if (window.scrollY > 50) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener('scroll', controlNavbar)
    return () => window.removeEventListener('scroll', controlNavbar)
  }, [])

  // Fecha o menu ao clicar em um link
  const handleLinkClick = () => {
    setMenuOpen(false)
  }

  // Previne scroll do body quando menu aberto
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }

    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [menuOpen])

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.navScrolled : ''}`}>
      {/* Botão Hambúrguer - só aparece no mobile */}
      <button 
        className={`${styles.hamburger} ${menuOpen ? styles.hamburgerActive : ''}`}
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Menu"
      >
        <span className={styles.hamburgerLine}></span>
        <span className={styles.hamburgerLine}></span>
        <span className={styles.hamburgerLine}></span>
      </button>

      {/* Links - visível no desktop, overlay no mobile */}
      <ul className={`${styles.links} ${menuOpen ? styles.linksMobile : ''}`}>
        <li><a href="#sobre" onClick={handleLinkClick}>Sobre</a></li>
        <li><a href="#projetos" onClick={handleLinkClick}>Projetos</a></li>
        <li><a href="#curriculo" onClick={handleLinkClick}>Currículo</a></li>
        <li><a href="#contato" onClick={handleLinkClick}>Contato</a></li>
      </ul>
    </nav>
  )
}