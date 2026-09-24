---
title: Election Polling App
summary: An open, anonymous election polling app for the state of Bahia, Brazil — works offline, tallies results by municipality (IBGE code) and has a results dashboard with export.
category: web
featured: true
order: 4
status: em-producao
year: '2026'
role: Full-stack developer
stack:
  - React Native
  - Expo
  - React
  - TypeScript
  - NestJS
  - Prisma
  - PostgreSQL
  - Docker
proprietary: false
repo: https://github.com/Jaminteles/SPE
demo: https://spe.devjaminteles.workers.dev/download
cover: ../../../assets/projects/app-pesquisa-eleitoral/capa.png
coverAlt: Two app screens side by side — the list of created polls and the results by municipality with coverage across Bahia
gallery:
  - src: ../../../assets/projects/app-pesquisa-eleitoral/download.png
    alt: App download page with version, a button to download the APK, a SHA-256 hash to verify it and step-by-step Android installation instructions
    caption: Direct APK distribution, with a published SHA-256 hash to verify the file before installing.
---

## Problem

Field election polls are often run on paper or with generic forms: data arrives late and full of typos, and it's hard to tally results **by municipality** or catch duplicate answers. In the interior of Bahia there's another obstacle: **unreliable internet** at the moment of collection.

## Solution

A platform in three parts:

- **Collection app (React Native + Expo)**, distributed as an APK. Anyone can answer without creating an account: they pick their municipality by IBGE code (Brazil's official municipality code) and fill in the questionnaire even offline. Partial answers are stored in local SQLite and sent automatically once the connection is back.
- **API (NestJS + Prisma + PostgreSQL)** with Administrator and Analyst roles, forms with five question types and a lock that makes a form immutable once published.
- **Web dashboard (React + Vite)** with rankings by municipality, coverage of all 417 municipalities in Bahia, cross-tabulation between questions and export to CSV, XLSX and PDF.

## Technical decisions

- **Anonymous by design (LGPD, Brazil's data protection law).** The respondent's name, national ID, phone and e-mail are never collected, stored or logged. Duplicate detection relies only on an irreversible device hash.
- **Offline-first app**, with local SQLite and a retry queue, because collection happens where the internet fails.
- **Official municipality data** synced straight from IBGE's locations API.
- **Pre-computed aggregations** (materialized views) so the dashboard stays fast with many answers, plus **automatic flagging of suspicious responses** for manual review.
- **Secure by default:** every route is protected from the start, and a public route requires an explicit marker (`@Publico()`). In staging, nginx is the only exposed service and terminates TLS.

## Result

- **In use**: open for anyone to answer through the app, with the [results dashboard](https://spe.devjaminteles.workers.dev) live and the APK available on the [download page](https://spe.devjaminteles.workers.dev/download).
