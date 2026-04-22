# Plan: ATS-Friendly CV Builder

**TL;DR** — A local **React + Vite + TypeScript** app that reads all your CV data from a single **JSON file** and generates an **ATS-friendly PDF** using `@react-pdf/renderer`. Setup is just `npm install && npm run dev`. Edit JSON → see live preview in browser → click download.

---

## Why this approach (not LaTeX)

- **No toolchain pain on Windows** — no MiKTeX/TeX Live install, no PATH issues. Just Node.js + npm.
- **`@react-pdf/renderer` creates PDFs using the PDF spec directly** (via pdfkit under the hood) — text is real PDF text objects, not screenshots. Fully selectable, searchable, and ATS-parseable.
- **Live preview** — Vite HMR means you edit JSON and see changes instantly in the browser.
- **Familiar tech** — React + TypeScript. No LaTeX syntax to learn.

---

## Sections

1. **Header** — name, job title, email, phone, location, LinkedIn, GitHub
2. **Work Experience** — reverse chronological, bullet points for achievements
3. **Education** — institution, degree, dates
4. **Skills** — grouped by category (Languages, Frameworks, Tools, etc.)

---

## Project Structure

```
my-cv/
├── package.json
├── vite.config.ts
├── tsconfig.json
├── index.html
├── src/
│   ├── main.tsx
│   ├── App.tsx
│   ├── data/
│   │   └── cv-data.json          ← EDIT THIS to update your CV
│   ├── types/
│   │   └── cv.ts                 ← TypeScript interfaces
│   ├── pdf/
│   │   ├── CVDocument.tsx         ← Root Document + Page
│   │   ├── Header.tsx
│   │   ├── Experience.tsx
│   │   ├── Education.tsx
│   │   ├── Skills.tsx
│   │   └── styles.ts             ← Shared StyleSheet
│   └── preview/
│       └── PDFPreview.tsx         ← Browser viewer + download button
```

---

## Steps

### Phase 1 — Scaffold

1. Run `pnpm create vite@latest . -- --template react-ts` (inside the `my-cv/` folder) to scaffold with the latest Vite + React + TypeScript template
2. Install the PDF dep: `npm install @react-pdf/renderer`

### Phase 2 — Data Layer

3. Define TypeScript interfaces for `CVData`, `Experience`, `Education`, `Skill`, `ContactInfo`
4. Create `cv-data.json` with placeholder content — this is the **only file you edit** to update your CV

### Phase 3 — PDF Components (core — this is where ATS compliance lives)

5. Create shared `styles.ts` — Helvetica font (built into PDF spec), single-column, no graphics, proper heading hierarchy
6. `Header.tsx` — name, title, contact info as a compact horizontal line
7. `Experience.tsx` — job title, company, date range, bullet-point achievements
8. `Education.tsx` — institution, degree, dates
9. `Skills.tsx` — skills grouped by category as comma-separated lists
10. `CVDocument.tsx` — composes all sections into `<Document><Page>`

### Phase 4 — Preview & Download

11. `PDFPreview.tsx` — uses `<PDFViewer>` for live in-browser preview + `<PDFDownloadLink>` for one-click export
12. Wire up `App.tsx` and `main.tsx`

### Phase 5 — Polish

13. Add `README.md` with setup/edit/export instructions

---

## ATS Design Rules (built into the templates)

- **Single column** — no sidebar (ATS parsers read top-to-bottom)
- **No images or icons** in content
- **Standard section headings**: "Experience", "Education", "Skills" (ATS looks for these exact keywords)
- **Reverse chronological** order
- **Bullet points** for achievements
- **No tables for layout** — flexbox only
- **Helvetica** (built-in PDF font, no embedding needed)
- **Contact info as plain text** (not hidden in graphics)

---

## Verification

1. `npm run dev` → browser shows live PDF preview
2. Edit `cv-data.json` → preview hot-reloads
3. Click download → PDF file saved
4. **ATS test**: Open PDF → Select All → Copy → Paste into Notepad → all text should be intact and readable
5. Optional: upload to a free ATS checker (resumeworded.com, jobscan.co) to validate parsing

---

## Decisions

| Decision                             | Rationale                                                                               |
| ------------------------------------ | --------------------------------------------------------------------------------------- |
| `@react-pdf/renderer` over Puppeteer | Puppeteer screenshots HTML → can break ATS. @react-pdf creates native PDF text objects. |
| Web tech over LaTeX                  | Avoids TeX distribution install on Windows. Same ATS quality for text CVs.              |
| Vite over Next.js                    | Local-only tool doesn't need SSR/routing. Vite is lighter.                              |
| JSON over YAML                       | Native to JS/TS, no extra parser, TypeScript validates the shape.                       |
| Helvetica font                       | Built into every PDF reader, no font files to manage.                                   |
