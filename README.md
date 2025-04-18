# blog-with-simple-cms 🌟

![Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-000000?style=for-the-badge&logo=vercel)
![Next.js](https://img.shields.io/badge/Framework-Next.js-000000?style=for-the-badge&logo=next.js)
![License](https://img.shields.io/badge/License-MIT-blue.svg?style=flat)

Ein leichtgewichtiges Blogging-System mit integriertem CMS, entwickelt mit Next.js und React-Query. Ziel ist es, dem Instagram-Account [@lipp.tattoos](https://www.instagram.com/lipp.tattoos/) ein intuitives, performantes Blog-System bereitzustellen.

---

## 📖 Inhaltsverzeichnis

1. [Live](#produktion)
2. [Features](#features)
3. [Technologien](#technologien)
4. [Installation](#installation)
5. [Umgebungsvariablen](#umgebungsvariablen)
6. [Entwicklung & Nutzung](#entwicklung--nutzung)
7. [Deployment](#deployment)
8. [Beitrag leisten](#beitrag-leisten)
9. [Lizenz](#lizenz)
10. [Kontakt](#kontakt)

---

## 🚀 Produktion

> Live: [hier klicken](https://lipptattoos.vercel.app/)

---

## ✨ Features

- 🛡 **Auth.js & Google-OAuth**: Sichere Anmeldung mit zulässigen E-Mails aus der MongoDB
- 📂 **MongoDB**: Speicherung von Blog-Beiträgen und Nutzer-E-Mail-Whitelist
- ⚡ **Next.js**: Server-Side Rendering (SSR) & statische Optimierung
- 🔄 **Axios & React-Query**: Effizientes Data-Fetching mit Hydration & Caching
- 🎨 **TailwindCSS**: Schnelles Styling mit Utility-Klassen
- 🔧 **Aceternity UI**: Wiederverwendbare Komponenten für ein konsistentes Design

---

## 🛠 Technologien

| Technologie       | Version (Beispiel) |
| ----------------- | ------------------ |
| Next.js           | 15.x               |
| React             | 19.x               |
| auth.js           | 4.x                |
| MongoDB           | 6.x                |
| Axios             | 1.x                |
| React-Query       | 5.x                |
| TailwindCSS       | 4.x                |
| Aceternity UI     | 1.x                |

---

## 📥 Installation

1. Repo klonen:
   ```bash
   git clone https://github.com/mariokreitz/blog-with-simple-cms.git
   cd blog-with-simple-cms
   ```
2. Dependencies installieren:
   ```bash
   npm install
   # oder yarn install
   ```
3. Umgebungsvariablen einrichten:
   ```bash
   cp .env.example .env.local
   # Werte in .env.local anpassen
   ```

---

## 🔑 Umgebungsvariablen

In `.env.example` findest du Musterwerte. Ersetze sie durch deine echten Credentials:

```env
MONGODB_URI="mongodb+srv://<USERNAME>:<PASS>@cluster0.mongodb.net/<DB_NAME>?retryWrites=true&w=majority&appName=Cluster0"
AUTH_SECRET="dein_auth_secret"

GOOGLE_CLIENT_ID="deine_google_client_id.apps.googleusercontent.com"
GOOGLE_CLIENT_SECRET="dein_google_client_secret"

EMAIL_DEV="deine_dev_email@beispiel.com"
EMAIL_OWNER="deine_owner_email@beispiel.com"
```

---

## 🖥 Entwicklung & Nutzung

- **Dev-Server**:
  ```bash
  npm run dev
  # ↳ http://localhost:3000
  ```
- **Production Build**:
  ```bash
  npm run build
  npm start
  ```

---

## 📦 Deployment

**Mit Vercel** für automatisiertes Deploy und SSR:

1. Git-Repo mit Vercel verbinden
2. Umgebungsvariablen in Vercel-Dashboard pflegen
3. Push → automatischer Build & Deploy

---

## 🤝 Beitrag leisten

Contributions, Issues und Vorschläge willkommen! Bitte öffne ein Issue oder einen Pull Request.

---

## 📄 Lizenz

MIT © [Mario Kreitz]

---

## 📬 Kontakt

- Entwickler: **Mario Kreitz**
- Unterstützt für: **[lipp.tattoos](https://www.instagram.com/lipp.tattoos/)**

---

> _Als Angular-Dev-Experte war dieses Projekt mein Ausflug in die React-Welt – ein lehrreicher Prozess!_
