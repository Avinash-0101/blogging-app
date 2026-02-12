# Docker Setup for Blogging App

This project is containerized using Docker and Docker Compose.

## Prerequisites

- Docker Desktop (or Docker Engine + Docker Compose)
- At least 4GB of available RAM

## Quick Start

1. **Build and start all services:**
   ```bash
   docker-compose up --build
   ```

2. **Run in detached mode (background):**
   ```bash
   docker-compose up -d --build
   ```

3. **Access the application:**
   - Frontend: http://localhost
   - Backend API: http://localhost:3000
   - MongoDB: localhost:27017

## Services

- **frontend**: React/Vite application served via Nginx (port 80)
- **backend**: Node.js/Express API server (port 3000)
- **mongodb**: MongoDB database (port 27017)

## Environment Variables

Create a `.env` file in the `backend` directory if needed:

```env
PORT=3000
MONGO_URI=mongodb://mongodb:27017/blogging-app
ALLOWED_ORIGINS=http://localhost,http://localhost:5173
```

## Useful Commands

- **Stop all services:**
  ```bash
  docker-compose down
  ```

- **Stop and remove volumes (clears database):**
  ```bash
  docker-compose down -v
  ```

- **View logs:**
  ```bash
  docker-compose logs -f
  ```

- **View logs for specific service:**
  ```bash
  docker-compose logs -f backend
  docker-compose logs -f frontend
  docker-compose logs -f mongodb
  ```

- **Rebuild a specific service:**
  ```bash
  docker-compose up --build backend
  ```

- **Execute commands in a container:**
  ```bash
  docker-compose exec backend sh
  docker-compose exec mongodb mongosh
  ```

## Development Mode

The backend has a volume mount for live code changes during development. For frontend, you may want to use the development server instead:

```bash
cd frontend
npm run dev
```

## Push Images to Docker Hub Registry

1. **Replace the placeholder** in `docker-compose.yml`: change `YOUR_DOCKERHUB_USERNAME` to your actual Docker Hub username.

2. **Log in to Docker Hub:**
   ```bash
   docker login
   ```
   Enter your Docker Hub username and password when prompted.

3. **Build the images:**
   ```bash
   docker-compose build
   ```

4. **Push to the registry:**
   ```bash
   docker push YOUR_DOCKERHUB_USERNAME/blogging-backend:latest
   docker push YOUR_DOCKERHUB_USERNAME/blogging-frontend:latest
   ```
   Or push both at once:
   ```bash
   docker-compose push
   ```

5. **Pull and run on another machine:**
   ```bash
   docker pull YOUR_DOCKERHUB_USERNAME/blogging-backend:latest
   docker pull YOUR_DOCKERHUB_USERNAME/blogging-frontend:latest
   # Then use docker-compose (with image: instead of build:) or run manually
   ```

> **Note:** The `mongodb` service uses the official `mongo:7` image from Docker Hub, so there's no need to push it.

---

## Production Considerations

For production deployment:
1. Remove volume mounts from docker-compose.yml
2. Set proper environment variables
3. Use a production-ready MongoDB setup
4. Configure proper CORS origins
5. Set up SSL/TLS certificates
6. Use a reverse proxy (like Traefik or Nginx) for better security


