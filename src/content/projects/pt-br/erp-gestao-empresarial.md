---
title: Sistema Integrado de Gestão Empresarial e Financeira (ERP)
summary: ERP com 18 módulos e 131 requisitos funcionais — do estoque à contabilidade —, com banco PostgreSQL modelado do zero, isolamento multiempresa e trilha de auditoria.
category: web
featured: true
order: 3
status: concluido
year: '2026'
role: Projeto pessoal, solo — modelagem, back-end e front-end
stack:
  - PostgreSQL
  - NestJS
  - TypeScript
  - Prisma
  - Angular 21
  - PrimeNG
  - Docker
  - Vitest
proprietary: false
repo: https://github.com/Jaminteles/SGE
cover: ../../../assets/projects/erp-gestao-empresarial/capa.png
coverAlt: Tela inicial do ERP no tema escuro com contas a pagar e a receber, saldo em caixa, gráficos de fluxo previsto e inadimplência e lista de pendências
---

## Problema

Projeto pessoal, feito sozinho do levantamento de requisitos à interface. A motivação: pequenas e médias empresas costumam gerir compras, estoque, financeiro e contabilidade em ferramentas separadas, o que gera redigitação, números que não fecham entre setores e pouca rastreabilidade de quem alterou o quê. O desafio foi projetar um sistema único que cobrisse esse ciclo **sem abrir mão da consistência dos dados**.


## Solução

Um ERP web com **18 módulos** e **131 requisitos funcionais** (RF-001 a RF-131), especificados numa ERS e entregues em **32 sprints**:

- **Núcleo, RH, parceiros e estoque** — cadastros, histórico funcional, razão de estoque com custo médio ponderado.
- **Compras e documentos fiscais** — pedidos, recebimentos, divergências e processamento de notas.
- **Financeiro, bancos e conciliação** — títulos e parcelas, ordens de pagamento, conciliação por regras.
- **Contabilidade e fiscal** — plano de contas, partida dobrada, balancete, DRE e apuração por competência.
- **Fluxo de caixa, OCR, notificações, relatórios e integrações.**

A interface tem **74 telas** desenhadas no Figma e implementadas em Angular + PrimeNG, com tema claro e escuro.

## Decisões técnicas

- **Banco modelado do zero, e ele é a fonte da verdade.** O modelo físico PostgreSQL (schema `gestao`) concentra as regras críticas: domínios, *enums*, *constraints* e *triggers*. Por exemplo, saldo de estoque nunca negativo, parcelas que sempre somam o título e partida dobrada sempre balanceada.
- **Multiempresa com Row-Level Security (RLS).** O isolamento entre empresas é garantido pelo próprio PostgreSQL, e não apenas por filtros na API: uma consulta esquecida não vaza dados.
- **Tabelas *append-only* e trilha de auditoria por *triggers*** em movimentos de estoque, baixas financeiras e lançamentos contábeis: corrige-se com estorno, nunca apagando.
- **Máquinas de estado no banco** para documentos fiscais, ordens de pagamento e leitura por OCR, impedindo transições inválidas.
- **NestJS + Prisma** no back-end, com a API documentada em Swagger (`/api/docs`).
- **Qualidade contínua:** testes E2E dos fluxos críticos, testes de isolamento multiempresa, 55 arquivos de teste no front (Vitest), auditoria de acessibilidade e *pipeline* de CI.

## Resultado

- **18 módulos e 131 requisitos** implementados, com back-end e interface concluídos.
- Manual do usuário, roteiro de homologação (UAT) e *checklist* de *go-live* documentados.
