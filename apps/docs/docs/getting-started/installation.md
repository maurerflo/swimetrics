---
sidebar_position: 2
---

# Installation

This guide will help you set up your development environment for working with Swimetrics.

## Prerequisites

Before you begin, ensure you have the following installed:

- [Node.js](https://nodejs.org/) version 18.0 or above
- pnpm package manager
- Git
- Docker / Podman

## Installation

1. Clone the repository:

```bash
git clone https://github.com/yourusername/swimetrics.git
cd swimetrics
```

2. Install dependencies:

```bash
pnpm install -r
```

## Configuration

Copy the example environment file and update with your local settings. The values from '.env.example' are prepared to be used for local development.:

```bash
cp .env.example .env
```

## Start surrounding Systems

Surrounding Systems

Swimetrics relies on the several sourrunding services that need to be running. Check system context to understand the architecture.:

Start these services using Docker Compose:

```bash
# unsing docker 
docker compose -f docker-compose.dev.yaml up -d

# or using podman
podman-compose -f docker-compose.dev.yaml up -d
```

This will start all required services with the configuration defined in the .env file.

## Prisma Setup

Swimetrics uses Prisma ORM to manage database connections and models. Follow these steps to set up Prisma:

Generate the Prisma client:

```bash
pnpm run db:generate
```

Deploy the initial database schema to a new database:

```bash
pnpm run db:deploy
```
This command runs Prisma migrations to create all tables and relationships.

<details>
<summary>other Prisma Actions for Development</summary>

For development, you can use Prisma Studio to view and edit data:

```bash
cd packages/database
npx prisma studio
```

Prisma Studio will open in your browser at http://localhost:5555.
If you make changes to the schema in packages/database/prisma/schema.prisma, you need to:

```bash
# Create a migration
pnpm run db:migrate --name your_migration_name

# Apply the migration and regenerate the client
pnpm run db:deploy
```


</details>




## Development Environment

Start the development server:

```bash
pnpm run dev
```

This will launch the application on http://localhost:3000 and the docs on http://localhost:3009.

## Project Structure

```
swimetrics/
├── apps/
│   ├── docs/         # Documentation (Docusaurus)
│   └── web/          # Main web application
├── packages/
│   ├── database/                # Prisma Database models and migrations
│   ├── eslint-config/           # ESLint configuration
│   ├── typescript-config/   # TypeScript configuration
│   ├── ui/                             # Shared UI components
└── package.json      # Root package.json
```

# Next Steps

Now that you have the development environment set up, explore the following:
Review the Core Concepts section to understand the system architecture
Check out the API Reference to learn about available endpoints
Visit the Frontend Components guide to understand the UI structure
