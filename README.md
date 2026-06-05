<div align="center">
  <img src="frontend/src/assets/notion_logo.png" alt="Notion Logo" width="80" height="80" />
  <h1>Notion Community @ VIT Bhopal</h1>
  <p><strong>The official event registration portal for Notion Community events at VIT Bhopal University.</strong></p>
  
  [![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://reactjs.org/)
  [![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)](https://nodejs.org/)
  [![Express.js](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)](https://expressjs.com/)
  [![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)](https://www.mongodb.com/)
  [![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
</div>

<br />

> **IMPORTANT:**
>
> 🚀 **Live Demo:** The project is already fully deployed and live at: <br />
> **[https://notion-community-event-portal-front.vercel.app/](https://notion-community-event-portal-front.vercel.app/)**
>
> _Note: The backend is hosted on Render's free tier, which goes to sleep after inactivity. It may take 30-50 seconds to spin up when you first visit the site. Please be patient!_
>
> ---
>
> 🔐 **Admin Access:** To evaluate the admin dashboard on the live site, navigate to the `/admin` route and use the password below: <br />
> **Password:** `admin`

<br />

## About the Project

This is a full-stack web application designed to handle the end-to-end lifecycle of event registrations for the Notion Community at VIT Bhopal University. It provides a beautiful, modern frontend for students to discover events and register, alongside a secure backend and admin dashboard for the club to manage operations.

<br />

### ✨ Key Features

- **Dynamic Event Discovery** <br />
  Students can browse upcoming workshops, hackathons, and speaker sessions in a highly responsive UI.

- **Frictionless Registration** <br />
  A clean, optimized registration form capturing student details (Name, Email, Branch, Year, Reason for joining).

- **Admin Dashboard** <br />
  A secured portal (`/admin`) for club administrators to view real-time registrations and publish new events dynamically.

- **Beautiful UI/UX** <br />
  Built with React, TailwindCSS, and Framer Motion for a premium, "Notion-like" user experience.

- **Robust Backend** <br />
  A Node.js/Express API connected to a MongoDB Atlas database for reliable data storage.

<br />

---

<br />

## Screenshots

### User Interface

|                            Hero Section                             |                             Events Page                              |
| :-----------------------------------------------------------------: | :------------------------------------------------------------------: |
| <img src="screenshots/ui/hero.png" width="400" alt="Hero Section"/> | <img src="screenshots/ui/events.png" width="400" alt="Events Page"/> |

|                             About Section                             |                                  Admin Dashboard                                  |
| :-------------------------------------------------------------------: | :-------------------------------------------------------------------------------: |
| <img src="screenshots/ui/about.png" width="400" alt="About Section"/> | <img src="screenshots/ui/admin_dashboard.png" width="400" alt="Admin Dashboard"/> |

<br />

### Database Architecture (MongoDB Atlas)

|                                 Cluster View                                 |                                 Registrations Collection                                 |
| :--------------------------------------------------------------------------: | :--------------------------------------------------------------------------------------: |
| <img src="screenshots/database/cluster.png" width="400" alt="Cluster View"/> | <img src="screenshots/database/registrations.png" width="400" alt="Registrations Data"/> |

<br />

---

<br />

## Tech Stack

**Frontend:**

- **React (Vite)** – High-performance rendering
- **TailwindCSS** – Utility-first modern styling
- **Framer Motion** – Fluid micro-interactions
- **Axios & React Router DOM** – State and route management

**Backend:**

- **Node.js & Express.js** – Scalable API architecture
- **MongoDB & Mongoose** – NoSQL Database handling
- **JSON Web Tokens (JWT)** – Secure Admin Auth
- **bcryptjs** – Secure password hashing

<br />

---

<br />

## Local Setup Instructions

> **NOTE:** <br />
> The application is already fully deployed. These local setup instructions are provided purely for local testing and code evaluation purposes.

Follow these steps to run the project locally on your machine.

### Prerequisites

Make sure you have [Node.js](https://nodejs.org/) installed on your system.

### 1. Clone the repository

```bash
git clone https://github.com/bhavyabhardwaj001/notion-community-event-portal.git
cd notion-community-event-portal
```

### 2. Setup the Backend

Open a terminal and navigate to the backend directory:

```bash
cd backend
npm install
```

Create a `.env` file in the `backend` directory and add the following:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_super_secret_key
```

Start the backend server:

```bash
npm run dev
```

### 3. Setup the Frontend

Open a **new** terminal and navigate to the frontend directory:

```bash
cd frontend
npm install
```

Start the frontend development server:

```bash
npm run dev
```

The application will now be running at `http://localhost:5173`.

<br />

### 4. Access the Admin Portal

> **IMPORTANT:**
>
> **Admin Dashboard Credentials:** <br />
>
> - URL: `http://localhost:5173/admin` <br />
> - **Password:** `admin`

<br />

---

<br />

## Author

**Built by Bhavya Bhardwaj.** <br />
