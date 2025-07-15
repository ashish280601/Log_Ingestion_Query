# 🛠️ Log Ingestion & Querying System – Backend

This is the backend server for the Log Ingestion and Querying System. It allows log ingestion via `POST /logs` and querying logs via `GET /logs` with support for full-text search and advanced filtering.

---

## 🚀 Features

- ✅ `POST /logs` – Accepts and stores structured log entries
- 🔍 `GET /logs` – Filter logs by message, level, resource ID, trace ID, commit, and timestamp range
- 🗂 Logs are persisted in a local `logs.json` file (no database needed)
- 🔄 Built-in CORS support for frontend requests
- 🧪 Unit testing support via **Jest**
- ♻️ Modular codebase with `services`, `controllers`, `routes`, and `middleware`

---

## 📦 Tech Stack

- **Node.js**
- **Express.js**
- File storage using `fs/promises`
- **Jest** for unit testing

---

## 📁 Folder Structure

backend/
├── controllers/ # Request handlers
│ └── logController.js
├── middleware/ # Middleware (e.g., validation)
│ └── validateLog.js
├── routes/ # Route definitions
│ └── log.route.js
├── services/ # Business logic
│ └── logService.js
├── tests/ # Unit tests (Jest)
│ └── logService.test.js
├── data/ # Log storage
│ └── logs.json
├── app.js # Express app
├── server.js # Server entry point
└── package.json
---

## 🧰 Setup Instructions

### 1. Install Dependencies

```bash
cd backend
npm install

npm start         # plain node to start the server
The backend runs on: http://localhost:5000
