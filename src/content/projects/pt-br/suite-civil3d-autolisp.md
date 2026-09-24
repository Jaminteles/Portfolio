---
title: Suite de automação para Civil 3D
summary: Conjunto de comandos AutoLISP que automatiza tarefas repetitivas de projeto de terraplenagem no AutoCAD Civil 3D — de cálculo de volumes a geração de greide e linha de rocha. Reduziu em 90% o tempo dessas tarefas.
category: civil3d
featured: true
order: 2
status: em-producao
role: Desenvolvedor (projeto solo)
stack:
  - AutoLISP
  - Visual LISP / ActiveX
  - AutoCAD Civil 3D
  - Geometria computacional
proprietary: true
metric:
  label: Tempo das tarefas automatizadas
  before: Processo manual
  after: −90% de tempo
cover: ../../../assets/projects/suite-civil3d-autolisp/capa.png
coverAlt: Projeto viário no Civil 3D com a pista, áreas de pavimento hachuradas, taludes de enrocamento e pontos topográficos
---

## Problema

No projeto de terraplenagem, boa parte do tempo da equipe técnica ia para tarefas **feitas à mão** no Civil 3D: medir áreas seção por seção, recortar malhas, redesenhar o greide em tangentes e traçar a linha de rocha. Além de lento, o processo manual abria espaço para erro humano em números que viram volume, custo e prazo de obra.

## Solução

Uma **suite de comandos AutoLISP** carregada direto no Civil 3D, que o projetista chama pela linha de comando como qualquer ferramenta nativa:

| Comando | O que faz |
| --- | --- |
| `AreaSecoes` | Calcula as áreas de corte e aterro de cada **seção transversal** e consolida os volumes de terraplenagem. |
| `CMALHA` | **Recorta a malha** (superfície/grade) pelo contorno de polilinhas selecionadas. |
| `TANGREIDE` | Converte o **greide suave** em trechos de **tangentes com PIVs**, prontos para o perfil de projeto. |
| `NROCHA` | Gera uma **nova linha de rocha** nas seções. |

## Decisões técnicas

- **AutoLISP em vez de um plugin .NET.** Roda em qualquer estação com Civil 3D, sem instalação, compilação nem permissão de administrador. Para uma construtora, a facilidade de distribuir pesou mais que a performance.
- **Geometria tratada no próprio desenho.** Os comandos leem polilinhas, seções e superfícies via Visual LISP/ActiveX e escrevem o resultado de volta como objetos do CAD, para que o projetista continue no fluxo de trabalho que já conhece.
- **Uma ferramenta por tarefa.** Cada comando resolve uma etapa bem definida do projeto, o que deixa a suite fácil de aprender e de evoluir comando a comando.

## Resultado

- **Redução de 90% no tempo** das tarefas automatizadas.
- Usada em **mais de 30 projetos** na Construtora Gil Ferreira.
- Tarefas repetitivas que dependiam de trabalho manual viraram um comando na linha de comando do Civil 3D.
