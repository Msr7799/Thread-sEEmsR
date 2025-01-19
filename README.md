# 🚀 sEEmsR Threads

This is a full-stack MERN (MongoDB, Express, React, Node.js) application that mimics the functionality of a social media platform similar to Threads. Users can create posts, follow/unfollow other users, send messages, and more.

## ✨ Features

- 🔐 User authentication (signup, login, logout)
- 📝 Create, edit, and delete posts
- ❤️ Like and reply to posts
- 👥 Follow and unfollow users
- 💬 Real-time messaging with Socket.io
- 🛠️ User profile management
- 🌟 Suggested users to follow
- 📱 Responsive design with Chakra UI

## 📦 Installation

To install the dependencies, you should use `yarn`:

```bash
yarn run build
```

```bash
npm run build
```
To start the development server, run:

```bash
yarn start
```

```bash
npm start
```

## 👤 User Guide

On the sEEmsR Threads platform, users can:

- **Sign Up**: Create a new account to join the platform.
- **Log In**: Access your account using your credentials.
- **Create Posts**: Share your thoughts and updates by creating new posts.
- **Edit and Delete Posts**: Modify or remove your existing posts.
- **Like and Reply to Posts**: Engage with other users by liking and replying to their posts.
- **Follow and Unfollow Users**: Manage your social network by following or unfollowing other users.
- **Send Messages**: Communicate in real-time with other users using the messaging feature.
- **Manage Profile**: Update your profile information and settings.
- **Discover Suggested Users**: Find new users to follow based on suggestions.
- **Enjoy a Responsive Design**: Access the platform seamlessly on various devices with a responsive design powered by Chakra UI.

## Set up environment variables:

Create a .env file in the root directory and add the following:


MONGO_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret
CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret