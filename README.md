# Notion Community Event Portal

A modern, premium, full-stack event registration platform inspired by Notion's minimalist design aesthetic. Built for university clubs, startups, and community managers to publish events and track registrations seamlessly.

## 🚀 Features

- **Premium UI/UX:** Responsive, glassmorphism elements, Framer Motion animations, and custom Tailwind styling.
- **Dynamic Event Discovery:** A beautiful landing page showcasing upcoming workshops, seminars, and hackathons.
- **Seamless Registration Flow:** Interactive event details pages with clean, accessible registration forms.
- **Admin OS Dashboard:** Secure authentication portal for admins to view registration metrics and publish new events dynamically.
- **Robust Backend API:** RESTful Express.js backend with Mongoose/MongoDB data modeling and JWT authentication.
- **Zero-Config Local Dev:** Integrated in-memory database fallback ensures the app runs perfectly without requiring complex MongoDB Atlas setups.

## 💻 Tech Stack

**Frontend:** React, Tailwind CSS v4, Vite, Framer Motion, Lucide React, React Router, Axios  
**Backend:** Node.js, Express.js, MongoDB (Mongoose), JSON Web Tokens (JWT), bcryptjs

## 🛠️ Local Development Setup

To run this project locally, you will need to start both the backend and frontend development servers.

### 1. Start the Backend Server

Open a terminal and navigate to the backend directory:

```bash
cd backend
npm install
npm run dev
```

*Note: The backend will automatically attempt to connect to MongoDB Atlas using the `.env` URI. If it cannot connect (due to IP whitelisting or network issues), it will seamlessly fallback to an isolated local in-memory database so you can keep developing!*

### 2. Start the Frontend Server

Open a **second** terminal window and navigate to the frontend directory:

```bash
cd frontend
npm install
npm run dev
```

### 3. Usage & Testing

- **Explore:** Visit `http://localhost:5173` to see the public landing page.
- **Admin Access:** Navigate to `http://localhost:5173/admin` to access the Admin OS Dashboard.
- **Master Password:** Use the password `admin` to log in, view the data tables, and create new dummy events for testing.

## 📁 Project Structure

```
├── backend/
│   ├── config/         # Database connection & fallback logic
│   ├── controllers/    # API endpoint logic (Events, Auth, Registrations)
│   ├── middleware/     # JWT protection & error handling
│   ├── models/         # Mongoose Schemas (Admin, Event, Registration)
│   ├── routes/         # Express API routers
│   └── server.js       # Entry point & default admin seeding
│
└── frontend/
    ├── src/
    │   ├── components/ # Reusable UI pieces (Buttons, Inputs, Cards, Navbar)
    │   ├── pages/      # Main views (Home, Events, Registration, Admin Dashboard)
    │   ├── App.jsx     # App Routing logic
    │   └── index.css   # Global Tailwind configurations
    └── tailwind.config.js
```

## 📝 License
Designed for educational purposes and community growth. MIT License.
