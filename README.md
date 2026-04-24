# CI-Ticket

A modern ticketing system for **continuous improvement (CI) ideas, internal issues, and feedback**.

> Rebuilding a real-world internal tool into a modern full-stack application.

---

## Features

> Originally used internally by ~100 employees in a production environment.

- Submit continuous improvement ideas
- Categorize tickets (Safety, Quality, Process, IT, etc.)
- Assign departments
- View your own submitted tickets
- Edit and comment on tickets
- Tagging and filtering system
- Status-based color coding
- Kanban-style admin board (in progress)
- Multi-language support (planned)
- Responsive UI

---

## Core Concepts

- **Department** → where the ticket belongs (e.g. Production, IT, Maintenance)
- **Category** → what type of issue or idea it is
- **Ticket** → the actual improvement, issue, or feedback

---

## Tech Stack

Current / Planned stack:

- **Frontend:** React (Vite)
- **Backend:** Firebase
- **Database:** Firestore
- **UI:** Custom CSS (component-based structure)

---

## Setup

```bash
git clone https://github.com/Scriptk1ddie/ci-ticket.git
cd ci-ticket
npm install
npm run dev
```

---

## Roadmap

- [ ] Ticket creation flow
- [ ] Authentication (Firebase Auth)
- [ ] User-specific ticket views
- [ ] Editing & commenting system
- [ ] Admin panel
- [ ] Kanban board (Azure DevOps style)
- [ ] Role-based access (admin / user)
- [ ] Search & filtering
- [ ] Analytics / reporting
- [ ] Mobile optimization

---

## Background

CI-Ticket started as an internal tool used in a production environment as an NW.js application.

The original version was a simple one-page application available at each workstation. It only contained a basic form with a few fields:

- employee number
- first name
- last name
- idea
- production line
- category

Ideas were submitted and stored, but there was no easy way to view or manage them. The data existed in Azure DevOps, but accessing it was not practical for operators.

When I joined the company, I started experimenting with the tool. I discovered that the submitted ideas could be accessed, and I saw an opportunity to improve usability by bringing that data directly into the application. The tool was used by approximately 100 employees in daily production work, which highlighted the need for better usability and visibility.

The first improvement was simple:

- fetch user-specific tickets with a GET request
- display them in a collapsible UI (inspired by W3Schools examples)

From there, the tool evolved step by step:

- users could browse their own ideas
- tickets were color-coded by status
- editing functionality was added
- commenting was introduced

What started as a small improvement turned into a much more capable internal tool.

---

## Evolution

The internal version of this tool was actively developed over time (2024–2025).

What started as a simple form gradually evolved into a more complex system, including:

- user-specific ticket views
- status-based color coding
- editing functionality
- commenting system
- tagging and filtering
- UI improvements and responsiveness
- language switching and theming

Development was iterative and hands-on, with features added as real needs appeared in daily use.

This rebuild is based on those learnings — but implemented with a proper architecture from the start.

---

## Purpose of This Project

This repository is a **complete rebuild** of that idea.

The goal is to:

- build the system properly from scratch
- use a modern full-stack approach
- improve maintainability and scalability
- recreate and improve key features from the original tool

At the same time, this project serves as a **portfolio project**.

---

## Future Vision

The goal is to go beyond the original tool and include:

- Full Kanban board (similar to Azure DevOps)
- Real-time updates
- Multi-department usage
- Scalable backend
- Clean UI/UX
- Potential multi-company support

---

## Fun Fact

The original version started as a simple form… and slowly turned into a feature-heavy internal tool with:

- tagging
- language switching
- themes
- editing
- comments
- status colors
- loading screens
- and a lot of creative `if` statements

At some point it became clear:

> “this needs a proper rebuild before it turns into a full-time debugging job”

So this project is that rebuild — done properly.

---

## Author

Built by Sten (Scriptk1ddie)
