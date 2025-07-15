# 🌐 Log Ingestion & Querying System – Frontend

This is the React-based frontend for the **Log Ingestion and Querying System**. It provides an elegant, responsive interface for developers to filter, search, and view ingested logs by various parameters such as level, message content, timestamp range, and more.

---

## ⚙️ Features

- 🔍 Filter logs by message, level, resource ID, timestamp, trace ID, and commit
- 🗂 View logs in a structured, color-coded table
- 🧰 Reusable component architecture
- 📅 Integrated date filtering
- 🎨 Modern, clean, and responsive UI with fade-in animations
- 🔄 Real-time filter application and clear/reset functionality

---

## 🛠 Tech Stack

- [React 19](https://react.dev)
- [Vite](https://vitejs.dev) – Development bundler
- [Tailwind CSS (optional)] or custom CSS (used here)
- No Redux – lightweight state management via hooks

---

## 📁 Folder Structure

frontend/
├── components/
│ ├── common/
│ │ ├── InputField.jsx
│ │ ├── Dropdown.jsx
│ │ └── DatePicker.jsx
│ ├── FilterBar.jsx
│ └── LogTable.jsx
├── services/
│ └── api.js # Fetch wrapper for backend calls
├── styles/
│ └── index.css # Root CSS variables and layout
├── App.jsx # Main app layout and logic
├── main.jsx # Entry point
├── index.html
├── package.json
└── vite.config.js


---

## 🚀 Getting Started

### 1. Install Dependencies

```bash
cd frontend
npm install

npm run dev   #Run Development Server
The frontend runs on: http://localhost:5173
