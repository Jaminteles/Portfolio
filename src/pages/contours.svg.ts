import type { APIRoute } from 'astro';
import { contoursSvg } from '@/lib/contours';

/** Gerado no build como arquivo estático: /contours.svg */
export const GET: APIRoute = () =>
  new Response(contoursSvg(), {
    headers: { 'Content-Type': 'image/svg+xml' },
  });
