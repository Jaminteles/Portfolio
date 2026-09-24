import type { Locale } from '@/i18n/ui';
import { getFeaturedProjects, projectSlug } from './projects';

/** Gera as rotas dos estudos de caso (somente projetos em destaque) com anterior/próximo. */
export async function caseStudyPaths(locale: Locale) {
  const featured = await getFeaturedProjects(locale);
  return featured.map((project, i) => ({
    params: { slug: projectSlug(project) },
    props: { project, prev: featured[i - 1], next: featured[i + 1] },
  }));
}
