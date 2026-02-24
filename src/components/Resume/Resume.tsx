// components/Resume/Resume.tsx
import { useState } from 'react'
import styles from './Resume.module.css'

export default function Resume() {
  const [selectedCert, setSelectedCert] = useState<number | null>(null)
  
  const certificates = [
    {
      id: 1,
      title: "React Avançado",
      issuer: "Rocketseat",
      date: "2024",
      image: "/assets/certs/react-avancado.jpg",
      pdf: "/assets/certs/react-avancado.pdf"
    },
    {
      id: 2,
      title: "TypeScript Expert",
      issuer: "Alura",
      date: "2023",
      image: "/assets/certs/typescript.jpg",
      pdf: "/assets/certs/typescript.pdf"
    },
    {
      id: 3,
      title: "Node.js Performance",
      issuer: "Udemy",
      date: "2023",
      image: "/assets/certs/nodejs.jpg",
      pdf: "/assets/certs/nodejs.pdf"
    },
    {
      id: 4,
      title: "UI/Design Principles",
      issuer: "Origamid",
      date: "2024",
      image: "/assets/certs/ui-design.jpg",
      pdf: "/assets/certs/ui-design.pdf"
    },
    {
      id: 5,
      title: "Python for Data",
      issuer: "DataCamp",
      date: "2023",
      image: "/assets/certs/python-data.jpg",
      pdf: "/assets/certs/python-data.pdf"
    }
  ]

  const handleDownload = () => {
    // Link para download do currículo
    const link = document.createElement('a')
    link.href = '/assets/docs/curriculo-lucca-campello.pdf' // Caminho do seu PDF
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
                onClick={() => setSelectedCert(cert.id)}
              >
                <div className={styles.certImageWrapper}>
                  <img src={cert.image} alt={cert.title} />
                  <div className={styles.certOverlay}>
                    <span>Clique para ver</span>
                  </div>
                </div>
                <div className={styles.certInfo}>
                  <h4>{cert.title}</h4>
                  <p>{cert.issuer} • {cert.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Modal para visualizar certificado */}
      {selectedCert !== null && (
        <div className={styles.modal} onClick={() => setSelectedCert(null)}>
          <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <button className={styles.modalClose} onClick={() => setSelectedCert(null)}>×</button>
            <img 
              src={certificates.find(c => c.id === selectedCert)?.image} 
              alt="Certificado"
              className={styles.modalImage}
            />
            <a 
              href={certificates.find(c => c.id === selectedCert)?.pdf}
              download
              className={styles.modalDownload}
            >
              📥 Download PDF
            </a>
          </div>
        </div>
      )}
    </section>
  )
}