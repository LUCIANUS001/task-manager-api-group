# Task Manager API — Group Project

An industrial-grade, lightweight RESTful API built with Node.js and Express.js to manage task workflows. This project was developed as a collaborative team assignment under **BeTechified** by **Group 1 Sub(B)**.

---

## Contributors

| Role / Module                                          | Assigned Member / GitHub Handle |
| :----------------------------------------------------- | :------------------------------ |
| **Repository Management, PRs, Merges & Git Flow**      | `LUCIANUS001`                   |
| **App Configuration (`app.js`) & Initialization**      | `1-dara`                        |
| **Server Bootstrapping (`server.js`) & Port Listener** | `1-dara`                        |
| **Global State Architecture (`data.js` Relocation)**   | `jasonchukwuebuka01`            |
| **GET /tasks (Fetch All Tasks)**                       | `Kaluagomezgani-ship-it`        |
| **GET /tasks/:id (Fetch Single Task)**                 | `Null`                          |
| **POST /tasks (Create Task)**                          | `NaseThaBoss`                   |
| **PUT /tasks/:id (Update Task)**                       | `Null`                          |
| **DELETE /tasks/:id (Delete Task)**                    | `Jasonchukwuebuka01`            |

---

## Architectural Blueprint & Decision Logs

### 1. Decoupled Bootstrapping (`app.js` vs `server.js`)

To follow clean enterprise patterns, we isolated our server concerns:

- `app.js`: Configures the Express instance, mounts global middlewares like `express.json()`, and maps API routes.
- `server.js`: Serves as the clean operational entry point that spins up the HTTP server and binds to the specified environment port.

### 2. Data Decoupling & Relocation

During development, `data.js` was originally positioned inside the routes directory. To enforce strict **Separation of Concerns (SoC)**, we refactored the file tree and relocated the data array to the root `src/` folder. All absolute and relative routing references were updated to `../data` to preserve dependency resolution.

### 3. State Management & Immutability Choices

Because this API relies on volatile in-memory storage, we declared our imported mock data store using `let` instead of `const` across controllers. For data removal, we deliberately rejected mutable methods like `.splice()` to protect against off-by-one indices and structural decay. Instead, we implemented **immutable re-assignment via `.filter()`**, which builds a completely clean, isolated array instance in local memory.

---

## Git Workflow & Collaboration Model

To maintain zero code overrides and frictionless integration across 8 distinct developers, `LUCIANUS001` instituted a disciplined branch-and-merge structure:

1. **Isolation:** Developers checked out unique local feature branches (e.g., `feature/Del-endpoint-jason`) from a synchronized local `main`.

2. **Defensive Syncing:** Before any push, engineers pulled the latest upstream changes to resolve merge blocks locally:
   ```
   git pull origin main
   ```

## API Specification & Defensive Routing Matrix

The API implements strict input parsing and defensive logic blocks to catch bad states before they trigger runtime crashes.

## Endpoint Overview

HTTP Method Route Description SuccessStatus Error/Failsafe Status

1.  GET /tasks Fetches the full list of available tasks 200 OK 200 OK (Returns [])
2.  GET /tasks/:id Locates an individual task by its ID 200 OK 404 Not Found
3.  POST /tasks Appends a fresh task object 201 Created 400 Bad Request
4.  PUT /tasks/:id Modifies an existing task's attributes 200 OK 404 Not Found
5.  DELETE /tasks/:id Eliminates a targeted task safely 200 OK 404 Not Found

## Local Setup & Execution Instructions

Follow these steps to run and test the repository on your machine:

1. Clone the Repository

   ```git clone https://github.com/LUCIANUS001/task-manager-api-group.git

   cd task-manager-api-group
   ```

2. Install Project Dependencies

   ```npm install

   ```

3. Execute the Development Server
   npm run dev
