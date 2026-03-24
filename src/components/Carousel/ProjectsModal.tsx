'use client'

import { useState, useEffect, useCallback } from 'react'
import styles from './ProjectsModal.module.css'

export interface Project {
  title: string
  description: string
  detailedDescription: string
  tags: string[]
  category: string
  image?: string
  liveUrl?: string
  githubUrl?: string
}

interface ProjectsModalProps {
  isOpen: boolean
  onClose: () => void
  projects: Project[]
}

export default function ProjectsModal({ isOpen, onClose, projects }: ProjectsModalProps) {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const [isAnimatingIn, setIsAnimatingIn] = useState(false)

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => setIsAnimatingIn(true), 10)
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
      setTimeout(() => setSelectedProject(null), 300)
    }
    return () => { document.body.style.overflow = '' }
  }, [isOpen])

  const handleClose = useCallback(() => {
    setIsAnimatingIn(false)
    setTimeout(onClose, 300)
  }, [onClose])

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) handleClose()
  }

  if (!isOpen) return null

  return (
    <div
      className={`${styles.backdrop} ${isAnimatingIn ? styles.backdropVisible : ''}`}
      onClick={handleBackdropClick}
    >
      <div className={`${styles.modal} ${isAnimatingIn ? styles.modalVisible : ''}`}>

        {/* Header */}
        <div className={styles.header}>
          <div className={styles.headerLeft}>
            <span className={styles.headerIcon}>✦</span>
            <span className={styles.headerTitle}>
              {selectedProject ? '/ projeto' : '/ projetos'}
            </span>
          </div>
          <button className={styles.closeBtn} onClick={handleClose} aria-label="Fechar">
            ✕
          </button>
        </div>

        {/* Content */}
        <div className={styles.content}>
          {!selectedProject ? (
            /* ── Grid ── */
            <div className={styles.grid}>
              {projects.map((project, index) => (
                <button
                  key={index}
                  className={styles.projectCard}
                  onClick={() => setSelectedProject(project)}
                  style={{ animationDelay: `${index * 0.06}s` }}
                >
                  <div className={styles.cardImageArea}>
                    {project.image ? (
                      <img src={project.image} alt={project.title} className={styles.cardImage} />
                    ) : (
                      <div className={styles.cardPlaceholder}>
                        <span className={styles.placeholderIcon}>{'</>'}</span>
                      </div>
                    )}
                    <div className={styles.cardOverlay}>
                      <span className={styles.playText}>ver projeto</span>
                    </div>
                  </div>
                  <div className={styles.cardInfo}>
                    <span className={styles.cardCategory}>{project.category}</span>
                    <h3 className={styles.cardTitle}>{project.title}</h3>
                    <div className={styles.cardTags}>
                      {project.tags.slice(0, 3).map((tag, i) => (
                        <span key={i} className={styles.cardTag}>{tag}</span>
                      ))}
                    </div>
                  </div>
                </button>
              ))}
            </div>
          ) : (
            /* ── Detail ── */
            <div className={styles.detailView}>
              <div className={styles.detailLeft}>
                <button className={styles.backBtn} onClick={() => setSelectedProject(null)}>
                  ← voltar
                </button>

                <div className={styles.detailImageArea}>
                  {selectedProject.image ? (
                    <img
                      src={selectedProject.image}
                      alt={selectedProject.title}
                      className={styles.detailImage}
                    />
                  ) : (
                    <div className={styles.detailPlaceholder}>
                      <span className={styles.detailPlaceholderIcon}>{'</>'}</span>
                    </div>
                  )}
                  <div className={styles.imageGlitch} />
                </div>

                <div className={styles.detailActions}>
                  {selectedProject.liveUrl && (
                    <a
                      href={selectedProject.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`${styles.actionBtn} ${styles.actionBtnPrimary}`}
                    >
                      ▶ demo ao vivo
                    </a>
                  )}
                  {selectedProject.githubUrl && (
                    <a
                      href={selectedProject.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`${styles.actionBtn} ${styles.actionBtnSecondary}`}
                    >
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
                      </svg>
                      github
                    </a>
                  )}
                </div>
              </div>

              <div className={styles.detailRight}>
                <div className={styles.detailMeta}>
                  <span className={styles.detailCategory}>{selectedProject.category}</span>
                  <div className={styles.detailDivider} />
                </div>

                <h2 className={styles.detailTitle}>{selectedProject.title}</h2>
                <p className={styles.detailDescription}>
                  {selectedProject.detailedDescription || selectedProject.description}
                </p>

                <div className={styles.techSection}>
                  <div className={styles.techLabel}>// tech stack</div>
                  <div className={styles.techGrid}>
                    {selectedProject.tags.map((tag, i) => (
                      <span key={i} className={styles.techBadge}>
                        <span className={styles.techDot} />
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className={styles.otherProjects}>
                  <div className={styles.techLabel}>// outros projetos</div>
                  <div className={styles.otherList}>
                    {projects
                      .filter(p => p.title !== selectedProject.title)
                      .map((p, i) => (
                        <button
                          key={i}
                          className={styles.otherItem}
                          onClick={() => setSelectedProject(p)}
                        >
                          <span className={styles.otherArrow}>▶</span>
                          {p.title}
                        </button>
                      ))}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className={styles.footer}>
          <span className={styles.footerCount}>{projects.length} projetos</span>
          <div className={styles.footerDots}>
            <span className={styles.footerDot} />
            <span className={styles.footerDot} />
            <span className={styles.footerDot} />
          </div>
          <span className={styles.footerCount}>esc para fechar</span>
        </div>
      </div>
    </div>
  )
}
