import { DemoBrowserFrame } from '@/components/shared/DemoBrowserFrame'

export function WhatsAppPreview() {
  return (
    <DemoBrowserFrame label="Atendimento por WhatsApp" className="chat-preview">
      <header className="chat-preview__header">
        <span className="chat-preview__avatar">A</span>
        <span><b>Atendimento</b><small>online agora</small></span>
      </header>
      <div className="chat-preview__body">
        <p className="chat-bubble chat-bubble--received">Olá! Como posso ajudar?<time>09:41</time></p>
        <p className="chat-bubble chat-bubble--sent">Quero consultar um horário.<time>09:42 ✓✓</time></p>
        <p className="chat-bubble chat-bubble--received">Claro. Qual dia funciona melhor para você?<time>09:42</time></p>
      </div>
      <div className="chat-preview__input"><span>Digite uma mensagem</span><b>➤</b></div>
    </DemoBrowserFrame>
  )
}
