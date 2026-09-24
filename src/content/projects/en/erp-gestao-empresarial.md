---
title: Integrated Business & Financial Management System (ERP)
summary: An ERP with 18 modules and 131 functional requirements — from inventory to accounting — built on a PostgreSQL database designed from scratch, with multi-company isolation and an audit trail.
category: web
featured: true
order: 3
status: concluido
year: '2026'
role: Personal solo project — data modeling, back end and front end
stack:
  - PostgreSQL
  - NestJS
  - TypeScript
  - Prisma
  - Angular 21
  - PrimeNG
  - Docker
  - Vitest
proprietary: false
repo: https://github.com/Jaminteles/SGE
cover: ../../../assets/projects/erp-gestao-empresarial/capa.png
coverAlt: ERP home screen in dark mode showing payables and receivables, cash balance, charts of projected cash flow and overdue accounts, and a list of pending items
---

## Problem

A personal project, built alone from requirements gathering to the interface. The motivation: small and medium businesses often run purchasing, inventory, finance and accounting in separate tools, which means retyping data, numbers that don't reconcile between departments and little traceability of who changed what. The challenge was to design a single system covering that whole cycle **without compromising data consistency**.

## Solution

A web ERP with **18 modules** and **131 functional requirements** (FR-001 to FR-131), specified in a requirements document and delivered over **32 sprints**:

- **Core, HR, partners and inventory** — master data, employment history, inventory ledger with weighted average cost.
- **Purchasing and tax documents** — orders, receipts, discrepancies and invoice processing.
- **Finance, banking and reconciliation** — payables/receivables and installments, payment orders, rule-based reconciliation.
- **Accounting and tax** — chart of accounts, double-entry bookkeeping, trial balance, income statement and period-based tax calculation.
- **Cash flow, OCR, notifications, reports and integrations.**

The interface has **74 screens** designed in Figma and built with Angular + PrimeNG, with light and dark themes.

## Technical decisions

- **A database designed from scratch — and it's the source of truth.** The PostgreSQL physical model (`gestao` schema) holds the critical rules: domains, *enums*, *constraints* and *triggers*. For example: inventory can never go negative, installments always add up to the total, and every journal entry is balanced.
- **Multi-company with Row-Level Security (RLS).** Isolation between companies is enforced by PostgreSQL itself, not just by API filters: a forgotten `WHERE` clause can't leak data.
- **Append-only tables and trigger-based audit trail** for inventory movements, payments and journal entries: mistakes are fixed with reversals, never by deleting.
- **State machines in the database** for tax documents, payment orders and OCR reads, preventing invalid transitions.
- **NestJS + Prisma** on the back end, with the API documented in Swagger (`/api/docs`).
- **Continuous quality:** E2E tests for critical flows, multi-company isolation tests, 55 front-end test files (Vitest), an accessibility audit and a CI pipeline.

## Result

- **18 modules and 131 requirements** implemented, with both back end and interface complete.
- User manual, user acceptance testing (UAT) script and go-live checklist documented.
