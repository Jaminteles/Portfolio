export const LOCALES = ['pt-br', 'en'] as const;
export type Locale = (typeof LOCALES)[number];
export const DEFAULT_LOCALE: Locale = 'pt-br';

/** Atributos `lang` / Open Graph de cada idioma. */
export const LOCALE_META: Record<Locale, { htmlLang: string; ogLocale: string; label: string; short: string }> = {
  'pt-br': { htmlLang: 'pt-BR', ogLocale: 'pt_BR', label: 'Português', short: 'PT' },
  en: { htmlLang: 'en', ogLocale: 'en_US', label: 'English', short: 'EN' },
};

/** Rotas traduzidas. As chaves são usadas em `localizePath()`. */
export const ROUTES = {
  home: { 'pt-br': '/', en: '/en/' },
  projects: { 'pt-br': '/projetos/', en: '/en/projects/' },
  about: { 'pt-br': '/sobre/', en: '/en/about/' },
  contact: { 'pt-br': '/contato/', en: '/en/contact/' },
} as const satisfies Record<string, Record<Locale, string>>;

export type RouteKey = keyof typeof ROUTES;

/**
 * Textos da interface. O PT-BR é a fonte da verdade;
 * o EN precisa ter exatamente as mesmas chaves (o TypeScript garante).
 */
const ptBR = {
  'meta.title': 'Jamínteles Desus — Desenvolvedor Full-Stack',
  'meta.description':
    'Portfólio de Jamínteles Desus: desenvolvedor full-stack que resolve problemas reais de negócio — de sistemas web a automação de engenharia civil no Civil 3D.',

  'a11y.skip': 'Pular para o conteúdo',
  'a11y.menu': 'Menu',
  'a11y.openMenu': 'Abrir menu',
  'a11y.closeMenu': 'Fechar menu',
  'a11y.mainNav': 'Navegação principal',
  'a11y.toggleTheme': 'Alternar tema claro/escuro',
  'a11y.switchLang': 'Idioma',
  'a11y.newTab': '(abre em nova aba)',

  'nav.home': 'Início',
  'nav.projects': 'Projetos',
  'nav.about': 'Sobre',
  'nav.contact': 'Contato',

  'hero.kicker': 'Desenvolvedor Full-Stack',
  'hero.greeting': 'Olá, eu sou',
  'hero.tagline': 'Dev full-stack que resolve problemas reais de negócio — inclusive fora da bolha do software.',
  'hero.body':
    'Construo sistemas web de ponta a ponta e automatizo a engenharia civil no AutoCAD Civil 3D com AutoLISP. Hoje na Construtora Gil Ferreira, transformando horas de trabalho manual em minutos.',
  'hero.ctaProjects': 'Ver projetos',
  'hero.ctaContact': 'Entrar em contato',
  'hero.coords': 'Vitória da Conquista · BA',

  'home.featuredLabel': 'Projetos em destaque',
  'home.featuredTitle': 'Software que roda no canteiro de obras',
  'home.featuredIntro':
    'Uma seleção de sistemas e automações em uso real — do almoxarifado à terraplenagem.',
  'home.allProjects': 'Ver todos os projetos',
  'home.stackLabel': 'Stack principal',
  'home.ctaTitle': 'Tem um problema que parece "fora da área de TI"?',
  'home.ctaBody': 'É justamente ali que eu gosto de trabalhar. Vamos conversar.',

  'projects.title': 'Projetos',
  'projects.metaDescription':
    'Projetos de Jamínteles Desus: sistemas web full-stack, automação de Civil 3D com AutoLISP, trabalhos acadêmicos e hobbies.',
  'projects.intro':
    'Sistemas web, automações para engenharia civil e trabalhos acadêmicos. Os destaques têm estudo de caso completo.',
  'projects.filterLabel': 'Filtrar por categoria',
  'projects.all': 'Todos',
  'projects.empty': 'Nenhum projeto nesta categoria.',
  'projects.featuredHeading': 'Em destaque',
  'projects.others': 'Outros projetos',
  'projects.hobbyLabel': 'Nas horas vagas',
  'projects.hobbyIntro': 'Projetos pessoais, feitos por curiosidade e diversão.',
  'projects.caseStudy': 'Ler estudo de caso',
  'projects.repo': 'Repositório',
  'projects.demo': 'Demo',
  'projects.featured': 'Destaque',

  'category.web': 'Web',
  'category.civil3d': 'Automação Civil 3D',
  'category.academic': 'Acadêmico',
  'category.hobby': 'Hobby',

  'status.em-producao': 'Em produção',
  'status.concluido': 'Concluído',
  'status.em-andamento': 'Em andamento',
  'status.arquivado': 'Arquivado',

  'badge.proprietary': 'Sistema proprietário — código não disponível',

  'case.back': 'Todos os projetos',
  'case.year': 'Ano',
  'case.role': 'Papel',
  'case.status': 'Status',
  'case.category': 'Categoria',
  'case.stack': 'Stack',
  'case.gallery': 'Imagens',
  'case.links': 'Links',
  'case.prev': 'Anterior',
  'case.next': 'Próximo',
  'case.metricBefore': 'Antes',
  'case.metricAfter': 'Depois',
  'case.toc': 'Nesta página',

  'about.title': 'Sobre',
  'about.metaDescription':
    'Formação, experiência, stack e interesses de Jamínteles Desus, desenvolvedor full-stack e estudante de Sistemas de Informação no IFBA.',
  'about.education': 'Formação',
  'about.experience': 'Experiência',
  'about.stack': 'Stack',
  'about.interests': 'Interesses',
  'about.downloadCv': 'Baixar currículo (PDF)',

  'contact.title': 'Contato',
  'contact.metaDescription': 'Fale com Jamínteles Desus por LinkedIn, GitHub ou e-mail.',
  'contact.intro':
    'Aberto a oportunidades como desenvolvedor full-stack, projetos de automação e boas conversas sobre tecnologia aplicada a negócios reais.',
  'contact.linkedin': 'Vamos nos conectar',
  'contact.github': 'Veja meu código',
  'contact.email': 'Mande uma mensagem',
  'contact.copy': 'Copiar e-mail',
  'contact.copied': 'E-mail copiado!',

  'whatsapp.label': 'Conversar no WhatsApp',
  'whatsapp.message': 'Olá, Jamínteles! Vi seu portfólio e gostaria de conversar.',

  'footer.built': 'Feito com Astro e Tailwind CSS.',
  'footer.views': 'visualizações',
  'footer.rights': 'Todos os direitos reservados.',

  '404.title': 'Página não encontrada',
  '404.body': 'Parece que essa cota não existe no levantamento. Que tal voltar ao início?',
  '404.back': 'Voltar ao início',
};

export type UIKey = keyof typeof ptBR;

const en: Record<UIKey, string> = {
  'meta.title': 'Jamínteles Desus — Full-Stack Developer',
  'meta.description':
    'Portfolio of Jamínteles Desus, a full-stack developer who solves real business problems — from web systems to civil engineering automation in Civil 3D.',

  'a11y.skip': 'Skip to content',
  'a11y.menu': 'Menu',
  'a11y.openMenu': 'Open menu',
  'a11y.closeMenu': 'Close menu',
  'a11y.mainNav': 'Main navigation',
  'a11y.toggleTheme': 'Toggle light/dark theme',
  'a11y.switchLang': 'Language',
  'a11y.newTab': '(opens in a new tab)',

  'nav.home': 'Home',
  'nav.projects': 'Projects',
  'nav.about': 'About',
  'nav.contact': 'Contact',

  'hero.kicker': 'Full-Stack Developer',
  'hero.greeting': "Hi, I'm",
  'hero.tagline': 'Full-stack dev who solves real business problems — even outside the software bubble.',
  'hero.body':
    'I build end-to-end web systems and automate civil engineering work in AutoCAD Civil 3D with AutoLISP. Currently at Construtora Gil Ferreira, turning hours of manual work into minutes.',
  'hero.ctaProjects': 'See projects',
  'hero.ctaContact': 'Get in touch',
  'hero.coords': 'Vitória da Conquista · BA · Brazil',

  'home.featuredLabel': 'Featured projects',
  'home.featuredTitle': 'Software that runs on the construction site',
  'home.featuredIntro': 'A selection of systems and automations in real use — from the warehouse to earthworks.',
  'home.allProjects': 'See all projects',
  'home.stackLabel': 'Core stack',
  'home.ctaTitle': 'Got a problem that seems "outside IT"?',
  'home.ctaBody': "That's exactly where I like to work. Let's talk.",

  'projects.title': 'Projects',
  'projects.metaDescription':
    'Projects by Jamínteles Desus: full-stack web systems, Civil 3D automation with AutoLISP, academic work and hobbies.',
  'projects.intro': 'Web systems, civil engineering automation and academic work. Featured projects include a full case study.',
  'projects.filterLabel': 'Filter by category',
  'projects.all': 'All',
  'projects.empty': 'No projects in this category.',
  'projects.featuredHeading': 'Featured',
  'projects.others': 'Other projects',
  'projects.hobbyLabel': 'In my spare time',
  'projects.hobbyIntro': 'Personal projects, made out of curiosity and for fun.',
  'projects.caseStudy': 'Read case study',
  'projects.repo': 'Repository',
  'projects.demo': 'Demo',
  'projects.featured': 'Featured',

  'category.web': 'Web',
  'category.civil3d': 'Civil 3D Automation',
  'category.academic': 'Academic',
  'category.hobby': 'Hobby',

  'status.em-producao': 'In production',
  'status.concluido': 'Completed',
  'status.em-andamento': 'In progress',
  'status.arquivado': 'Archived',

  'badge.proprietary': 'Proprietary system — source code not available',

  'case.back': 'All projects',
  'case.year': 'Year',
  'case.role': 'Role',
  'case.status': 'Status',
  'case.category': 'Category',
  'case.stack': 'Stack',
  'case.gallery': 'Images',
  'case.links': 'Links',
  'case.prev': 'Previous',
  'case.next': 'Next',
  'case.metricBefore': 'Before',
  'case.metricAfter': 'After',
  'case.toc': 'On this page',

  'about.title': 'About',
  'about.metaDescription':
    'Education, experience, stack and interests of Jamínteles Desus, full-stack developer and Information Systems student at IFBA.',
  'about.education': 'Education',
  'about.experience': 'Experience',
  'about.stack': 'Stack',
  'about.interests': 'Interests',
  'about.downloadCv': 'Download résumé (PDF)',

  'contact.title': 'Contact',
  'contact.metaDescription': 'Reach Jamínteles Desus on LinkedIn, GitHub or by e-mail.',
  'contact.intro':
    'Open to full-stack developer opportunities, automation projects and good conversations about technology applied to real business.',
  'contact.linkedin': "Let's connect",
  'contact.github': 'See my code',
  'contact.email': 'Send a message',
  'contact.copy': 'Copy e-mail',
  'contact.copied': 'E-mail copied!',

  'whatsapp.label': 'Chat on WhatsApp',
  'whatsapp.message': "Hi, Jamínteles! I saw your portfolio and I'd like to talk.",

  'footer.built': 'Built with Astro and Tailwind CSS.',
  'footer.views': 'views',
  'footer.rights': 'All rights reserved.',

  '404.title': 'Page not found',
  '404.body': "Looks like this point isn't on the survey. How about heading back home?",
  '404.back': 'Back to home',
};

export const ui: Record<Locale, Record<UIKey, string>> = { 'pt-br': ptBR, en };
