import { ArrowUpRight, MessageCircle } from 'lucide-react'
import { getContactUrl } from '@/lib/contact'

export function ContactCTA({ compact = false }: { compact?: boolean }) {
  const contactUrl = getContactUrl(import.meta.env.VITE_WHATSAPP_URL)

  return (
    <section className={`contact-cta${compact ? ' is-compact' : ''}`} id={compact ? undefined : 'contato'}>
      <div>
        <p className="eyebrow">Próximo passo</p>
        <h2>Tem uma ideia ou um problema para resolver?</h2>
        <p>Conte brevemente o que acontece hoje. A solução pode partir deste catálogo ou assumir outro formato.</p>
      </div>
      <a href={contactUrl} target="_blank" rel="noreferrer">
        <MessageCircle size={19} aria-hidden="true" /> Conversar sobre uma solução <ArrowUpRight size={17} aria-hidden="true" />
        <small>abre em uma nova aba</small>
      </a>
    </section>
  )
}
