# ESPECIFICAÇÃO TÉCNICA.md

Version: 1.1 (Draft)

## Objetivo
Este documento define as normas obrigatórias para o desenvolvimento do projeto. Em caso de conflito entre sugestões e este documento, esta especificação possui prioridade.

## Filosofia
- Priorizar simplicidade.
- Priorizar legibilidade.
- Evitar superengenharia.
- Resolver problemas reais.
- Definir como o código deve ser escrito e onde ele deve estar.

## Tecnologias
Frontend: React, TypeScript, Vite, Tailwind CSS
Backend: ASP.NET Core, Entity Framework Core
Banco: PostgreSQL

# Estrutura Oficial

## Frontend

```text
frontend/
├── public/
└── src/
    ├── assets/
    ├── components/
    │   ├── common/
    │   ├── layout/
    │   ├── sections/
    │   └── ui/
    ├── pages/
    ├── layouts/
    ├── hooks/
    ├── contexts/
    ├── services/
    ├── api/
    ├── router/
    ├── constants/
    ├── types/
    ├── utils/
    ├── styles/
    └── config/
```

## Backend

```text
backend/
├── Api/
├── Application/
├── Domain/
├── Infrastructure/
├── Persistence/
├── Controllers/
├── Services/
├── DTOs/
├── Entities/
├── Repositories/
├── Configurations/
└── Migrations/
```

**Norma:** novas pastas somente poderão ser criadas quando a estrutura existente não atender ao projeto.

# Convenções de Nomenclatura

- Pastas: lowercase (`components`, `services`, `hooks`).
- Componentes React: PascalCase (`ProjectCard.tsx`).
- Hooks: prefixo `use` (`useProjects.ts`).
- Services (TS): sufixo `.service.ts`.
- Types: sufixo `.types.ts`.
- Controllers: sufixo `Controller`.
- Services (.NET): sufixo `Service`.
- Repositories: sufixo `Repository`.
- DTOs: `Create<Project>Request`, `Update<Project>Request`, `<Project>Response`.
- Entidades: singular.
- Tabelas: singular.

# File Placement Rules

- FR-001 Componentes reutilizáveis → `components/`
- FR-002 Páginas → `pages/`
- FR-003 Comunicação HTTP → `services/`
- FR-004 Funções genéricas → `utils/`
- FR-005 Estado global → `contexts/`
- FR-006 Hooks → `hooks/`
- FR-007 Constantes → `constants/`
- FR-008 Tipos → `types/`
- FR-009 Não criar novas pastas sem necessidade.

# Restrições

Não utilizar: Redux, MobX, GraphQL, Microservices, CQRS, MediatR, RabbitMQ, Redis, SSR, autenticação de usuários, perfis de acesso ou CRUDs administrativos complexos.

# Regras Gerais

- GE-001 Código simples.
- GE-002 Nomes descritivos.
- GE-003 Evitar duplicação.
- GE-004 Um arquivo, uma responsabilidade.
- GE-005 Remover código morto.
- GE-006 Preferir código autoexplicativo.
- GE-007 Não deixar TODOs.
- GE-008 Reutilizar antes de duplicar.
- GE-009 Não adicionar dependências sem necessidade.
- GE-010 Não alterar arquitetura sem solicitação.
- GE-011 Não criar novas pastas sem necessidade.

# Front-end

- FE-001 Componentes possuem uma responsabilidade.
- FE-002 Componentes não fazem HTTP.
- FE-003 Componentes não possuem regra de negócio.
- FE-004 Pages compõem componentes.
- FE-005 Hooks concentram lógica reutilizável.
- FE-006 Services concentram HTTP.
- FE-007 Não usar any sem justificativa.
- FE-008 Props tipadas.
- FE-009 Evitar estado global desnecessário.
- FE-010 Componentes reutilizáveis.
- FE-011 Evitar componentes acima de 200 linhas.
- FE-012 Não misturar UI e lógica.

# Back-end

- Controllers apenas orquestram.
- Regra de negócio na Application.
- Banco apenas pela Persistence.
- DTOs obrigatórios.
- Não expor entidades.

# Banco

- Chave primária obrigatória.
- Integridade referencial.
- Sem duplicação.

# API

- Verbos HTTP corretos.
- Códigos HTTP corretos.
- REST.

# UI

- Interface limpa.
- Responsiva.
- Espaçamento consistente.

# Analytics

- Toda ação importante gera evento.
- Não armazenar dados pessoais.
- Dashboard apenas para visualização.

# Git

- Commits pequenos.
- Mensagens claras.
- Não commitar segredos.

# Regras para IA

- Seguir esta especificação acima de convenções próprias.
- Não alterar código fora do escopo.
- Não criar funcionalidades não solicitadas.
- Não alterar arquitetura sem autorização.
- Não instalar dependências desnecessárias.
- Reutilizar código existente.
- Não renomear arquivos sem necessidade.

# Checklist

- Estrutura respeitada.
- Nomenclatura respeitada.
- Sem duplicação.
- Sem código morto.
- Sem regra de negócio na UI.
- HTTP apenas em services.
- Apenas o escopo solicitado foi alterado.