---
title: ClínicaApp
summary: A desktop app for booking medical appointments in Java/JavaFX, with schedules always sorted by time, conflict prevention, cancellation and rescheduling. Data Structures course project at IFBA.
category: academic
featured: true
order: 6
status: concluido
year: '2025'
role: Wrote all of the code (team of 6)
stack:
  - Java
  - JavaFX
  - FXML
  - Maven
  - JUnit 5
  - TestFX
proprietary: false
repo: https://github.com/Jaminteles/ClinicaAPP
cover: ../../../assets/projects/clinica-app/capa.png
coverAlt: Three ClínicaApp windows cascaded — the login screen, the appointment booking screen and the doctor's area with the availability schedule
gallery:
  - src: ../../../assets/projects/clinica-app/fluxo-atividades.png
    alt: Activity diagram showing the registration, patient area and doctor area flows
    caption: Navigation flow and the main patient and doctor operations.
  - src: ../../../assets/projects/clinica-app/diagrama-classes.png
    alt: UML class diagram with AppContext, ClinicaController, SistemaAgendamento, Paciente, Medico and Consulta
    caption: Class model, with SistemaAgendamento at the center.
  - src: ../../../assets/projects/clinica-app/agendar-consulta.png
    alt: Booking window with a specialty selector and a list of available appointments
    caption: Patients pick a specialty and see only the free time slots.
  - src: ../../../assets/projects/clinica-app/minhas-consultas.png
    alt: My Appointments window with a table of date, time, status and reason, and buttons to cancel or delete an appointment
    caption: The patient's appointments, with cancellation.
---

## Problem

Many small clinics still book appointments by phone, paper calendar or spreadsheet. That leads to double bookings, slow confirmations and lots of no-shows, which leave doctors idle.

The assignment, for the Data Structures course at IFBA, called for a booking system that tackled three points: **prevent scheduling conflicts**, **perform well** even with many appointments, and **keep a history** of what happened to each schedule.

## Solution

A desktop app with two areas:

- **Doctor** — registers available time slots, sees the sorted schedule, follows booked appointments and can cancel them with a reason.
- **Patient** — chooses a specialty, sees only the truly free slots, books, follows their own appointments and can cancel or reschedule.

Users sign in with their ID, and the app opens the right area depending on whether they're a doctor or a patient.

## Technical decisions

- **The right structure for each operation.** Patients and doctors live in a `HashMap`, with O(1) lookup by ID. Each doctor's schedule is a `TreeMap` keyed by date and time, so slots always come out sorted and finding a specific slot is O(log n).
- **Conflicts impossible by design.** Every available slot already exists in the schedule as an appointment with status `DISPONIVEL` (available). Booking just fills that slot after checking it's still free, so two people can't be booked at the same time, and nobody can book outside the doctor's hours.
- **MVC with JavaFX + FXML.** Screens are FXML files separate from the logic, and `SistemaAgendamento` holds all business rules, shared across screens through an `AppContext`.
- **Focused scope.** Data is kept in memory, with no database: the course assessed data structures, and persistence was left as a future improvement.
- **Automated tests** for the model with JUnit 5 and for the UI with TestFX.

## Result

- App delivered and working, with complete doctor and patient flows.
- I wrote all of the code, in a team of 6.
- Project documented with class and activity diagrams and a technical report.
