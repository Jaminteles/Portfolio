import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

export const CATEGORIES = ['web', 'civil3d', 'academic', 'hobby'] as const;
export const STATUSES = ['em-producao', 'concluido', 'em-andamento', 'arquivado'] as const;

/**
 * Projetos ficam em `src/content/projects/<idioma>/<slug>.md`.
 * O mesmo `<slug>` deve existir em `pt-br/` e `en/` para as páginas se ligarem entre idiomas.
 */
const projects = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/projects' }),
  schema: ({ image }) =>
    z
      .object({
        title: z.string(),
        /** 1–2 frases exibidas no card e usadas como meta description. */
        summary: z.string(),
        category: z.enum(CATEGORIES),
        /** Destaques aparecem na Home e ganham página de estudo de caso. */
        featured: z.boolean().default(false),
        /** Ordem de exibição (menor aparece primeiro). */
        order: z.number().default(100),
        status: z.enum(STATUSES).optional(),
        year: z.string().optional(),
        role: z.string().optional(),
        stack: z.array(z.string()).min(1),
        /** Código proprietário: exibe o selo e proíbe link de repositório. */
        proprietary: z.boolean().default(false),
        repo: z.url().optional(),
        demo: z.url().optional(),
        /** Métrica de impacto, ex.: ganho de tempo. */
        metric: z
          .object({
            label: z.string(),
            before: z.string(),
            after: z.string(),
          })
          .optional(),
        /** Capa: arquivo em `src/assets/projects/<slug>/` (otimizado automaticamente). */
        cover: image().optional(),
        coverAlt: z.string().optional(),
        /** Imagens extras do estudo de caso (também em `src/assets/projects/<slug>/`). */
        gallery: z
          .array(
            z.object({
              src: image(),
              alt: z.string(),
              caption: z.string().optional(),
            }),
          )
          .default([]),
        /**
         * GIFs/vídeos curtos: coloque em `public/media/projects/<slug>/` e referencie
         * pelo caminho público, ex.: `/media/projects/<slug>/demo.mp4`.
         * Aceita .mp4, .webm (recomendado) ou .gif.
         */
        videos: z
          .array(
            z.object({
              src: z.string().startsWith('/'),
              alt: z.string(),
              caption: z.string().optional(),
            }),
          )
          .default([]),
        draft: z.boolean().default(false),
      })
      .refine((p) => !(p.proprietary && p.repo), {
        message: 'Projeto proprietário não pode ter link de repositório (`repo`).',
        path: ['repo'],
      })
      .refine((p) => !p.cover || !!p.coverAlt, {
        message: 'Informe `coverAlt` (texto alternativo) quando houver `cover`.',
        path: ['coverAlt'],
      }),
});

export const collections = { projects };
