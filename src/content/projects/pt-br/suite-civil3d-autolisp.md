---
title: Suite de automação para Civil 3D
summary: Ferramentas próprias para o AutoCAD Civil 3D — comandos AutoLISP e um plugin .NET em C# — que automatizam tarefas repetitivas de topografia e projeto, do levantamento de campo à plotagem das seções. Reduziu em 90% o tempo dessas tarefas.
category: civil3d
featured: true
order: 2
status: em-producao
role: Desenvolvedor (projeto solo)
stack:
  - AutoLISP
  - Visual LISP / ActiveX
  - C# / .NET Framework
  - Civil 3D .NET API
  - AutoCAD Civil 3D
proprietary: true
metric:
  label: Tempo das tarefas automatizadas
  before: Processo manual
  after: −90% de tempo
cover: ../../../assets/projects/suite-civil3d-autolisp/capa.png
coverAlt: Projeto viário no Civil 3D com a pista, áreas de pavimento hachuradas, taludes de enrocamento e pontos topográficos
---

## Problema

No dia a dia de projeto, boa parte do tempo da equipe técnica ia para tarefas **feitas à mão** no Civil 3D: ligar, um a um, os pontos do levantamento de campo para desenhar os acessos, anotar e tabelar seção por seção, redesenhar o greide em tangentes, recortar malhas e ajustar individualmente a faixa de cotas de cada seção antes de plotar. Além de lento, esse trabalho repetitivo abria espaço para erro humano em desenhos que viram quantitativo, custo e prazo de obra.

## Solução

Uma **suite de ferramentas** carregada direto no Civil 3D, que o projetista chama pela linha de comando como qualquer comando nativo:

| Comando | O que faz |
| --- | --- |
| `PONTOS_ACESSO_LV` | Desenha os **acessos a partir dos pontos do levantamento**: liga os pontos de eixo e de bordo esquerdo e direito em polilinhas 3D, na ordem do caminhamento. |
| `HTxt` (Annotate) | **Anota as seções transversais**: identifica os hatches de aterro e corte pelo layer, escreve os valores no desenho e exporta tudo por estaca para um TXT pronto para planilha. |
| `TANGREIDE` | Converte o **greide suave** em trechos de **tangentes com PIVs**, prontos para o perfil de projeto. |
| `CMALHA` | **Recorta a malha** (superfície/grade) pelo contorno de polilinhas selecionadas. |
| `SVFIT` (.NET) | **Prepara as seções para plotagem**: ajusta de uma vez a faixa de cotas de todas as *Section Views* selecionadas, com folga, arredondamento e altura mínima. Acompanha `SVAUTO` e `SVINFO`. |

## Decisões técnicas

- **AutoLISP para a maioria dos comandos.** Roda em qualquer estação com Civil 3D, sem instalação, compilação nem permissão de administrador. Para uma construtora, a facilidade de distribuir pesou mais que a performance.
- **Plugin .NET em C# quando o LISP não alcança.** A faixa de cotas das *Section Views* é controlada pela API .NET do Civil 3D, então o `SVFIT` foi escrito em C#. Ele trabalha em duas transações: primeiro deixa o Civil 3D recalcular a faixa real de cada seção, depois aplica folga e arredondamento e força cotas pares, para que todas as seções saiam com a mesma escala visual na prancha.
- **Regras de campo embutidas no código.** O `PONTOS_ACESSO_LV` usa só os pontos com descrição `EIX` para o eixo e interrompe a linha quando dois pontos seguidos estão a mais de 25 m, para não ligar trechos que não se tocam.
- **Validação antes de escrever no desenho.** O Annotate confere os tipos de objeto e os layers, trata cliques no vazio sem abortar e cancela a anotação quando não há valores, evitando lixo no desenho e no arquivo exportado.
- **Uma ferramenta por tarefa.** Cada comando resolve uma etapa bem definida do projeto, o que deixa a suite fácil de aprender e de evoluir comando a comando.

## Resultado

- **Redução de 90% no tempo** das tarefas automatizadas.
- Usada em **mais de 30 projetos** na Construtora Gil Ferreira.
- Tarefas repetitivas que dependiam de trabalho manual viraram um comando na linha de comando do Civil 3D.
