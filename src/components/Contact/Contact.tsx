// components/Contact/Contact.tsx
import { useState, type ComponentType } from 'react'
import {
  Mail,
  Phone,
  MapPin,
  GitBranch,
  Link2,
  Camera,
  MessageCircle,
  Smartphone,
  Check,
  Copy,
  ArrowUpRight,
  Send
} from 'lucide-react'
import styles from './Contact.module.css'

type ContactItem = {
  id: string
  label: string
  value: string
  icon: ComponentType<{ className?: string }>
}

type SocialItem = {
  name: string
  url: string
  username: string
  color: string
  icon: ComponentType<{ className?: string }>
}

export default function Contact() {
  const [copied, setCopied] = useState<string | null>(null)

  const contactInfo: ContactItem[] = [
    {
      id: 'email',
      label: 'Email',
      value: 'luccacampello21@gmail.com',
      icon: Mail
    },
    {
      id: 'phone',
      label: 'Telefone',
      value: '+55 (11) 99349-5934',
      icon: Phone
    },
    {
      id: 'location',
      label: 'Localização',
      value: 'Tatuapé, São Paulo, SP - Brasil',
      icon: MapPin
    }
  ]

  const socialLinks: SocialItem[] = [
    {
      name: 'GitHub',
      url: 'https://github.com/campellodevs',
      username: 'campellodevs',
      color: '#a78bfa',
      icon: GitBranch
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/lucca-campello-r-santos-7a4b83344/',
      username: 'in/luccacampello',
      color: '#3b82f6',
      icon: Link2
    },
    {
      name: 'Instagram',
      url: 'https://instagram.com/lucca.campello',
      username: '@lucca.campello',
      color: '#ec4899',
      icon: Camera
    },
    {
      name: 'Discord',
      url: 'https://discord.gg/lcampello',
      username: 'lcampello',
      color: '#5865f2',
      icon: MessageCircle
    },
    {
      name: 'WhatsApp',
      url: 'https://wa.me/5511993495934',
      username: '+55 (11) 99349-5934',
      color: '#25D366',
      icon: Smartphone
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
            {contactInfo.map((item) => {
              const Icon = item.icon
              const isCopied = copied === item.id
              return (
                <div key={item.id} className={styles.contactCard}>
                  <div className={styles.contactIcon}>
                    <Icon className={styles.icon} />
                  </div>
                  <div className={styles.contactInfo}>
                    <span className={styles.contactLabel}>{item.label}</span>
                    <span className={styles.contactValue}>{item.value}</span>
                  </div>
                  <button 
                    className={styles.copyButton}
                    onClick={() => handleCopy(item.value, item.id)}
                    type="button"
                  >
                    {isCopied ? <Check className={styles.icon} /> : <Copy className={styles.icon} />}
                  </button>
                </div>
              )
            })}
          </div>

          {/* Redes sociais em mosaico */}
          <div className={styles.socialSection}>
            <h3 className={styles.subtitle}>Redes Sociais</h3>
            <div className={styles.socialGrid}>
              {socialLinks.map((social) => {
                const Icon = social.icon
                return (
                  <a 
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.socialCard}
                    style={{ '--hover-color': social.color } as React.CSSProperties}
                  >
                    <Icon className={styles.socialIcon} />
                    <div className={styles.socialInfo}>
                      <strong>{social.name}</strong>
                      <span>{social.username}</span>
                    </div>
                    <ArrowUpRight className={styles.socialArrow} />
                  </a>
                )
              })}
            </div>
          </div>

          <section
            className={styles.directMessage}
            aria-labelledby="direct-message-title"
          >
            <div className={styles.directContent}>
              <h3 id="direct-message-title" className={styles.directTitle}>
                <MessageCircle className={styles.inlineIcon} />
                Preferencialmente por e‑mail
              </h3>
              <p className={styles.directSubtitle}>
                Se preferir, pode me enviar uma mensagem direta.
              </p>
            </div>
            <div className={styles.directActions}>
              <a 
                href="mailto:luccacampello21@gmail.com" 
                className={styles.messageButton}
              >
                <Send className={styles.inlineIcon} /> Enviar e-mail
              </a>
            </div>
          </section>
        </div>

        {/* Toast de copiado */}
        {copied && (
          <div className={styles.toast}>
            Copiado para a área de transferência
          </div>
        )}
      </div>
    </section>
  )
}
