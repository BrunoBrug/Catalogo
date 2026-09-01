# Catálogo de Soluções — Bruno Brugnerotto

Catálogo interativo de soluções digitais para apresentar, de forma visual, possibilidades de sites, sistemas, automações, atendimento e uso de dados. Os exemplos são genéricos, usam dados fictícios e podem ser adaptados à realidade de cada negócio.

## Tecnologias

- React, TypeScript e Vite
- React Router
- Motion
- Recharts com componente de chart derivado do Watermelon UI
- Vitest e Testing Library

## Executar localmente

```bash
npm install
npm run dev
```

## Verificações

```bash
npm run test:run
npm run lint
npm run build
```

## Contato

Por padrão, os botões de contato apontam para o portfólio. Para usar um endereço de WhatsApp na publicação, configure a variável abaixo na Vercel:

```text
VITE_WHATSAPP_URL=https://wa.me/55DDDNUMERO
```

## Publicação na Vercel

Importe este repositório na Vercel, mantenha o framework Vite detectado automaticamente e adicione `VITE_WHATSAPP_URL` se desejar. O arquivo `vercel.json` já garante o fallback das rotas da aplicação.
