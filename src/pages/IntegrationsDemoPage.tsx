import { useState } from 'react'
import { ArrowRight, Check, Copy, Link2, MessageSquare, Rows3, Users } from 'lucide-react'
import { DemoLayout } from '@/components/layout/DemoLayout'

type FlowMode = 'before' | 'after'

export function IntegrationsDemoPage() {
  const [mode, setMode] = useState<FlowMode>('before')

  return (
    <DemoLayout
      eyebrow="Demo 06 · Integrações"
      title="Processo conectado"
      description="Conectar ferramentas reduz repetições e faz a informação chegar ao lugar certo com menos etapas manuais."
    >
      <div className="integration-demo-toolbar">
        <div className="demo-product-title"><Link2 size={22} /><div><b>Solicitação até a equipe</b><span>Compare duas formas de executar a mesma rotina</span></div></div>
        <div className="flow-toggle">
          <button className={mode === 'before' ? 'is-active' : ''} type="button" onClick={() => setMode('before')}>Ver processo separado</button>
          <button className={mode === 'after' ? 'is-active' : ''} type="button" onClick={() => setMode('after')}>Ver fluxo conectado</button>
        </div>
      </div>
      {mode === 'before' ? (
        <section className="process-comparison is-before" aria-label="Processo separado">
          <header><p className="eyebrow">Antes</p><h2>Informações copiadas manualmente</h2><p>A mesma solicitação passa por ferramentas separadas e depende de conferências da equipe.</p></header>
          <div className="process-flow">
            <article><MessageSquare /><small>01</small><b>Atendimento</b><span>mensagem recebida</span></article>
            <span className="process-rework"><Copy size={16} /> copiar dados</span>
            <article><Rows3 /><small>02</small><b>Planilha</b><span>registro manual</span></article>
            <span className="process-rework"><Copy size={16} /> avisar equipe</span>
            <article><Users /><small>03</small><b>Equipe</b><span>nova conferência</span></article>
          </div>
          <p className="process-result">Duas etapas de repetição e mais pontos para acompanhar.</p>
        </section>
      ) : (
        <section className="process-comparison is-after" aria-label="Fluxo conectado">
          <header><p className="eyebrow">Depois</p><h2>Registro criado automaticamente</h2><p>A solicitação entra uma vez e alimenta o acompanhamento da equipe.</p></header>
          <div className="process-flow">
            <article><MessageSquare /><small>01</small><b>Atendimento</b><span>dados organizados</span></article>
            <ArrowRight className="process-arrow" />
            <article className="is-core"><Link2 /><small>02</small><b>Automação</b><span>cria e direciona</span></article>
            <ArrowRight className="process-arrow" />
            <article><Users /><small>03</small><b>Equipe</b><span>recebe o contexto</span></article>
          </div>
          <p className="process-result"><Check size={16} /> Uma sequência visível, com menos tarefas repetidas.</p>
        </section>
      )}
    </DemoLayout>
  )
}
