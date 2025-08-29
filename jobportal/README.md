TalentHub – Mini Job Portal

TalentHub is a modern mini job portal that allows employers to post jobs, manage users, and track applications, while providing developers and job seekers a platform to manage their profiles and view opportunities. Built with React, Redux Toolkit Query (RTK Query), and Node.js backend, TalentHub is lightweight, responsive, and easy to extend.

Table of Contents

Features

Tech Stack

Getting Started

Available Scripts

Project Structure

Screenshots

Contributing

License

Features
Admin Features

View all registered users (Employers, Developers, Admins)

Add, edit, and delete users

Monitor user status (Active / Inactive)

View user statistics via charts

Employer Features

Post new jobs

Manage job listings

View applicants for posted jobs


Developer / Job Seeker Features

View available jobs

Manage personal profile and CV

Apply for jobs

Common Features

Responsive dashboard

Live user status updates with RTK Query

Confirmation prompts for critical actions (Delete/Edit)

Tech Stack

Frontend: React, Redux Toolkit, RTK Query, Recharts, Tailwind CSS

Backend: Node.js, Express.js, MongoDB

Authentication & Authorization: JWT (JSON Web Tokens)

State Management: Redux Toolkit

Data Visualization: Recharts

Getting Started
Prerequisites

Node.js (>=14)

npm or yarn

MongoDB database

Installation

Clone the repository

git clone https://github.com/your-username/talenthub.git
cd talenthub


Install dependencies for frontend

cd client
npm install


Install dependencies for backend

cd ../server
npm install


Configure environment variables
Create a .env file in the server folder:

PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key


Start the development servers

Backend:

cd server
npm run dev


Frontend:

cd client
npm start


The application will run at:

Frontend: http://localhost:3000

Backend API: http://localhost:5000

Available Scripts
Frontend (React)

npm start – Run the app in development mode

npm run build – Build the app for production

npm test – Run tests

Backend (Node.js/Express)

npm run dev – Run server with nodemon

npm start – Run server in production mode