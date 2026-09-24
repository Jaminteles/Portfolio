---
title: Gilfer Warehouse Management
summary: Web-based warehouse management system in production at Construtora Gil Ferreira — tracks construction materials across 3 warehouses, from purchase to use, with 60 users.
category: web
featured: true
order: 1
status: em-producao
year: '2026'
role: Full-stack developer (solo project)
stack:
  - React 19
  - Material UI
  - Node.js
  - Express
  - Sequelize
  - MySQL
  - JWT
  - Recharts
proprietary: true
cover: ../../../assets/projects/almoxarifado-gilfer/capa.png
coverAlt: System dashboard showing total items in stock, low-stock alerts, quick actions and a chart of stock in and out over the last 7 days
gallery:
  - src: ../../../assets/projects/almoxarifado-gilfer/saidas.png
    alt: Stock-out screen with filters by date, type, destination, person in charge and product, listing materials taken for use
    caption: Stock-outs for use on site or transfer between warehouses, with filters. Names and sites blurred to protect real data.
  - src: ../../../assets/projects/almoxarifado-gilfer/servicos.png
    alt: Services screen listing products and totals, with filters by invoice, supplier and application
    caption: Service records with invoices and amounts. Suppliers and people in charge blurred.
---

## Problem

Construtora Gil Ferreira, a construction company, keeps building materials in several warehouses — one at each construction site. Everything was tracked in **spreadsheets**.

Spreadsheets work while only one person edits them. With several sites and several people logging stock in and out, the classic problems show up: different copies of the same file, balances that don't match what's on the shelf, no record of who took what, and no easy way to know, before buying, whether the material is already sitting at another site.

## Solution

A full-stack web system covering the whole lifecycle of a material:

- **Purchases** — purchase orders with items and invoice; once received, stock is updated automatically.
- **Stock-outs** — for **use** on site or **transfer** between warehouses, with automatic stock updates.
- **Records** — suppliers (tax ID, contacts, addresses), employees and credentials, products with minimum/maximum stock, warehouses and crews.
- **Dashboard** — balance per site and key indicators with charts.

## Technical decisions

- **Stock can never go negative, enforced on the back end.** Every movement runs inside a database transaction and goes through business-rule validation — not just in the UI. With several people logging stock-outs at the same time, consistency has to live on the server.
- **Layered architecture: Routes → Controllers → Services → Repositories.** Business rules are isolated in the *services*, which makes the code easier to test and evolve without touching routes or SQL.
- **JWT authentication and bcrypt-hashed passwords**, with each employee having their own login so every movement is traceable.
- **Material UI** to quickly deliver a consistent, responsive interface for people who don't work in IT.
- **Hosted on HostGator**, accessible from any site through the browser, with nothing to install.

## Result

- **In production since July 2026**, replacing the spreadsheets.
- **3 warehouses** managed in one place.
- **60 users** logging movements with their own accounts.
- Centralized, traceable stock control: each site's balance is available in real time, with a history of who moved each item.
