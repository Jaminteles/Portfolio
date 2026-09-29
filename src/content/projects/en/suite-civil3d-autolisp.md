---
title: Civil 3D Automation Suite
summary: Custom tools for AutoCAD Civil 3D — AutoLISP commands and a C# .NET plugin — that automate repetitive surveying and design tasks, from field survey data to plotting cross-sections. Cut the time spent on these tasks by 90%.
category: civil3d
featured: true
order: 2
status: em-producao
role: Developer (solo project)
stack:
  - AutoLISP
  - Visual LISP / ActiveX
  - C# / .NET Framework
  - Civil 3D .NET API
  - AutoCAD Civil 3D
proprietary: true
metric:
  label: Time spent on automated tasks
  before: Manual process
  after: −90% time
cover: ../../../assets/projects/suite-civil3d-autolisp/capa.png
coverAlt: Road project in Civil 3D showing the roadway, hatched paved areas, riprap slopes and survey points
---

## Problem

In day-to-day design work, much of the technical team's time went into **manual** tasks in Civil 3D: connecting field survey points one by one to draw access roads, annotating and tabulating cross-sections one at a time, redrawing the profile as tangents, clipping surfaces and adjusting each section's elevation range by hand before plotting. Besides being slow, this repetitive work left room for human error in drawings that turn into quantities, cost and project schedule.

## Solution

A **suite of tools** loaded straight into Civil 3D, which the designer runs from the command line like any native command:

| Command | What it does |
| --- | --- |
| `PONTOS_ACESSO_LV` | Draws **access roads from survey points**: connects centerline and left/right edge points into 3D polylines, in survey order. |
| `HTxt` (Annotate) | **Annotates cross-sections**: identifies fill and cut hatches by layer, writes the values into the drawing and exports everything by station to a spreadsheet-ready TXT file. |
| `TANGREIDE` | Converts a **smooth profile grade** into **tangent segments with PVIs**, ready for the design profile. |
| `CMALHA` | **Clips the surface/grid** to the boundary of selected polylines. |
| `SVFIT` (.NET) | **Prepares sections for plotting**: adjusts the elevation range of every selected *Section View* at once, with padding, rounding and a minimum height. Comes with `SVAUTO` and `SVINFO`. |

## Technical decisions

- **AutoLISP for most commands.** It runs on any workstation with Civil 3D — no installation, no compilation, no admin rights. For a construction company, easy distribution mattered more than raw performance.
- **A C# .NET plugin where LISP falls short.** Section View elevation ranges are controlled through the Civil 3D .NET API, so `SVFIT` is written in C#. It works in two transactions: first it lets Civil 3D recalculate each section's real range, then it applies padding and rounding and forces even elevations, so every section comes out with the same visual scale on the sheet.
- **Field rules built into the code.** `PONTOS_ACESSO_LV` uses only points described as `EIX` for the centerline and breaks the line when two consecutive points are more than 25 m apart, so separate stretches never get joined.
- **Validation before writing to the drawing.** Annotate checks object types and layers, handles clicks on empty space without aborting and cancels the annotation when there are no values, keeping junk out of both the drawing and the exported file.
- **One tool per task.** Each command solves a well-defined step of the project, which keeps the suite easy to learn and to extend one command at a time.

## Result

- **90% less time** on the automated tasks.
- Used in **more than 30 projects** at Construtora Gil Ferreira.
- Repetitive tasks that used to be manual became a single command in Civil 3D.
