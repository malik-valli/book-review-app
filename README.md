# Book Review Web Application
## Introduction

Users can navigate through different pages to view books, their details and reviews.

This document outlines the architecture, setup, and deployment process, as well as the reasoning behind the chosen technologies and approaches.

## Technologies Used

Frontend: React, Vite, CSS, Axios

Backend: NodeJS, ExpressJS, body-parser, node-postgres, Sequelize

Database: PostgreSQL

CI/CD: GitHub

Virtualisation: Docker

## Reasoning for technologies and approaches

React - component-based structure allows for modular, reusable, and maintainable code. Each component (e.g., BookList) encapsulates its own logic and rendering, making it easier to manage and scale the application. React's use of hooks, such as useState and useEffect, simplifies state management and side effects, giving a clear and concise way to handle dynamic data and asynchronous operations.

Using JavaScript across the stack (React, NodeJS, ExpressJS) simplifies development and allows for shared knowledge and tooling.

Vite - offers a fast development environment with instant hot module replacement (HMR), which significantly speeds up development and debugging. Provides an optimised build process using Rollup, resulting in smaller and more efficient production bundles.

PostgreSQL - a powerful, open-source relational database system that supports SQL standards and complex queries, making it suitable for storing structured data like books and reviews. Ensures data integrity and reliability through its support for ACID.

## How to run
1. In the root folder, run docker compose up to start PostgreSQL database.
2. Go to book-reviews-app/server folder.
    - Run npm install
    - Run npx sequelize-cli db:migrate to unwrap schemas in the database.
    - Run npx sequelize-cli db:seed:all to populate the database.
    - Finally, run npm start to start the server.
3. Go to book-reviews-app/client folder.
    - Run npm install
    - Then run npm run dev
4. Open http://localhost:3000
