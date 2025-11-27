# Sports Travel — Landing Page & Lead Capture System

This project is a fully responsive sports travel landing page built as part of a frontend assignment.
It demonstrates component-based UI design, smooth interactions, and a backend-powered lead form.

The project includes:

- **Assignment** Sports Travel Platform — Landing Page + Lead Form Flow
- **Focus Areas** UI/UX, smooth animations, mobile responsiveness, reusable components, clean code
- **Backend** ExpressJS lead submission API (deployed separately)

---

## 🚀 Live Demo

- **Frontend (Vercel)**
  https://sports-travel-landing-gamma.vercel.app/
- **Backend (Render)**
  https://sports-travel-landing-api.onrender.com/

---

## 📦 Installation and Running the App

### Prerequisites

- Node.js version 20 or higher (LTS recommended)
- npm (Node package manager) installed
- (Optional) Postman for testing backend API

### Steps to run the Frontend (Next.js)

1. **Clone the repository**

```
git clone https://github.com/yourusername/sports-travel-app.git
cd sports-travel-app

```

2. **Install dependencies**

```
npm install
```

3. **Run the development server**

```
npm run dev
```

4. **Open the app**

- By default, app will start at `http://localhost:3000`
- Open this URL in your browser to use the application locally

---

### Steps to run the Backend (Express.js)

1. **Navigate to the backend folder:**

```
cd backend
```

2. **Install dependencies**

```
npm install
```

3. **Run the development server**

```
npm run dev
```

4. **This runs the backend at:**

- By default, app will start at `http://localhost:4000`

---

**API Endpoint**

- POST /api/leads

**Request body:**

```
{
  "name": "",
  "email": "",
  "phone": "",
  "message": ""
}

```

---

## 🛠️ Tech Stack

Frontend

- **Next.js 14 (App Router)**
- **React 18** with functional components and hooks
- **Tailwind CSS v3** for styling and design system
- **Typescript**
- **React Hook Form**
- **React Toastify**
- **Next/Image optimization**

Backend

- **Express.js**
- **CORS**
- **Node.js FS (File Storage)**

---

## 📁 Project Structure

```
/
├── app/
│   ├── components/
│   │   ├── Navbar.tsx
│   │   ├── Hero.tsx
│   │   ├── FeaturedEvent.tsx
│   │   ├── TopPackages.tsx
│   │   ├── WhyChooseUs.tsx
│   │   ├── HowItWorks.tsx
│   │   ├── SampleItinerary.tsx
│   │   ├── AddOnsSection.tsx
│   │   ├── LeadFormSection.tsx
│   │   └── Footer.tsx
│   ├── globals.css
│   └── page.tsx
│
├── backend/
│   ├── server.js
│   ├── package.json
│   └── leads.json
│
└── public/
    └── logo.png

```

---

## 🚧 Future Enhancements

- Add Framer Motion page and card animations
- Add backend validation + rate limiting
- Replace JSON storage with PostgreSQL/MongoDB
- Add a CMS-driven events list
- Create admin dashboard for leads
- Multi-lingual & multi-currency support

---
