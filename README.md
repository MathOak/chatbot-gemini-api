# Lume — recomendações literárias por chat

Aplicação full stack em português que conversa com o leitor e recomenda livros de um catálogo de demonstração. O frontend usa Angular Standalone, Signals e Socket.IO; o backend usa NestJS, REST, Socket.IO e Google Gemini.

## Requisitos

- Node.js 20+ (recomendado: versão LTS compatível com NestJS 11 e Angular CLI)
- npm
- Chave da API Gemini para respostas com IA. Sem chave, o backend funciona em modo de demonstração local.

## Configuração

1. Backend: `cd backend`, copie `.env.example` para `.env` e configure `GEMINI_API_KEY`. `PORT=3000` e `FRONTEND_ORIGIN=http://localhost:4200` já estão documentados.
2. Instale dependências em cada projeto, conforme os passos abaixo.

## Executar em desenvolvimento

Abra dois terminais na raiz do repositório:

```powershell
cd backend
npm install
npm run start:dev
```

```powershell
cd frontend
npm install
npm start
```

Acesse http://localhost:4200. O backend disponibiliza `GET /health`, `GET /books`, `POST /chat` e o evento Socket.IO `chat:message` (responde em `chat:reply` ou `chat:error`).

> No Windows com política que bloqueie `npm.ps1`, use `npm.cmd` em vez de `npm`.

## Verificação

```powershell
cd backend; npm run build
cd ../frontend; npm run build
```

## Estrutura

- `backend/src/gemini`: integração Gemini, orientação de bibliotecária e modo de demonstração.
- `backend/src/chat`: gateway Socket.IO, endpoint REST e DTOs validados.
- `backend/src/catalog.ts`: catálogo inicial tipado usado nas recomendações.
- `frontend/src/app/components`: container do chat, mensagens, entrada e cards de livros.
- `frontend/src/app/services/chat.service.ts`: mensagens e estado reativo com Angular Signals.
