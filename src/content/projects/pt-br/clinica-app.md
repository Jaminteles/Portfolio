---
title: ClínicaApp
summary: Aplicativo desktop de agendamento de consultas médicas em Java/JavaFX, com agendas sempre ordenadas por horário, bloqueio de conflitos, cancelamento e reagendamento. Trabalho de Estruturas de Dados no IFBA.
category: academic
featured: true
order: 6
status: concluido
year: '2025'
role: Desenvolvi todo o código (equipe de 6 pessoas)
stack:
  - Java
  - JavaFX
  - FXML
  - Maven
  - JUnit 5
  - TestFX
proprietary: false
repo: https://github.com/Jaminteles/ClinicaAPP
cover: ../../../assets/projects/clinica-app/capa.png
coverAlt: Três janelas do ClínicaApp em cascata — a tela de login, a de agendamento de consulta e a área do médico com a agenda de disponibilidades
gallery:
  - src: ../../../assets/projects/clinica-app/fluxo-atividades.png
    alt: Diagrama de atividades com os fluxos de cadastro, área do paciente e área do médico
    caption: Fluxo de navegação e das principais operações de paciente e médico.
  - src: ../../../assets/projects/clinica-app/diagrama-classes.png
    alt: Diagrama de classes UML com AppContext, ClinicaController, SistemaAgendamento, Paciente, Medico e Consulta
    caption: Modelo de classes, com o SistemaAgendamento no centro.
  - src: ../../../assets/projects/clinica-app/agendar-consulta.png
    alt: Janela de agendamento com seleção de especialidade e lista de consultas disponíveis
    caption: O paciente escolhe a especialidade e vê só os horários livres.
  - src: ../../../assets/projects/clinica-app/minhas-consultas.png
    alt: Janela Minhas Consultas com tabela de data, hora, status e motivo e botões para cancelar ou apagar consulta
    caption: Consultas do paciente, com cancelamento.
---

## Problema

Muitas clínicas pequenas ainda agendam consultas por telefone, agenda de papel ou planilha. Isso gera horários marcados em duplicidade, demora para confirmar e muitas faltas sem aviso (*no-show*), que deixam médicos ociosos.

O trabalho, da disciplina de Estruturas de Dados do IFBA, pedia um sistema de agendamento que resolvesse três pontos: **evitar conflitos de horário**, **ter bom desempenho** mesmo com muitas consultas e **manter o histórico** do que aconteceu com cada agenda.

## Solução

Um aplicativo desktop com duas áreas:

- **Médico** — cadastra os horários em que está disponível, vê a agenda ordenada, acompanha as consultas marcadas e pode cancelá-las informando o motivo.
- **Paciente** — escolhe uma especialidade, vê apenas os horários realmente livres, agenda, acompanha as próprias consultas e pode cancelar ou reagendar.

O acesso é feito pelo ID do usuário, e o sistema abre a área certa dependendo se é médico ou paciente.

## Decisões técnicas

- **Estrutura certa para cada operação.** Pacientes e médicos ficam em `HashMap`, com busca por ID em O(1). A agenda de cada médico é um `TreeMap` indexado por data e hora, então os horários já saem ordenados e a busca por um horário específico é O(log n).
- **Conflito impossível por construção.** Cada horário disponível já existe na agenda como uma consulta com status `DISPONIVEL`. Agendar é só ocupar esse horário, depois de verificar se ele continua livre, então não há como marcar duas pessoas no mesmo horário nem fora do expediente do médico.
- **MVC com JavaFX + FXML.** As telas são arquivos FXML separados da lógica, e o `SistemaAgendamento` concentra todas as regras de negócio, compartilhado entre as telas por um `AppContext`.
- **Escopo focado.** Os dados ficam em memória, sem banco de dados: a disciplina avaliava as estruturas de dados, e persistência ficou como evolução futura.
- **Testes automatizados** do modelo com JUnit 5 e da interface com TestFX.

## Resultado

- Aplicativo entregue e funcionando, com os fluxos completos de médico e paciente.
- Todo o código escrito por mim, numa equipe de 6 pessoas.
- Projeto documentado com diagramas de classes e de atividades e um relatório técnico.
