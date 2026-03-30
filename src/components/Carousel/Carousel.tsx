'use client'

import styles from './Carousel.module.css'
import { useState } from 'react'
import ProjectsModal from './ProjectsModal'
import type { Project } from './ProjectsModal'

export default function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  const projects: Project[] = [
   {
  title: "ApproveFlow",
  description: "Plataforma SaaS para gestão de projetos com validação de entregas e comunicação em tempo real.",
  detailedDescription: "Sistema completo para gerenciamento de projetos entre freelancers e clientes. Permite criação e aprovação de tarefas, chat em tempo real com threads organizadas, notificações inteligentes por email e personalização de identidade para cada freelancer. Desenvolvido com foco em reduzir retrabalho e centralizar toda a comunicação do projeto em um único ambiente.",
  tags: ["Next.js", "TypeScript", "Prisma", "Supabase"],
  category: "SaaS",
  image: "/assets/img/approveporfolio.png",
  liveUrl: "https://approveflow-two.vercel.app/",
  githubUrl: "https://github.com/campellodevs/approveflow",
},
{
  title: "Yuna Studio",
  description: "Agência de tecnologia focada no desenvolvimento de websites e sistemas web sob medida.",
  detailedDescription: "Plataforma institucional desenvolvida para apresentar os serviços da Yuna Studio, com foco em conversão e experiência do usuário. Inclui estrutura estratégica de serviços, portfólio dinâmico, metodologia de trabalho e integração com canais de contato. Projetada para transmitir profissionalismo, confiança e facilitar a captação de novos clientes.",
  tags: ["Next.js", "TailwindCSS", "TypeScript"],
  category: "Website",
  image: "/assets/img/yunaportfolio.png",
  liveUrl: "https://yunastudio.com.br",
  githubUrl: "https://github.com/campellodevs/yuna-studio",
},
{
  title: "FinQ",
  description: "Sistema web para organização financeira e gestão inteligente de investimentos.",
  detailedDescription: "Aplicação web voltada para controle financeiro pessoal, com funcionalidades de acompanhamento de investimentos, organização de carteira e análise de desempenho ao longo do tempo. O sistema foi projetado para oferecer clareza na tomada de decisões financeiras, com foco em usabilidade e visualização de dados.",
  tags: ["React", "TypeScript", "Node.js"],
  category: "Web System",
  image: "/assets/img/finqportfolio2.png",
  liveUrl: "https://finans-project.vercel.app",
  githubUrl: "https://github.com/campellodevs/finans-project",
},
{
  title: "O Calhambeque",
  description: "Landing page moderna para food truck com cardápio digital multilíngue e QR Code.",
  detailedDescription: "Aplicação web desenvolvida para apresentar o food truck O Calhambeque, com foco em identidade visual marcante e experiência do usuário. O projeto inclui um sistema de cardápio digital com suporte a múltiplos idiomas e geração de QR Code, permitindo acesso rápido durante eventos. A solução foi pensada para unir design, performance e praticidade em um contexto real de uso.",
  tags: ["Next.js", "React", "TypeScript", "TailwindCSS"],
  category: "Landing Page",
  image: "/assets/img/ocalhambequeporfolio2.png",
  liveUrl: "https://calhambeque.vercel.app/",
  githubUrl: "https://github.com/campellodevs/calhambeque",
},
{
  title: "Filtra NCM",
  description: "Sistema para validação de NCM e gestão de produtos com foco em automação e eficiência no varejo.",
  detailedDescription: "Aplicação desenvolvida em Python com FastAPI e SQLite voltada para validação de NCMs e gerenciamento de produtos em comércios e varejos. O sistema automatiza tarefas repetitivas, garantindo maior confiabilidade no cadastro de produtos, evitando duplicidades e auxiliando na classificação em categorias. Conta com CRUD completo, validação de dados com Pydantic, testes automatizados e documentação interativa via Swagger, proporcionando uma base sólida e escalável para evolução com dashboards e análises de dados.",
  tags: ["Python", "FastAPI", "SQLite", "Pydantic", "Pytest", "Postman"],
  category: "Backend System",
  // image: "",
  liveUrl: "",
  githubUrl: "https://github.com/campellodevs/PortfolioPython-FiltraNCM",
}
  ]

  const nextSlide = () => setCurrentIndex(prev => (prev + 1) % projects.length)
  const prevSlide = () => setCurrentIndex(prev => (prev - 1 + projects.length) % projects.length)

  const openProject = (project: Project) => {
    setSelectedProject(project)
    setIsModalOpen(true)
  }

  const openAll = () => {
    setSelectedProject(null)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setSelectedProject(null)
  }

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
                  onClick={() => openProject(project)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault()
                      openProject(project)
                    }
                  }}
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
            onClick={openAll}
          >
            Ver todos os projetos
            <span className={styles.viewAllIcon}>✦</span>
          </button>
        </div>
      </section>

      <ProjectsModal
        isOpen={isModalOpen}
        onClose={closeModal}
        projects={projects}
        initialProject={selectedProject}
      />
    </>
  )
}
