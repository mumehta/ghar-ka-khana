# Ghar Ka Khana

Marketing landing page for a home-style Indian meal business, built with React and Vite.

## Project overview

- Single-page React app with the main UI in `src/App.jsx`
- Vite-based local development and production build flow
- Styling is currently handled in `src/index.css`
- The primary CTA is a WhatsApp join link, which is still a placeholder in `src/App.jsx`

## Prerequisites

- Node.js and npm
- GNU Make
- Windows PowerShell

## Getting started

Install dependencies:

```bash
make install
```

Start the app:

```bash
make start
```

The app starts on `http://localhost:5173`.

`make start` always targets the default Vite port (`5173`). If something is already listening on that port, the target stops that process first and then starts the app again on the same port.

## Make targets

```bash
make help
make install
make start
make stop
make build
make preview
make lint
make clean
```

## Direct npm scripts

If you prefer using npm directly, the equivalent commands are:

```bash
npm install
npm run dev
npm run build
npm run preview
npm run lint
```

## Project structure

```text
.
|-- public/
|-- src/
|   |-- App.jsx
|   |-- index.css
|   `-- main.jsx
|-- index.html
|-- Makefile
|-- package.json
`-- vite.config.js
```
