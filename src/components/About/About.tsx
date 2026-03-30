// components/About/About.tsx
import { useState, type ComponentType } from 'react'
import { Bolt, Briefcase, MapPin } from 'lucide-react'
import styles from './About.module.css'

type Section = {
  id: string
  title: string
  icon: ComponentType<{ className?: string }>
  content: string
  bullets?: string[]
}

export default function About() {
  const [expandedSection, setExpandedSection] = useState<string | null>(null)

  const toggleSection = (section: string) => {
    setExpandedSection((current) => (current === section ? null : section))
  }

  const sections: Section[] = [
    {
      id: 'stacks',
      title: 'Stacks preferidas',
      icon: Bolt,
      content:
        'Trabalho principalmente com React, TypeScript e Node.js. No front-end, tenho experiência com Next.js e Tailwind CSS. No back-end, tenho conhecimento em Python e banco de dados SQL, MongoDB e Prisma.'
    },
    {
      id: 'wise',
      title: 'Experiência • Wise System',
      icon: Briefcase,
      content:
        'Estágio de 6 meses no time de QA e DevOps, atuando em processos de validação, automação e suporte a entregas.',
      bullets: [
        'Melhoria de processos de QA e apoio ao time de produto.',
        'Colaboração com DevOps para otimizar pipelines e releases.',
        'Experiência prática com regras de negócio e garantia de qualidade.'
      ]
    },
    {
      id: 'yuna',
      title: 'Experiência • Yuna Studio',
      icon: Briefcase,
      content:
        'Co-founder & Software Engineer na Yuna Solutions, agência e consultoria de tecnologia focada em websites e sistemas web.',
      bullets: [
        'Desenvolvimento de sites institucionais e landing pages com foco em performance e UX.',
        'Criação de sistemas web sob medida e evolução contínua de projetos existentes.',
        'Análise/estruturação de SEO e acompanhamento estratégico com clientes.',
        'Stack: React, Next.js, TypeScript, Node.js, Prisma, Supabase, PostgreSQL.'
      ]
    },
    {
      id: 'localizacao',
      title: 'Localização',
      icon: MapPin,
      content:
        'Baseado em São Paulo, Brasil. Disponível para trabalho remoto, presencial e oportunidades internacionais. Aberto a colaborações e novos desafios!'
    }
  ]

  return (
    <section className={styles.section} id="sobre">
      <div className={styles.container}>
        {/* Lado esquerdo - Foto */}
        <div className={styles.imageContainer}>
          <div className={styles.imageWrapper}>
            <img 
              src="/assets/img/imagemdeperfil.png"
              alt="Lucca Campello"  
              className={styles.profileImage}       
            />
            <div className={styles.imageGlow}></div>
          </div>
        </div>

        {/* Lado direito - Conteúdo */}
        <div className={styles.content}>
          <h1 className={styles.welcomeTitle}>
            Seja bem-vindo<br />
            ao meu portfólio!
          </h1>
          
          <p className={styles.bio}>
            Olá! Meu nome é Lucca Campello e sou desenvolvedor full-stack apaixonado por criar experiências digitais únicas. 
            Comecei minha jornada na programação há 2 anos e desde então venho explorando as possibilidades infinitas da tecnologia.
            <br /><br />
            Atualmente curso Engenharia de Software na Universidade São Judas Tadeu e estou sempre em busca de novos conhecimentos e desafios.  
          </p>

          {/* Seções expansíveis */}
          <div className={styles.expandableSections}>
            {sections.map((section) => {
              const Icon = section.icon
              const isExpanded = expandedSection === section.id

              return (
                <div key={section.id} className={styles.expandableItem}>
                  <button 
                    className={`${styles.expandableButton} ${isExpanded ? styles.expanded : ''}`}
                    onClick={() => toggleSection(section.id)}
                    type="button"
                  >
                    <span className={styles.titleGroup}>
                      <Icon className={styles.icon} />
                      <span>{section.title}</span>
                    </span>
                    <span className={styles.arrow}>
                      {isExpanded ? '−' : '+'}
                    </span>
                  </button>
                  
                  <div className={`${styles.expandableContent} ${isExpanded ? styles.expanded : ''}`}>
                    <p>{section.content}</p>
                    {section.bullets && (
                      <ul className={styles.bulletList}>
                        {section.bullets.map((item, i) => (
                          <li key={i}>{item}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
