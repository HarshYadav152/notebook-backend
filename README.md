# Notebook Web App

A simple note-taking web application that allows users to create, save, and manage their notes securely in the cloud. The app features login and signup functionality, with user data stored securely in a cloud database. It uses **Express**, **JWT**, **bcrypt**, and **MongoDB** on the backend, and **Bootstrap** for the frontend.

---

## Features

- **User Authentication:**
  - Signup and login functionality with **JWT** (JSON Web Tokens) for secure session management.
  - Password hashing using **bcrypt** for secure password storage.
  
- **Note Management:**
  - Create, read, update, and delete (CRUD) notes.
  - Notes are stored in a **MongoDB** database and are associated with individual users.

- **Frontend:**
  - Built with **Bootstrap** for a responsive, mobile-first user interface.

---

## Technologies Used

### Backend:
- **Node.js**: JavaScript runtime environment.
- **Express.js**: Web framework for building APIs and handling HTTP requests.
- **MongoDB**: NoSQL database for storing user data and notes.
- **Mongoose**: ODM (Object Data Modeling) library for MongoDB, used to define and interact with data models.
- **bcrypt.js**: Library for hashing passwords securely.
- **jsonwebtoken (JWT)**: Used for creating and verifying authentication tokens.

### Frontend:
- **Bootstrap**: CSS framework for responsive, mobile-first design.

---
## Usage
### User Signup:

- Navigate to the signup page and create a new account with a username, email, and password.
- The password is hashed using bcrypt before being stored in the database.
### User Login:

- After signing up, you can log in using your credentials.
- If the login is successful, you will receive a JWT token that can be used to authenticate further requests.
### Creating Notes:

- Once logged in, you can create, edit, and delete notes.
- All notes are stored in MongoDB and are associated with the authenticated user.
## Note Access:

`Notes can be retrieved and updated only by the user who created them.`

## Home: 
- Display a list of notes, and options to add, edit, and delete notes.
- The frontend is built using Bootstrap for responsive design, so the app will be mobile-friendly.

## Contributing
If you would like to contribute to the development of this app, please fork the repository, create a new branch, and submit a pull request with your changes.

`License`

This project is licensed under the MIT License - see the [LICENSE](https://github.com/HarshYadav152/notebook-backend/blob/main/LICENSE) file for details.

`Acknowledgements`

- [ReactJS](https://react.dev/) 
React is a JavaScript library.
- [Express.js](https://expressjs.com/en/starter/installing.html) for building the API server.
- [MongoDB](https://www.mongodb.com/) for the database.
- [bcrypt](https://www.npmjs.com/package/bcryptjs) for password hashing.
- [jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken) (JWT) for user authentication.
- [Bootstrap](https://getbootstrap.com/docs/5.3/getting-started/introduction/) for frontend styling.
