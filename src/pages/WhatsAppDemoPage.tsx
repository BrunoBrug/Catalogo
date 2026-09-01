import { useState } from 'react'
import { MessageCircle, RotateCcw, Send } from 'lucide-react'
import { DemoLayout } from '@/components/layout/DemoLayout'
import { chatIntentLabels, type ChatIntent, type ChatMessage } from '@/data/demoData'

const initialMessages: ChatMessage[] = [
  { id: 'welcome', sender: 'business', text: 'Olá! Como podemos ajudar hoje?', time: '09:41' },
]

const replies: Record<ChatIntent, string> = {
  schedule: 'Ótimo. Vou mostrar os horários disponíveis para você escolher.',
  quote: 'Perfeito. Vou fazer algumas perguntas rápidas para preparar o orçamento.',
  human: 'Tudo bem. Já registrei seu pedido para a equipe continuar o atendimento.',
}

export function WhatsAppDemoPage() {
  const [intent, setIntent] = useState<ChatIntent | null>(null)
  const [messages, setMessages] = useState<ChatMessage[]>(initialMessages)

  function chooseIntent(nextIntent: ChatIntent) {
    setIntent(nextIntent)
    setMessages([
      ...initialMessages,
      { id: `customer-${nextIntent}`, sender: 'customer', text: chatIntentLabels[nextIntent], time: '09:42' },
      { id: `business-${nextIntent}`, sender: 'business', text: replies[nextIntent], time: '09:42' },
    ])
  }

  function reset() {
    setIntent(null)
    setMessages(initialMessages)
  }

  const summary = (
    <>
      <p className="eyebrow">Resumo do atendimento</p>
      <h2>{intent ? 'Solicitação identificada' : 'Aguardando resposta'}</h2>
      <div className="chat-summary">
        <span>{`Interesse: ${intent ? chatIntentLabels[intent] : 'Não informado'}`}</span>
        <span>Origem: WhatsApp</span>
        <span>{`Próxima etapa: ${intent === 'human' ? 'Equipe humana' : intent ? 'Continuar fluxo' : 'Selecionar opção'}`}</span>
      </div>
      {intent ? <button className="secondary-button" type="button" onClick={reset}><RotateCcw size={15} /> Reiniciar conversa</button> : null}
    </>
  )

  return (
    <DemoLayout
      eyebrow="Demo 02 · Atendimento"
      title="Conversa guiada"
      description="Respostas rápidas organizam a intenção do cliente e deixam a equipe assumir quando realmente é necessário."
      aside={summary}
    >
      <div className="phone-chat">
        <header className="phone-chat__header">
          <span className="phone-chat__avatar"><MessageCircle size={19} /></span>
          <span><b>Atendimento</b><small>online agora</small></span>
        </header>
        <div className="phone-chat__messages" aria-live="polite">
          {messages.map((message) => (
            <p key={message.id} className={`phone-chat__bubble is-${message.sender}`}>
              {message.text}<time>{message.time}{message.sender === 'customer' ? ' ✓✓' : ''}</time>
            </p>
          ))}
        </div>
        {!intent ? (
          <div className="phone-chat__choices">
            <button type="button" onClick={() => chooseIntent('schedule')}>Consultar horários</button>
            <button type="button" onClick={() => chooseIntent('quote')}>Pedir orçamento</button>
            <button type="button" onClick={() => chooseIntent('human')}>Falar com a equipe</button>
          </div>
        ) : null}
        <div className="phone-chat__composer">
          <span>Digite uma mensagem</span>
          <button type="button" disabled aria-label="Enviar mensagem"><Send size={16} /></button>
        </div>
      </div>
    </DemoLayout>
  )
}
