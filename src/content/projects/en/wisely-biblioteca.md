---
title: Wisely — Library Management
summary: A full-stack library management system with loans, automatic late fees, reservation queues, e-mail notifications and reports. Spring Boot API, React interface, deployed on the web.
category: academic
featured: true
order: 5
status: concluido
year: '2025'
role: Team project · Data Structures course (IFBA)
stack:
  - Java 17
  - Spring Boot
  - Spring Data JPA
  - PostgreSQL
  - React 19
  - Vite
  - Tailwind CSS
  - shadcn/ui
proprietary: false
repo: https://github.com/Jaminteles/library-management
demo: https://wisely-library-management.vercel.app
cover: ../../../assets/projects/wisely-biblioteca/capa.png
coverAlt: Wisely home screen with shortcuts to Collection, Loans, Reservations, and Overdue & Fees
---

## Problem

School libraries often track their collection and loans in notebooks or spreadsheets. That makes it hard to know which books are overdue, charge late fees fairly and organize who's waiting for a book that has just been returned.

The assignment, for the Data Structures course at IFBA, asked for a system that solved this problem by putting data structures into practice.

## Solution

A complete web system, deployed and accessible from the browser:

- **Collection** — add, edit and search books by ISBN.
- **Loans** — checkout, return and **automatic late-fee calculation**, with the option to mark a fee as paid or waived.
- **Reservations** — an **ordered queue of up to 5 spots per book**; when someone cancels or picks up the book, the queue moves forward on its own.
- **Students** — registration by student ID and activity history.
- **E-mail notifications** — alerts for overdue loans and available reservations.
- **Reports** — collection availability, student metrics, loan statistics and reservation analytics.
- **Settings** — loan period, loan limit per student and fee amount, all adjustable by the library itself.

## Technical decisions

- **Hand-built data structures.** The project has its own generic **doubly linked list** (`LinkedList<T>` with `DoubleNode`), with capacity limits and overflow/underflow exceptions, instead of relying only on Java's built-in collections.
- **A consistent reservation queue.** Creating, cancelling and fulfilling a reservation runs in a transaction (`@Transactional`): every student's position is recalculated in the same step, with no gaps or duplicate positions in the queue.
- **Layered REST API** (controller → service → repository) with **DTOs** separating what the API exposes from the JPA entities.
- **Rules stored in the database**, not hard-coded, so each library can adjust loan period, limits and fees without a new deploy.
- **React 19 + Vite + Tailwind + shadcn/ui front end**, deployed on Vercel, with PostgreSQL in the cloud.

## Result

- **Live and working**: [wisely-library-management.vercel.app](https://wisely-library-management.vercel.app).
- Covers the library's full cycle, from registering a book to reporting.
- Data structures from the course applied to a real system, with a database, an API and an interface.
