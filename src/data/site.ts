/**
 * Dados pessoais e links usados em todo o site.
 * Altere aqui e o site inteiro é atualizado.
 */
export const SITE = {
  name: 'Jamínteles Desus',
  role: 'Desenvolvedor Full-Stack',
  company: 'Construtora Gil Ferreira',
  location: 'Vitória da Conquista, BA',
  email: 'devjaminteles@gmail.com',
  github: 'https://github.com/Jaminteles',
  githubUser: 'Jaminteles',
  linkedin: 'https://www.linkedin.com/in/jamintelesdevj',
  linkedinUser: 'jamintelesdevj',
  /** WhatsApp em formato internacional, apenas dígitos (DDI + DDD + número). */
  whatsapp: '5577998544432',
  /**
   * Currículo em PDF por idioma, servido de /public/cv.
   * Para atualizar, substitua os arquivos mantendo exatamente estes nomes.
   */
  resume: { 'pt-br': '/cv/curriculo-jaminteles-desus.pdf', en: '/cv/resume-jaminteles-desus.pdf' },
  /**
   * Contador público de visualizações (Abacus — abacus.jasoncameron.dev).
   * O par namespace/key identifica o contador; mudar reinicia a contagem do zero.
   */
  viewCounter: { namespace: 'jaminteles-portfolio-a7f3', key: 'total' },
  /** Imagem padrão de preview (Open Graph) por idioma, em /public (gerada por `npm run og`). */
  ogImage: { 'pt-br': '/og-default.png', en: '/og-default-en.png' },
} as const;

/** Faixa de stack exibida na Home. */
export const CORE_STACK = [
  'TypeScript',
  'JavaScript',
  'React',
  'Node.js',
  'PostgreSQL',
  'Java',
  'AutoLISP',
  'Civil 3D',
  'Git',
] as const;

/** Stack detalhada da página Sobre. */
export const STACK_GROUPS = {
  'pt-br': [
    { title: 'Front-end', items: ['React', 'TypeScript', 'Angular', 'React Native', 'Material UI', 'Tailwind CSS', 'Astro'] },
    { title: 'Back-end', items: ['Node.js', 'NestJS', 'Express', 'Prisma', 'Sequelize', 'Java', 'APIs REST'] },
    { title: 'Dados', items: ['PostgreSQL', 'MySQL', 'Modelagem relacional', 'Row-Level Security', 'SQL'] },
    { title: 'Engenharia / CAD', items: ['AutoLISP', 'AutoCAD Civil 3D', 'Topografia', 'Terraplenagem'] },
    { title: 'Ferramentas', items: ['Git', 'GitHub', 'Docker', 'Figma', 'VS Code'] },
  ],
  en: [
    { title: 'Front-end', items: ['React', 'TypeScript', 'Angular', 'React Native', 'Material UI', 'Tailwind CSS', 'Astro'] },
    { title: 'Back-end', items: ['Node.js', 'NestJS', 'Express', 'Prisma', 'Sequelize', 'Java', 'REST APIs'] },
    { title: 'Data', items: ['PostgreSQL', 'MySQL', 'Relational modeling', 'Row-Level Security', 'SQL'] },
    { title: 'Engineering / CAD', items: ['AutoLISP', 'AutoCAD Civil 3D', 'Surveying', 'Earthworks'] },
    { title: 'Tools', items: ['Git', 'GitHub', 'Docker', 'Figma', 'VS Code'] },
  ],
} as const;
