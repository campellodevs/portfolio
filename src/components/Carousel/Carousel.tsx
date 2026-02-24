import styles from './Carousel.module.css'
import { useRef, useState } from 'react'

export default function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  
  const projects = [
    {
      title: "Sistema de Estoque",
      description: "Controle de estoque desktop com React + Electron. Interface intuitiva e relatórios em tempo real.",
      tags: ["React", "Electron", "SQLite"],
      category: "Desktop"
    },
    {
      title: "API de NCM",
      description: "API em Python para consulta e validação de NCM com Postman. Documentação completa e testes automatizados.",
      tags: ["Python", "Flask", "Postman"],
      category: "Back-end"
    },
    {
      title: "Couple.me",
      description: "Site interativo para casais utilizarem simultaneamente. Chat em tempo real e atividades compartilhadas.",
      tags: ["Next.js", "Socket.io", "Tailwind"],
      category: "Web App"
    }
  ]
  
  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length)
  }
  
  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length)
  }
  
  return (
    <section className={styles.section} id="projetos">
      <h2 className={styles.title}>Projetos</h2>
      
      <div className={styles.carouselContainer}>
        <button 
          className={`${styles.navButton} ${styles.navLeft}`} 
          onClick={prevSlide}
        >
          ←
        </button>
        
        <div className={styles.cardsWrapper}>
          {projects.map((project, index) => {
            // Calcula a posição relativa ao índice atual
            let position = index - currentIndex
            if (position < 0) position += projects.length
            
            return (
              <div 
                key={index} 
                className={`${styles.card} ${
                  position === 0 ? styles.cardCenter :
                  position === 1 ? styles.cardRight :
                  position === projects.length - 1 ? styles.cardLeft :
                  styles.cardHidden
                }`}
              >
                <span className={styles.projectTag}>{project.category}</span>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className={styles.techStack}>
                  {project.tags.map((tag, i) => (
                    <span key={i} className={styles.techTag}>{tag}</span>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
        
        <button 
          className={`${styles.navButton} ${styles.navRight}`} 
          onClick={nextSlide}
        >
          →
        </button>
      </div>
      
      <div className={styles.dots}>
        {projects.map((_, index) => (
          <button
            key={index}
            className={`${styles.dot} ${index === currentIndex ? styles.dotActive : ''}`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </section>
  )
}