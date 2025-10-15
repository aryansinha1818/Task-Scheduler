[![Node.js](https://img.shields.io/badge/Node.js-18.x-green?logo=node.js)](https://nodejs.org/)
[![MongoDB](https://img.shields.io/badge/MongoDB-Atlas%20or%20Local-green?logo=mongodb)](https://mongodb.com/)
[![Docker](https://img.shields.io/badge/Docker-Compose-blue?logo=docker)](https://docker.com/)

# 🗂️ Task Management System

A **full-stack Task Management application** with a **React.js** frontend, **Node.js/Express.js** backend, and **MongoDB** database.  
This system lets users create, assign, track, and manage tasks efficiently.

---

## 🚀 Features
✅ **Task Management** – Create, edit, delete, and view tasks  
✅ **User Management** – Add and manage users  
✅ **Task Assignment** – Assign tasks to specific users  
✅ **Status Tracking** – Track task progress (Pending, In Progress, Completed)  
✅ **Deadline Management** – Set and monitor task deadlines  
✅ **Filtering & Sorting** – Filter tasks by status/deadline and sort by criteria  
✅ **Dashboard Analytics** – View task statistics and overview  
✅ **Responsive Design** – Works on desktop and mobile devices

---

## 🛠️ Tech Stack
**Frontend**
- ⚛️ React.js 18  
- 🔀 React Router DOM  
- 🌐 Axios (API calls)  
- 📦 Context API (state management)  
- 🎨 CSS3 (styling)

**Backend**
- 🟢 Node.js  
- 🚂 Express.js  
- 🍃 MongoDB with Mongoose  
- 🔓 CORS enabled

---

## 📋 Prerequisites

- [Node.js](https://nodejs.org/) (v14+) — *only if running without Docker*
- [MongoDB](https://www.mongodb.com/) — *optional if using Docker*
- [Docker](https://www.docker.com/) & Docker Compose (recommended)
- npm or yarn

---
## 🐳 Docker Support

This application is fully containerized using **Docker** and **Docker Compose** for easy local setup.

### Run with Docker

1. Ensure [Docker](https://www.docker.com/) and [Docker Compose](https://docs.docker.com/compose/) are installed.
2. From the project root, run:
   ```bash
   docker-compose up --build
   ```
3. The app will be available at:
* Frontend: http://localhost:3000
* Backend: http://localhost:5000
---

## ⚙️ Manual Setup (Without Docker)

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/your-username/task-management-system.git
cd task-management-system
```
2️⃣ Backend Setup
# Navigate to backend directory
cd backend

# Install dependencies
npm install

# Create environment file
echo "MONGODB_URL=mongodb://localhost:27017/taskmanager" > .env
echo "PORT=5000" >> .env

# Start the backend server
npm start

Backend will run on 👉 http://localhost:5000

3️⃣ Frontend Setup
# Open a new terminal and navigate to frontend directory
cd frontend

# Install dependencies
npm install

# Start the frontend development server
npm run dev

Frontend will run on 👉 http://localhost:3000

🗄️ Database Setup

Option 1: Local MongoDB

Install MongoDB locally

Start MongoDB service

The application will automatically create the database

Option 2: MongoDB Atlas (Cloud)

Create a free MongoDB Atlas
 account

Create a cluster and get your connection string

Update the .env file:
MONGODB_URL=mongodb+srv://username:password@cluster.mongodb.net/taskmanager

🌐 API Endpoints
👤 User
Method	Endpoint	Description	Request Body
GET	/user	Get all users	-
POST	/user	Create a new user	{ "name": "string", "email": "string" }
✅ Task
Method	Endpoint	Description	Request Body
GET	/task	Get all tasks (supports filters & sorting)	-
POST	/task	Create a new task	{ "title": "...", "description": "...", "status": "pending", "deadline": "YYYY-MM-DD", "assignedTo": "user@email.com" }
PUT	/task/:id	Update a task	Same as POST
DELETE	/task/:id	Delete a task	-
Query Parameters (for GET /task):
status → Filter by status (pending, in-progress, completed)
deadline → Filter by deadline (YYYY-MM-DD)
sortBy → createdAt, deadline, title
sortOrder → asc or desc

🏃 Running the Application

1. Start MongoDB (if using local installation)

2. Start backend:
```
cd backend
npm start
```

3. Start frontend:
```
cd frontend
npm run dev
```

4. Open 👉 http://localhost:3000
  
🔧 Environment Variables
Create a .env file inside backend:
```
MONGODB_URL=mongodb://localhost:27017/taskmanager
PORT=5000
```
🙋‍♂️ 
[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/aryan-sinha-877698212/)

[![gmail](https://img.shields.io/badge/gmail-EA4335?style=for-the-badge&logo=gmail&logoColor=white)](mailto:aryan.sinha1818@gmail.com)
