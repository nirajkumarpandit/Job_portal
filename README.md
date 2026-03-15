# 🚀 MERN Job Portal

A **Full Stack Job Portal Application** built with the MERN stack that connects employers and job seekers on a single platform.

Employers can post job opportunities and manage applications, while candidates can explore job listings and apply directly through the platform.

This project demonstrates modern **full-stack web development practices**, including REST API design, authentication, cloud storage integration, and scalable backend architecture.

---

# 📌 Project Overview

The Job Portal system enables seamless interaction between recruiters and job seekers.

Employers can manage job postings and track applicants, while candidates can search for jobs and submit applications with resumes.

The application follows a **modular MVC architecture** ensuring scalability, maintainability, and clean code organization.

---

# 🛠 Tech Stack

## Frontend

* React
* Vite
* JavaScript
* CSS

## Backend

* Node.js
* Express.js

## Database

* MongoDB
* Mongoose

## Authentication

* JSON Web Tokens (JWT)

## File Upload & Storage

* Multer
* Cloudinary

## Development Tools

* Git
* GitHub
* REST API
* ESLint

---

# ⚙️ Key Features

## User Authentication

* Secure registration and login
* JWT-based authentication
* Protected routes

## Job Management

* Create and manage job postings
* View available jobs
* Job application system

## Company Management

* Register companies
* Manage company profiles
* Upload company logos

## Resume Upload

* Upload candidate resumes
* Secure cloud storage using Cloudinary

## Scalable Backend

* MVC architecture
* Middleware-based authentication
* Centralized async error handling

---

# 🏗 System Architecture

```
Client (React Frontend)
        │
        ▼
REST API (Express Backend)
        │
        ▼
Controllers → Models → MongoDB
        │
        ▼
Cloudinary (File Storage)
```

---

# 📂 Project Structure

```
Job_portal
│
├── frontend
│   ├── public
│   ├── src
│   ├── package.json
│   └── vite.config.js
│
├── backend
│   │
│   ├── controllers
│   │   ├── user.controller.js
│   │   ├── job.controller.js
│   │   ├── company.controller.js
│   │   └── application.controller.js
│   │
│   ├── models
│   │   ├── user.model.js
│   │   ├── job.model.js
│   │   ├── company.model.js
│   │   └── application.model.js
│   │
│   ├── middlewares
│   │   ├── isAuthenticate.js
│   │   └── multer.js
│   │
│   ├── routes
│   │
│   ├── utils
│   │   ├── db.js
│   │   ├── cloudinary.js
│   │   ├── datauri.js
│   │   └── wrapAsync.js
│   │
│   ├── app.js
│   └── package.json
│
└── README.md
```

---

# 🚀 Installation & Setup

## 1️⃣ Clone Repository

```
git clone https://github.com/nirajkumarpandit/Job_portal.git
```

---

## 2️⃣ Backend Setup

```
cd backend
npm install
npm run dev
```

Server runs on:

```
http://localhost:8000
```

---

## 3️⃣ Frontend Setup

```
cd frontend
npm install
npm run dev
```

Frontend runs on:

```
http://localhost:5173
```

---

# 🔑 Environment Variables

Create `.env` file inside the backend folder.

Example configuration:

```
PORT=8000
MONGO_URI=your_mongodb_connection
JWT_SECRET=your_secret_key
CLOUDINARY_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_secret
```

---

# 📸 Screenshots

(Add screenshots of the application UI here)

Examples:

* Home Page
* Job Listings
* Login Page
* Dashboard

---

# 📈 Future Improvements

* Advanced job search and filtering
* Bookmark jobs feature
* Email notifications
* Admin dashboard
* Pagination for job listings
* Job recommendation system

---

# 🤝 Contributing

Contributions are welcome.
Feel free to fork the repository and submit pull requests.

---

# 👨‍💻 Author

Niraj Kumar

GitHub:
https://github.com/nirajkumarpandit

---

⭐ If you like this project, please give it a star on GitHub.
