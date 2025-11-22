# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.




1.Wat moet ik maken?
Een input
Een button
Een lijst van taken 
Tekst typen
Op ‘Toevoegen’ klikken
De ingevoerde tekst (state)
De lijst met taken (state)

2.Welke componenten heb ik nodig?
TodoList.jsx, 

3.Welke state heb ik nodig?
import { useState } from 'react';
4.Wat is de flow?
Gebruiker typt → inputValue wordt geüpdatet
Gebruiker klikt op toevoegen
tasks krijgt een nieuwe taak erbij
5.Pseudo-code
- Maak state: inputValue = ""
- Maak state: tasks = []
- Bij veranderen input → update inputValue
- Bij klikken → voeg inputValue toe aan tasks
- Toon tasks in een lijst
- Leeg inputValue

6.De 3-check
TaskInput component (input + button)
TaskList component (lijst tonen)
App component → bevat de state