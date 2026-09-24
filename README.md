# Portfólio — Jamínteles

Site pessoal de portfólio: **dev full-stack que resolve problemas reais de negócio, inclusive fora da bolha do software.**

Astro 7 · TypeScript · Tailwind CSS 4 · Content Collections · i18n (PT-BR / EN) · 100% estático.

---

## 1. Rodar localmente

Requisitos: **Node.js 22.12+** e npm.

```bash
npm install
npm run dev        # http://localhost:4321 (recarrega ao salvar)
```

Outros comandos:

| Comando | O que faz |
| --- | --- |
| `npm run build` | Checa os tipos (`astro check`) e gera o site em `dist/` |
| `npm run preview` | Serve o `dist/` localmente, como vai ficar em produção |
| `npm run check` | Só a checagem de tipos e do frontmatter |
| `npm run og` | Regera `public/og-default.png` (imagem de preview dos links) |

## 2. Adicionar um projeto

1. Crie `src/content/projects/pt-br/<slug>.md`. O nome do arquivo vira a URL: `/projetos/<slug>/`.
2. Crie o mesmo `<slug>.md` em `src/content/projects/en/`. Pode ser uma cópia marcada com `TODO`.
3. Preencha o frontmatter. O build **falha com uma mensagem clara** se faltar algo obrigatório:

```yaml
---
title: Nome do projeto
summary: Uma ou duas frases para o card e para o Google.
category: web            # web | civil3d | academic | hobby
featured: true           # true = aparece na Home e ganha página de estudo de caso
order: 5                 # menor aparece primeiro
status: concluido        # em-producao | concluido | em-andamento | arquivado
year: '2026'
role: Desenvolvedor full-stack
stack: [React, Node.js, PostgreSQL]
proprietary: false       # true = selo "Sistema proprietário" (e proíbe `repo`)
repo: https://github.com/Jaminteles/meu-repo   # opcional
demo: https://meu-app.vercel.app               # opcional
metric:                  # opcional — destaque "antes → depois"
  label: Ganho de tempo
  before: 4 horas
  after: 10 minutos
cover: ../../../assets/projects/<slug>/capa.png   # opcional
coverAlt: Descrição da imagem para leitores de tela
---
```

4. Se `featured: true`, escreva o corpo com estas seções `##`. O build avisa no terminal se faltar alguma:

```md
## Problema
## Solução
## Decisões técnicas
## Resultado
```

A seção **Stack** é montada automaticamente a partir do campo `stack`. Em inglês, os títulos são `Problem`, `Solution`, `Technical decisions` e `Result`.

Projetos com `featured: false` aparecem só como card na listagem. O card aponta para o `repo` ou para a `demo`, se houver.

## 3. Onde colocar as imagens

| Tipo | Pasta | Como referenciar no `.md` |
| --- | --- | --- |
| Capa e prints (PNG/JPG/WebP) | `src/assets/projects/<slug>/` | `cover: ../../../assets/projects/<slug>/capa.png` |
| Galeria | `src/assets/projects/<slug>/` | lista `gallery:` com `src`, `alt` e `caption` |
| GIFs e vídeos curtos | `public/media/projects/<slug>/` | lista `videos:` com `src: /media/projects/<slug>/demo.mp4` |

- As imagens em `src/assets` são **otimizadas automaticamente**: redimensionadas, convertidas para WebP e com `srcset`.
- A capa também vira a imagem de preview (Open Graph) da página do projeto.
- **GIFs:** prefira gravar como **MP4/WebM** curto (é 5–10× menor). Ele toca em loop, sem som, como um GIF. Se usar `.gif`, ele funciona, mas fica pesado.
- Proporção recomendada para a capa: **16:9** (ex.: 1600×900).
- Há exemplos comentados no frontmatter de cada projeto; é só descomentar.

## 4. Publicar na Vercel

### Primeiro deploy

1. Faça commit e push deste projeto para o GitHub (ex.: `Jaminteles/Portfolio`).
2. Acesse [vercel.com](https://vercel.com), entre com o GitHub e clique em **Add New → Project**.
3. Importe o repositório. A Vercel detecta o **Astro** sozinha:
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Não precisa de variáveis de ambiente.
4. Clique em **Deploy**. Em ~1 minuto o site fica em `https://<nome-do-projeto>.vercel.app`.
5. Se a URL final não for `https://jaminteles.vercel.app`, atualize `SITE_URL` em `astro.config.mjs`, faça commit e push.

Depois disso, **todo push na `main` gera um deploy novo**, e cada PR/branch ganha uma URL de pré-visualização.

### Domínio próprio

1. Compre o domínio (Registro.br para `.com.br`, ou Cloudflare, Namecheap etc.).
2. Na Vercel: **Project → Settings → Domains → Add** e digite o domínio (ex.: `jaminteles.com.br`).
3. A Vercel mostra os registros DNS. No painel do registrador, crie:
   - Domínio raiz (`jaminteles.com.br`): registro **A** → `76.76.21.21`
   - `www`: registro **CNAME** → `cname.vercel-dns.com`
   - (Use exatamente os valores que a Vercel mostrar, pois ela pode indicar outros.)
   - No **Registro.br**, também dá para trocar os servidores DNS para os da Vercel (`ns1.vercel-dns.com` / `ns2.vercel-dns.com`).
4. Aguarde a propagação (minutos a algumas horas). O HTTPS é emitido automaticamente.
5. Atualize `SITE_URL` em `astro.config.mjs` para o novo domínio e faça push. O sitemap, o `robots.txt`, as URLs canônicas e o Open Graph são atualizados sozinhos.
6. (Opcional) Cadastre o site no [Google Search Console](https://search.google.com/search-console) e envie `https://seu-dominio/sitemap-index.xml`.

## Estrutura

```
src/
├─ content/projects/{pt-br,en}/   # um .md por projeto e idioma
├─ content.config.ts              # schema (tipos) do frontmatter
├─ assets/projects/<slug>/        # imagens otimizadas
├─ data/site.ts                   # nome, e-mail, links, stack
├─ data/about.ts                  # conteúdo da página Sobre
├─ i18n/ui.ts                     # textos da interface e rotas por idioma
├─ views/                         # páginas (compartilhadas entre idiomas)
├─ pages/                         # rotas: / /projetos /sobre /contato  +  /en/...
├─ components/                    # Header, Hero, ProjectCard, filtros etc.
└─ styles/global.css              # tokens de cor (tema claro/escuro) e utilitários
```

- **Cores:** edite os tokens em `src/styles/global.css` (`--c-accent` é o laranja-obra).
- **Textos da interface:** `src/i18n/ui.ts`. O TypeScript obriga o EN a ter as mesmas chaves do PT.
- **Tradução EN:** procure por `TODO` em `src/i18n/ui.ts`, `src/data/about.ts` e `src/content/projects/en/`.
- **Placeholders:** procure por `[PREENCHER` e `[CONFIRMAR` no projeto.
