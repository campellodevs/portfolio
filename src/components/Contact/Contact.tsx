// components/Contact/Contact.tsx
import { useState } from 'react'
import styles from './Contact.module.css'

export default function Contact() {
  const [copied, setCopied] = useState<string | null>(null)

  const contactInfo = {
    email: "luccacampello21@gmail.com",
    phone: "+55 (11) 99349-5934",
    location: "Tatuapé, São Paulo, SP - Brasil"
  }

  const socialLinks = [
    {
      name: "GitHub",
      icon: "💻",
      url: "https://github.com/campellodevs",
      username: "campellodevs",
      color: "#a78bfa"
    },
    {
      name: "LinkedIn",
      icon: "🔗",
      url: "https://www.linkedin.com/in/lucca-campello-r-santos-7a4b83344/",
      username: "in/luccacampello",
      color: "#3b82f6"
    },
    {
      name: "Instagram",
      icon: "📸",
      url: "https://instagram.com/lucca.campello",
      username: "@lucca.campello",
      color: "#ec4899"
    },
    {
      name: "Discord",
      icon: "💬",
      url: "https://discord.gg/lcampello",
      username: "lcampello",
      color: "#5865f2"
    },
    {
      name: "WhatsApp",
      icon: "📱",
      url: `https://wa.me/5511993495934`,
      username: "+55 (11) 99349-5934",
      color: "#25D366"
    }
  ]

  const handleCopy = (text: string, type: string) => {
    navigator.clipboard.writeText(text)
    setCopied(type)
    setTimeout(() => setCopied(null), 2000)
  }

  return (
    <section className={styles.section} id="contato">
      <div className={styles.container}>
        
        <h2 className={styles.title}>
          <span className={styles.titleGlow}>Contato</span>
        </h2>

        <div className={styles.content}>
          
          {/* Cards de contato rápido */}
          <div className={styles.quickContact}>
            <div className={styles.contactCard}>
              <div className={styles.contactIcon}>📧</div>
              <div className={styles.contactInfo}>
                <span className={styles.contactLabel}>Email</span>
                <span className={styles.contactValue}>{contactInfo.email}</span>
              </div>
              <button 
                className={styles.copyButton}
                onClick={() => handleCopy(contactInfo.email, 'email')}
              >
                {copied === 'email' ? '✓' : '📋'}
              </button>
            </div>

            <div className={styles.contactCard}>
              <div className={styles.contactIcon}>📱</div>
              <div className={styles.contactInfo}>
                <span className={styles.contactLabel}>Telefone</span>
                <span className={styles.contactValue}>{contactInfo.phone}</span>
              </div>
              <button 
                className={styles.copyButton}
                onClick={() => handleCopy(contactInfo.phone, 'phone')}
              >
                {copied === 'phone' ? '✓' : '📋'}
              </button>
            </div>

            <div className={styles.contactCard}>
              <div className={styles.contactIcon}>📍</div>
              <div className={styles.contactInfo}>
                <span className={styles.contactLabel}>Localização</span>
                <span className={styles.contactValue}>{contactInfo.location}</span>
              </div>
              <button 
                className={styles.copyButton}
                onClick={() => handleCopy(contactInfo.location, 'location')}
              >
                {copied === 'location' ? '✓' : '📋'}
              </button>
            </div>
          </div>

          {/* Redes sociais em mosaico */}
          <div className={styles.socialSection}>
            <h3 className={styles.subtitle}>Redes Sociais</h3>
            <div className={styles.socialGrid}>
              {socialLinks.map((social, index) => (
                <a 
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.socialCard}
                  style={{ '--hover-color': social.color } as React.CSSProperties}
                >
                  <span className={styles.socialIcon}>{social.icon}</span>
                  <div className={styles.socialInfo}>
                    <strong>{social.name}</strong>
                    <span>{social.username}</span>
                  </div>
                  <span className={styles.socialArrow}>↗</span>
                </a>
              ))}
            </div>
          </div>

          {/* Mensagem direta (opcional) */}
          <div className={styles.directMessage}>
            <p className={styles.messageText}>
              📬 Prefere me mandar uma mensagem direta?
            </p>
            <a 
              href="mailto:luccacampello21@gmail.com" 
              className={styles.messageButton}
            >
              Enviar Email
            </a>
          </div>
        </div>

        {/* Toast de copiado */}
        {copied && (
          <div className={styles.toast}>
            Copiado! 📋
          </div>
        )}
      </div>
    </section>
  )
}