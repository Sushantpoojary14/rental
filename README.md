# Full Stack Project

This project consists of a React frontend and Node.js backend.

## Running with Docker

The easiest way to run the project is using Docker Compose:

```bash
# Build and start all services
docker-compose up --build

# To run in detached mode
docker-compose up -d

# To stop all services
docker-compose down
```

The services will be available at:
- Frontend: http://localhost:5173
- Backend: http://localhost:5000



## Manual Setup

### Backend

The backend is a Node.js Express server.

#### Setup
1. Navigate to the backend directory:
   ```bash
   cd backend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```
   The server will run on http://localhost:5000

### Frontend

The frontend is a React application built with Vite.

#### Setup
1. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```
   The application will run on http://localhost:5173

## Project Structure

### Backend
```
backend/
├── src/
│   ├── controllers/    # Route controllers
│   ├── models/        # Data models
│   ├── routes/        # API routes
│   ├── middleware/    # Custom middleware
│   ├── config/        # Configuration files
│   └── index.js       # Entry point
├── .env              # Environment variables
├── Dockerfile        # Docker configuration
└── package.json
```

### Frontend
```
frontend/
├── src/
│   ├── components/    # React components
│   ├── assets/        # Static assets
│   ├── App.jsx       # Main App component
│   └── main.jsx      # Entry point
├── Dockerfile        # Docker configuration
├── vite.config.js    # Vite configuration
└── package.json
``` 
# rental
