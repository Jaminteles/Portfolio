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
          'Suíte de comandos AutoLISP para Civil 3D e plugin .NET que reduziram em 90% o tempo de tarefas de projeto, usados em mais de 30 projetos.',
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
    lead: "I'm a full-stack developer who enjoys problems that don't fit into a single category.",
    paragraphs: [
      'I work at Construtora Gil Ferreira, a construction company where software has to work in the real world: in the warehouse, in the engineering office and in earthwork design. There I build end-to-end web systems and automate repetitive AutoCAD Civil 3D tasks with AutoLISP.',
      'Working alongside engineers, surveyors and warehouse staff taught me to start from the business problem, not the technology. I’m also pursuing a degree in Information Systems at IFBA (Federal Institute of Bahia), where I deepen fundamentals such as data modeling, algorithms and software engineering.',
    ],
    education: [
      {
        title: "Bachelor's in Information Systems",
        org: 'IFBA (Federal Institute of Bahia) — Vitória da Conquista Campus',
        period: '2024 – 2028 (expected)',
        description: 'Coursework in software development, databases, requirements engineering and algorithm complexity.',
      },
    ],
    experience: [
      {
        title: 'Full-Stack Developer',
        org: 'Construtora Gil Ferreira',
        period: '2025 – present',
        description: 'Building internal systems and civil engineering automations, from requirements gathering to deployment.',
        highlights: [
          'Warehouse management system in production: 3 warehouses and 60 users (React + Node).',
          'AutoLISP command suite and .NET plugin for Civil 3D that cut the time of design tasks by 90%, used in more than 30 projects.',
        ],
      },
    ],
    interests: [
      {
        title: 'Engineering automation',
        description: 'Turning manual CAD and surveying processes into fast, reliable routines.',
      },
      {
        title: 'Data modeling',
        description: 'Designing relational databases that follow the business rules — not the other way around.',
      },
      {
        title: 'Product & usability',
        description: 'Software that people outside IT can use without a manual.',
      },
      {
        title: 'Localization & ROM hacking',
        description: 'A hobby of translating games into Brazilian Portuguese and building the tools to do it.',
      },
    ],
  },
};
