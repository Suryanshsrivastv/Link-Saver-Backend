# Link Saver - Bookmark Manager

A modern, responsive web application for saving and organizing your bookmarks. Built with React and Node.js.

## 🚀 Features

- **User Authentication**: Secure signup and login functionality
- **Bookmark Management**: Add, view, and delete bookmarks
- **Responsive Design**: Fully responsive interface that works on all devices
- **Modern UI**: Clean and intuitive user interface with smooth animations
- **Secure**: JWT-based authentication and protected routes

## 🛠 Tech Stack

### Frontend
- React 18
- React Router v6
- Axios for API calls
- Custom CSS for styling

### Backend
- Node.js
- Express.js
- MongoDB
- JWT Authentication

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/Suryanshsrivastv/Link-Saver-Backend
cd Link-Saver-Backend
```

2. Install dependencies:
```bash
# Install frontend dependencies
cd frontend/link-saver-frontend
npm install

# Install backend dependencies
cd ../../backend
npm install
```


## 🚀 Usage

1. Start the development server:
```bash
# Start frontend (from frontend directory)
npm run dev

# Start backend (from backend directory)
node server.js
```

2. Open your browser and navigate to:
```
http://localhost:5000
```

## 🔒 Environment Variables

### Frontend
- `VITE_API_URL`: Backend API URL

### Backend
- `MONGODB_URI`: MongoDB connection string
- `JWT_SECRET`: Secret key for JWT
- `PORT`: Server port (default: 5000)

## 📱 Features Overview

### User Authentication
- Secure signup with email validation
- JWT-based authentication
- Protected routes

### Bookmark Management
- Add bookmarks with automatic metadata fetching
- View all saved bookmarks
- Delete unwanted bookmarks
- Responsive grid layout

## 🎨 UI Components

- Modern card-based design
- Gradient accents
- Responsive navigation
- Loading states
- Error handling
- Form validation

## 🔐 Security Features

- JWT token validation
- Protected API endpoints
- Secure password handling
- Input validation
- CORS protection

## 🌐 Deployment

The application is deployed using:
- Frontend: Netlify
- Backend: Render
- Database: MongoDB Atlas

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 👥 Authors

- Initial work - Suryansh Shrivastava

## 🙏 Acknowledgments

- React documentation
- MongoDB documentation
- Render and Netlify for hosting

# Link Saver Backend

The server-side component of the Link Saver application, providing API endpoints and database management for the bookmark manager.

## 🛠 Tech Stack

- **Runtime**: Node.js
- **Framework**: Express.js
- **Database**: MongoDB
- **Authentication**: JWT (JSON Web Tokens)
- **API Testing**: Postman
- **Deployment**: Render

## 📦 Installation

1. Clone the repository (if not already done):
```bash
git clone https://github.com/Suryanshsrivastv/Link-Saver-Backend
cd Link-Saver-Backend
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
Create `.env` file in the backend directory:
```env
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
PORT=5000
```

## 🚀 Usage

1. Start the server:
```bash
# Development mode
node server.js

```

2. The server will start on `http://localhost:5000`

## 📡 API Endpoints

### Authentication
- `POST /api/auth/signup` - Register a new user
- `POST /api/auth/login` - Login user

### Bookmarks
- `GET /api/bookmarks` - Get all bookmarks for authenticated user
- `POST /api/bookmarks` - Create a new bookmark
- `DELETE /api/bookmarks/:id` - Delete a bookmark

## 🔒 Security Features

- JWT Authentication
- Password Hashing
- Input Validation
- CORS Protection
- Rate Limiting
- Error Handling

## 📊 Database Schema

### User Model
```javascript
{
  email: String,
  password: String (hashed),
  createdAt: Date
}
```

### Bookmark Model
```javascript
{
  url: String,
  title: String,
  favicon: String,
  user: ObjectId (ref: 'User'),
  createdAt: Date
}
```

## 🔧 Middleware

- Authentication Middleware
- Error Handling Middleware
- CORS Middleware
- Body Parser
- Request Validation

## 📝 Environment Variables

| Variable | Description |
|----------|-------------|
| MONGODB_URI | MongoDB connection string |
| JWT_SECRET | Secret key for JWT tokens |
| PORT | Server port (default: 5000) |

## 🚀 Deployment

The backend is deployed on Render:
- Production URL: `https://link-saver-backend.onrender.com`
- Automatic deployments on main branch updates
- Environment variables configured in Render dashboard

## 🧪 Testing

1. Install dependencies:
```bash
npm install --save-dev jest supertest
```

2. Run tests:
```bash
npm test
```

## 📈 Error Handling

The API uses a consistent error response format:
```javascript
{
  error: {
    message: "Error description",
    code: "ERROR_CODE"
  }
}
```

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## 👥 Author

- Suryansh Shrivastava

## 🙏 Acknowledgments

- Express.js documentation
- MongoDB documentation
- JWT documentation
- Render hosting platform