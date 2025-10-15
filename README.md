# Task Manager Final Project

This project is a full-featured task management dashboard built with React, React Router, and React Bootstrap. It now ships with a JSON Server backend so that all CRUD operations persist to disk.

## Getting Started

1. Install dependencies (including `json-server`):

   ```bash
   npm install
   ```

2. Start the mock API server:

   ```bash
   npm run server
   ```

   The JSON Server runs on [http://localhost:3001](http://localhost:3001) and serves data from `db.json`.

3. In a separate terminal, start the React application:

   ```bash
   npm start
   ```

4. Visit [http://localhost:3000](http://localhost:3000) to use the Task Manager.

## Available Endpoints

- `GET /tasks` – Retrieve all tasks
- `POST /tasks` – Create a new task
- `PATCH /tasks/:id` – Update an existing task
- `DELETE /tasks/:id` – Delete a task

All requests are served from `db.json`, which ships with sample data you can customize.

## Video Demonstration

Record a short screen capture showing how to:

- View existing tasks and dashboard statistics
- Create a new task and see it persist after a reload
- Update a task's details and mark it complete
- Delete a task

This demonstration, combined with the persistent backend, satisfies the final project requirements.
