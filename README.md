<p align="center">
    <img src="assets\Sn_completo.png" align="center" width="80%">
</p>
<p align="center"><h1 align="center">CARAVANA-NAVIDAD-API</h1></p>

<p align="center">
    <img src="https://img.shields.io/github/last-commit/org-sistemas-sn/caravana-navidad-api?style=default&logo=git&logoColor=white&color=0080ff" alt="last-commit">
    <img src="https://img.shields.io/github/languages/top/org-sistemas-sn/caravana-navidad-api?style=default&color=0080ff" alt="repo-top-language">
    <img src="https://img.shields.io/github/languages/count/org-sistemas-sn/caravana-navidad-api?style=default&color=0080ff" alt="repo-language-count">
</p>
<p align="center"><!-- default option, no dependency badges. -->
</p>
<p align="center">
    <!-- default option, no dependency badges. -->
</p>
<br>

##  Table of Contents

- [ Overview](#-overview)
- [ Features](#-features)
- [ Project Structure](#-project-structure)
  - [ Project Index](#-project-index)
- [ Getting Started](#-getting-started)
  - [ Prerequisites](#-prerequisites)
  - [ Installation](#-installation)
  - [ Usage](#-usage)
  - [ Testing](#-testing)
- [ Endpoints Documentation](#-endpoints-documentation)
---

##  Overview

The Caravana-Navidad-API project is a robust backend solution designed to enhance vehicle management systems by providing real-time GPS tracking, user authentication, and feedback mechanisms. Key features include secure user interactions, dynamic vehicle configuration, and efficient feedback processing. 
---

##  Features

|      | Feature         | Summary       |
| :--- | :---:           | :---          |
| ⚙️  | **Architecture**  | <ul><li>Utilizes a modular architecture with separate modules for Caravana, Users, and Feedback.</li><li>Each module includes its own controller, model, and routes, enhancing maintainability and scalability.</li><li>Central server configuration in `api.js` integrates essential services like database and session management.</li></ul> |
| 🔩 | **Code Quality**  | <ul><li>Adheres to modern JavaScript practices with the use of `sequelize` for ORM and `express` for server management.</li><li>Structured and organized codebase with clear separation of concerns among models, controllers, and routes.</li><li>Use of `bcrypt` for secure password handling demonstrates attention to security best practices.</li></ul> |
| 📄 | **Documentation** | <ul><li>Documentation includes detailed setup and usage instructions using `<npm>`.</li><li>Clear description of the project's structure and dependencies in `package.json` and `package-lock.json` files.</li><li>Code comments in key files like `api.js` and module files provide insights into functionality and architecture.</li></ul> |
| 🔌 | **Integrations**  | <ul><li>Integrates with MySQL database using `sequelize` for robust data management.</li><li>Uses `express-session` for session management, crucial for maintaining user state and security.</li><li>External HTTP requests facilitated by `axios`, integrated within the backend logic.</li></ul> |
| 🧩 | **Modularity**    | <ul><li>Highly modular design with distinct directories and files for different functional aspects like Users, Caravana, and Feedback.</li><li>Easy to extend or modify individual modules without impacting others.</li><li>Modular route handling in Express enhances the API's flexibility and scalability.</li></ul> |
| 🧪 | **Testing**       | <ul><li>Project setup includes `npm test` command, indicating a framework for testing is in place.</li><li>Modular architecture supports unit and integration testing of individual components.</li><li>Testing specifics would need further exploration as details are not provided in the context.</li></ul> |
| ⚡️  | **Performance**   | <ul><li>Use of `sequelize` and `mysql2` suggests optimized data queries and database interactions.</li><li>`express` framework supports efficient handling of HTTP requests.</li><li>Performance specifics would benefit from further profiling and optimization analysis.</li></ul> |
| 🛡️ | **Security**      | <ul><li>Utilizes `bcrypt` for hashing and securing user passwords.</li><li>`cors` integration helps in managing cross-origin resource sharing securely.</li><li>Session management via `express-session` enhances security by maintaining server-side session state.</li></ul> |

---

##  Project Structure

```sh
└── caravana-navidad-api/
    ├── README.md
    ├── api.js
    ├── config
    │   └── database.js
    ├── modules
    │   ├── Caravana
    │   ├── Feedback
    │   └── Users
    ├── package-lock.json
    └── package.json
```


###  Project Index
<details open>
    <summary><b><code>CARAVANA-NAVIDAD-API/</code></b></summary>
    <details> <!-- __root__ Submodule -->
        <summary><b>__root__</b></summary>
        <blockquote>
            <table>
            <tr>
                <td><b><a href='https://github.com/org-sistemas-sn/caravana-navidad-api/blob/master/package-lock.json'>package-lock.json</a></b></td>
                <td>- The `package-lock.json` file in the "caravana-navidad-api" project serves as a snapshot of the exact versions of dependencies installed at the time of its generation<br>- This file is crucial for ensuring that the project's dependencies remain consistent across all installations, regardless of when or where `npm install` is run<br>- This consistency is vital for avoiding issues that might arise from version mismatches among dependencies, thereby aiding in the stability and reliability of the project across different development and production environments.

In the context of the entire codebase architecture, this file supports the backend API's functionality by locking down the versions of critical libraries such as `axios` for HTTP requests, `bcrypt` for hashing and securing passwords, `cors` for handling Cross-Origin Resource Sharing, and `express` along with `express-session` for managing server and session capabilities respectively<br>- This ensures that the API behaves predictably and maintains compatibility with the specific versions of these libraries that it was developed and tested with.</td>
            </tr>
            <tr>
                <td><b><a href='https://github.com/org-sistemas-sn/caravana-navidad-api/blob/master/api.js'>api.js</a></b></td>
                <td>- API.js serves as the central server configuration for the application, initializing the Express server, managing sessions, and setting up CORS<br>- It integrates environmental configurations, connects to the database, and synchronizes models<br>- Additionally, it defines and activates routes for the Caravana, Users, and Feedback modules, ensuring the server listens on the configured port.</td>
            </tr>
            <tr>
                <td><b><a href='https://github.com/org-sistemas-sn/caravana-navidad-api/blob/master/package.json'>package.json</a></b></td>
                <td>- Serves as the foundational configuration for the "caravana-navidad-api" project, specifying the project's metadata, main entry point, and script commands<br>- It defines dependencies essential for the API's operation, such as Express for server management and Sequelize for database interactions, ensuring a structured environment for development and deployment.</td>
            </tr>
            </table>
        </blockquote>
    </details>
    <details> <!-- modules Submodule -->
        <summary><b>modules</b></summary>
        <blockquote>
            <details>
                <summary><b>Caravana</b></summary>
                <blockquote>
                    <table>
                    <tr>
                        <td><b><a href='https://github.com/org-sistemas-sn/caravana-navidad-api/blob/master/modules/Caravana/caravana.controller.js'>caravana.controller.js</a></b></td>
                        <td>- Manages interactions with the Caravana module, handling data retrieval, configuration, and updates for GPS settings<br>- It fetches vehicle data based on user queries, manages API token authentication, adjusts GPS configurations, and updates system settings based on user inputs, ensuring robust session management and error handling throughout the process.</td>
                    </tr>
                    <tr>
                        <td><b><a href='https://github.com/org-sistemas-sn/caravana-navidad-api/blob/master/modules/Caravana/caravana.model.js'>caravana.model.js</a></b></td>
                        <td>- Defines the `CaravanaConfig` model within the application's database schema, using Sequelize<br>- It establishes a structure for storing configuration settings specific to the Caravana module, with each setting comprising a unique string identifier and an associated integer value, without tracking timestamps<br>- This model is crucial for managing Caravana-related configurations efficiently.</td>
                    </tr>
                    <tr>
                        <td><b><a href='https://github.com/org-sistemas-sn/caravana-navidad-api/blob/master/modules/Caravana/caravana.routes.js'>caravana.routes.js</a></b></td>
                        <td>- CaravanaRoutes establishes essential HTTP route handlers within the Caravana module, linking specific endpoints to their respective controller functions<br>- It configures routes for tracking data retrieval, system configuration access, and GPS functionality toggling, thereby facilitating data management and operational control in the application's server-side architecture.</td>
                    </tr>
                    </table>
                </blockquote>
            </details>
            <details>
                <summary><b>Users</b></summary>
                <blockquote>
                    <table>
                    <tr>
                        <td><b><a href='https://github.com/org-sistemas-sn/caravana-navidad-api/blob/master/modules/Users/user.controller.js'>user.controller.js</a></b></td>
                        <td>- Manages user interactions within the application, including user creation with password encryption, deletion, authentication, and retrieval<br>- It utilizes bcrypt for secure password handling and interacts with the User model to perform database operations, ensuring robust user management and security protocols.</td>
                    </tr>
                    <tr>
                        <td><b><a href='https://github.com/org-sistemas-sn/caravana-navidad-api/blob/master/modules/Users/user.model.js'>user.model.js</a></b></td>
                        <td>- Defines the User model within the system's database architecture using Sequelize, mapping out attributes like ID, username, password, and role<br>- It configures the model to interact with a 'users' table without automatic timestamp fields, ensuring each username remains unique and all fields are mandatory for data integrity.</td>
                    </tr>
                    <tr>
                        <td><b><a href='https://github.com/org-sistemas-sn/caravana-navidad-api/blob/master/modules/Users/user.routes.js'>user.routes.js</a></b></td>
                        <td>- UserRoutes configures the server to handle user-related operations within the application<br>- It defines routes for user authentication, retrieval, deletion, and creation, linking these actions to their respective controller functions<br>- This setup is crucial for managing user interactions and data flow in the system, ensuring efficient and secure user management.</td>
                    </tr>
                    </table>
                </blockquote>
            </details>
            <details>
                <summary><b>Feedback</b></summary>
                <blockquote>
                    <table>
                    <tr>
                        <td><b><a href='https://github.com/org-sistemas-sn/caravana-navidad-api/blob/master/modules/Feedback/feedback.controller.js'>feedback.controller.js</a></b></td>
                        <td>- Handles the submission of user feedback within the application<br>- Specifically, it processes incoming feedback data, including scores and comments, by creating new entries in the feedback database<br>- It ensures successful data handling by responding with appropriate HTTP status codes based on the operation's outcome.</td>
                    </tr>
                    <tr>
                        <td><b><a href='https://github.com/org-sistemas-sn/caravana-navidad-api/blob/master/modules/Feedback/feedback.routes.js'>feedback.routes.js</a></b></td>
                        <td>- Defines routing logic for feedback submissions within the application, specifically linking the HTTP POST method to the feedback submission functionality<br>- It integrates the feedback controller to handle incoming feedback data through the '/feedback' endpoint, facilitating user interactions with the feedback system of the application.</td>
                    </tr>
                    <tr>
                        <td><b><a href='https://github.com/org-sistemas-sn/caravana-navidad-api/blob/master/modules/Feedback/feedback.model.js'>feedback.model.js</a></b></td>
                        <td>- Defines the Feedback model within the application's database schema, utilizing Sequelize for ORM<br>- It structures the Feedback table with fields for an auto-incrementing ID, a mandatory rating between 1 and 5, and an optional text field<br>- Timestamps are automatically managed to track creation and update times, enhancing data integrity and auditability in user feedback management.</td>
                    </tr>
                    </table>
                </blockquote>
            </details>
        </blockquote>
    </details>
    <details> <!-- config Submodule -->
        <summary><b>config</b></summary>
        <blockquote>
            <table>
            <tr>
                <td><b><a href='https://github.com/org-sistemas-sn/caravana-navidad-api/blob/master/config/database.js'>database.js</a></b></td>
                <td>- Establishes the connection to the MySQL database using Sequelize, an ORM for Node.js<br>- It configures the database connection with environment-specific credentials and settings, including the database name, user, password, host, and timezone<br>- This setup is crucial for enabling data persistence and retrieval operations across the application, ensuring efficient data management and interaction.</td>
            </tr>
            </table>
        </blockquote>
    </details>
</details>

---
##  Getting Started

###  Prerequisites

Before getting started with caravana-navidad-api, ensure your runtime environment meets the following requirements:

- **Programming Language:** JavaScript
- **Package Manager:** Npm


###  Installation

Install caravana-navidad-api using one of the following methods:

**Build from source:**

1. Clone the caravana-navidad-api repository:
```sh
❯ git clone https://github.com/org-sistemas-sn/caravana-navidad-api
```

2. Navigate to the project directory:
```sh
❯ cd caravana-navidad-api
```

3. Install the project dependencies:


**Using `npm`** &nbsp; [<img align="center" src="https://img.shields.io/badge/npm-CB3837.svg?style={badge_style}&logo=npm&logoColor=white" />](https://www.npmjs.com/)

```sh
❯ npm install
```




###  Usage
Run caravana-navidad-api using the following command:
**Using `npm`** &nbsp; [<img align="center" src="https://img.shields.io/badge/npm-CB3837.svg?style={badge_style}&logo=npm&logoColor=white" />](https://www.npmjs.com/)

```sh
❯ npm start
```


###  Testing
Run the test suite using the following command:
**Using `npm`** &nbsp; [<img align="center" src="https://img.shields.io/badge/npm-CB3837.svg?style={badge_style}&logo=npm&logoColor=white" />](https://www.npmjs.com/)

```sh
❯ npm test
```

# Endpoints Documentation

### User Endpoints

#### Create User
- **URL:** `/user`
- **Method:** `POST`
- **Headers:**
  - `Content-Type: application/json`
- **Request Body:** 
```json
{
  "username": "exampleUser",
  "password": "examplePassword",
  "role": "ADMIN"
}
```
- **Responses:**
  - `201 Created:` User created successfully.
```json
{
  "id": 1,
  "username": "exampleUser",
  "role": "ADMIN"
}
```
  - `500 Internal Server Error:` Error creating user.

#### Delete User
- **URL:** `/user/:id`
- **Method:** `DELETE`
- **Headers:**
  - `Content-Type: application/json`
- **Responses:**
  - `200 OK:` User deleted successfully.
  - `500 Internal Server Error:` Error deleting user.

#### Login
- **URL:** `/login`
- **Method:** `POST`
- **Headers:**
  - `Content-Type: application/json`
- **Request Body:** 
```json
{
  "username": "exampleUser",
  "password": "examplePassword"
}
```
- **Responses:**
  - `200 OK:` Login successful.
  - `401 Unauthorized:` Invalid credentials.
  - `500 Internal Server Error:` Error logging in.

#### Get One User
- **URL:** `/user/:id`
- **Method:** `GET`
- **Headers:**
  - `Content-Type: application/json`
- **Responses:**
  - `200 OK:` User retrieved successfully.
```json
{
  "id": 1,
  "username": "exampleUser",
  "role": "USER"
}
```
  - `404 Not Found:` User not found.
  - `500 Internal Server Error:` Error fetching user.

---

### Feedback Endpoints

#### Post Feedback
- **URL:** `/feedback`
- **Method:** `POST`
- **Headers:**
  - `Content-Type: application/json`
- **Request Body:** 
```json
{
  "score": 5,
  "comments": "Great service!"
}
```
- **Responses:**
  - `200 OK:` Feedback posted successfully.
  - `500 Internal Server Error:` Error posting feedback.

---

### Caravana Endpoints

#### Get Data
- **URL:** `/tracking`
- **Method:** `GET`
- **Headers:**
  - `Content-Type: application/json`
- **Query Parameters:**
  - `startDate`: Start date of the tracking period.
  - `endDate`: End date of the tracking period.
  - `licensePlate`: License plate of the vehicle.
- **Example Request:** 
```bash
GET /tracking?startDate=2024-12-04T00:00:00Z&endDate=2024-12-04T16:53:00Z&licensePlate=AA418NI
```
- **Responses:**
  - `200 OK:` Data retrieved successfully.
```json
{
  "data": [...]
}
```
  - `403 Forbidden:` GPS is turned off.
  - `500 Internal Server Error:` Error fetching data.

#### Get Config
- **URL:** `/config`
- **Method:** `GET`
- **Headers:**
  - `Content-Type: application/json`
- **Responses:**
  - `200 OK:` Config retrieved successfully.
```json
{
  "configs": {
    "gps": "1"
  }
}
```
  - `500 Internal Server Error:` Error fetching config.

#### Toggle GPS
- **URL:** `/gps`
- **Method:** `POST`
- **Headers:**
  - `Content-Type: application/json`
- **Request Body:** 
```json
{
  "state": "1"
}
```
- **Responses:**
  - `200 OK:` GPS state updated successfully.
  - `500 Internal Server Error:` Error updating config.

# .ENV Example
```.env
PORT=
DB_HOST=
DB_NAME=
DB_USER=
DB_PASSWORD=
MONITOREO_API_URL=
MONITOREO_LOGIN_URL=
CLIENT_URL=
SAFE_COOKIE= # if using HTTPS set to true, otherwise set to false
```