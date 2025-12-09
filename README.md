<!-- <p align="center">
  <a href="https://nestjs.com/" target="_blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p> -->

# NeuSentra Backend

Efficient and scalable backend for NeuSentra — a self-hosted home network management and security system.  
Built with NestJS and TypeScript, powered by PostgreSQL and Redis.

---

## 🚀 Features

- ✅ DHCP server with MAC-based device grouping  
- ✅ Configurable network firewall and ad-blocking  
- ✅ Parental controls, blocking schedules, and website filtering  
- ✅ Real-time event streaming via Server-Sent Events (SSE)  
- ✅ User authentication with JWT and role-based access  
- ✅ Audit logging and system monitoring  
- ✅ Modular architecture for easy extensibility  

---

## Project Setup
- Install dependencies: 
```npm install```

---

## ⚙️ Running the Project

### Development

```npm run start:dev```

This mode enables hot reloads for rapid development.

### Production Mode

```
npm run build
npm run start:prod
```

Generates optimized production build and runs the server.

---

## ⚙️ Configuration

Create environment files `.env.develop`, `.env.test`, or `.env` with variables like:
```
# Server
NODE_ENV=local
PORT=3333

# Logger
LOGGER_LEVEL=log
PRETTY_PRINT_LOG=true

# Swagger Config
SWAGGER_ENABLED=true

# Database Config
DB_HOST=localhost
DB_PORT=5432
DB_USER=neusentra_user
DB_PASSWORD=your_db_password
DB_NAME=neusentra_db

# JWT
JWT_SECRET=jwt_secret
JWT_EXPIRES_IN=300
JWT_REFRESH_SECRET=jwt_secret_refresh
JWT_REFRESH_EXPIRES_IN=1h

# Redis
REDIS_HOST=127.0.0.1
REDIS_PORT=6379
REDIS_PASS=''
REDIS_TTL=3600000
```

---

## 🏗️ Architecture

- Built on NestJS framework using TypeScript  
- PostgreSQL as the primary database (native installation recommended)  
- Redis for cache and session management  
- JWT-based authentication and authorization  
- SSE for real-time update delivery to frontend clients  
- Fully versioned API (e.g., `/api/v1`)  

---

## 📂 Folder Structure

```
├── src/
│   ├── api/                          # Application route handlers and controllers
│   ├── audit-log/                    # Audit logging service, models, and logic
│   ├── common/
│   │   ├── constants/                # Global constants (e.g., error codes, regex)
│   │   ├── dto/                      # Shared Data Transfer Objects
│   │   └── utils/                    # Reusable utility functions and helpers
│   ├── config/                       # App configuration, env validation, and schemas
│   ├── database/
│   │   ├── constants/                # DB-related constants (e.g., table names)
│   │   └── interfaces/              # DB interfaces and repository contracts
│   ├── errors/                       # Custom error classes and global handlers
│   ├── events/                       # Event emitters, listeners, and event models
│   ├── logger/                       # Centralized logging service and config
│   ├── pipes/                        # Custom pipes for validation and transformation
│   └── app.module.ts                # Root application module (NestJS entry point)
│
├── test/                             # Unit and E2E tests
├── .env.example                      # Example environment variables file
├── .gitignore                        # Files and folders to ignore in Git
├── .prettierrc                       # Prettier configuration for code formatting
├── .eslint.config.mjs               # ESLint configuration for linting
├── nest-cli.json                     # NestJS CLI configuration
├── package.json                      # Project metadata, scripts, and dependencies
├── tsconfig.json                     # Base TypeScript configuration
├── tsconfig.build.json               # TS config for production build
└── README.md                         # Project overview and setup instructions
```

---

<!-- ## Deployment

To deploy NeuSentra Backend:

1. Install and configure PostgreSQL and Redis.  
2. Set environment variables for production `.env` file.  
3. Build the project: `npm run build`  
4. Use a process manager to run (e.g., `pm2`, `systemd`).  
5. Optionally configure a reverse proxy (Nginx) with HTTPS.

--- -->

## 🔗 Resources

- [NeuSentra](https://github.com/neusentra/neusentra)

- [NeuSentra Frontend](https://github.com/neusentra/neusentra/neusentra-frontend)

---

## 🙌 Support

NeuSentra is an open-source project under the MIT License. Contributions and sponsorships are welcome.

---

## 📬 Stay Connected

- Author: NeuSentra
- Website: [coming soon]
- X: [coming soon]
- [![Join us on Discord](https://img.shields.io/badge/Discord-5865F2?logo=discord&logoColor=white&style=for-the-badge)](https://discord.gg/3VxzAfW7s6)

---