# Court Reservation Backend
A backend server built with NestJS to support the court reservation admin dashboard. This server manages API requests, user authentication, and data operations using Prisma as the ORM for database interaction.

## Project Description
The Court Reservation Backend provides essential API services for court reservation management. Leveraging Prisma with NestJS, the server offers a robust structure that ensures effective data handling with PostgreSQL.

### Key Features:
- RESTful APIs for handling court reservation and user management.
- Integration with Prisma for seamless database operations and schema management.
- User authentication and authorization to secure the API endpoints.
- Scalable and modular architecture for future expansions.

### Technologies Used:
- NestJS: A powerful framework for building server-side applications.
- Prisma: A next-generation ORM for type-safe database queries.
- PostgreSQL: Relational database to manage court and user data.
- RxJS: Reactive extensions for handling asynchronous programming.
- Reflect-metadata: Supports TypeScript decorators for NestJS.
### Challenges and Future Enhancements:
- Efficiently managing complex queries and relations in Prisma.
- Potential future features include real-time updates using WebSockets and integration with third-party services for notifications.
## Table of Contents
1. Installation
2. Usage
3. Environment Variables
4. Database Setup
5. Credits
6. License 
## Installation
Follow these steps to set up the project locally:

1. Clone the repository:

```bash
git clone https://github.com/Chuviil/ding-web-canchas-backend.git
cd ding-web-canchas-backend
```
2. Install dependencies:

```bash
npm install
```

3. Set up environment variables: Create a .env file in the root directory and include:

```bash
DATABASE_URL=postgresql://user:password@localhost:5432/database
```
4. Run Prisma commands:

- Generate Prisma client:
```bash
npx prisma generate
```
- Apply migrations:
```bash
npx prisma migrate dev --name init
```

5. Start the development server:

```bash
npm run start:dev
```

6. Access the server: The backend runs by default on http://localhost:4000.

## Usage
- Endpoints: The backend exposes a variety of RESTful API endpoints for handling reservations and user data. Explore the src/modules folder for specific controllers and service logic.

## Environment Variables
Ensure the following environment variable is configured in the `.env` file:

- `DATABASE_URL`: Connection string for the PostgreSQL database (e.g., `postgresql://username:password@host:port/database`).

## Database Setup

The backend uses Prisma as an ORM to interact with the PostgreSQL database. To set up the database schema and apply initial migrations, run:

```bash
npx prisma migrate dev --name init
```

## Credits
Developed by Chuviil and contributors. This project leverages the power of NestJS and Prisma to provide a seamless backend experience.

GitHub: @Chuviil

## License
This project is licensed under the MIT License, allowing free use, modification, and distribution with proper attribution.