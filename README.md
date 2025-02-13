# User Management API

This is a **Node.js API** built with **Express.js** and **MongoDB** for user registration, authentication, and searching users.

## Features
- **User Registration** (Signup)
- **User Login with JWT Authentication**
- **Search User by Username or Email**
- **MongoDB Database Integration**
- **JWT Authentication for Secure API Calls**
- **Postman Collection JSON included for API Testing**

---

## API Documentation (Postman Collection)
To test the API in **Postman**, import the provided `Toposel.postman_collection.json` file. This collection contains all API endpoints with example requests.

**Steps to Import Postman Collection:**
1. Open **Postman**
2. Click **Import** (Top Left Corner)
3. Select `Toposel.postman_collection.json`
4. Click **Import**
5. Run API Requests as per the documentation

---

## Installation and Setup

### 1. Clone the Repository
```sh
git clone https://github.com/your-repo-name.git
cd user-management-api
```

### 2. Install Dependencies
```sh
npm install
```

### 3. Start the Server
```sh
npm start
```
For development mode with auto-restart:
```sh
npm run dev
```

---

## API Endpoints

### 1. **User Registration**
**POST** `/api/auth/register`
```json
{
    "username": "john_doe",
    "password": "securepassword",
    "fullName": "John Doe",
    "gender": "Male",
    "dateOfBirth": "1995-06-15",
    "country": "USA"
}
```

### 2. **User Login**
**POST** `/api/auth/login`
```json
{
    "username": "john_doe",
    "password": "securepassword"
}
```

### 3. **Search Users**
**POST** `/api/user/search`
(Requires JWT in Headers)
```json
{
    "query": "john_doe"
}
```

### 4. **Protected Route (Example: Search User)**
Requires `Authorization: Bearer <token>` header

---

## Technologies Used
- **Node.js**
- **Express.js**
- **MongoDB & Mongoose**
- **JWT Authentication**
- **Postman for API Testing**

---

## Submission Details
- The **Postman collection JSON** is provided for easy API testing.
- The **GitHub repository** contains structured source code.
- A **video walkthrough** is included demonstrating API usage, Postman testing, and database integration.

---

## License
This project is licensed under the **MIT License**.

**Developed by [Your Name]**

