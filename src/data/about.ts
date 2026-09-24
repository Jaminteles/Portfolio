import type { Locale } from '@/i18n/ui';

export interface TimelineItem {
  title: string;
  org: string;
  period: string;
  description: string;
  highlights?: string[];
}

export interface AboutContent {
  lead: string;
  paragraphs: string[];
  education: TimelineItem[];
  experience: TimelineItem[];
  interests: { title: string; description: string }[];
}

/**
 * Conteúdo da página "Sobre".
 * Conteúdo em inglês marcado com TODO ainda precisa de tradução.
 */
export const ABOUT: Record<Locale, AboutContent> = {
  'pt-br': {
    lead: 'Sou desenvolvedor full-stack e gosto de problemas que não cabem numa categoria só.',
    paragraphs: [
      'Trabalho na Construtora Gil Ferreira, onde o software precisa funcionar no mundo real: no almoxarifado, no escritório técnico e no projeto de terraplenagem. Lá desenvolvo sistemas web de ponta a ponta e automatizo tarefas repetitivas do AutoCAD Civil 3D com AutoLISP.',
      'Essa convivência com engenheiros, topógrafos e almoxarifes me ensinou a começar pelo problema de negócio, e não pela tecnologia. Em paralelo, curso Sistemas de Informação no IFBA, onde aprofundo fundamentos como modelagem de dados, algoritmos e engenharia de software.',
    ],
    education: [
      {
        title: 'Bacharelado em Sistemas de Informação',
        org: 'IFBA — Campus Vitória da Conquista',
        period: '2024 – 2028 (previsão)',
        description:
          'Formação em desenvolvimento de software, banco de dados, engenharia de requisitos e complexidade de algoritmos.',
      },
    ],
    experience: [
      {
        title: 'Desenvolvedor Full-Stack',
        org: 'Construtora Gil Ferreira',
        period: '2025 – atual',
        description:
          'Desenvolvimento de sistemas internos e automações para engenharia civil, do levantamento de requisitos à implantação.',
        highlights: [
          'Sistema de gestão de almoxarifado em produção: 3 almoxarifados e 60 usuários (React + Node).',
          'Suíte de comandos AutoLISP para Civil 3D que reduziu em 90% o tempo de tarefas de terraplenagem, usada em mais de 30 projetos.',
        ],
      },
    ],
    interests: [
      {
        title: 'Automação de engenharia',
        description: 'Transformar processos manuais de CAD e topografia em rotinas confiáveis e rápidas.',
      },
      {
        title: 'Modelagem de dados',
        description: 'Projetar bancos relacionais que acompanhem a regra de negócio, e não o contrário.',
      },
      {
        title: 'Produto e usabilidade',
        description: 'Software que pessoas fora da TI conseguem usar sem manual.',
      },
      {
        title: 'Localização e ROM hacking',
        description: 'Hobby de tradução de jogos para PT-BR e criação de ferramentas para isso.',
      },
    ],
  },
  en: {
    lead: 'TODO: I am a full-stack developer who enjoys problems that do not fit into a single category.',
    paragraphs: [
      'TODO: translate — I work at Construtora Gil Ferreira, building end-to-end web systems and automating AutoCAD Civil 3D tasks with AutoLISP.',
      'TODO: translate — I am also an Information Systems student at IFBA.',
    ],
    education: [
      {
        title: "Bachelor's in Information Systems",
        org: 'IFBA — Vitória da Conquista Campus',
        period: '2024 – 2028 (expected)',
        description: 'TODO: translate description.',
      },
    ],
    experience: [
      {
        title: 'Full-Stack Developer',
        org: 'Construtora Gil Ferreira',
        period: '2025 – present',
        description: 'TODO: translate description.',
        highlights: [
          'TODO: Warehouse management system in daily use (React + Node).',
          'TODO: AutoLISP command suite for Civil 3D.',
        ],
      },
    ],
    interests: [
      { title: 'Engineering automation', description: 'TODO: translate.' },
      { title: 'Data modeling', description: 'TODO: translate.' },
      { title: 'Product & usability', description: 'TODO: translate.' },
      { title: 'Localization & ROM hacking', description: 'TODO: translate.' },
    ],
  },
};
