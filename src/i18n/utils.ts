import { DEFAULT_LOCALE, LOCALES, ROUTES, ui, type Locale, type RouteKey, type UIKey } from './ui';

export function isLocale(value: string | undefined): value is Locale {
  return !!value && (LOCALES as readonly string[]).includes(value);
}

/** Retorna a função de tradução para o idioma informado. */
export function useTranslations(locale: Locale) {
  return function t(key: UIKey): string {
    return ui[locale][key] ?? ui[DEFAULT_LOCALE][key];
  };
}

/** URL de uma página fixa no idioma informado. */
export function localizePath(key: RouteKey, locale: Locale): string {
  return ROUTES[key][locale];
}

/** URL do estudo de caso de um projeto. */
export function projectPath(slug: string, locale: Locale): string {
  return `${ROUTES.projects[locale]}${slug}/`;
}

/** Mapa idioma → URL da mesma página, usado no seletor de idioma e nas tags hreflang. */
export type Alternates = Record<Locale, string>;

export function routeAlternates(key: RouteKey): Alternates {
  return { ...ROUTES[key] };
}

export function projectAlternates(slug: string): Alternates {
  return Object.fromEntries(LOCALES.map((l) => [l, projectPath(slug, l)])) as Alternates;
}
