# blog-with-simple-cms 🌟

[![Live Demo](https://img.shields.io/badge/Live-https%3A%2F%2Flipptattoos.vercel.app-00ACEE?style=for-the-badge&logo=vercel)](https://lipptattoos.vercel.app/)
[![Next.js](https://img.shields.io/badge/Framework-Next.js-000000?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![MongoDB](https://img.shields.io/badge/Database-MongoDB-47A248?style=for-the-badge&logo=mongodb)](https://www.mongodb.com/)
[![AWS S3](https://img.shields.io/badge/Storage-AWS%20S3-569A31?style=for-the-badge&logo=amazon-aws)](https://aws.amazon.com/s3/)
[![React Query](https://img.shields.io/badge/Data%20Fetching-React%20Query-blue?style=for-the-badge&logo=react-query)](https://react-query.tanstack.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg?style=flat)](./LICENSE)

## Übersicht

**blog-with-simple-cms** ist eine schlanke Blogging-Plattform mit integriertem Content-Management-System. Entwickelt mit Next.js, React Query und Auth.js, ermöglicht sie das komfortable Erstellen, Bearbeiten und Veröffentlichen von Blog-Beiträgen. Bilder werden direkt in AWS S3 hochgeladen, Beiträge und Nutzerdaten werden in MongoDB gespeichert. Hosting und Continuous Deployment erfolgen über Vercel.

## Live-Demo

> Schau es dir in Aktion an: [https://lipptattoos.vercel.app/](https://lipptattoos.vercel.app/)

## Inhaltsverzeichnis

1. [Features](#features)
2. [Screenshots](#screenshots)
3. [Tech Stack](#tech-stack)
4. [Installation](#installation)
5. [Umgebungsvariablen](#umgebungsvariablen)
6. [Skripte](#skripte)
7. [Projektstruktur](#projektstruktur)
8. [Deployment](#deployment)
9. [Contributing](#contributing)
10. [Lizenz](#lizenz)
11. [Kontakt](#kontakt)

## Features

- 🔒 **Authentifizierung**: Auth.js mit Google OAuth und Whitelist-Validierung in MongoDB
- 📝 **CMS-Dashboard**: Erstellen, Bearbeiten und Löschen von Beiträgen
- 📤 **Image Upload**: Direktes Hochladen von Bildern in einen AWS S3 Bucket
- ⚡ **Performance**: Server-Side Rendering (SSR) und statische Generierung (SSG) mit Next.js
- 🔄 **Daten-Fetching**: React Query & Axios mit Caching und Re-Validation
- 🎨 **Styling**: Flexible und responsive UI mit Tailwind CSS

## Screenshots

### Admin: Bilder Hochladen
![Lipp Tattoo - Admin Bilder Hochladen](https://raw.githubusercontent.com/mariokreitz/blog-with-simple-cms/refs/heads/main/public/Lipp%20Tattoo%20-%20Admin%20Bilder%20Hochladen.png)

### Admin: Einstellungen
![Lipp Tattoo - Admin Einstellungen](https://raw.githubusercontent.com/mariokreitz/blog-with-simple-cms/refs/heads/main/public/Lipp%20Tattoo%20-%20Admin%20Einstellung.png)

### Profilseite: Das bin Ich
![Lipp Tattoo - Das bin Ich](https://raw.githubusercontent.com/mariokreitz/blog-with-simple-cms/refs/heads/main/public/Lipp%20Tattoo%20-%20Das%20bin%20Ich.png)

### Startseite
![Lipp Tattoo - Startseite](https://raw.githubusercontent.com/mariokreitz/blog-with-simple-cms/refs/heads/main/public/Lipp%20Tattoo%20-%20Startseite.png)

## Tech Stack

| Komponente        | Technologie                |
| ----------------- | -------------------------- |
| Framework         | Next.js                    |
| UI & Styling      | React, Tailwind CSS        |
| Daten-Fetching    | React Query, Axios         |
| Authentifizierung | Auth.js (OAuth)            |
| Datenbank         | MongoDB                    |
| Storage           | AWS S3                     |
| Hosting           | Vercel                     |
| Sprache           | TypeScript                 |

## Installation

1. Repository klonen:
   ```bash
   git clone https://github.com/mariokreitz/blog-with-simple-cms.git
   cd blog-with-simple-cms
   ```
2. Abhängigkeiten installieren:
   ```bash
   npm install
   # oder yarn install
   ```
3. Umgebungsvariablen konfigurieren (siehe unten)

## Umgebungsvariablen

Erstelle eine Kopie der Beispiel-Datei und fülle deine Zugangsdaten ein:

```bash
cp .env.example .env.local
```

**.env.local**
```env
MONGODB_URI="your_mongodb_connection_string"
AUTH_SECRET="generated_by_npx_auth"

GOOGLE_CLIENT_ID="your_google_client_id"
GOOGLE_CLIENT_SECRET="your_google_client_secret"

NEXT_PUBLIC_AWS_REGION="your_aws_region"
NEXT_PUBLIC_S3_BUCKET="your_s3_bucket"
AWS_ACCESS_KEY_ID="your_aws_access_key_id"
AWS_SECRET_ACCESS_KEY="your_aws_secret_access_key"
```

## Skripte

| Skript            | Beschreibung                        |
| ----------------- | ----------------------------------- |
| `npm run dev`     | Entwicklungsserver starten (localhost:3000) |
| `npm run build`   | Produktions-Build generieren        |
| `npm start`       | Produktions-Server starten          |
| `npm run lint`    | Code-Linter ausführen               |

## Projektstruktur

```
├── components/     # Wiederverwendbare UI-Komponenten
├── pages/          # Next.js Seiten & API-Routen
├── lib/            # Utility-Funktionen und API-Clients
├── hooks/          # Custom React Hooks
├── public/         # Statische Assets
├── styles/         # Globale Styles und Konfiguration
├── .env.local      # Umgebungsvariablen
└── README.md       # Projekt-Readme
```

## Deployment

Der Deployment-Prozess auf Vercel ist automatisiert:

1. Verbinde das GitHub-Repository mit deinem Vercel-Konto.
2. Lege die Umgebungsvariablen im Vercel-Dashboard an.
3. Jeder Push in den Haupt-Branch löst automatisch einen Build und ein Deployment aus.

## Contributing

Beiträge sind willkommen! Bitte folge diesem Workflow:

1. Forke das Repository
2. Erstelle einen Feature-Branch (`git checkout -b feature/XYZ`)
3. Committe und pushe deine Änderungen
4. Öffne einen Pull Request

## Lizenz

Dieses Projekt ist unter der MIT-Lizenz lizenziert. Siehe [LICENSE](./LICENSE) für Details.

## Kontakt

**Mario Kreitz** • [GitHub](https://github.com/mariokreitz) • [Live Demo](https://lipptattoos.vercel.app/)

