# 🧑‍💻 Snitik Swaroop — Portfolio

A professional developer portfolio built with **Next.js 14**, **TypeScript**, and **Tailwind CSS**, with a fully working contact form using Nodemailer (SMTP). 

---

## 📁 Project Structure

```
portfolio-next/
├── src/
│   ├── app/
│   │   ├── api/
│   │   │   └── contact/
│   │   │       └── route.ts       # POST /api/contact — sends email via SMTP
│   │   ├── globals.css
│   │   ├── layout.tsx             # Fonts + metadata
│   │   └── page.tsx               # Assembles all sections
│   ├── components/
│   │   ├── Navbar.tsx
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Projects.tsx
│   │   ├── Skills.tsx
│   │   ├── Contact.tsx
│   │   └── SectionLabel.tsx
│   ├── lib/
│   │   └── data.ts                # All placeholder data (edit here!)
│   └── types/
├── .env.example                   # Copy to .env.local
├── tailwind.config.ts
├── tsconfig.json
└── next.config.js
```

---

## 🚀 Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Configure environment variables

```bash
cp .env.example .env.local
```

Open `.env.local` and fill in:

```env
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=your_email@gmail.com
SMTP_PASS=your_16char_app_password
RECEIVER_EMAIL=your_email@gmail.com
```

> **Gmail users** — you need an **App Password**, not your normal password.
> Generate one at → [myaccount.google.com/apppasswords](https://myaccount.google.com/apppasswords)
> Select "Mail" + "Other (custom name)" → copy the 16-character password.

### 3. Run development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

---

## 📧 How the Contact Form Works

1. User fills in Name, Email, Message → clicks **Send Message**
2. Frontend `POST`s to `/api/contact` (Next.js Route Handler)
3. Server validates all fields
4. Two emails are dispatched via Nodemailer:
   - **To you** → nicely formatted HTML email with sender details + reply-to set
   - **To the sender** → a warm auto-reply confirming receipt
5. UI shows spinner → success card or inline error message

---

## ✏️ Customising

All data is in **`src/lib/data.ts`** — edit `PROJECTS`, `SKILLS`, and `STATS`.

Fonts and colors live in:
- `tailwind.config.ts` — color tokens and font families
- `src/app/layout.tsx` — Google Font imports (swap for licensed fonts if desired)
- `src/app/globals.css` — base styles

---

## 🌐 Deploying

### Vercel (recommended)

```bash
npm install -g vercel
vercel
```

Set env vars in the Vercel dashboard under **Settings → Environment Variables**.

### Self-hosted

```bash
npm run build
npm start
```

---

## 🔧 SMTP Provider Reference

| Provider   | Host                      | Port | Secure |
|------------|---------------------------|------|--------|
| Gmail      | smtp.gmail.com            | 587  | false  |
| Outlook    | smtp-mail.outlook.com     | 587  | false  |
| Yahoo      | smtp.mail.yahoo.com       | 465  | true   |
| Zoho       | smtp.zoho.com             | 587  | false  |
| Custom     | mail.yourdomain.com       | 465  | true   |

---

## 🛠 Tech Stack

| Layer     | Technology                          |
|-----------|-------------------------------------|
| Framework | Next.js 14 (App Router)             |
| Language  | TypeScript                          |
| Styling   | Tailwind CSS                        |
| Fonts     | Playfair Display + DM Sans (Google) |
| Icons     | lucide-react                        |
| Email     | Nodemailer                          |
| Deploy    | Vercel / any Node.js host           |
