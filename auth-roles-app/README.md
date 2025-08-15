# Auth Roles App

## Overview
The Auth Roles App is a Node.js application that implements user authentication and role-based access control. It allows users to register, log in, and manage their profiles based on their assigned roles, which include Innovator, Admin, Student, and Collaborator.

## Features
- User registration and login
- Password hashing using bcrypt
- JWT token generation for secure sessions
- Role-based access control for protected routes
- User management functionalities

## Project Structure
```
auth-roles-app
├── src
│   ├── controllers          # Contains controller functions for authentication and user management
│   ├── middleware           # Contains middleware for authentication and role checking
│   ├── models               # Contains the user model schema
│   ├── routes               # Contains route definitions for authentication and user management
│   ├── utils                # Contains utility functions for JWT handling
│   └── app.js               # Entry point of the application
├── package.json             # Project dependencies and scripts
├── .env                     # Environment variables
└── README.md                # Project documentation
```

## Installation
1. Clone the repository:
   ```
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```
   cd auth-roles-app
   ```
3. Install the dependencies:
   ```
   npm install
   ```
4. Create a `.env` file in the root directory and add your environment variables, such as database connection strings and JWT secret keys.

## Usage
1. Start the application:
   ```
   npm start
   ```
2. The server will run on `http://localhost:3000`.

## API Endpoints
### Authentication
- **POST /api/auth/register**: Register a new user
- **POST /api/auth/login**: Log in an existing user

### User Management
- **GET /api/users**: Retrieve user details (protected route)
- **PUT /api/users/:id**: Update user information (protected route)

## Middleware
- **Auth Middleware**: Verifies JWT tokens for protected routes.
- **Role Middleware**: Checks user roles to enforce access control.

## License
This project is licensed under the MIT License.