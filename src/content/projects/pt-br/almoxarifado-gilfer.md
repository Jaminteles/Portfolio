---
title: Almoxarifado Gilfer
summary: Sistema web de gestão de almoxarifado em uso na Construtora Gil Ferreira — controla o estoque de materiais de 3 almoxarifados, da compra à saída, com 60 usuários.
category: web
featured: true
order: 1
status: em-producao
year: '2026'
role: Desenvolvedor full-stack (projeto solo)
stack:
  - React 19
  - Material UI
  - Node.js
  - Express
  - Sequelize
  - MySQL
  - JWT
  - Recharts
proprietary: true
cover: ../../../assets/projects/almoxarifado-gilfer/capa.png
coverAlt: Painel inicial do sistema com total de itens em estoque, alertas de estoque baixo, ações rápidas e gráfico de entradas e saídas dos últimos 7 dias
gallery:
  - src: ../../../assets/projects/almoxarifado-gilfer/saidas.png
    alt: Tela de saídas com filtros por data, tipo, destino, responsável e produto, e a lista de materiais retirados por consumo
    caption: Saídas por consumo ou transferência, com filtros. Nomes e obras borrados para preservar dados reais.
  - src: ../../../assets/projects/almoxarifado-gilfer/servicos.png
    alt: Tela de serviços com produtos, valores totais e filtros por nota fiscal, fornecedor e aplicação
    caption: Registro de serviços com nota fiscal e valores. Fornecedores e responsáveis borrados.
---

## Problema

A Construtora Gil Ferreira mantém materiais de construção em vários almoxarifados, um em cada canteiro de obra. Todo o controle era feito em **planilhas**.

Planilha funciona enquanto uma pessoa só mexe nela. Com várias obras e várias pessoas registrando entradas e saídas, os problemas clássicos aparecem: cópias diferentes do mesmo arquivo, saldo que não bate com o que está na prateleira, nenhum registro de quem retirou o quê e dificuldade de saber, na hora de comprar, se o material já existe em outra obra.

## Solução

Um sistema web full-stack que cobre todo o ciclo do material:

- **Compras** — pedido ao fornecedor com itens e nota fiscal; ao ser recebido, dá entrada automática no estoque.
- **Saídas** — por **consumo** (equipe usou na obra) ou **transferência** entre almoxarifados, com baixa automática.
- **Cadastros** — fornecedores (CNPJ, contatos, endereços), funcionários e credenciais, produtos com estoque mínimo/máximo, almoxarifados e equipes.
- **Painel** — saldo por canteiro e indicadores com gráficos.

## Decisões técnicas

- **Saldo nunca negativo, garantido no back-end.** Toda movimentação roda dentro de uma transação do banco e passa por validações de regra de negócio, e não só na interface. Com várias pessoas registrando saídas ao mesmo tempo, a consistência precisa estar no servidor.
- **Arquitetura em camadas: Routes → Controllers → Services → Repositories.** As regras de negócio ficam isoladas nos *services*, o que facilita testar e evoluir sem mexer em rotas nem em SQL.
- **Autenticação com JWT e senhas com bcrypt**, com cada funcionário tendo sua própria credencial para que as movimentações fiquem rastreáveis.
- **Material UI** para entregar rápido uma interface consistente e responsiva, usada por pessoas que não são da área de TI.
- **Hospedagem na HostGator**, com o sistema acessível pelo navegador em qualquer obra, sem instalar nada nas máquinas.

## Resultado

- Em **produção desde julho de 2026**, substituindo as planilhas.
- **3 almoxarifados** controlados em um só lugar.
- **60 usuários** registrando movimentações com login próprio.
- Controle de estoque centralizado e rastreável: o saldo de cada canteiro fica disponível em tempo real, com histórico de quem movimentou cada item.
