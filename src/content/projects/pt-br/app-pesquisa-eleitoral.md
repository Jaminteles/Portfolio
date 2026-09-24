---
title: App de pesquisa eleitoral
summary: Aplicativo aberto de pesquisa eleitoral anônima na Bahia, com funcionamento offline, apuração por município (código IBGE) e painel de resultados com exportação.
category: web
featured: true
order: 4
status: em-producao
year: '2026'
role: Desenvolvedor full-stack
stack:
  - React Native
  - Expo
  - React
  - TypeScript
  - NestJS
  - Prisma
  - PostgreSQL
  - Docker
proprietary: false
repo: https://github.com/Jaminteles/SPE
demo: https://spe.devjaminteles.workers.dev/download
cover: ../../../assets/projects/app-pesquisa-eleitoral/capa.png
coverAlt: Duas telas do aplicativo lado a lado — a lista de pesquisas criadas e a apuração por município com a cobertura da Bahia
gallery:
  - src: ../../../assets/projects/app-pesquisa-eleitoral/download.png
    alt: Página de download do aplicativo com versão, botão para baixar o APK, código SHA-256 para conferência e passo a passo de instalação no Android
    caption: Distribuição direta por APK, com hash SHA-256 publicado para conferir o arquivo antes de instalar.
---

## Problema

Pesquisas eleitorais de campo costumam ser feitas no papel ou em formulários genéricos: os dados chegam atrasados, com erro de digitação, e fica difícil apurar os resultados **por município** ou detectar respostas duplicadas. No interior da Bahia, soma-se outro obstáculo: **conexão instável** no momento da coleta.

## Solução

Uma plataforma com três partes:

- **Aplicativo de coleta (React Native + Expo)**, distribuído como APK. Qualquer pessoa pode responder, sem criar conta: escolhe o município pelo código IBGE e preenche o questionário mesmo sem internet. As respostas parciais ficam em SQLite local, e o reenvio é automático quando o sinal volta.
- **API (NestJS + Prisma + PostgreSQL)** com os perfis Administrador e Analista, formulários com cinco tipos de pergunta e trava de imutabilidade após a publicação.
- **Painel web (React + Vite)** com ranking por município, cobertura das 417 cidades da Bahia, cruzamento entre perguntas e exportação em CSV, XLSX e PDF.

## Decisões técnicas

- **Anônimo por construção (LGPD).** Nome, CPF, telefone e e-mail do respondente não são coletados, persistidos nem registrados em log. O controle de duplicidade usa apenas um *hash* irreversível do dispositivo.
- ***Offline-first* no app**, com SQLite local e fila de reenvio, porque a coleta acontece onde a internet falha.
- **Base oficial de municípios** sincronizada direto da API de localidades do IBGE.
- **Agregações pré-calculadas** (*views* materializadas) para o painel responder rápido mesmo com muitas respostas, e **marcação automática de suspeitas** de fraude para revisão manual.
- **Segurança por padrão:** toda rota nasce protegida, e uma rota pública exige marcação explícita (`@Publico()`). Em homologação, o nginx é o único serviço exposto e termina o TLS.

## Resultado

- **Em uso**: aberto para qualquer pessoa responder pelo aplicativo, com o [painel de resultados](https://spe.devjaminteles.workers.dev) publicado e o APK disponível na [página de download](https://spe.devjaminteles.workers.dev/download).
