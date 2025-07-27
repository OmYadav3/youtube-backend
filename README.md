# 📺 YouTube Backend

A powerful, scalable backend for a YouTube-style video hosting platform built with **Node.js**, **Express.js**, **MongoDB**, and **JWT**. This project supports full user interaction features such as video upload, commenting, subscriptions, likes/dislikes, and more — just like YouTube.

---

## 🚀 Features

✅ Full user authentication and authorization  
✅ JWT-based access & refresh token handling  
✅ Video upload and streaming support  
✅ Like / Dislike on videos  
✅ Comment and reply system  
✅ User subscriptions and unsubscribing  
✅ Playlist management  
✅ Clean MVC folder structure  
✅ Secure file uploads with Multer and Cloudinary  
✅ Paginated results for videos/comments  
✅ Middleware-based error handling and token validation  
✅ CORS and cookie handling support

---

## 📁 Project Structure
```
src/
├── controllers/
│ ├── comment.controller.js
│ ├── dashboard.controller.js
│ ├── like.controller.js
│ ├── playlist.controller.js
│ ├── subscription.controller.js
│ ├── tweet.controller.js
│ ├── user.controller.js
│ └── video.controller.js
│
├── db/
│ └── index.js
│
├── middlewares/
│ ├── auth.middleware.js
│ └── multer.middleware.js
│
├── models/
│ ├── comment.model.js
│ ├── like.model.js
│ ├── playlist.model.js
│ ├── subscription.model.js
│ ├── tweet.model.js
│ ├── user.model.js
│ └── video.model.js
│
├── routes/
│ ├── comment.routes.js
│ ├── dashboard.routes.js
│ ├── like.routes.js
│ ├── playlist.routes.js
│ ├── subscription.routes.js
│ ├── tweet.routes.js
│ ├── user.routes.js
│ └── video.routes.js
│
├── utils/
│ ├── ApiError.js
│ ├── ApiResponse.js
│ ├── asyncHandler.js
│ └── cloudinary.js
│
└── app.js

```
---

## 🧪 Tech Stack

- **Backend:** Node.js, Express.js  
- **Database:** MongoDB, Mongoose  
- **Authentication:** JWT (access + refresh tokens), bcrypt  
- **File Upload:** Multer, Cloudinary  
- **Utilities:** cookie-parser, dotenv, cors, prettier  
- **Pagination:** mongoose-aggregate-paginate-v2

---

## 📦 Installation

```bash
# Clone the repository
git clone https://github.com/your-username/youtube-backend.git

# Navigate into the project directory
cd youtube-backend

# Install dependencies
npm install

# Create your environment file
cp .env.example .env
# Fill in your MongoDB URI, JWT secrets, Cloudinary credentials, etc.

# Start the development server
npm run dev

```
---

# Environment Variables (.env)
```

PORT=5000
MONGODB_URI=your_mongodb_connection_string
ACCESS_TOKEN_SECRET=your_access_token_secret
REFRESH_TOKEN_SECRET=your_refresh_token_secret
CLOUDINARY_CLOUD_NAME=your_cloudinary_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret

```
---


# 🔧 API Endpoints & Routes

---

## 🧑‍💻 Auth Routes

### ✅ Register
`POST /api/v1/users/register`

### 🔑 Login
`POST /api/v1/users/login`

### 🚪 Logout
`POST /api/v1/users/logout`

### 🔄 Refresh Token
`POST /api/v1/users/refresh-token`

---

## 👤 User Routes

### 📄 Get Current User
`GET /api/v1/users/current` ✅

### 📝 Update Profile
`PUT /api/v1/users/update` ✅

### 📤 Upload Avatar
`POST /api/v1/users/avatar` ✅ (multipart/form-data)

---

## 🎥 Video Routes

### ➕ Upload Video
`POST /api/v1/videos/` ✅

### 📄 Get All Videos✅
`GET /api/v1/videos/`

### 🔍 Get Video By ID
`GET /api/v1/videos/:videoId`✅

### 📝 Update Video
`PUT /api/v1/videos/:videoId` ✅

### ❌ Delete Video
`DELETE /api/v1/videos/:videoId` ✅

---

## 💬 Comment Routes

### ➕ Add Comment
`POST /api/v1/comments/` ✅

### 📄 Get Comments by Video ID✅
`GET /api/v1/comments/:videoId`

### 📝 Update Comment
`PUT /api/v1/comments/:commentId` ✅

### ❌ Delete Comment
`DELETE /api/v1/comments/:commentId` ✅

---

## 👍 Like Routes

### 👍 Like a Video
`POST /api/v1/likes/like` ✅

### 👎 Dislike a Video
`POST /api/v1/likes/dislike` ✅

### ❌ Remove Like/Dislike
`DELETE /api/v1/likes/:videoId` ✅

### 📊 Get Like/Dislike Count
`GET /api/v1/likes/count/:videoId`✅

---

## 📜 Playlist Routes

### ➕ Create Playlist
`POST /api/v1/playlists/` ✅

### 📄 Get My Playlists
`GET /api/v1/playlists/my` ✅

### ➕ Add Video to Playlist
`POST /api/v1/playlists/:playlistId/videos` ✅

### ❌ Remove Video from Playlist
`DELETE /api/v1/playlists/:playlistId/videos/:videoId` ✅

### 🗑️ Delete Playlist
`DELETE /api/v1/playlists/:playlistId` ✅

---

## 🔔 Subscription Routes

### ➕ Subscribe to User
`POST /api/v1/subscriptions/:channelId/subscribe` ✅

### ➖ Unsubscribe from User
`POST /api/v1/subscriptions/:channelId/unsubscribe` ✅

### 📄 Get Subscribed Channels
`GET /api/v1/subscriptions/my` ✅

---

## 📈 Dashboard Route

### 📊 Get Dashboard Data
`GET /api/v1/dashboard/` ✅

---

## ❤️ Health Check

### ✅ Server Status
`GET /api/v1/healthcheck/`

---


## 👤 Author

- GitHub: [@OmYadav3](https://github.com/OmYadav3)
- LinkedIn: [@omyadav3](https://www.linkedin.com/in/omyadav3)
- Twitter: [@omyadav_3](https://twitter.com/Omyadav_3)
- Portfolio: [Om Yadav](https://omyadav-portfolio.netlify.app/)

