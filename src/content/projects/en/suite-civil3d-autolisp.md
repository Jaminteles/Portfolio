---
title: Civil 3D Automation Suite
summary: A set of AutoLISP commands that automates repetitive earthwork design tasks in AutoCAD Civil 3D — from volume calculation to profile grades and rock lines. Cut the time spent on these tasks by 90%.
category: civil3d
featured: true
order: 2
status: em-producao
role: Developer (solo project)
stack:
  - AutoLISP
  - Visual LISP / ActiveX
  - AutoCAD Civil 3D
  - Computational geometry
proprietary: true
metric:
  label: Time spent on automated tasks
  before: Manual process
  after: −90% time
cover: ../../../assets/projects/suite-civil3d-autolisp/capa.png
coverAlt: Road project in Civil 3D showing the roadway, hatched paved areas, riprap slopes and survey points
---

## Problem

In earthwork design, much of the technical team's time went into **manual** tasks in Civil 3D: measuring areas section by section, clipping surfaces, redrawing the profile as tangents and drawing the rock line. Besides being slow, the manual process left room for human error in numbers that turn into volume, cost and project schedule.

## Solution

A **suite of AutoLISP commands** loaded straight into Civil 3D, which the designer runs from the command line like any native tool:

| Command | What it does |
| --- | --- |
| `AreaSecoes` | Calculates cut and fill areas for each **cross-section** and consolidates earthwork volumes. |
| `CMALHA` | **Clips the surface/grid** to the boundary of selected polylines. |
| `TANGREIDE` | Converts a **smooth profile grade** into **tangent segments with PVIs**, ready for the design profile. |
| `NROCHA` | Generates a **new rock line** across the sections. |

## Technical decisions

- **AutoLISP instead of a .NET plugin.** It runs on any workstation with Civil 3D — no installation, no compilation, no admin rights. For a construction company, easy distribution mattered more than raw performance.
- **Geometry handled inside the drawing itself.** The commands read polylines, sections and surfaces through Visual LISP/ActiveX and write results back as CAD objects, so designers stay in the workflow they already know.
- **One tool per task.** Each command solves a well-defined step of the project, which keeps the suite easy to learn and to extend one command at a time.

## Result

- **90% less time** on the automated tasks.
- Used in **more than 30 projects** at Construtora Gil Ferreira.
- Repetitive tasks that used to be manual became a single command in Civil 3D.
