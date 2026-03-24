'use client'

import styles from './Carousel.module.css'
import { useState } from 'react'
import ProjectsModal from './ProjectsModal'
import type { Project } from './ProjectsModal'

export default function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const projects: Project[] = [
    {
      title: "Sistema de Estoque",
      description: "Controle de estoque desktop com React + Electron. Interface intuitiva e relatórios em tempo real.",
      detailedDescription: "Aplicação desktop completa para gestão de inventário. Permite cadastro de produtos, controle de entradas e saídas, geração de relatórios em PDF e alertas de estoque mínimo. Banco de dados local com SQLite para uso offline.",
      tags: ["React", "Electron", "SQLite"],
      category: "Desktop",
      // image: "/images/estoque.png",
      // liveUrl: "https://seu-projeto.vercel.app",
      // githubUrl: "https://github.com/seu-usuario/sistema-estoque",
    },
    {
      title: "API de NCM",
      description: "API em Python para consulta e validação de NCM com Postman. Documentação completa e testes automatizados.",
      detailedDescription: "API REST desenvolvida em Python/Flask para consulta, validação e classificação de códigos NCM (Nomenclatura Comum do Mercosul). Inclui documentação interativa via Swagger e suíte de testes automatizados com Postman/Newman.",
      tags: ["Python", "Flask", "Postman"],
      category: "Back-end",
      // image: "/images/api-ncm.png",
      // liveUrl: "https://api-ncm.vercel.app",
      // githubUrl: "https://github.com/seu-usuario/api-ncm",
    },
    {
      title: "Couple.me",
      description: "Site interativo para casais utilizarem simultaneamente. Atividades compartilhadas.",
      detailedDescription: "Plataforma web em tempo real para casais realizarem atividades juntos mesmo à distância. Funcionalidades incluem lista de desejos compartilhada, calendário de datas especiais, diário conjunto e chat sincronizado via WebSocket.",
      tags: ["Next.js", "Socket.io", "Tailwind"],
      category: "Web App",
      // image: "/images/couple-me.png",
      // liveUrl: "https://couple-me.vercel.app",
      // githubUrl: "https://github.com/seu-usuario/couple-me",
    }
  ]

  const nextSlide = () => setCurrentIndex(prev => (prev + 1) % projects.length)
  const prevSlide = () => setCurrentIndex(prev => (prev - 1 + projects.length) % projects.length)

  return (
    <>
      <section className={styles.section} id="projetos">
        <h2 className={styles.title}>Projetos</h2>

        <div className={styles.carouselContainer}>
          <button className={`${styles.navButton} ${styles.navLeft}`} onClick={prevSlide}>
            ←
          </button>

          <div className={styles.cardsWrapper}>
            {projects.map((project, index) => {
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

          <button className={`${styles.navButton} ${styles.navRight}`} onClick={nextSlide}>
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

        {/* ── Botão "Ver todos" ── */}
        <div className={styles.viewAllWrapper}>
          <button
            className={styles.viewAllBtn}
            onClick={() => setIsModalOpen(true)}
          >
            Ver todos os projetos
            <span className={styles.viewAllIcon}>✦</span>
          </button>
        </div>
      </section>

      <ProjectsModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        projects={projects}
      />
    </>
  )
}
