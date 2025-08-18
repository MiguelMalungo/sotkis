Design Handoff Guide

Overview

This document summarizes the visual system used in this UI so another team can rebuild it (e.g., in C# Blazor) with high fidelity and consistent behavior. It pairs with tokens in design/tokens.json and the CSS variables in design/css-variables.css.

Design Language

- Modern enterprise dashboard grid: card-based, responsive layouts
- Utility-first styling (Tailwind) with custom CSS variables for theming
- Clean typography (Roboto), high-contrast on dark background
- Consistent chart palette and tooltip styling across dashboards

Design Tokens

- See design/tokens.json for the canonical source of:
  - Colors: brand color and theme variables (light/dark)
  - Radii: base, lg, md, sm
  - Typography: font families
  - Breakpoints: Tailwind default scales
  - Animations: named keyframes used
  - Charts: palette and tooltip styles

CSS Variables

- See design/css-variables.css. This mirrors the variables declared in src/index.css so you can import them into a non-Tailwind project and keep theming consistent.

Component Inventory (core)

- Button: primary (bg brand green, white text), outline (white text), hover states defined in CSS
- Input / Select: base field styles; Select built on Radix primitives; sizes are default
- Card: base container with glass effect (card-glass); common sections: Header, Title, Content
- Table: header, row, body; sorting icons sized to 8px via CSS
- KPI Tiles: small metric tiles; white text, subtle labels, icon badge on the right
- Filters: date range, department, island, container, user; quick presets via buttons or dropdown
- Charts: Recharts with common palette and custom tooltip

Responsive Behavior

- Grid patterns: grid-cols-1 on mobile; expand to 2/3/4 columns on larger screens
- Breakpoints: sm 640, md 768, lg 1024, xl 1280, 2xl 1536 (Tailwind defaults)
- Headers and subtitles align right on mobile per src/index.css overrides

Chart Styling

- Primary palette: ["#9EC043", "#4FA9F7", "#FFD700"]; secondary greens: ["#038703", "#4CB151", "#5EA65F", "#568864"]
- Grid lines: rgba(255,255,255,0.1)
- Axes: white text, ~12px
- Tooltip: bg black/90, border white/20, text white

Icons

- Lucide icons; sizes commonly 16/20/24; color inherits from context; hover overrides provided

Interaction States

- Buttons: hover darkens/greens; outline buttons invert on hover in some contexts
- Inputs: focus border and ring in brand green per CSS overrides

Blazor Mapping Guidelines

- Create a CSS variables layer using design/css-variables.css (or copy variables into your global stylesheet)
- Define Razor components mirroring Button, Card (Header/Title/Content), Input/Select, Table
- Use Tailwind breakpoints as media queries or an equivalent responsive system
- Choose a chart library and apply tokens.charts palette and tooltip styles
- Keep icon sizing to 16/20/24 and reuse the palette for semantic accents

File Map

- design/tokens.json — canonical tokens for colors, radii, typography, breakpoints, animations, charts
- design/css-variables.css — CSS variables for theming (light/dark)
- src/index.css — app-wide CSS including variables, overrides, and interactions
- tailwind.config.js — Tailwind theme extension (colors, radii, fonts, animations)

Notes

- The brand green is #9EC043 ("sotkis green").
- Light/dark variables are included for completeness; the app primarily uses a dark presentation with translucent/glass cards.

