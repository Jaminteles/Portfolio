---
title: Wisely — Gestão de Biblioteca
summary: Sistema full-stack de gerenciamento de biblioteca, com empréstimos, multas automáticas, fila de reservas, notificações por e-mail e relatórios. API em Spring Boot, interface em React e publicado na web.
category: academic
featured: true
order: 5
status: concluido
year: '2025'
role: Desenvolvimento em equipe · disciplina de Estruturas de Dados (IFBA)
stack:
  - Java 17
  - Spring Boot
  - Spring Data JPA
  - PostgreSQL
  - React 19
  - Vite
  - Tailwind CSS
  - shadcn/ui
proprietary: false
repo: https://github.com/Jaminteles/library-management
demo: https://wisely-library-management.vercel.app
cover: ../../../assets/projects/wisely-biblioteca/capa.png
coverAlt: Tela inicial do Wisely com atalhos para Acervo, Empréstimos, Reservas e Atrasos e Multas
---

## Problema

Bibliotecas escolares costumam controlar o acervo e os empréstimos em cadernos ou planilhas. Com isso fica difícil saber quais livros estão em atraso, cobrar multas de forma justa e organizar quem está esperando por um livro que acabou de ser devolvido.

O trabalho, da disciplina de Estruturas de Dados do IFBA, pedia um sistema que resolvesse esse problema aplicando estruturas de dados na prática.

## Solução

Um sistema web completo, publicado e acessível pelo navegador:

- **Acervo** — cadastro, edição e busca de livros por ISBN.
- **Empréstimos** — empréstimo, devolução e **cálculo automático de multa** por atraso, com opção de marcar a multa como paga ou perdoada.
- **Reservas** — **fila ordenada de até 5 posições por livro**; quando alguém cancela ou retira o livro, a fila anda sozinha.
- **Alunos** — cadastro por matrícula e histórico de atividades.
- **Notificações por e-mail** — alertas de atraso e de reserva disponível.
- **Relatórios** — disponibilidade do acervo, métricas de alunos, estatísticas de empréstimos e análise de reservas.
- **Configurações** — prazo de devolução, limite de empréstimos por aluno e valor da multa ajustáveis pela própria biblioteca.

## Decisões técnicas

- **Estruturas de dados implementadas à mão.** O projeto tem sua própria **lista duplamente encadeada** genérica (`LinkedList<T>` com `DoubleNode`), com capacidade e exceções de *overflow*/*underflow*, em vez de depender só das coleções prontas do Java.
- **Fila de reservas consistente.** Criar, cancelar e efetivar uma reserva roda em transação (`@Transactional`): a posição de cada aluno é recalculada no mesmo passo, sem buracos nem posições repetidas na fila.
- **API REST em camadas** (controller → service → repository) com **DTOs** separando o que a API expõe das entidades JPA.
- **Regras configuráveis no banco**, e não fixas no código, para que cada biblioteca ajuste prazo, limite e multa sem precisar de um novo deploy.
- **Front em React 19 + Vite + Tailwind + shadcn/ui**, publicado na Vercel, com o PostgreSQL na nuvem.

## Resultado

- Sistema **publicado e funcionando**: [wisely-library-management.vercel.app](https://wisely-library-management.vercel.app).
- Cobre o ciclo completo da biblioteca, do cadastro do livro ao relatório.
- Estruturas de dados da disciplina aplicadas num sistema de verdade, com banco, API e interface.
