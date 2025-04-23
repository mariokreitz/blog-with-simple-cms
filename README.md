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
2. [Tech Stack](#tech-stack)
3. [Installation](#installation)
4. [Umgebungsvariablen](#umgebungsvariablen)
5. [Skripte](#skripte)
6. [Projektstruktur](#projektstruktur)
7. [Deployment](#deployment)
8. [Contributing](#contributing)
9. [Lizenz](#lizenz)
10. [Kontakt](#kontakt)

## Features

- 🔒 **Authentifizierung**: Auth.js mit Google OAuth und Whitelist-Validierung in MongoDB
- 📝 **CMS-Dashboard**: Erstellen, Bearbeiten und Löschen von Beiträgen
- 📤 **Image Upload**: Direktes Hochladen von Bildern in einen AWS S3 Bucket
- ⚡ **Performance**: Server-Side Rendering (SSR) und statische Generierung (SSG) mit Next.js
- 🔄 **Daten-Fetching**: React Query & Axios mit Caching und Re-Validation
- 🎨 **Styling**: Flexible und responsive UI mit Tailwind CSS

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

## Google OAuth Einrichtung

Folge diesen Schritten, um Google OAuth für das Projekt einzurichten:

1. **Google Cloud Console öffnen**
   - Melde dich in der Google Cloud Console an: https://console.cloud.google.com/
2. **Neues Projekt anlegen**
   - Klicke auf „Projekt erstellen“ und vergebe einen Namen (z. B. `blog-with-simple-cms`).
3. **OAuth-Zustimmungsbildschirm konfigurieren**
   - Navigiere zu „APIs & Dienste → OAuth-Zustimmungsbildschirm“.
   - Wähle „Extern“ aus und fülle alle Pflichtfelder (App-Name, Benutzer-Support-E-Mail) aus.
   - Speichere die Einstellungen.
4. **OAuth 2.0-Anmeldedaten erstellen**
   - Gehe zu „Anmeldedaten → Anmeldedaten erstellen → OAuth-Client-ID“.
   - Wähle „Webanwendung“.
   - Trage unter „Autorisierte Weiterleitungs-URIs“ folgenden URI ein:
     ```
     https://<deine_webseite>.vercel.app/api/auth/callback/google
     ```
   - Erstelle die Anmeldedaten und kopiere die generierte **Client-ID** und **Client-Geheimnis**.
5. **Umgebungsvariablen befüllen**
   - Füge `GOOGLE_CLIENT_ID` und `GOOGLE_CLIENT_SECRET` in deine `.env.local` ein.

   ```env
   GOOGLE_CLIENT_ID="your_google_client_id.apps.googleusercontent.com"
   GOOGLE_CLIENT_SECRET="your_google_client_secret"
   ```

---

## AWS S3 Bucket Einrichtung

Befolge diese Anleitung, um einen S3 Bucket für Bild-Uploads anzulegen und abzusichern:

1. **AWS Management Console öffnen**
   - Melde dich bei der AWS-Konsole an: https://console.aws.amazon.com/s3/
2. **Bucket erstellen**
   - Klicke auf „Bucket erstellen“.
   - Vergib einen eindeutigen Namen (z. B. `blog-images`) und wähle deine Region (`NEXT_PUBLIC_AWS_REGION`).
   - Lasse die Standard-Einstellungen für Versionierung und Verschlüsselung gesetzt.
   - Erstelle den Bucket.
3. **CORS-Konfiguration**
   - Wähle den neuen Bucket aus und navigiere zu **Berechtigungen → CORS-Konfiguration**.
   - Ersetze die bestehende XML-Konfiguration durch folgende JSON-Konfiguration:
     ```json
     [
       {
         "AllowedHeaders": ["*"],
         "AllowedMethods": ["GET", "PUT", "POST", "HEAD"],
         "AllowedOrigins": [
           "https://<deine_webseite>.vercel.app",
           "http://localhost:3000"
         ],
         "ExposeHeaders": ["ETag", "x-amz-request-id"],
         "MaxAgeSeconds": 3000
       }
     ]
     ```
4. **Öffentlichen Zugriff beschränken**
   - Unter **Bucket-Einstellungen → Öffentlichen Zugriff beschränken** alle vier Optionen deaktivieren.
5. **Bucket-Richtlinie**
   - Lege unter **Berechtigungen → Bucket-Richtlinie** folgende Policy an (ersetze `your_s3_bucket`):
     ```json
     {
       "Version": "2012-10-17",
       "Statement": [
         {
           "Sid": "AllowOnlyFromMySite",
           "Effect": "Allow",
           "Principal": "*",
           "Action": "s3:GetObject",
           "Resource": "arn:aws:s3:::your_s3_bucket/uploads/*",
           "Condition": {
             "StringLike": {
               "aws:Referer": [
                 "https://<deine_webseite>.vercel.app/*",
                 "http://localhost:3000/*"
               ]
             }
           }
         }
       ]
     }
     ```
6. **IAM-Benutzer und Berechtigungen**
   - Erstelle unter **IAM → Benutzer** einen neuen Benutzer mit Programmzugriff (Access Keys).
   - Weise diesem Benutzer eine Richtlinie zu, die mindestens folgende S3-Rechte enthält:
     ```json
     {
       "Version": "2012-10-17",
       "Statement": [
         {
           "Effect": "Allow",
           "Action": [
             "s3:PutObject",
             "s3:GetObject",
             "s3:DeleteObject"
           ],
           "Resource": [
             "arn:aws:s3:::your_s3_bucket/*"
           ]
         }
       ]
     }
     ```
7. **Umgebungsvariablen befüllen**
   - Trage `AWS_ACCESS_KEY_ID`, `AWS_SECRET_ACCESS_KEY`, `NEXT_PUBLIC_AWS_REGION` und `NEXT_PUBLIC_S3_BUCKET` in deine `.env.local` ein:
     ```env
     NEXT_PUBLIC_AWS_REGION="your_aws_region"
     NEXT_PUBLIC_S3_BUCKET="your_s3_bucket"
     AWS_ACCESS_KEY_ID="your_aws_access_key_id"
     AWS_SECRET_ACCESS_KEY="your_aws_secret_access_key"
     ```

---

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

