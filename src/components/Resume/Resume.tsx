// components/Resume/Resume.tsx
import { BookOpen, GraduationCap, Server } from 'lucide-react'
import styles from './Resume.module.css'

type Certificate = {
  id: number
  title: string
  issuer: string
  date: string
}

export default function Resume() {
  const certificates: Certificate[] = [
    { id: 1, title: 'HTML e CSS Avançado', issuer: 'b7web', date: '2025' },
    { id: 2, title: 'JavaScript Avançado', issuer: 'b7web', date: '2025' },
    { id: 3, title: 'TypeScript Avançado', issuer: 'b7web', date: '2026' },
    { id: 4, title: 'React.js Avançados', issuer: 'b7web', date: '2026' },
    { id: 5, title: 'Python Module Advanced', issuer: 'Instituto Fatec e Huawei', date: '2025' },
    { id: 6, title: 'Gestão em TI', issuer: 'Universidade São Judas Tadeu', date: '2026' }
  ]

  const handleDownload = () => {
    const pdfPath = '/assets/docs/Lucca Campello CV -2.pdf'
    const link = document.createElement('a')
    link.href = encodeURI(pdfPath)
    link.download = 'Curriculo-Lucca-Campello.pdf'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <section className={styles.section} id="curriculo">
      <div className={styles.container}>
        {/* Lado esquerdo - Currículo em destaque */}
        <div className={styles.resumeLeft}>
          <div className={styles.resumeFrame}>
            <div className={styles.resumeContent}>
              <h2 className={styles.resumeTitle}>Currículo</h2>
              
              <div className={styles.resumeInfo}>
                <div className={styles.infoItem}>
                  <span className={styles.infoLabel}>Nome:</span>
                  <span className={styles.infoValue}>Lucca Campello</span>
                </div>
                <div className={styles.infoItem}>
                  <span className={styles.infoLabel}>Área:</span>
                  <span className={styles.infoValue}>Desenvolvedor Full-Stack</span>
                </div>
                <div className={styles.infoItem}>
                  <span className={styles.infoLabel}>Experiência:</span>
                  <span className={styles.infoValue}>6 meses QA & DevOps</span>
                </div>
                <div className={styles.infoItem}>
                  <span className={styles.infoLabel}>Formação:</span>
                  <span className={styles.infoValue}>Engenharia de Software</span>
                </div>
              </div>

              <div className={styles.skillsPreview}>
                <h3>Principais habilidades</h3>
                <div className={styles.skillTags}>
                  <span>React</span>
                  <span>TypeScript</span>
                  <span>Node.js</span>
                  <span>Python</span>
                  <span>SQL</span>
                  <span>Next.js</span>
                </div>
              </div>

              <button onClick={handleDownload} className={styles.downloadButton}>
                <span className={styles.downloadIcon}>📄</span>
                Baixar Currículo PDF
              </button>
            </div>
            
            {/* Efeito de moldura */}
            <div className={styles.frameGlow}></div>
            <div className={styles.frameCorner}></div>
            <div className={styles.frameCorner2}></div>
          </div>
        </div>

        {/* Lado direito - Mosaico de certificados */}
        <div className={styles.certificatesRight}>
          <h3 className={styles.certificatesTitle}>Certificados</h3>
          
          <div className={styles.mosaicGrid}>
            {certificates.map((cert) => (
              <div 
                key={cert.id} 
                className={styles.certCard}
              >
                <div className={styles.certContent}>
                  <span className={styles.certIcon}>
                    {cert.title.toLowerCase().includes('python') ? (
                      <Server />
                    ) : cert.title.toLowerCase().includes('gestão') ? (
                      <GraduationCap />
                    ) : (
                      <BookOpen />
                    )}
                  </span>
                  <div className={styles.certText}>
                    <h4>{cert.title}</h4>
                    <p>{cert.issuer} • {cert.date}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
