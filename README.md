## Running with Docker

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


#### Migration Commands

# Create the database

```bash
npm run create
   ```

# Run all migrations

```bash
npm run migrate
   ```

# Run all seeders

```bash
npm run seed
   ````

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
