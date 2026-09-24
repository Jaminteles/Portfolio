import { getCollection, type CollectionEntry } from 'astro:content';
import type { Locale } from '@/i18n/ui';

export type Project = CollectionEntry<'projects'>;

/** Seções obrigatórias do corpo de um estudo de caso (a seção "Stack" vem do frontmatter). */
export const CASE_SECTIONS: Record<Locale, string[]> = {
  'pt-br': ['Problema', 'Solução', 'Decisões técnicas', 'Resultado'],
  en: ['Problem', 'Solution', 'Technical decisions', 'Result'],
};

/** `pt-br/almoxarifado-gilfer` → `almoxarifado-gilfer` */
export function projectSlug(entry: Project): string {
  return entry.id.split('/').slice(1).join('/');
}

export function projectLocale(entry: Project): Locale {
  return entry.id.split('/')[0] as Locale;
}

/** Projetos de um idioma, sem rascunhos, ordenados por `order`. */
export async function getProjects(locale: Locale): Promise<Project[]> {
  const all = await getCollection(
    'projects',
    (p) => projectLocale(p) === locale && (import.meta.env.DEV || !p.data.draft),
  );
  return all.sort((a, b) => a.data.order - b.data.order || a.data.title.localeCompare(b.data.title));
}

export async function getFeaturedProjects(locale: Locale): Promise<Project[]> {
  return (await getProjects(locale)).filter((p) => p.data.featured);
}

/** Verifica (no build) se o estudo de caso tem todas as seções obrigatórias. */
export function missingCaseSections(headings: { depth: number; text: string }[], locale: Locale): string[] {
  const present = new Set(headings.filter((h) => h.depth === 2).map((h) => h.text.trim().toLowerCase()));
  return CASE_SECTIONS[locale].filter((s) => !present.has(s.toLowerCase()));
}
