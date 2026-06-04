# Notion Community Event Portal

This is an event registration platform I built for our college's tech clubs. It allows community managers to post events and students to register for them easily. I wanted to give it a clean, minimal look similar to Notion.

## Features
- Landing page with upcoming events and workshops
- Detailed event pages
- Registration form for students
- Admin dashboard to manage events and see who registered

## Tech Stack
- React & Tailwind CSS
- Node.js & Express
- MongoDB (Mongoose)

## How to run it locally

You need two terminals to run this project (one for frontend, one for backend).

**Backend Setup:**
```bash
cd backend
npm install
npm run dev
```
Make sure you have your MongoDB URI in a `.env` file. (If your college WiFi blocks MongoDB Atlas, it will automatically fallback to a local in-memory database for testing).

**Frontend Setup:**
```bash
cd frontend
npm install
npm run dev
```

Open `http://localhost:5173` in your browser.
To access the admin panel, go to `http://localhost:5173/admin` and use the password `admin`.
