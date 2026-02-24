// components/About/About.tsx
import { useState } from 'react'
import styles from './About.module.css'

export default function About() {
  const [expandedSection, setExpandedSection] = useState<string | null>(null)

  const toggleSection = (section: string) => {
    if (expandedSection === section) {
      setExpandedSection(null)
    } else {
      setExpandedSection(section)
    }
  }

  const sections = [
    {
      id: 'stacks',
      title: '⚡ Stacks preferidas',
      content: 'Trabalho principalmente com React, TypeScript e Node.js. No front-end, tenho experiência com Next.js, TailwindCSS. No back-end, tenho amplo conhecimento em python e banco de dados SQL, MongoDB e Prisma.'
    },
    {
      id: 'experiencia',
      title: '💼 Experiência profissional',
      content: 'Trabalhei como estágiario durante 6 meses na WISE SYSTEM, fazendo parte do time de QA e DevOps, o que ajudou muito a melhorar minha visão sobre regras de negócio quando se envolve tecnologia. Já participei de projetos acadêmicos e pessoais, desenvolvendo desde sites institucionais até sistemas de controle de estoque e APIs.'
    },
    {
      id: 'localizacao',
      title: '📍 Localização',
      content: 'Baseado em [Sua Cidade], Brasil. Disponível para trabalho remoto e oportunidades internacionais. Aberto a colaborações e novos desafios!'
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
            Acredito que a tecnologia tem o poder de transformar vidas e é isso que me motiva todos os dias.
          </p>

          {/* Seções expansíveis */}
          <div className={styles.expandableSections}>
            {sections.map((section) => (
              <div key={section.id} className={styles.expandableItem}>
                <button 
                  className={`${styles.expandableButton} ${expandedSection === section.id ? styles.expanded : ''}`}
                  onClick={() => toggleSection(section.id)}
                >
                  <span>{section.title}</span>
                  <span className={styles.arrow}>
                    {expandedSection === section.id ? '−' : '+'}
                  </span>
                </button>
                
                <div className={`${styles.expandableContent} ${expandedSection === section.id ? styles.expanded : ''}`}>
                  <p>{section.content}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}